import { mongoose, ObjectId } from "@helpers/essentials"
import slugify from "slugify";

const db = mongoose.connection;

/* schema */
const schema = new mongoose.Schema({
    styleId: String,
    printNo: String,
    name: String,
    alias: String,
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
    directPrice: { type: String, default: 0 },
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('products', schema);
/* helper methods */
export const methods = {
    register() {
        console.log('registered');
    },
    async updateProduct(details, editMode) {
        /* product and collection models */
        const products = db.model('products');
        const collections = db.model('collections');
        let parent : any = { slug: "third-party" }

        /* if alias not provide, creat one  */
        if (details.alias === "")
            details.alias = slugify(details.name, { lower: true });
        
        /* fetch collection slug (if not third party) */
        if(details.type !== 'third-party')
            parent = await collections.findOne({_id: details.bounipun_collection }).select('slug');
        
        /* new product slug */
        details.slug = parent.slug + "/" + details.alias;

        /* verify slug automicity */
        let filter: any = { slug: details.slug };

        /* if edit mode, skip the existing product */
        if (editMode)
            filter._id = { $ne: details._id };

        /* alias */
        const slugFound = await products.findOne(filter);

        /* if slug already exists, update alias and slug */
        if (slugFound !== null) {
            details.alias = `${details.alias}-${Date.now()}`
            details.slug = parent.slug + "/" + details.alias;
        }

        console.log(details.alias, '-- FINAL ALIAS');
        console.log(details.slug, '-- FINAL SLUG');

    }
}
export default { model, methods };