import { db, mongoose } from "@helpers/essentials";
import { methods as productMethods } from "./product";
// import allCurrencies from "../../helpers/currencies"
/* schema */
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    exchangeRateINR: { type: Number, required: true },
    zeroDecimal: { type: Boolean, default: false, required: true },
    adminEnabled: { type: Boolean, default: false },
    clientEnabled: { type: Boolean, default: false },
    defaultInflationPercentage: { type: Number, default: 20 },
    description: String,
    status: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

/* model */
const modelName = "currency";
const model = mongoose.model(modelName, schema);

/* helper methods */
export const methods = {
  register: () => {
    console.log(modelName, "-- registered");
    // methods.loadAllCurrencies();
  },
  async loadAllCurrencies() {
    // for(const currency of allCurrencies) {
    // const point = {
    //     name: currency.name,
    //     code: currency.code,
    //     exchangeRateINR: 100,
    //     zeroDecimal: currency.zeroDecimal,
    //     adminEnabled: false,
    //     clientEnabled: false
    // }
    //  await new model(point).save();
    // }
  },
  setNonINRPricing(
    nonINRPricing,
    INRPrice,
    inflationPercentage: any,
    activeCurrencies
  ) {
    let useDefaultInfaltion = inflationPercentage === false;
    for (const currency of activeCurrencies) {
      const { code } = currency;

      /* set inflation percentage if not provided */
      if (useDefaultInfaltion) {
        inflationPercentage = currency.defaultInflationPercentage;
        inflationPercentage = parseInt(inflationPercentage);
      }

      /* calculate inflated price */
      const inflationMultiplier =
        inflationPercentage === 0 ? 1 : 1 + inflationPercentage / 100;
      
      console.log(`◻️ Currency: ${currency.code} ; 🔹 Inflation Multiplier: ${inflationMultiplier} ; 🔸 Ex.Rate: ${currency.exchangeRateINR}`);


      const price: number =
        (INRPrice * inflationMultiplier) / currency.exchangeRateINR;

      /* in non inr pricing hasnt been defined yet */23
      if (nonINRPricing === undefined) nonINRPricing = {};

      // nonINRPricing[code] = price;
      // nonINRPricing[code] = currency.zeroDecimal
      //   ? parseInt(price.toString())
      //   : parseFloat(price.toString()).toFixed(2);
        nonINRPricing[code] = parseInt(price.toString())
    }
    return nonINRPricing;
  },
  async updateNonINRPricing(filter, inflationPercentage) {
    /* get all active currencies */
    const activeCurrencies = await model.find({
      adminEnabled: true,
      status: true,
    });

    if (activeCurrencies === null) {
      console.log("No Active Currency");
      return 0;
    }
    /* total active currencies */
    console.log("❇️ Active Currencies: ", activeCurrencies.length);

    /* fetch all products for that particular filter */
    const products = await productMethods.getProducts(filter);
    /* if no product found */
    if (products.length === 0) {
      console.log("No matching products found");
      return 0;
    }

    /* products found */
    console.log("✳️ Products found: ", products.length);

    /* loop through every product */
    products.forEach(async (product) => {
      const { variants, availabilityType } = product;

      if (availabilityType === "made-to-order") {
        variants.forEach(({ fabrics }) => {
          fabrics.forEach((fabric) => {
            fabric.pricing = this.setNonINRPricing(
              fabric.pricing,
              fabric.price,
              inflationPercentage,
              activeCurrencies
            );
          });
        });
      } else {
        product.directPricing = this.setNonINRPricing(
          product.directPricing,
          product.directPrice,
          inflationPercentage,
          activeCurrencies
        );
      }
    });

    /* re-save all products after pre-processing details */
    for (const product of products) {
      /* it needs special update here */
      const processedProduct = await productMethods.updateProduct(
        product,
        true
      );
      await productMethods.updateOne(
        { _id: product._id },
        { ...processedProduct }
      );

    }

    return products.length;
  },
  async updateWholeStore() {
   /*  get all collections (id and inflation percentage) */
    const collections: any = await db
      .model("collections")
      .find()
      .select("inflationPercentage");

    console.log(collections.length,'--collections');
    if (collections.length === 0) return;

    /* update non inr pricing for every collection, one by one */
    for(const collection of collections) {
        await this.updateNonINRPricing({bounipun_collection: collection._id}, collection.inflationPercentage)
    }
    /* then update third-part products */
    await this.updateNonINRPricing({type: "third-party"}, false);

    console.log('✅ WHOLE STORE UPDATED')

  },
  async getCurrency(code) {
    const currency = await model.findOne({code});
    if(currency === null)
      return false;
    return currency;
  }
}
// console.log(allCurrencies.length);
// methods.updateWholeStore();
// methods.loadAllCurrencies();

export default { model, methods }
