import { MongoId, mongoose, ObjectId, task } from "@helpers/essentials"
type IntentType = 'order' | 'giftcard' | 'paymentLink'

/* schema */
const schema = new mongoose.Schema({
    intentType: {
        type: String,
        enum: ['order', 'giftcard', 'paymentLink']
    },
    createdBy: { type: ObjectId, ref: 'users' },
    amount: Number,
    currency: String,
    gateway: String,
    payload: mongoose.Schema.Types.Mixed,
    valid: {
        type: Boolean,
    }
}, {
    timestamps: true
});

/* model name */
const modelName = "paymentIntents";
const model = mongoose.model(modelName, schema);

/* order intent type */
export type OrderIntent = {
    intentType: 'order',
    payload: any
}
/* payment link intent type */
export type PaymentLinkIntent = {
    intentType: 'paymentLink',
    payload: {
        linkId: MongoId
    }
}

/* intent options type */
export type IntentOptions = {
    createdBy: string,
    amount: number,
    currency: string,
    gateway: string,
    valid: boolean
} & (OrderIntent | PaymentLinkIntent)



export const methods = {
    register: () => { console.log('registered paymentIntents') },
    /* create new intent */
    async createNew(options: IntentOptions) {
        const newPaymentIntent = await new model(options).save();
        return newPaymentIntent;
    },
    async fetchPaymentIntent(gatewayToken) {
        /* TODO: check the validity */
        const paymentIntent = await model.findOne({ 'payload.gatewayToken': gatewayToken, valid: true });
        console.log(paymentIntent, '--from fetch intent')
        return paymentIntent !== null ? paymentIntent : false;
    },
     /* check for payment intent validity */
    async fetchAndVerifyPaymentIntent(gatewayToken) {
        const paymentIntent = await model.findOne({ 'payload.gatewayToken': gatewayToken, valid: true });
        return paymentIntent;
    },
    async setIntentAsInvalid(_id) {
        console.log('SET_INTENT_AS_INVALID - CALLED')
        return await model.findOneAndUpdate({ _id }, { valid: false });
    },
    stripePaymentSucceeded(intentId, amount, currency) {
        /* get stripe intent id from db */
        /* match intent details with amount and currency */
        /*  */
    }
}

export default { model, methods };
