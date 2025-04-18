import { server, db, task, mongoose } from "@helpers/essentials";
import admin from "@helpers/admin";
import customer from "@helpers/customer";
import { methods as userMethods } from "@models/user";
import { methods as saleMethods } from "@models/sale";

const { userAuth } = userMethods;

/* creating express router */
const router = server.express.Router();

/* get document with any filter */
router.post("/findDocument", async (req, res) => {
  const { model, filters } = req.body;
  console.log(
    `🔸🔸 finding model: ${model} with filters: ${JSON.stringify(filters)} `
  );
  const collection = db.model(model);
  let documentFetch: any = collection.findOne(filters).lean();

  /* act according to collection */
  switch (model) {
    case "homepage_layouts":
      // await document
      documentFetch.populate({
        path: "productSections.list",
        populate: {
          path: "list._id",
          populate: {
            path: "bounipun_collection",
          },
        },
      });
      break;
    case "homepages":
      documentFetch
        .populate("collectionBlocks.bounipun_collection", "name slug")
        .populate("productListBlocks.productList", "name slug");
      break;
    default:
      break;
  }

  const { response: document, error } = await task(documentFetch);

  // console.log(document);

  /* if error occurred or document not found */
  if (error || document === null) {
    const msg = error ? "Couldnt fetch" : "Couldnt find";
    console.log(msg);
    res.send({notFound: true})
    return;
  }

  res.send(document);
});

/* get document with any filter */
router.post("/findDocuments", async (req, res) => {
  const { model, filters } = req.body;
  console.log(
    `🔸🔸 finding model: ${model} with filters: ${JSON.stringify(filters)} `
  );

  const collection = db.model(model);
  let documentFetch: any = collection.find(filters).lean()

  /* act according to collection */
  switch (model) {
    case "products":
      documentFetch
        .populate("variants._id")
        .populate("bounipun_collection")
        .populate("colors._id")
        .populate("rtsDirectVariant");
      break;
    case "collections":
      documentFetch.sort("order");
      break;
    case "color_categories":
      documentFetch.sort("order");
      break;
    default:
      break;
  }

  const { response: document, error } = await task(documentFetch);

  // console.log(document);

  /* if error occurred or document not found */
  if (error || document === null) {
    const msg = error ? "Couldnt fetch" : "Couldnt find";
    console.log(msg);
    return {};
  }

  res.send(document);
});

router.post("/productIdToSlug", async (req, res) => {
  const response = { resolved: false, product: {} };
  const { productId } = req.body;
  console.log(productId);
  const product = await db
    .model("products")
    .findOne({ _id: productId })
    .select("slug");

  if (product === null) {
    res.send(response);
    return;
  }

  response.product = product;
  response.resolved = true;
  res.send(response);
});

/* get product */
router.post("/fetchProduct", userAuth("customer", false), async (req, res) => {
  const { _id, slug, unlocked, forceUnlock, isAdmin } = req.body;
  const collection = db.model("products");
  const filters: any = _id ? { _id } : { slug }

  /* if user is not unlocked, show only unlocked content */
  if (unlocked === false) filters.lock = false;
  if(forceUnlock || isAdmin) delete filters.lock;


  let document: any = collection.findOne(filters).lean();

  document = await document
    .populate("bounipun_collection", "name description variantNote edt slug")
    .populate("variants._id")
    .populate("variants.fabrics._id")
    .populate("colors._id", "name category image")
    .populate("rtsDirectVariant")
    .populate("rtsDirectFabric")
    .populate("rtsFabric");

  /* if no doc matched */
  if (document === null) {
    res.send({ resolved: false });
    return;
  }

  /* if bounipun colors, get grouped color data */
  if (document.colorSource === "bounipun-colors") {
    /* get color categories */
    const colorCategories = await db
      .model("color_categories")
      .find()
      .sort("order");
    /* grouped data array */
    let groupedData = [];
    colorCategories.forEach((category: any) => {
      /* find all colors under this category */
      const colors = document.colors.filter((color) => {
        return (
          color._id.category.toString() === category._id.toString() &&
          color.status === true
        );
      });
      /* save colors */
      groupedData.push({
        name: category.name,
        description: category.description,
        colors,
      });
    });

    /* add color data to document */
    document.colorData = groupedData;
  }

  /* update color name for color list */
  document.colors.forEach((color) => {
    const bounipunColor = color._id !== null;
    color.name = bounipunColor ? color._id.name : color.name;
    color.image = bounipunColor ? color._id.image : "";
    color._id = bounipunColor ? color._id._id : null;
  });

  document = await document;
  /* normalize pricing */
  document = await saleMethods.normalizePricing([document]);
  console.log(document[0]);
  res.json(document[0]);
});

