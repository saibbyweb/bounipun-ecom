import { mongoose, ObjectId, task } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    /* main slideshow */
    mainSlideshow: [{ _id: ObjectId, mainImage: Boolean, path: String }],
    /* text block 1 */
    mainTextBlock: {
        text1: String, text2: String, text3: String
    },
    /* in house collection blocks */
    collectionBlocks: [{
        bounipun_collection: { type: ObjectId, ref: 'collections' },
        slideshow: [{ _id: ObjectId, mainImage: Boolean, path: String }],
        textBlock: {
            text1: String, text2: String, text3: String
        }
    }],
    /* product lists block */
    productListsBlock: [{
        productList: { type: ObjectId, ref: 'product_lists' },
        coverImage: String,
        textBlock: { text1: String, text2: String }
    }],
    bounipunLab: {
        heading: String,
        paragraph: String,
        image: String,
        buttonText: String,
    },
    description: String,
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('homepage_layouts', schema);

/* helper methods */
export const methods = {
    register() {
        console.log('registered');
    },
    async updateLayouts(details, editMode) {
        if (details.status === false)
            return;

        let filter: any = {};
        /* if edit mode, skip the existing layout */
        if (editMode)
            filter._id = { $ne: details._id };

        const matchedLayouts: any = await model.find(filter);

        /* if no matched layouts found */
        if (matchedLayouts === null)
            return;

        /* update status for all matched layouts */
        for (const layout of matchedLayouts) {
            const updated: any = await model.findOneAndUpdate({ _id: layout._id }, { status: false }, { returnOriginal: false });
            console.log(updated.status);
        }

    },
    async fetchActiveHomepageLayout() {
        const fetchActiveLayout: any = model.findOne({ active: true });
        const { response, error } = await task(fetchActiveLayout);

        if (error || response === null) {
            const msg = error ? 'Couldnt fetch' : 'couldnt find';
            console.log(msg);
            return;
        }

        return response;

    }
}

export default { model, methods };

