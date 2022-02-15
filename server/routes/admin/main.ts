import { server, db, mongoose, task } from "@helpers/essentials";
import admin from "@helpers/admin";
import { uploader, methods as imageHelper } from "@models/imageUpload";
import { register } from "@models";
import { methods as userMethods } from "@models/user";
import { methods as adminMethods } from "@models/admin";
import { methods as sessionMethods } from "@models/session";
import { methods as notificationMethods } from "@models/notification";
import { methods as currencyMethods } from "@models/currency";
import { methods as saleMethods } from "@models/sale";
import { methods as productListMethods } from "@models/productLists"
import axios from "axios";

let { orderUpdateEmailToCustomer } = notificationMethods;
orderUpdateEmailToCustomer =
  orderUpdateEmailToCustomer.bind(notificationMethods);

const { adminAuth } = adminMethods;
register();

/* creating express router */
const router = server.express.Router();

/* upload image route */
router.post(
  "/uploadImage",
  uploader.single("productImage"),
  async (req: any, res) => {
    console.log(req.file);
    const fileName = req.file.key.replace("original/", "");
    const { uploadType } = req.body;

    switch (uploadType) {
      case "product":
        await imageHelper.createProductImageVariants(fileName);
        break;
    }

    /* save image details to database */
    const imageDetails = { name: fileName, size: req.file.size };

    const uploadedImageDetails = await imageHelper.saveImageDetails(
      imageDetails
    );

    res.send(uploadedImageDetails);
  }
);

/* get document route */
router.post("/getDocument", async (req, res) => {
  const { model, _id, requestedBy } = req.body;
  const collection = db.model(model);
  let document: any = collection.findOne({ _id }).lean();

  if (requestedBy === "customer") {
    switch (model) {
      /* products */
      case "products":
        document = await document
          .populate("bounipun_collection", "name description variantNote edt")
          .populate("variants._id")
          .populate("variants.fabrics._id")
          .populate("colors._id", "name category image")
          .populate("rtsDirectVariant")
          .populate("rtsDirectFabric")
          .populate("rtsFabric");

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

        break;
      default:
        break;
    }
  }

  if (requestedBy === "admin") {
    console.log("♠️♠️  requested by Admin, model: ", model);
    switch (model) {
      /* products */
      case "products":
        document = await document.populate(
          "colors._id",
          "name code baseColor image"
        );

        /* */

        /* update color name for color list */
        document.colors.forEach((color) => {
          const bounipunColor = color._id !== null;
          color.name = bounipunColor ? color._id.name : color.name;
          color.code = bounipunColor ? color._id.code : color.code;
          color.baseColor = bounipunColor
            ? color._id.baseColor
            : color.baseColor;
          color._id = bounipunColor ? color._id._id : null;
        });

        break;
      case "product_lists":
        // document = await document.populate("list", "name styleId");
        // console.log(document);
        // document.list.forEach((product) => {
        //   if (product._id === null) return;
        //   product.name = `${product._id.styleId} - (${product._id.name})`;
        //   product._id = product._id._id;
        // });
        break;
      default:
        break;
    }
  }
  document = await document;
  // console.log(document);
  res.json(document);
});

/* fetch collection */
router.post("/fetchCollection", async (req, res) => {
  const { model, requestedBy } = req.body;
  // console.log('Collection fetch requested: ', model);
  const collection = db.model(model);
  let documents: any = collection.find();

  /* check request source */
  if (requestedBy === "admin") {
    switch (model) {
      case "colors":
        documents = await documents.populate("category", "name");
        /* get color categories */
        const colorCategories = await db.model("color_categories").find();

        /* grouped data array */
        let groupedData = {};
        colorCategories.forEach((category: any) => {
          /* find all colors under this category */
          const colors = documents.filter((color) => {
            return color.category._id.toString() === category._id.toString();
          });
          groupedData[category.name] = colors;
        });

        res.send(groupedData);
        return;
      case "variants":
        documents = await documents.populate("category", "name").lean();
        documents = documents.map(doc => ({ ...doc, category: doc.category.name }))

        console.log('sending back variants');
        documents.forEach(doc => console.log(doc.category))
        res.send(documents);
        return;
    }
  }

  /* wait for promise to resolve */
  documents = await documents;

  console.log("sending DEFAULT RESPONSE");
  res.send(documents);
});

