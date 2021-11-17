import { mongoose } from "@helpers/essentials";
import { methods as ProductMethods } from "./product";
/* schema */
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
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
  setNonINRPricing(nonINRPricing, INRPrice, inflationPercentage: any, activeCurrencies) {
    for(const currency of activeCurrencies) {
        const { code } = currency;
        
        /* set inflation percentage if not provided */
        if(inflationPercentage === false) {
            inflationPercentage = currency.defaultInflationPercentage;
            inflationPercentage = parseInt(inflationPercentage);
        }

       /* calculate inflated price */
        const price: number =
          (INRPrice * (1 + inflationPercentage / 100)) /
          currency.exchangeRateINR;

        nonINRPricing[code] = price;
        nonINRPricing[code] = currency.zeroDecimal
          ? parseInt(price.toString())
          : parseFloat(price.toString()).toFixed(2);

    }
  },
  async updateAllProductPricesForCollection(collectionID, inflationPercentage) {
    /* get all active currencies */
    const activeCurrencies = await model.find({
      adminEnabled: true,
      status: true,
    });

    if(activeCurrencies === null) {
        console.log('No Active Currency');
        return;
    }
    /* total active currencies */
    console.log('Active Currencies: ', activeCurrencies.length)
    /*  get product list to be updated */
    const products = await ProductMethods.getProducts({ bounipun_collection: collectionID });
    /* if no product found */
    if(products.length === 0) {
        console.log('No matching products found');
        return;
    }
    
    /* products found */
    console.log('Products found: ', products.length);

    /* loop through every product */
    for(const product of products) {
        if(product.availabilityType === 'made-to-order') {
            const { variants } = product;
            for(const variant of variants) {
                const { fabrics } = variant;
                for(const fabric of fabrics) {
                    this.setNonINRPricing(fabric.pricing, fabric.price, inflationPercentage, activeCurrencies);
                }
            }
        }
    }

    console.log(products[0].name);
    console.log(products[0].variants);

  },
};

export default { model, methods };
