import { mongoose, ObjectId } from "@helpers/essentials"

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
/* helper methods */
export const methods = {
    register: () => { console.log('registered') },
}
export default { model, methods };