/* fetch product count per collection */
router.post("/fetchProductCountPerCollection", async (req, res) => {
  /* get all collections */
  const collections = await db.model('collections').find().select('_id')
  let details = {}
  for (const collection of collections) {
    let colorCount = 0;
    const products: any = await db.model('products').find({ bounipun_collection: collection._id }).select('_id colors').lean()
    for (const product of products)
      colorCount += product.colors.length;

    details[collection._id] = `${products.length} products / ${colorCount} colors `;
  }
  res.send(details);
});

/* fetch paginated results */
router.post("/fetchPaginatedResults", async (req, res) => {

  /* destructure data from request body */
  const { model, rawCriterion, requestedBy } = req.body;

  console.log(`🔸 Paginated results requested for model: ${model}`)

  /* construct criterion from raw criterion */
  let criterion: any = {};

  /* add filters (match) */
  criterion.match = rawCriterion.filters;

  /* text search match */
  const textSearch = {
    name: { $regex: rawCriterion.search.term, $options: "i" },
  };

  /* add text search */
  // criterion.match[rawCriterion.search.key] = { $regex: rawCriterion.search.term, $options: "i" };
  if (model === "products" && requestedBy === "customer") {
    criterion.match = {
      $or: [
        { name: { $regex: rawCriterion.search.term, $options: "i" } },
        { "colors.name": { $regex: rawCriterion.search.term, $options: "i" } },
        {
          "colors.baseColor": {
            $regex: rawCriterion.search.term,
            $options: "i",
          },
        },
        { meta: { $regex: rawCriterion.search.term, $options: "i" } },
      ],
      ...admin.setObjectIds(rawCriterion.filters, [
        "bounipun_collection",
        "variants._id",
      ]),
    };

  } else if (model === "products" && requestedBy === "default") {
    const objectided = admin.setObjectIds(rawCriterion.filters, [
      "bounipun_collection",
    ]);
    // criterion.match = {...textSearch, ...objectided}
    criterion.match = { ...objectided };
    criterion.match[rawCriterion.search.key] = {
      $regex: rawCriterion.search.term,
      $options: "i",
    };

  } else if (model === "colors" && requestedBy === "default") {
    criterion.match = {
      ...textSearch,
      ...admin.setObjectIds(rawCriterion.filters, ["category"]),
    };

  } else {
    criterion.match[rawCriterion.search.key] = {
      $regex: rawCriterion.search.term,
      $options: "i",
    };
  }

  /* sort by fields */
  criterion.sort = rawCriterion.sortBy;

  /* calculate number of docs to be skipped */
  criterion.skip = (rawCriterion.cursor - 1) * rawCriterion.limit;

  /* set result set limit */
  criterion.limit = rawCriterion.limit;

  let paginatedResults: any = await admin.getPaginationResults(
    model,
    criterion
  );

  res.send(paginatedResults);
});

/* update api */
router.post("/updateDocument", adminAuth("1", true), async (req, res) => {
  /* extracting query details */
  const { model, details, editMode } = req.body;

  /* check if special update is required */
  const specialUpdate: any = await admin.specialUpdate(model, details, editMode);

  /* if special update processed */
  if (specialUpdate.updated === false) {
    res.send({ ...specialUpdate });
    return;
  }

  /* get collection  */
  const collection = db.model(model);
  let result: any;

  try {
    if (editMode) {
      result = await collection.findOneAndUpdate(
        { _id: details._id },
        details,
        { upsert: true, returnOriginal: model === 'product_lists' || model === 'sales' ? true : false }
      );
    } else {
      delete details._id;
      result = await new collection(details).save();
    }
  } catch (e) {
    console.log(e);
    console.log("❌ UPDATE FAILED");
    res.send({ updated: false, message: "Could not save document." });
    return;
  }

  /* TODO: add _id to result */
  const originalDoc = JSON.parse(JSON.stringify(result));
  if (editMode && (model === 'product_lists' || model === 'sales')) {
    result = details;
  }

  /* post update */
  switch (model) {
    case 'sales':
      await saleMethods.updateProductSaleFlags(result._id, originalDoc, details)
      break;
    case "product_lists":
      await productListMethods.updateProductSaleFlags(result._id, originalDoc.list, details.list);
      await productListMethods.updateProductLockFlags(details.list, details.lock);
  }

  res.send(result);
});

