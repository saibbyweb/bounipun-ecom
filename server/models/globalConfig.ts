import { mongoose, task } from "@helpers/essentials";
import { methods as currencyMethods } from "./currency";
/* schema */
const schema = new mongoose.Schema({
    bounipun_id: String,
    currencyMultiplier: Number,
    dollarValue: Number,
    domesticShippingCharge: Number,
    internationalShippingCharge: Number,
    shippingDisclaimerDomestic: String,
    shippingDisclaimerInternational: String,
    gstPercentage: Number,
    internationalTaxPercentage: Number
},
    {
        timestamps: true
    }
);

/* model */
const modelName = 'globalConfig'
const model = mongoose.model(modelName, schema);

export const methods = {
    register() {
        console.log(`${modelName} registered`);
    },
    async setGlobalConfig(config) {
        let newConfig = new model({
            bounipun_id: "saibbyweb",
            currencyMultiplier: 1.3,
            dollarValue: 72,
            domesticShippingCharge: 100,
            internationalShippingCharge: 300,
            gstPercentage: 8,
            internationalTaxPercentage: 3
        });

        await newConfig.save();
    },
    async updateGlobalConfig(config) {
        await model.findOneAndUpdate({ bounipun_id: "saibbyweb" }, {
            ...config
        });
    },
    async getGlobalConfig(currency) {
        const fetchGlobalConfig: any = model
        .findOne({ bounipun_id: "saibbyweb" })
        .select(
          "currencyMultiplier dollarValue domesticShippingCharge internationalShippingCharge gstPercentage internationalTaxPercentage shippingDisclaimerDomestic shippingDisclaimerInternational"
        )
        .lean();
    
      /* config */
      const { response: config, error } = await task(fetchGlobalConfig);
    
      /* if error occurred */
      if (error || config === null) {
        return false;
      }
    
      /* get currency from req, if not INR or DOLLAR, convert shipping charge from dollars to the currency provided */
      if (currency !== "INR" && currency !== "USD") {
    
        console.log("⚖️ Interational shipping charge needs conversion to ", currency);
        const dollarDetails = await currencyMethods.getCurrency("USD");
        const storeCurrency = await currencyMethods.getCurrency(currency);
    
        console.log("Current Ex. rate of USD: ", dollarDetails.exchangeRateINR);
        console.log(`Current Ex. rate of ${currency}: `, storeCurrency.exchangeRateINR);
    
        /* set in dollars */
        let { internationalShippingCharge: charge } = config;
        charge = parseFloat(charge);
        console.log('Shipping charge: ', charge, ' USD')
    
        /* convert to INR */
        charge =
        charge * dollarDetails.exchangeRateINR;
        /* again convert to store currency */
        charge =
        charge / storeCurrency.exchangeRateINR;
    
        config.internationalShippingCharge = charge.toFixed(2);
        
        console.log('✅ converted to: ', config.internationalShippingCharge,currency);
      }

      return config;
    }
}

export default { model, methods };