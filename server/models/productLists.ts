import { mongoose, ObjectId, db } from "@helpers/essentials";
import slugify from "slugify";

/* schema */
const schema = new mongoose.Schema(
  {
    name: String,
    list: [
      {
        type: ObjectId,
        ref: "products",
      },
    ],
    slug: {
      type: String,
      default: "",
    },
    image: { type: String, default: "" },
    text: { type: String, default: "" },
    lock: { type: Boolean, default: false },
    lockedImage: { type: String, default: "" },
    lockedText: { type: String, default: "" },
    description: String,
    status: Boolean,
  },
  {
    timestamps: true,
  }
);

/* model */
const model = mongoose.model("product_lists", schema);

/* helper methods */
export const methods = {
  register() {
    console.log("registered");
  },
  async updateProductSaleFlags(productListId, oldList, newList) {
    /* check if product list is under any active sale */
    const activeSale = await db
      .model("sales")
      .findOne({ list: productListId, status: true })
      .select("_id");
    if (activeSale === null) {
      console.log("🔸 Product list not under any active sale.");
      return;
    }

    /* newly added products */
    const newlyAddedProducts = newList.filter(
      (_id) => oldList.findIndex((i) => i == _id) === -1
    );
    /* removed products */
    const removedProducts = oldList.filter(
      (_id) => newList.findIndex((i) => i == _id) === -1
    );

    console.log(
      `🟢 ${newlyAddedProducts.length} products added, 🔴 ${removedProducts.length} products removed`
    );

    if (newlyAddedProducts.length === 0 && removedProducts.length === 0) {
      console.log(
        "🟢 Product list unchanged, no need to update product sale flags."
      );
      return;
    }

    /* add sale flag for newly added products */
    for (const productId of newlyAddedProducts) {
      await db
        .model("products")
        .findOneAndUpdate({ _id: productId }, { sale: activeSale._id });
    }

    /* remove sale flag for removed products [also unlock by] */
    for (const productId of removedProducts) {
      await db
        .model("products")
        .findOneAndUpdate({ _id: productId }, { sale: null, lock: false });
    }

    console.log("✅ Product sale flag updates complete");
  },
  async updateProductLockFlags(list, lockFlag) {
    const products = await db.model("products").updateMany({ _id: { $in: list } }, {
      lock: lockFlag
    });

    console.log(`✅ Updated ${products.nModified} docs successfully`)
  },
  async checkForProductWithActiveSale(details, editMode) {
    if (!editMode) {
      return { allGood: true };
    }
    /* fetch sale id for this product list */
    const sale: any = await db
      .model("sales")
      .findOne({ list: details._id })
      .select("_id name")
      .lean();
    if (sale === null) {
      console.log("The product list not linked with any sale.");
      return { allGood: true };
    }
    /* for every product in the new list, sale id should match or be null */
    for (const productId of details.list) {
      const product: any = await db
        .model("products")
        .findOne({ _id: productId })
        .select("name sale")
        .populate("sale")
        .lean();

      if (product === null) continue;

      if (
        product.sale !== undefined &&
        product.sale !== null &&
        product.sale._id !== undefined &&
        product.sale._id.toString() === sale._id.toString()
      ) {
        console.log("Same sale ids found");
        continue;
      }

      if (
        product.sale !== undefined &&
        product.sale !== null &&
        product.sale._id.toString() !== sale._id.toString()
      ) {
        const msg = `Product ${product.name} belongs to a different sale: ${product.sale.name}, cannot be added`;

        console.log(msg);

        return { updated: false, msg };
      }
    }
    return { allGood: true };
  },
  async fixSlug(details, editMode) {
    /* if slug not provide, creat one  */
    if (details.slug === "")
      details.slug = slugify(details.name, { lower: true });

    /* verify slug automicity */
    let filter: any = { slug: details.slug };

    /* if edit mode, skip the existing product */
    if (editMode) filter._id = { $ne: details._id };

    /* slug found */
    const slugFound = await model.findOne(filter);

    /* if slug already exists, update alias and slug */
    if (slugFound !== null) {
      details.slug = `${details.slug}-${Date.now()}`;
    }
  },
};

export default { model, methods };
