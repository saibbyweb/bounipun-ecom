import { mongoose, ObjectId, task } from "@helpers/essentials"
import Razorpay from "razorpay";
// const stripe = require("stripe")(process.env.STRIPE_SK);
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SK, {
    apiVersion: '2020-08-27'
});

/* razorpay test key */
const razorpayTestKey = {
    key_id: "rzp_test_LnJPEC0MOtvlSn",
    key_secret: "6Id7cNKHdDIJ2PwWi7g9TPHl"
}

/* razorpay instance */
const razorpayInstance = new Razorpay(razorpayTestKey);

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
    // shipping: {
    //     name: string,
    //     address: {
    //         line1: string,
    //         postal_code: string,
    //         city: string,
    //         country: string
    //     }
    // }
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