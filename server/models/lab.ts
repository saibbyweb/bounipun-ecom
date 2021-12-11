import { mongoose, ObjectId, task } from "@helpers/essentials";

const schema = new mongoose.Schema(
  {
    name: String,
    /* title of the page */
    title: String,
    /* tagline below the page */
    tagline: String,
    /* hero image */
    heroImage: String,
    /* hero image mobile */
    heroImageMobile: String,
    /* hero blocks */
    heroBlocks: [{ name: String, paragraph: String, visible: Boolean }],
    description: String,
    status: Boolean,
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model('lab', schema);
export const methods = {
    register() {
        console.log('registered lab');
    }
}

export default { model, methods };
