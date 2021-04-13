import { mongoose, ObjectId, db } from "@helpers/essentials"
import slugify from "slugify";

// const db = mongoose.connection;

/* schema */
const schema = new mongoose.Schema({
    styleId: String,
    printNo: String,
    name: String,
    alias: String,
    slug: String,
    description: String,
    /* under bounipun or third-party */
    type: String,
    /* bounipun collection */
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
        /* base color - meta  */
        baseColor: { type: String, default: '' },
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
    priceRange: { startsAt: Number, endsAt: Number },
    /* meta */
    meta: String,
    /* estimated time of delivery */
    etd: Number,
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
        const products = model;
        const collections = db.model('collections');
        let parent : any = { slug: "third-party" }

        /* if alias not provide, create one  */
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

        /* if product is under bounipun, add meta data to the product (variant names ) */
        if(details.type !== 'third-party') {
            let keywords = [];
            /* fetch variant names */
            for(const variant of details.variants) {
                const variantDoc: any = await db.model('variants').findOne({_id: variant._id}).select('name');
                /* add variant name to keywords array */
                keywords.push(variantDoc.name);
            }
            /* add meta to product details */
            details.meta = keywords.join();

            /* add lowest and highest variant price */
            let allPrices = [];
            details.variants.forEach(variant => {
                variant.fabrics.forEach(fabric => {
                    // console.log(fabric.price);
                    allPrices.push(fabric.price)
                });
            });

            details.priceRange = {
                startsAt: Math.min(...allPrices),
                endsAt: Math.max(...allPrices)
            }
        }
        else {
            details.priceRange = {
                startsAt: details.directPrice,
                endsAt: details.directPrice
            }
        }

        /* add lowest and highest price */
        console.log(details.priceRange)
        console.log(details.alias, '-- FINAL ALIAS');
        console.log(details.slug, '-- FINAL SLUG');

    },
    async updateSlugs(collectionId, collectionSlug) {
        const products = model;
        let matchedProducts: any = await products.find({bounipun_collection: collectionId});
        
        /* if no matched products found */
        if(matchedProducts === null)
            return;
            
        /* update slugs for all matched products */
        for (const product of matchedProducts) {
            const updated:any = await products.findOneAndUpdate({ _id: product._id }, { slug: collectionSlug + "/" + product.alias }, {returnOriginal: false});
            
            console.log(updated.slug);
        }

    },
    async getFilterData() {
        
    },
    async getPaginatedSearchResults() {
        /* fetch all collections (active and unlocked) */
        /* fetch all variants (active) */
        /* fetch all base colors */
    }
}

export default { model, methods };