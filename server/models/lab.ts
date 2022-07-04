import { mongoose, db, ObjectId, task } from "@helpers/essentials";

type CommonBlock = {
  heroBlockKey: string;
  mainImage: string;
  title: string;
  paragraph: string;
}
/* variant block */
type VariantBlock = CommonBlock;

/* color block */
type colorBlock = CommonBlock & {
  colorImage: string;
  category: string;
};

/* fabric block */
type fabricBlock = CommonBlock & {
  subImage1: string;
  subImage2: string;
  subHeading1: string;
  subParagraph1: string;
  subHeading2: string;
  subParagraph2: string;
  subHeading3: string;
  subParagraph3: string;
};

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
    heroBlocks: [
      {
        name: String,
        alias: String,
        paragraph: String,
        visible: Boolean,
        key: String,
      },
    ],
    heroBlockDetails: Object,
    description: String,
    status: Boolean,
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("lab", schema);

export const methods = {
  register() {
    console.log("registered lab");
  },
  async updateLab(details, editMode) {
    if (details.status === false) return;
    console.log("Other lab documents need status update");

    let filter: any = {};
    /* if edit mode, skip the existing layout */
    if (editMode) filter._id = { $ne: details._id };

    const matchedDocs: any = await model.find(filter);

    /* if no matched layouts found */
    if (matchedDocs === null) return;

    /* update status for all matched layouts */
    for (const doc of matchedDocs) {
      const updated: any = await model.findOneAndUpdate(
        { _id: doc._id },
        { status: false },
        { returnOriginal: false }
      );
      console.log(updated.status);
    }
  },
};

export default { model, methods };
