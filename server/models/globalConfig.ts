import { mongoose, task } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    domesticShippingCharge: Number,
    internationalShippingCharge: Number,
    chargeGst: Boolean
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
    }
}

export default { model, methods };