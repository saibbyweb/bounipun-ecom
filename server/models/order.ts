import { mongoose } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    number: String,
    paymentGateway: String,
    transactionId: String,
    amount: String,
    deliveryAddress: Object,
    items: Array,
    /* all four field below are sub-orders as well */
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

