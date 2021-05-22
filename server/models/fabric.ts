import { mongoose } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    slug: String,
    code: { type: String, default: '' },
    info1: { type: String, default: '' },
    description: String,
    detailsAndCare: String,
    writeUp: String,
    order: Number,
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('fabrics', schema);
/* helper methods */
export const methods = {
    register: () => { console.log('registered') },
}
export default { model, methods };