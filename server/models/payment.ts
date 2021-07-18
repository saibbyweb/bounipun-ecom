import { mongoose, ObjectId, task } from "@helpers/essentials"
import Razorpay from "razorpay";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SK, {
    apiVersion: '2020-08-27'
});

/* razorpay key */
const razorpayKey = {
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
}

/* razorpay instance */
const razorpayInstance = new Razorpay(razorpayKey);

/* schema */
const schema = new mongoose.Schema({
    gateway: String,
    amount: Number,
    currency: String,
    order: {
        type: ObjectId,
        ref: 'orders'
    }
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('payments', schema);

/* razorpay order */
type RazorpayOrder = {
    amount: number,
    currency: string,
    receipt: string
}

/* stripe intent details */
type StripeDetails = {
    amount: number,
    currency: string,
    description: string,
}

/* helper methods */
export const methods = {
    register: () => { console.log('registered') },
    async createRazorpayOrder(orderDetails: RazorpayOrder) {
        /* create order */
        const { response, error } = await task(razorpayInstance.orders.create(orderDetails));

        /* if error occurred */
        if (error) {
            return false;
        }
        return response;
    },
    async createStripePaymentIntent(intentDetails: StripeDetails) {
        /* stripe intent */
        const { response, error } = await task(stripe.paymentIntents.create(intentDetails));
        
        if(error) {
            return false;
        }

        return response;
    }
}
export default { model, methods };