/* get product search filters */
router.get("/getSearchFilters", async (req, res) => {
  let response = {
    fetched: false,
    collections: [],
    variants: [],
    baseColors: [],
  };

  /* fetch all collections (active and unlocked) */
  let dataFetch = [];
  dataFetch.push(
    db
      .model("collections")
      .find({ status: true })
      .select("name image mainTextBlock lock slug softLock lockedImage lockedImages lockedText")
  );
  dataFetch.push(db.model("variants").find({ status: true }).populate("category").select("name category"))
  dataFetch.push(
    db
      .model("base_colors")
      .find({ status: true })
      .sort("order")
      .select("name hex")
  );
  const { response: resolvedData, error } = await task(Promise.all(dataFetch));

  /* if error occurred */
  if (error) {
    res.send(response);
    return;
  }

  response.collections = resolvedData[0];
  response.variants = resolvedData[1];
  response.baseColors = resolvedData[2];
  response.fetched = true;
  res.send(response);
});

/* search products (pricing retrieved) */
router.post(
  "/searchProducts",
  userAuth("customer", false),
  async (req, res) => {
    /* destructure data from request body */
    const { rawCriterion, unlocked, forceUnlock } = req.body;

    // console.log(rawCriterion);

    /* construct criterion from raw criterion */
    let criterion: any = {};

    /* construct filter criteria */
    let filters = {};
    /* cast to object id required */
    let castRequired = ["bounipun_collection", "variants._id"];

    /* omit unused filters */
    Object.keys(rawCriterion.filters).forEach((key) => {
      let value = rawCriterion.filters[key];
      if (value.length !== 0) {
        value = castRequired.includes(key)
          ? admin.getObjectId_ied(value)
          : value;
        filters[key] = { $in: value };
      }
      
      /* if rts and variant selected */
      if(filters['availabilityType'] && key==="variants._id" && value.length !== 0) {
        delete filters['variants._id'];
        filters['rtsDirectVariant'] = { $in: value }
      }
    });

    /* add price range filter if provided */
    if (rawCriterion.selectedPriceRange !== "") {
      console.log("Price Range provided");
      const value = rawCriterion.selectedPriceRange.substring(1);
      if (rawCriterion.selectedPriceRange.startsWith("<"))
        filters["priceRange.startsAt"] = { $lte: parseInt(value) };
      else filters["priceRange.startsAt"] = { $gte: parseInt(value) };
    }

    /* construct color filter if provided */
    if (rawCriterion.colors.length !== 0) {
      const colorFilter = {
        $or: [
          { "colors.baseColor": { $in: rawCriterion.colors } },
          { "colors.additionalColor1": { $in: rawCriterion.colors } },
          { "colors.additionalColor2": { $in: rawCriterion.colors } },
        ],
      };
      filters = { ...colorFilter, ...filters };
    }

    // console.log(JSON.stringify(filters));

    /* add generic filters (product and color should be active) */
    // filters = {...filters, status: true, 'colors.status': true }
    /* gold */
    console.log(rawCriterion.search.term,'--SEARCH_TERM--')
    rawCriterion.search.term = admin.convertSearchTermToRegEx(
      rawCriterion.search.term
    );



    /* text match + filters */
    criterion.match = {
      status: true,
     "colors.status": true,
      $or: [
        { name: { $regex: rawCriterion.search.term, $options: "i" } },
        { "colors.name": { $regex: rawCriterion.search.term, $options: "i" } },
        {
          "colors.baseColor": {
            $regex: rawCriterion.search.term,
            $options: "i",
          },
        },
        {
          "colors.additionalColor1": {
            $regex: rawCriterion.search.term,
            $options: "i",
          },
        },
        {
          "colors.additionalColor2": {
            $regex: rawCriterion.search.term,
            $options: "i",
          },
        },
        { meta: { $regex: rawCriterion.search.term, $options: "i" } },
      ],
      ...filters,
    };

    /* append lock filter, if user is not unlocked */
    if (unlocked === false && !forceUnlock) {
      criterion.match = { ...criterion.match, lock: false };
    }

    console.log(criterion.match)

    /* sort by fields */
    criterion.sort = rawCriterion.sortBy;
    // console.log(criterion.sort)

    /* calculate number of docs to be skipped */
    criterion.skip = (rawCriterion.cursor - 1) * rawCriterion.limit;

    /* set result set limit */
    criterion.limit = rawCriterion.limit;

    /* identify the color which matched */

    let paginatedResults: any = await customer.getPaginationResultsV2(
      "products",
      criterion
    );

    /* TODO: check if products are under any active sale (if yes, re-calculate pricing) */

    paginatedResults.docs = await saleMethods.normalizePricing(
      paginatedResults.docs
    );

    res.send(paginatedResults);
  }
);

/* fetch single product with all properties */
router.get("/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    
    const product = await db.model("products")
      .findById(productId)
      .populate("bounipun_collection")
      .populate("variants._id")
      .populate("variants.fabrics._id") 
      .populate("colors._id")
      .populate("rtsDirectVariant")
      .populate("rtsDirectFabric")
      .lean();

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.json({
      success: true,
      data: product
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching product",
      error: error.message
    });
  }
});

