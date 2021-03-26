import { mongoose, ObjectId } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    styleId: String,
    printNo: String,
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
        _id: { type: ObjectId, ref: 'colors' },
        name: { type: String, default: '' },
        images: [{ _id: ObjectId, path: String, mainImage: Boolean }],
        disclaimer: { type: String, default: '' },
        code: { type: String, default: '' },
    }],
    /* variants */
    variants: [{
        _id: { type: ObjectId, ref: 'variants' },
        fabrics: [{
            _id: { type: ObjectId, ref: 'fabrics' },
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
    register() { 
        console.log('registered') 
    },
    async updateProduct(doc, editMode) {
        
    }
}
export default { model, methods };