import { mongoose } from "@helpers/essentials"
import slugify from "slugify";
import { product } from "@models"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    slug: {type: String, default: ''},
    description: {type: String, default: ''},
    variantNote: { type: String, default: ''},
    edt: { type: Number, default: 1 },
    image: String,
    lock: { type: Boolean, default: false },
    order: Number,
    activeOrderLimit: { type: Number, default: 50 },
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('collections', schema);
/* helper methods */
export const methods = {
     register: async () => { 
        console.log('registered')
        const allDocs = await model.find();
        
        let i = 0;
        for(const doc of allDocs) {
            await model.findOneAndUpdate({ _id: doc._id }, { order: i });
            i++;
        }
    
    },
    async updateCollection(details, editMode) {
        const collections = model;
        /* if slug not provide, creat one  */
        if (details.slug === "")
            details.slug = slugify(details.name, { lower: true });

        /* verify slug automicity */
        let filter: any = { slug: details.slug };

        /* if edit mode, skip the existing product */
        if (editMode)
            filter._id = { $ne: details._id };

        /* slug found */
        const slugFound = await collections.findOne(filter);

        /* if slug already exists, update alias and slug */
        if (slugFound !== null) {
            details.slug = `${details.slug}-${Date.now()}`
        }

        /* update all products under this collection */
        if(editMode)
            await product.methods.updateSlugs(details._id, details.slug);
        
        /* find the last highest order and assign it to the new collection */
        if(!editMode) {
            const highestOrderElement : any = await collections.findOne().sort('-order').select('order');
            console.log(highestOrderElement);
            details.order = highestOrderElement.order + 1;
        }
    }
}
export default { model, methods };