/* delete document */
router.post("/deleteDocument", adminAuth("1", true), async (req, res) => {
  const { model, _id } = req.body;
  const collection = db.model(model);

  /* pre-delete */
  switch (model) {
    case 'product_lists':
      const underSale: any = await db.model('sales').findOne({ list: _id }).select('name');
      if (underSale !== null) {
        res.send({ deleted: false, msg: `Product list could not be delete. It is already under sale: ${underSale.name}` });
        return;
      }
      break;
    case 'products':
      const inAList: any = await db.model('product_lists').findOne({ list: _id }).select('name');
      if (inAList !== null) {
        res.send({ deleted: false, msg: `Product present in: ${inAList.name}` });
        return;
      }
      break;
  }

  const result: any = await collection.findByIdAndDelete({ _id });

  /* post-delete */
  switch (model) {
    case 'sales':
      if (result.status) {
        result.status = false;
        await saleMethods.updateFlagsForProductList(result.list, result._id, false);
      }
      break;
  }
  res.send(result);
});
/* populate $_ids */
router.post("/populate", adminAuth("1", true), async (req, res) => {
  let response = [];
  const { model, _ids, fields } = req.body;
  response = await db
    .model(model)
    .find({ _id: { $in: _ids } })
    .select(fields)
    .lean();
  res.send(response);
});
/* take bulk action */
router.post("/takeBulkAction", adminAuth("1", true), async (req, res) => {
  let response = { resolved: false };
  const { _ids, model, type } = req.body;
  console.log(`🔸 Bulk update requested for ${model}, action type: ${type}, for ${_ids.length} documenets`)
  let updateFields: any = {};

  switch (model) {
    case 'products':
      if (type === "club-rts") {
        /* make sure more than a one product is provided */
        const moreThanOneProduct = _ids.length > 1;
        if(!moreThanOneProduct) {
          console.log('Need more than 1 product');
          return res.send({resolved:false});
        }

        const products: any = await db.model('products').find({ _id: { $in: _ids } }).lean();
        /* first matched product */
        const baseProduct = products[0];
        /* make sure all products provided are ready to ship, belong to same collection, have exact same price and styleid */
        const canBeClubbed = products.every(pro => 
        pro.styleId === baseProduct.styleId &&
        pro.availabilityType === 'ready-to-ship' && 
        pro.bounipun_collection.toString() === baseProduct.bounipun_collection.toString() && 
        pro.directPrice === baseProduct.directPrice);

        console.log(canBeClubbed,'--canBeClubbed')
        if(!canBeClubbed) {
          return res.send({resolved:false, msg: "Products cannot be clubbed."});
        }

        /* collect colors */
        let colors = products.map(pro => pro.colors);
        colors = colors.flat();
        // console.log(colors);



        /* create a new product */
        const clubbedProduct = {
          alias: "",
          availabilityType: "ready-to-ship",
          bounipun_collection: baseProduct.bounipun_collection,
          /* need to check for escape */
          colorSource: "custom",
          colors,
          description: baseProduct.description,
          directPrice:baseProduct.directPrice,
          directPricing: baseProduct.directPricing,
          rtsDirectVariant: baseProduct.rtsDirectVariant,
          rtsDirectFabric: baseProduct.rtsDirectFabric,
          stock: colors.length,
          gender: baseProduct.gender,
          // name: `${this.doc.name} - ${color.name}`,
          name: baseProduct.name,
          printNo: baseProduct.printNo || "",
          slug: "",
          status: true,
          styleId: baseProduct.styleId,
          type: "under-bounipun",
          variants: [],
          _id: "",
        };
       
        /* and remove old entries */
        const bulkUpdated = await db
        .model(model)
        .updateMany({ _id: { $in: _ids } }, {status: false, name: baseProduct.name + " -  TO BE REMOVED ❌"});

        /* rename the clubbed products (so that they can be deleted later) or mark them as inactive */
        res.send({ clubbedProduct });
        return;
      }
      break;
  }

  switch (type) {
    case "active":
      updateFields.status = true;
      break;
    case "inactive":
      updateFields.status = false;
      break;
  }

  const bulkUpdated = await db
    .model(model)
    .updateMany({ _id: { $in: _ids } }, updateFields);

  console.log(`✅ Updated ${bulkUpdated.nModified} docs successfully`)
  response.resolved = true;
  res.send(response);
});
/* update non inr prices for products */
router.post("/updateNonINRPricing", adminAuth("1", true), async (req, res) => {
  const { collectionId, inflationPercentage, type } = req.body;
  let filter = {};

  switch (type) {
    case "collection":
      filter = { bounipun_collection: collectionId };
      break;
    case "third-party":
      filter = { type: "third-party" };
      break;
    case "all":

      break;
    default:
      res.send({ total: 'No' });
      return;
      break;
  }

  const totalUpdated = await currencyMethods.updateNonINRPricing(
    filter,
    inflationPercentage
  );

  res.send({ total: totalUpdated });
});

