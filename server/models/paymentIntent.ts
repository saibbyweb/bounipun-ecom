import { mongoose, ObjectId, task } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    intentType: {
        type: String,
        enum: ['order','giftcard']
    },
    amount: Number,
    currency: String,
    gateway: String,
    payload: mongoose.Schema.Types.Mixed
}, {
    timestamps: true
});

/* model name */
const modelName = "paymentIntents";
const model = mongoose.model(modelName, schema);

/* intent options type */
type IntentOptions = {
    intentType: string,
    amount: number,
    currency: string,
    gateway: string,
    /* can be an order or a gift card */
    payload: any
}

export const methods = {
    register: () => { console.log('registered') },
    async createNew (options: IntentOptions) {
        const newPaymentIntent = await new model(options).save();
        return newPaymentIntent;
    }
}

export default { model, methods };
