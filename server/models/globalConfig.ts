import { mongoose, task } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    bounipun_id: String,
    currencyMultiplier: Number,
    domesticShippingCharge: Number,
    internationalShippingCharge: Number,
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
    async getGlobalConfig() {
        const config = await model.findOne({ bounipun_id: "saibbyweb" }).select('currencyMultiplier domesticShippingCharge internationalShippingCharge gstPercentage internationalTaxPercentage');

        console.log(config);

        return config === null ? false : config;
    }
}

export default { model, methods };