/* update whole store */
router.post("/updateWholeStore", adminAuth("1", true), async (req, res) => {
  console.log('Whole store pricing update:');
  await currencyMethods.updateWholeStore();
  res.send({ resolved: true });
});

/* update order (of lists in admin panel) */
router.post("/updateOrder", async (req, res) => {
  const { model, newList } = req.body;
  console.log(newList);
  /* update order one by one */
  for (const item of newList) {
    // console.log(item);
    await db
      .model(model)
      .findOneAndUpdate({ _id: item._id }, { order: item.newOrder });
  }
  res.send("up");
});

/* update order item details */
router.post("/updateOrderItemDetails", async (req, res) => {
  const { orderId, subOrderId, status, trackingId, trackingUrl } = req.body;
  const filter = {
    _id: orderId,
    "items._id": mongoose.Types.ObjectId(subOrderId),
  };

  // const filter = { id: orderId, 'items._id': subOrderId };

  /* update order with new details */
  const originalOrder: any = await db.model("orders").findOneAndUpdate(filter, {
    $set: {
      "items.$.status": status,
      "items.$.trackingId": trackingId,
      "items.$.trackingUrl": trackingUrl,
    },
  });

  /* find sub-order */
  let subOrder = originalOrder.items.find(
    (item) => item._id.toString() === subOrderId.toString()
  );

  /* if sub order status changed, update timeline */
  if (subOrder.status !== status) {
    await db.model("orders").findOneAndUpdate(filter, {
      $push: {
        "items.$.timeline": {
          status,
          updatedAt: new Date(),
        },
      },
    });

    /* if delivered */
    if (status === "delivered") {
      await db.model("orders").findOneAndUpdate(filter, {
        $set: {
          "items.$.delivered": new Date(),
        },
      });
    }
  }

  const { deliveryAddress } = originalOrder;
  const customerEmail = deliveryAddress.email;
  const customerName =
    deliveryAddress.firstName + " " + deliveryAddress.surName;

  /* notify customer */
  orderUpdateEmailToCustomer(status, customerEmail, {
    bgColor: status === "delivered" ? "#2c8f4d" : "#333333",
    name: customerName,
    orderId: originalOrder.number,
    status,
  });

  res.send("broo");
});

