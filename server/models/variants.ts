import { mongoose, ObjectId } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    category: {
        type: ObjectId,
        ref: 'variant_categories'
    },
    code: { type: String, default: ''},
    description: { type: String, default: ''},
    info1: { type: String, default: ''}, 
    info2: { type: String, default: ''},
    image: String,
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