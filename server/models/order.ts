import { mongoose } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    number: String,
    paymentGateway: String,
    transactionId: String,
    amount: String,
    deliveryAddress: Object,
    status: String,
    items: Array,
    delivered: Date,
    trackingId: String,
    trackingUrl: String
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

