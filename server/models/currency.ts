import { mongoose } from "@helpers/essentials"
/* schema */
const schema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    exchangeRateINR: { type: Number, required: true },
    zeroDecimal: { type: Boolean, default: false, required: true },
    adminEnabled: { type: Boolean, default: false },
    clientEnabled: { type: Boolean, default: false },
    defaultInflationPercentage: { type: Number, default: 20 },
    description: String,
    status: { type: Boolean, default: false }
}, {
    timestamps: true
});

/* model */
const modelName = "currency";
const model = mongoose.model(modelName, schema);

/* helper methods */
export const methods = {
    register: () => { 
        console.log(modelName, '-- registered')
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
    }
}

export default { model, methods };