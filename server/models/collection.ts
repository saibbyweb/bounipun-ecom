import { mongoose } from "@helpers/essentials"
import slugify from "slugify";
import { product } from "@models"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    slug: String,
    description: String,
    edt: Number,
    image: String,
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('collections', schema);
/* helper methods */
export const methods = {
    register: () => { console.log('registered') },
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
    }
}
export default { model, methods };