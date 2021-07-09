import { mongoose, ObjectId, task } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    intentType: {
        type: String,
        enum: ['order','giftcard']
    },
    createdBy: { type: ObjectId, ref: 'users' },
    amount: Number,
    currency: String,
    gateway: String,
    payload: mongoose.Schema.Types.Mixed,
    valid: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

/* model name */
const modelName = "paymentIntents";
const model = mongoose.model(modelName, schema);

/* intent options type */
type IntentOptions = {
    intentType: string,
    createdBy: string,
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
    },
    async fetchPaymentIntent(gatewayToken) {
        const paymentIntent = await model.findOne({'payload.gatewayToken': gatewayToken, valid: true });
        return paymentIntent !== null ? paymentIntent : false;
    },
    async setIntentAsInvalid(_id) {
       return await model.findOneAndUpdate({ _id }, { status: false });
    },
    stripePaymentSucceeded(intentId, amount, currency) {
        /* get stripe intent id from db */
        /* match intent details with amount and currency */
        /*  */
    }
}

export default { model, methods };
