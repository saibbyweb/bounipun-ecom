import { mongoose, ObjectId, task } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    name: String,
    list: { type: ObjectId, ref: 'product_lists' },
    discountPercentage: Number,
    description: String,
    status: Boolean
},
    {
        timestamps: true
    }
);

/* model */
const model = mongoose.model('sales', schema);

/* helper methods */
export const methods = {
    register() {
        console.log('registered');
    },
    alreadyInSalesList(productId) {

    }
}

export default { model, methods };