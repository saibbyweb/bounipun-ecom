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
    discountPerItem: String,
    shippingCharge: String,
    combinedDeliveryConsent: Boolean,
    giftMessage: Object,
    // items: Array,
    items: [{
        _id: ObjectId,
        styleId: String,
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
        pricing: Object,
        quantity: String,
        cartEntry: Object,
        itemAmount: Number,
        itemTotal: Number,
        status: String,
        cancellation: {
            by: String,
            reason: String
        },
        timeline: Array,
        trackingId: String,
        trackingUrl: String,
        saleDetails: Object,
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

