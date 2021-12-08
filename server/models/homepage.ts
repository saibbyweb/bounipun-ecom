import { mongoose, ObjectId, task } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    /* main slideshow */
    mainSlideshow: { slides : [{ _id: ObjectId, mainImage: Boolean, path: String }], visible: Boolean },
    /* desktop main slideshow */
    desktopMainSlideshow: { slides : [{ _id: ObjectId, mainImage: Boolean, path: String }], visible: Boolean },
    /* text block 1 */
    mainTextBlock: {
        text1: String, text2: String, text3: String, author: String, visible: Boolean
    },
    /* in house collection blocks */
    collectionBlocks: [{
        bounipun_collection: { type: ObjectId, ref: 'collections' },
        slideshow: [{ _id: ObjectId, mainImage: Boolean, path: String }],
        text1: String, text2: String, text3: String,
        buttonText: String,
        visible: Boolean
    }],
    /* product list block */
    productListBlocks: [{
        productList: { type: ObjectId, ref: 'product_lists' },
        imageList: [{ _id: ObjectId, mainImage: Boolean, path: String }],
        moodImage: String,
        text1: String, 
        text2: String,
        buttonText: String,
        visible: Boolean
    }],
    /* bounipun lab */
    bounipunLab: {
        heading: String,
        paragraph: String,
        image: String,
        buttonText: String,
        visible: Boolean
    },
    /* quote */
    quote: {
        logo: String,
        heading: String,
        paragraph: String,
        author: String,
        visible: Boolean
    },
    /* press */
    press: {
        logo: String,
        imageList: [{ _id: ObjectId, path: String, mainImage: Boolean }],
        captions: [{ heading: String, paragraph: String }],
        visible: Boolean
    },
    /* instagram */
    instagram: {
        text: String,
        visible: Boolean
    },
    description: String,
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('homepages', schema);

/* helper methods */
export const methods = {
    register() {
        console.log('registered homepages');
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

