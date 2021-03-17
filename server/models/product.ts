import { mongoose, ObjectId } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    styleId: String,
    name: String,
    slug: String,
    description: String,
    type: String,
    /* collection */
    bounipun_collection: {
        type: ObjectId,
        ref: 'collections'
    },
    colorSource: { type: String, enum: ['bounipun-colors', 'custom'] },
    /* colors */
    colors: [{ 
        colorId: { type: ObjectId, ref: 'colors' }, 
        name: { type: String , default: '' }, 
        images: [{ _id: ObjectId, path: String, mainImage: Boolean }]
    }],
    /* variants */
    variants: [{
        _id: { type: ObjectId, ref: 'variants'},
        fabrics:[{
            _id: { type: ObjectId, ref: 'fabrics'},
            price: Number
        }]
    }],
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('products', schema);
/* helper methods */
export const methods = {
    register: () => { console.log('registered') },
}
export default { model, methods };