import { mongoose, ObjectId, db } from "@helpers/essentials";
import slugify from "slugify";

// const db = mongoose.connection;

/* schema */
const schema = new mongoose.Schema(
  {
    styleId: String,
    printNo: String,
    name: String,
    alias: String,
    slug: String,
    description: String,
    gender: String,
    /* under bounipun or third-party */
    type: String,
    /* availability type */
    availabilityType: String,
    /* bounipun collection */
    bounipun_collection: {
      type: ObjectId,
      ref: "collections",
    },
    colorSource: { type: String, enum: ["bounipun-colors", "custom"] },
    /* colors */
    colors: [
      {
        _id: { type: ObjectId, ref: "colors" },
        name: { type: String, default: "" },
        images: [{ _id: ObjectId, path: String, mainImage: Boolean }],
        disclaimer: { type: String, default: "" },
        code: { type: String, default: "" },
        /* base color - meta  */
        baseColor: { type: String, default: "" },
        additionalColor1: { type: String, default: "" },
        additionalColor2: { type: String, default: "" },
        mainColor: { type: Boolean, default: false },
        status: { type: Boolean, default: true },
      },
    ],
    /* variants */
    variants: [
      {
        _id: { type: ObjectId, ref: "variants" },
        fabrics: [
          {
            _id: { type: ObjectId, ref: "fabrics" },
            price: Number,
            pricing: mongoose.Schema.Types.Mixed,
          },
        ],
      },
    ],
    directPrice: { type: String, default: "0" },
    directPricing: { type: mongoose.Schema.Types.Mixed },
    stock: {
      type: String,
      default: "",
    },
    priceRange: { startsAt: Number, endsAt: Number },
    pricingRange: { type: mongoose.Schema.Types.Mixed },
    /* rts direct variant */
    rtsDirectVariant: { type: ObjectId, ref: "variants" },
    /* rts direct fabric */
    rtsDirectFabric: { type: ObjectId, ref: "fabrics" },
    /* meta */
    meta: String,
    /* estimated time of delivery */
    // edt: { type: Number, default: 1 },
    lock: {
      type: Boolean,
      default: false,
    },
    status: Boolean,
  },
  {
    timestamps: true,
  }
);

/* model */
const model = mongoose.model("products", schema);
/* helper methods */
export const methods = {
  async register() {
    console.log("registered");
  },
  async updateProduct(details, editMode) {
    /* product and collection models */
    const products = model;
    const collections = db.model("collections");
    let parent: any = { slug: "third-party" };

    /* if alias not provide, create one  */
    if (details.alias === "")
      details.alias = slugify(details.name, { lower: true });

    /* fetch collection slug (if not third party) */
    if (details.type !== "third-party")
      parent = await collections
        .findOne({ _id: details.bounipun_collection })
        .select("slug");

    /* new product slug */
    details.slug = parent.slug + "/" + details.alias;
    /* set product lock as collection lock  */
    details.lock = parent.lock;

    /* verify slug automicity */
    let filter: any = { slug: details.slug };

    /* if edit mode, skip the existing product */
    if (editMode) filter._id = { $ne: details._id };

    /* alias */
    const slugFound = await products.findOne(filter);

    /* if slug already exists, update alias and slug */
    if (slugFound !== null) {
      details.alias = `${details.alias}-${Date.now()}`;
      details.slug = parent.slug + "/" + details.alias;
    }

    /* if product is under bounipun, add meta data to the product (variant names ) */
    if (
      details.type !== "third-party" &&
      details.availabilityType !== "ready-to-ship"
    ) {
      let keywords = [];
      /* fetch variant names */
      for (const variant of details.variants) {
        const variantDoc: any = await db
          .model("variants")
          .findOne({ _id: variant._id })
          .select("name");
        /* add variant name to keywords array */
        keywords.push(variantDoc.name);
      }
      /* add meta to product details */
      details.meta = keywords.join();

      /* add lowest and highest variant price */
      let allPrices = [];
      let nonINRPrices = {};

      details.variants.forEach((variant) => {
        variant.fabrics.forEach((fabric) => {
          allPrices.push(fabric.price);
          if (fabric.pricing === undefined) return;
          /* get all currency codes */
          const currencyCodes = Object.keys(fabric.pricing);
          /* save pricing for all non-inr currencies */
          for (const code of currencyCodes) {
            if (nonINRPrices[code] === undefined) nonINRPrices[code] = [];
            nonINRPrices[code].push(fabric.pricing[code]);
          }
        });
      });
    
      /* set pricing range for INR */
      details.priceRange = {
        startsAt: Math.min(...allPrices),
        endsAt: Math.max(...allPrices),
      };

      /* calculate pricing range for every non-INR currency */
      if (Object.keys(nonINRPrices).length !== 0) {
        let pricingRange = {};
        const currencyCodes = Object.keys(nonINRPrices);
        for (const code of currencyCodes) {
          pricingRange[code] = {
            startsAt: Math.min(...nonINRPrices[code]),
            endAt: Math.max(...nonINRPrices[code]),
          };
        }
        details.pricingRange = pricingRange;
      }

    } 
    /* ready to ship products */
    else {
      details.priceRange = {
        startsAt: details.directPrice,
        endsAt: details.directPrice,
      }
      
      /* pricing range */
        let pricingRange = {}
      Object.keys(details.directPricing).forEach(code => {
        pricingRange[code] = {
            startsAt: parseFloat(details.directPricing[code]).toFixed(2),
            endsAt: parseFloat(details.directPricing[code]).toFixed(2)
        }
      });

      details.pricingRange = pricingRange;


    }

    /* add lowest and highest price */
    // console.log(details.directPricing,'-- Direct Pricing');
    console.log(details.alias, "-- FINAL ALIAS");
    console.log(details.slug, "-- FINAL SLUG");
  },
  async updateAllProductsUnderCollection(
    collectionId,
    collectionSlug,
    collectionLock
  ) {
    const products = model;
    let matchedProducts: any = await products.find({
      bounipun_collection: collectionId,
    });

    /* if no matched products found */
    if (matchedProducts === null) return;

    /* update slugs for all matched products */
    for (const product of matchedProducts) {
      const updated: any = await products.findOneAndUpdate(
        { _id: product._id },
        { slug: collectionSlug + "/" + product.alias, lock: collectionLock },
        { returnOriginal: false }
      );
      console.log(updated.slug, updated.lock);
    }
  },
  async getFilterData() {},
  async updateStock(products: Array<{ _id: string; quantity: string }>) {
    /* remove duplicates (ready to ship items are unique)  */
    const uniqueProductsIds = [
      ...new Set(products.map((product) => product._id)),
    ];

    /* fetch ready-to-ship products */
    const result = await model.find({
      _id: { $in: uniqueProductsIds },
      availabilityType: "ready-to-ship",
    });

    /* update stock according to the quantities ordered */
    result.forEach((doc: any) => {
      const product: any = products.find(
        (prod) => prod._id.toString() === doc._id.toString()
      );
      console.log(product, "-- [stock to be updated]");
      const newStock = parseInt(doc.stock) - parseInt(product.quantity);
      doc.stock = newStock;
      doc.save();
    });
  },
  async getPaginatedSearchResults() {
    /* fetch all collections (active and unlocked) */
    /* fetch all variants (active) */
    /* fetch all base colors */
  },
};

export default { model, methods };
