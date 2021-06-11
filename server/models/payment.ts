import { mongoose, ObjectId, task } from "@helpers/essentials"
import Razorpay from "razorpay";

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

/* helper methods */
export const methods = {
    register: () => { console.log('registered') },
    async createRazorpayOrder(orderDetails: RazorpayOrder) {
        /* create order */
        const { response, error } = await task(razorpayInstance.orders.create(orderDetails));
        
        /* if error occurred */
        if(error) {
            return;
        }

        console.log(response);
        return response;
    }
}
export default { model, methods };