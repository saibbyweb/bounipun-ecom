import { mongoose, ObjectId } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    category: {
        type: ObjectId,
        ref: 'variant_categories'
    },
    description: String,
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('variants', schema);
/* helper methods */
export const methods = {
    register: () => { console.log('registered') },
}
export default { model, methods };