import { mongoose, ObjectId } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    paymentIntent: { type: ObjectId, ref: 'paymentIntents'},
    number: String,
    paymentGateway: String,
    gatewayResponse: Object,
    transactionId: String,
    amount: String,
    currency: String,
    deliveryAddress: Object,
    subTotal: String,
    discountValue: String,
    shippingCharge: String,
    // items: Array,
    items: [{
        _id: ObjectId,
        productId: ObjectId,
        productName: String,
        colorName: String,
        mainImage: String,
        collectionName: String,
        variantName: String,
        hsnCode: String,
        gstPercentage: String,
        fabricName: String,
        price: String,
        quantity: String,
        cartEntry: Object,
        itemAmount: Number,
        itemTotal: Number,
        status: String,
        timeline: Array,
        trackingId: String,
        trackingUrl: String,
        delivered: String
    }],
    /* all four field below are for sub-orders as well */
    status: String,
    delivered: Date,
    trackingId: String,
    trackingUrl: String
},{
    timestamps: true
});

/* model */
const modelName = 'orders';
const model = mongoose.model(modelName, schema);

/* helper methods */
export const methods = {
    register() {
        console.log(`registered model: ${modelName}`);
    }
}

/* register */
export default { model, methods }

