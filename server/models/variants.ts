import { mongoose, ObjectId } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    category: {
        type: ObjectId,
        ref: 'variant_categories'
    },
    code: { type: String, default: '' },
    description: { type: String, default: '' },
    info1: { type: String, default: '' },
    info2: { type: String, default: '' },
    hsnCode: String,
    gstPercentage: Number,
    image: String,
    hex: String,
    order: Number,
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('variants', schema);
/* helper methods */
export const methods = {
    register: () => { console.log('registered') },
    async updateVariant(details, editMode) {
        /* find the last highest order and assign it to the new collection */
        if (!editMode) {
            const highestOrderElement: any = await model.findOne().sort('-order').select('order');
            console.log(highestOrderElement);
            details.order = highestOrderElement.order + 1;
        }
    }
}
export default { model, methods };