import { mongoose, ObjectId, task } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema(
  {
    name: String,
    list: { type: ObjectId, ref: "product_lists" },
    discountPercentage: Number,
    description: String,
    status: Boolean,
  },
  {
    timestamps: true,
  }
);

/* model */
const model = mongoose.model("sales", schema);

/* helper methods */
export const methods = {
  register() {
    console.log("registered");
  },
  alreadyInSalesList(productId) {},
  normalizePricing(products) {
    let normalizedProducts;
    let saleDetails = {};

    for (const product of products) {
      /* if product is not under sale, save product as is */
      if (product.sale === null || product.sale == undefined) {
        normalizedProducts.push(product);
      }

      /* if product is under sale, check whether sale details are already available or not */
      if (saleDetails[product.sale] === undefined) {
        // fetch sale details and store it in saleDetails array
        // saleDetails[product.sale] = saleDetailsFetched;
      }

      /* extract variants and availability type */
      const { variants, availabilityType } = product;

      if (availabilityType === "made-to-order") {
        variants.forEach(({ fabrics }) => {
          fabrics.forEach((fabric) => {
            // do the magic, call function along with sale details and get updated values
          });
        });
      } else {
        // update direct price and direct pricing
        // call function along with sale details and get updated values
      }

      // now re-calculate pricing range (make it a separate function)

      // save product with new values in normalized products array
    }
  },
};

export default { model, methods };
