import { mongoose, ObjectId } from "@helpers/essentials";
import slugify from "slugify";
import { product } from "@models";
import sale from "./sale";

/* schema */
const schema = new mongoose.Schema(
  {
    name: String,
    slug: { type: String, default: "" },
    mainTextBlock: {
      text1: String,
      text2: String,
      text3: String,
      visible: Boolean,
    },
    description: { type: String, default: "" },
    variantNote: { type: String, default: "" },
    edt: { type: Number, default: 1 },
    image: String,
    inflationPercentage: Number,
    lock: { type: Boolean, default: false },
    softLock: { type: Boolean, default: false },
    lockedImage: { type: String, default: "" },
    lockedImages: [{ _id: ObjectId, path: String, mainImage: Boolean }],
    lockedText: { type: String, default: "" },
    order: Number,
    activeOrderLimit: { type: Number, default: 50 },
    basePriceMultiplier: { type: Number, default: 1 },
    status: Boolean,
    askForPrice: {
      type: Boolean,
      default: false,
    },
    category: {
      type: ObjectId,
      ref: "collection_category",
    },
  },
  {
    timestamps: true,
  }
);

/* model */
const model = mongoose.model("collections", schema);
/* helper methods */
export const methods = {
  register: async () => {
    console.log("registered");
  },
  async updateCollection(details, editMode, payload) {
    const collections = model;
    /* if slug not provide, creat one  */
    if (details.slug === "")
      details.slug = slugify(details.name, { lower: true });

    /* verify slug automicity */
    let filter: any = { slug: details.slug };

    /* if edit mode, skip the existing product */
    if (editMode) filter._id = { $ne: details._id };

    /* slug found */
    const slugFound = await collections.findOne(filter);

    /* if slug already exists, update alias and slug */
    if (slugFound !== null) {
      details.slug = `${details.slug}-${Date.now()}`;
    }

    /* update all products under this collection */
    if (editMode) {
      await product.methods.updateAllProductsUnderCollection(
        details._id,
        details.slug,
        details.lock,
        details.askForPrice
      );

      if (payload && payload.dontSkipBasePriceMultiplierUpdate) {
        await sale.methods.updatePricingForAllProductsUnderCollection(
          details._id,
          details.basePriceMultiplier
        );
      }

      /* update ask for price for all products */
    }

    /* find the last highest order and assign it to the new collection */
    if (!editMode) {
      const highestOrderElement: any = await collections
        .findOne()
        .sort("-order")
        .select("order");
      console.log(highestOrderElement);
      details.order = highestOrderElement.order + 1;
    }
  },
};
export default { model, methods };
