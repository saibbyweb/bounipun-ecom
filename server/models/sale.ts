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
      console.log("Sale Invalid");
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

  },
  async normalizePricing(products) {
    /* list of products along with adjusted pricing */
    let normalizedProducts = [];
    /* hashmap of all valid sale details fetched during this routine */
    let validSales = {};
    /* hashmao of all invalid sales (with value = true) */
    let invalidSales = {};

    /* loop through every product */
    for (const product of products) {
      /* if product is not under sale, save product as is */
      if (
        product.sale === null ||
        product.sale == undefined ||
        invalidSales[product.sale]
      ) {
        normalizedProducts.push(product);
        continue;
      }

      /* if product is under a sale, check whether sale details are already available or not */
      if (validSales[product.sale] === undefined) {
        /* fetch sale details */
        const saleDetails = await this.validateSale(product.sale);
        /* (if sale is invalid, store invalid sale details, and save product as is) */
        if (saleDetails === false) {
          invalidSales[product.sale] = true;
          normalizedProducts.push(product);
          continue;
        }
        /* if sale is valid, store it in valid sales hashmap */
        validSales[product.sale] = saleDetails;
      }

      /* extract discount percentage */
      const { discountPercentage } = validSales[product.sale];

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
      normalizedProducts.push(product);
    }
  },
  async updateProducts(sale) {
    /* populate list */
    const productList: any = await db.model('product_lists').findOne({_id: sale.list});
    /* loop through the list */
    // console.log(productList.list);
    for(const productId of productList.list) {
      console.log(productId, sale._id, sale.status);
      const updateFields = {sale: sale.status ? sale._id : null }
      console.log(updateFields);
      const result: any = await db.model('products').findOneAndUpdate({_id: productId}, updateFields, { returnOriginal: false});
      console.log(result.sale);
    }
    /* (if status true) loop through every product and attach sale id to the product */
    /* (if status false)  loop through every product and detach sale id from the product */
    /* what if the sale was deleted, need a method to clear sale flags from products having invalid sale id */
    /* TODO: if product is already under any VALID sale, keep record of them */
  }
};

export default { model, methods };