/* fetch all colors grouped by categories */
router.get("/colors-by-categories", async (req, res) => {
  try {
    // Fetch all color categories
    const categories = await db.model("color_categories").find().lean();
    
    // Fetch all colors
    const colors = await db.model("colors")
      .find()
      .populate("category")
      .lean();

    // Group colors by category
    const colorsByCategory = categories.map(category => {
      return {
        _id: category._id,
        name: category.name,
        colors: colors.filter(color => 
          color.category && color.category._id.toString() === category._id.toString()
        ).map(c => ({
          _id: c._id,
          name: c.name,
          code: c.code,

        }))
      };
    });

    res.json({
      success: true,
      data: colorsByCategory
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching colors by categories",
      error: error.message
    });
  }
});

/* clone product */
router.get("/clone-product/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    // Find original product
    const originalProduct = await db.model("products").findById(productId).lean();

    if (!originalProduct) {
      return res.status(404).json({
        success: false,
        message: "Original product not found"
      });
    }

    // Create clone by removing _id
    const productClone = { ...originalProduct, name: originalProduct.name + " (Clone)" };
    delete productClone._id;

    // Save cloned product
    const newProduct = await new (db.model("products"))(productClone).save();

    res.json({
      success: true,
      message: "Product cloned successfully",
      data: newProduct
    });

  } catch (error) {
    res.status(500).json({
      success: false, 
      message: "Error cloning product",
      error: error.message
    });
  }
});




/* fetch cart items */
// router.post('/fetchCartDetails', async (req, res) => {
//     let response = { resolved: false, cartDetails: [], variants: [], fabrics: [] }
//     const { listOfProductIds } = req.body;

//     if (listOfProductIds.length === 0) {
//         res.send(response);
//         return;
//     }

//     /* fetch product details from ids */
//     const productDetailsFetch: any = db.model('products')
//         .find({ _id: { $in: listOfProductIds } })
//         .populate('bounipun_collection', 'name')
//         .populate('variants._id', 'name')
//         .populate('variants.fabrics._id', 'name info1')
//         .lean()
//     const { response: details, error } = await task(productDetailsFetch);

//     /* if error occurred */
//     if (error) {
//         res.send(response);
//         return;
//     }

//     response.cartDetails = details;

//     res.send(response);

// });

/* fetch related products (pricing retrieved) */
router.post(
  "/fetchRelatedProducts",
  userAuth("customer", false),
  async (req, res) => {
    let response = { resolved: false, products: [] };
    const limit = 4;

    let { currentProductId, currentProductDate, unlocked } = req.body;

    /* check if current product id and current product date is not provided */
    if (currentProductId === undefined || currentProductDate === undefined) {
      res.send(response);
      return;
    }

    /* fetch products added after the  current product */
    let relatedProducts: any = await db
      .model("products")
      .find({
        _id: { $ne: currentProductId },
        createdAt: { $gte: currentProductDate },
        status: true,
      })
      .sort({ createdAt: 1 })
      .limit(limit)
      .populate("variants._id")
      .populate("bounipun_collection", "name")
      .populate("colors._id")
      .populate("rtsDirectVariant")
      .lean();

    //  console.log(relatedProducts.length);
    /* if related prdocucts are lesser than limit, fetch related products added before the current product */
    if (relatedProducts.length < limit) {
      relatedProducts = await db
        .model("products")
        .find({
          _id: { $ne: currentProductId },
          createdAt: { $lte: currentProductDate },
          status: true,
        })
        .sort({ createdAt: -1 })
        .limit(limit)
        .populate("variants._id")
        .populate("bounipun_collection")
        .populate("colors._id")
        .populate("rtsDirectVariant")
        .lean();
    }

    /* filter products which are inactive and also check for locked products */
    relatedProducts = relatedProducts.filter((product) => {
      if (product.lock === true && unlocked === false) return false;
      return product.status === true;
    });

    relatedProducts = await saleMethods.normalizePricing(relatedProducts);
    response.products = relatedProducts;
    response.resolved = true;

    res.send(response);
  }
);

/* pricing retrieved */
router.post(
  "/fetchRecentlyViewed",
  userAuth("customer", false),
  async (req, res) => {
    let response = { resolved: false, products: [] };
    const limit = 4;

    let { entries, unlocked } = req.body;

    if (entries.length === 0 || entries === undefined) {
      res.send(response);
      return;
    }

    // console.log(entries);

    /* productids */
    const productIds = entries.map(
      (entry) => new mongoose.Types.ObjectId(entry.product)
    );
    // console.log(productIds);

    let recentlyViewedProducts: any = await db
      .model("products")
      .find({ _id: { $in: [...productIds] }, status: true })
      .limit(limit)
      .populate("variants._id")
      .populate("bounipun_collection", "name")
      .populate("colors._id")
      .populate("rtsDirectVariant")
      .lean();

    if (recentlyViewedProducts.length === 0) {
      res.send(response);
      return;
    }

    /* filter products which are inactive and also check for locked products */
    recentlyViewedProducts = recentlyViewedProducts.filter((product) => {
      if (product.lock === true && unlocked === false) return false;
      return product.status === true;
    });

    recentlyViewedProducts = await saleMethods.normalizePricing(
      recentlyViewedProducts
    );
    response.products = recentlyViewedProducts;
    response.resolved = true;

    /* TODO: check for sale and update pricing */
    res.send(response);
  }
);

export default router;