/* cancel sub order */
router.post("/cancelSubOrder", async (req, res) => {
  let response = { resolved: true };
  const { orderId, subOrderId, reason } = req.body;
  const cancelOrder = await userMethods.cancelOrder(
    orderId,
    subOrderId,
    reason,
    false
  );
  response.resolved = !(cancelOrder === false);

  /* notify customer about cancellation, fetch orginal order */
  const originalOrder: any = await db
    .model("orders")
    .findOne({ _id: orderId })
    .select("number deliveryAddress");
  const { deliveryAddress } = originalOrder;
  const customerName =
    deliveryAddress.firstName + " " + deliveryAddress.surName;
  const customerEmail = deliveryAddress.email;

  /* notify customer */
  orderUpdateEmailToCustomer("cancelled", customerEmail, {
    bgColor: "#8f2c38",
    name: customerName,
    orderId: originalOrder.number,
    status: "cancelled",
  });

  res.send(response);
});

/* admin login */
router.post("/loginAdmin", async (req, res) => {
  let response = {
    resolved: false,
    otpVerified: false,
    loggedIn: false,
    sessionToken: "",
    message: "",
  };

  console.log(req.body);
  // return;

  /* extract post body */
  const { countryDialCode, phoneNumber, otp, platform } = req.body;

  /* check if admin already exists (by phone number) */
  const adminFound = await adminMethods.getAdmin({
    countryDialCode,
    phoneNumber,
  });

  /* if admin not found */
  if (adminFound === null) {
    response.message = "Phone number not linked to any admin account.";
    console.log("number not registered");
    res.send(response);
    return;
  }

  let otpVerified = false;

  if (countryDialCode === "+91")
    otpVerified = await userMethods.verifyMsg91Otp(phoneNumber, otp);
  else
    otpVerified = await userMethods.verifyInternationalOtp(
      countryDialCode,
      phoneNumber,
      otp
    );

  /* if otp verification failed */
  if (otpVerified === false) {
    response.message = "Incorrect OTP entered.";
    console.log("incorrect otp");
    res.send(response);
    return;
  }

  /* mark otp as verified */
  response.otpVerified = true;

  console.log(adminFound._id, "-ADMIN ID");

  /* login admin */
  const loginAttempt = await adminMethods.registerSession(adminFound._id);

  if (loginAttempt === false) {
    response.message = "Session Generation failed";
    res.send(response);
    return;
  }
  /* mark as logged in */
  if (platform === "web") {
    console.log("setting cookie...", loginAttempt.token);
    res.cookie("swecom_bounipun_admin", loginAttempt.token, {
      maxAge: 1209600000,
      httpOnly: false,
      sameSite: "none",
      secure: true,
    });
  }

  response.loggedIn = true;
  response.sessionToken = loginAttempt.token;
  response.resolved = true;

  /* revert with response */
  res.send(response);
});

/* admin logout */
router.post("/logoutAdmin", async (req, res) => {
  console.log("admin logout called");
  const { token } = req.body;
  await sessionMethods.invalidateSession(false, token, "admin");
  res.send({ adminNotAuthorized: true });
});

/* fetch customer profile */
router.post("/fetchAdminProfile", adminAuth("0", false), async (req, res) => {
  const { admin } = req.body;
  res.send(admin);
});

/* crawler */
router.get("/crawl", async (req, res) => {
  console.log(req.query);
  const { url, totalColors } = req.query as any;

  /* options */
  const options = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; saibbyweb/bingbot/2.0; +http://www.saibbyweb.com)",
    }
  }

  /* initialize crawl requests with first request */
  let crawlRequests = [axios.get(url, options)];

  for (let i = 0; i < totalColors; i++) {
    let request = axios.get(`${url}?activeColor=${i}`, options);
    crawlRequests.push(request)
  }

  const { response, error } = await task(Promise.all(crawlRequests));

  if (error) {
    console.log('request failed');
    res.send(false);
  }
  console.log(response.length);
  res.send(true)
});
export default router;
