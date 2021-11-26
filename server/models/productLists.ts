import { mongoose, ObjectId, db } from "@helpers/essentials";

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
    console.log("sale flag update routine");

    /* check if product list is under any active sale */
    const activeSale = await db
      .model("sales")
      .findOne({ list: productListId, status: true })
      .select("_id");
    if (activeSale === null) {
      console.log("product list not under sale");
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
      `${newlyAddedProducts.length} newly added products, ${removedProducts.length} removed products`
    );

    if (newlyAddedProducts.length === 0 && removedProducts.length === 0) {
      console.log("LIST INTACT, NO FLAGS TO BE UPDATED");
      return;
    }

    /* add sale flag for newly added products */
    for (const productId of newlyAddedProducts) {
      await db
        .model("products")
        .findOneAndUpdate({ _id: productId }, { sale: activeSale._id });
    }

    /* remove sale flag for removed products */
    for (const productId of removedProducts) {
      await db
        .model("products")
        .findOneAndUpdate({ _id: productId }, { sale: null });
    }

    console.log("flag update complete");
  },
};

export default { model, methods };
