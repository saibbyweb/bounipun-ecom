import { mongoose, ObjectId, db, task } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema(
  {
    name: String,
    list: { type: ObjectId, ref: "product_lists" },
    discountPercentage: Number,
    validityRange: {
      start: Date,
      end: Date,
    },
    description: String,
    status: Boolean,
  },
  {
    timestamps: true,
  }
);

/* model */
const model = mongoose.model("sales", schema);

/* helper methods */
export const methods = {
  register() {
    console.log("registered");
  },
  async validateSale(saleId) {
    const checkValidity: any = model
      .findOne({
        _id: saleId,
        status: true,
        "validityRange.start": { $lte: new Date() },
        "validityRange.end": { $gte: new Date().setHours(0, 0, 0, 0) },
      })
      .select("name list discountPercentage");

    /* check validity */
    const { response: saleDoc, error } = await task(checkValidity);

    /* if error occured or code not valid */
    if (error || saleDoc === null) {
      return false;
    }

    return saleDoc;
  },
  savePrices(INRPrice, NonINRPricing, allINRPrices, allNonINRPrices) {
    allINRPrices.push(INRPrice);
    if (NonINRPricing === undefined) return;
    /* get all currency codes */
    const currencyCodes = Object.keys(NonINRPricing);
    /* save pricing for all non-inr currencies */
    for (const code of currencyCodes) {
      if (allNonINRPrices[code] === undefined) allNonINRPrices[code] = [];
      allNonINRPrices[code].push(NonINRPricing[code]);
    }

    return { allINRPrices, allNonINRPrices };
  },
  /* calculate discounted prices */
  getDiscountedPrices(INRPrice, NonINRPricing, discountPercentage) {
    console.log(`🟡 Original INR Price: ${INRPrice}`);

    INRPrice = INRPrice - (INRPrice / 100) * discountPercentage;
    console.log(`🔵 Discounted INR Price: ${INRPrice}`);

    /* loop through every currency code */
    const currencyCodes = Object.keys(NonINRPricing);
    if (currencyCodes.length === 0) return {};

    for (const code of currencyCodes) {
      const price: any = NonINRPricing[code];
      console.log(`🟡 Original ${code} Price: ${price}`);
      NonINRPricing[code] = parseInt(price - (price / 100) * discountPercentage)
      console.log(`🔵  Discounted ${code} Price: ${NonINRPricing[code]}`);
    }

    return { INRPrice, NonINRPricing };
  },
  async normalizePricing(products) {
    /* list of products along with adjusted pricing */
    let normalizedProducts = [];
    /* hashmap of all valid sale details fetched during this routine */
    let validSales = {};
    /* hashmap of all invalid sales (with value = true) */
    let invalidSales = {};

    /* loop through every product */
    for (const product of products) {
      /* if product is not under sale, save product as is */
      if (
        product.sale === null ||
        product.sale == undefined ||
        invalidSales[product.sale]
      ) {
        console.log(
          `✅ Product ${product.name} not under any sale, returned as is.`
        );
        normalizedProducts.push(product);
        continue;
      }

      /* if product is under a sale, check whether sale details are already available or not */
      if (validSales[product.sale] === undefined) {
        /* fetch sale details */
        const saleDetails = await this.validateSale(product.sale);
        /* (if sale is invalid, store invalid sale details, and save product as is) */
        if (saleDetails === false) {
          console.log(
            `🚫 Product ${product.name} found under invalid sale, returned as is.`
          );
          invalidSales[product.sale] = true;
          normalizedProducts.push(product);
          continue;
        }
        /* if sale is valid, store it in valid sales hashmap */
        validSales[product.sale] = saleDetails;
      }

      /* extract discount percentage */
      const { discountPercentage } = validSales[product.sale];
      console.log(
        `🔹 Discount percentage to be applied to ${product.name} :  ${discountPercentage} %`
      );

      /* extract variants, availability type, directPrice, directPricing */
      let { variants, availabilityType, directPrice, directPricing } = product;

      /* all prices and non-inr prices array [for calculating range] */
      let allINRPrices = [];
      let allNonINRPrices = {};

      if (availabilityType === "made-to-order") {
        variants.forEach(({ fabrics }) => {
          fabrics.forEach((fabric) => {
            /* calculate discount prices */
            const { INRPrice, NonINRPricing } = this.getDiscountedPrices(
              fabric.price,
              fabric.pricing,
              discountPercentage
            );
            /* set discounted prices */
            fabric.price = INRPrice;
            fabric.pricing = NonINRPricing;

            /* save all prices in a one-dimensional arrays */
            const updatedValues = this.savePrices(
              INRPrice,
              NonINRPricing,
              allINRPrices,
              allNonINRPrices
            );
            allINRPrices = updatedValues.allINRPrices;
            allNonINRPrices = updatedValues.allNonINRPrices;
          });
        });

        /* calculate inr price range and non-inr pricing range */
      } else {
        const { INRPrice, NonINRPricing } = this.getDiscountedPrices(
          directPrice,
          directPricing,
          discountPercentage
        );
        /* update direct price and direct pricing */
        directPrice = INRPrice;
        directPricing = NonINRPricing;

        /* save all prices in a one-dimensional arrays */
        const updatedValues = this.savePrices(
          INRPrice,
          NonINRPricing,
          allINRPrices,
          allNonINRPrices
        );
        allINRPrices = updatedValues.allINRPrices;
        allNonINRPrices = updatedValues.allNonINRPrices;
      }

      /* recalculate inr price range */
      product.priceRange = {
        startsAt: Math.min(...allINRPrices),
        endsAt: Math.max(...allINRPrices),
      };

      /* recalculate non-inr pricing range */
      const currencyCodes = Object.keys(allNonINRPrices);
      if (currencyCodes.length !== 0) {
        let pricingRange = {};

        for (const code of currencyCodes) {
          pricingRange[code] = {
            startsAt: Math.min(...allNonINRPrices[code]),
            endsAt: Math.max(...allNonINRPrices[code]),
          };
        }
        product.pricingRange = pricingRange;
      }
      /* save product with new values in normalized products array */
      console.log('Adding normalized product:', product.name, product.pricingRange)
      normalizedProducts.push(product);
    }
    
    return normalizedProducts;
  },
  /* update product sale flags */
  async updateProductSaleFlags(saleId, oldSale, newSale) {
    console.log(newSale.status, "- sale status");

    /* if LIST changed, add null sale flag to product from old list */
    if (oldSale.list !== newSale.list) {
      console.log("List changed update required for old products");
      await this.updateFlagsForProductList(oldSale.list, null, false);
    }

    await this.updateFlagsForProductList(newSale.list, saleId, newSale.status);

    /* TODO*/
    /* write get discounted prcies methods */
    /* Finalize normalizedProducts methods */
  },
  async updateFlagsForProductList(listId, saleId, flag) {
    /* product list */
    const productList: any = await db
      .model("product_lists")
      .findOne({ _id: listId })
      .select("list");

    /* loop through the list */
    for (const productId of productList.list) {
      const updateFields = { sale: flag ? saleId : null };

      const result: any = await db
        .model("products")
        .findOneAndUpdate({ _id: productId }, updateFields, {
          returnOriginal: false,
        })
        .select("name sale")
        .lean();

      console.log(`☑️  ${result.name} updated with sale: ${result.sale}`);
    }
  },
  async checkForProductsWithActiveSale(details, editMode) {
    /* if list is already under some sale */
    const filter = { list: details.list };
    if (editMode) filter["_id"] = { $ne: details._id };
    const underSale: any = await db
      .model("sales")
      .findOne(filter)
      .select("name");
    if (underSale !== null) {
      return {
        updated: false,
        msg: `Product list is already under a different sale: ${underSale.name}`,
      };
    }

    /* product list */
    const productList: any = await db
      .model("product_lists")
      .findOne({ _id: details.list })
      .select("list");

    /* loop through the list */
    for (const productId of productList.list) {
      const product: any = await db
        .model("products")
        .findOne({ _id: productId })
        .select("name sale")
        .populate("sale");

      if (product === null) continue;
      console.log(product.sale?._id, details._id, "--> sale ids");

      /* TODO: needa check : if product belongs to a differnt sale */
      if (
        product.sale !== undefined &&
        product.sale !== null &&
        product.sale?._id.toString() !== details._id.toString()
      ) {
        const msg = `Product ${product.name} belongs to a different sale: ${product.sale.name}, cannot continue`;

        console.log(msg);

        return { updated: false, msg };
      }
    }
    return { allGood: true };
  },
};

export default { model, methods };
