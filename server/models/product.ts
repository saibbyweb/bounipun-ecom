import { mongoose, ObjectId, db } from "@helpers/essentials";
import slugify from "slugify";
import * as fs from "fs";
import cloneDeep from "lodash/cloneDeep";
const request = require("request");

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
    sale: {
      type: ObjectId,
      ref: "sales",
      default: null,
    },
    askForPrice: {
      type: Boolean,
      default: false,
    },
    variantsInfo: [
      {
        code: String,
        image: String,
        info1: String,
        info2: String,
        hex: String,
        description: { type: String, default: "" },
      },
    ],
    order: Number,
    status: Boolean,
    allBasePrices: {
      type: Object,
    },
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
        .select("slug lock");

    /* new product slug */
    details.slug = parent.slug + "/" + details.alias;

    /* set product lock as collection lock  */
    if (parent.lock === true) {
      details.lock = true;
    }

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

      /* saving all price and non - inr pricing for calculating pricing ranges */
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
            endsAt: Math.max(...nonINRPrices[code]),
          };
        }
        details.pricingRange = pricingRange;
      }
    } else {
      /* ready to ship products */
      details.priceRange = {
        startsAt: details.directPrice,
        endsAt: details.directPrice,
      };

      /* pricing range */
      let pricingRange = {};
      Object.keys(details.directPricing).forEach((code) => {
        pricingRange[code] = {
          startsAt: parseFloat(details.directPricing[code]).toFixed(2),
          endsAt: parseFloat(details.directPricing[code]).toFixed(2),
        };
      });

      details.pricingRange = pricingRange;
    }

    return details;
  },
  async updateAllProductsUnderCollection(
    collectionId,
    collectionSlug,
    collectionLock,
    askForPrice
  ) {
    const products = model;
    let matchedProducts: any = await products.find({
      bounipun_collection: collectionId,
    });

    /* if no matched products found */
    if (matchedProducts === null) return;

    /* update slugs for all matched products */
    for (const product of matchedProducts) {
      console.log(askForPrice,'--ASK--')
      const updated: any = await products.findOneAndUpdate(
        { _id: product._id },
        { slug: collectionSlug + "/" + product.alias, lock: collectionLock, askForPrice },
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
  async getProducts(filter) {
    let matchedProducts: any = await model.find(filter);
    /* if no matched products found */
    if (matchedProducts === null) return [];
    return matchedProducts;
  },
  /* update one product */
  async updateOne(filter, fields) {
    const updated: any = await model.findOneAndUpdate(filter, fields, {
      returnOriginal: false,
    });
    console.log("Updated: ", updated.slug, " ✅");
  },
  async downloadImages() {
    const AWSBASE =
      "https://bounipun-ecom.s3.ap-south-1.amazonaws.com/original/";
    const parentDir = "./productImages/";
    this.createDir(parentDir);

    const allProducts = await model.find();
    for (const product of allProducts) {
      const productDir =
        parentDir +
        slugify(product.styleId) +
        "-" +
        slugify(product.name) +
        "/";
      this.createDir(productDir);
      const colors = product.colors;
      for (const color of colors) {
        const colorDir = productDir + slugify(color.name) + "/";
        this.createDir(colorDir);
        /* start download images */
        const images = color.images;
        for (const image of images) {
          const uri = AWSBASE + image.path;
          this.downloadFile(uri, colorDir + image.path);
        }
      }
    }
  },
  async createDir(path) {
    !fs.existsSync(path) && fs.mkdirSync(path, { recursive: true });
  },
  async downloadFile(uri, filename) {
    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on("close", () => console.log("Download Complete"));
  },
  async syncMainPricesAndBasePrices(product) {
    if (product.availabilityType === "made-to-order") {
      /* all base prices */
      if (!product.allBasePrices) {
        product.allBasePrices = {};
      }

      product.variants.forEach(({ fabrics }) => {
        fabrics.forEach((fabric) => {
          /* mimic all base prices */
          product.allBasePrices[fabric.id] = {
            price: fabric.price,
            pricing: cloneDeep(fabric.pricing),
          };
        });
      });
    } else {
      /* all base prices */
      if (!product.allBasePrices) {
        product.allBasePrices = {};
      }

      /* mimic all base prices */
      product.allBasePrices = {
        directPrice: product.directPrice,
        directPricing: cloneDeep(product.directPricing),
      };
    }
    const updatedProduct = await model.findByIdAndUpdate(product.id, {
      allBasePrices: product.allBasePrices
    })
    // const updatedProduct = await product.save();
    console.log(
      "Updated base price for: ",
      product.name,
      product.allBasePrices,
      updatedProduct.allBasePrices
    );
    return updatedProduct;
  },
  async setBasePricesForAllProducts() {
    const allProducts = await model.find();
    for (const product of allProducts) {
      // console.log(product._id)
      await this.syncMainPricesAndBasePrices(product);
    }
  },
};

// methods.setBasePricesForAllProducts();

export default { model, methods };
