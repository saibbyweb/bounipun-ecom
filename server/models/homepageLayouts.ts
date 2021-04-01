import { mongoose, ObjectId } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    slideshow: Array,
    homepageProducts: [{
        heading: String,
        tagline: String,
        list: { type: ObjectId, ref: 'product_list' }
    }],
    sections: [
        { heading: String, tagline: String, image: String }
    ],
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
    }
}

export default { model, methods };

