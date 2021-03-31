import { mongoose, ObjectId } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    list: [{
        type: ObjectId,
        ref: 'products'
    }],
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('product_lists', schema);

/* helper methods */
export const methods = {
    register() {
        console.log('registered');
    }
}

export default { model, methods };

