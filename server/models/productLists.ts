import { mongoose, ObjectId } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    list: [{
        _id: {
            type: ObjectId,
            ref: 'products'
        }
    }],
    description: String,
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
