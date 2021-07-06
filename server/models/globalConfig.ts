import { mongoose, task } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    bounipun_id: String,
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
        // this.setGlobalConfig();
        // this.getGlobalConfig();
        // this.updateGlobalConfig({
        //     domesticShippingCharge: 150,
        //     internationalTaxPercentage: 80,
        //     chargeGst: false
        // });
    },
    async setGlobalConfig(config) {
        let newConfig = new model({
            bounipun_id: "saibbyweb",
            domesticShippingCharge: 100,
            internationalShippingCharge: 300,
            chargeGst: false,
            gstPercentage: 8,
            chargeInternationalTax: false,
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
        const config = await model.findOne({ bounipun_id: "saibbyweb" }).select('domesticShippingCharge internationalShippingCharge gstPercentage internationalTaxPercentage');
        
        console.log(config);

        return config === null ? false : config;
    }
}

export default { model, methods };