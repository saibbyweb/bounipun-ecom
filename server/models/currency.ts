import { mongoose } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    exchangeRateINR: { type: Number, required: true },
    zeroDecimal: { type: Boolean, default: false },
    adminEnabled: { type: Boolean, default: false },
    clientEnabled: { type: Boolean, default: false },
    defaultInflationPercentage: { type: Number, default: 20 },
    description: String,
    status: Boolean
}, {
    timestamps: true
});

/* model */
const modelName = "currency";
const model = mongoose.model(modelName, schema);

/* helper methods */
export const methods = {
    register: () => { console.log(modelName, '-- registered') },
}
export default { model, methods };