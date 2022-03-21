import { server, db, mongoose, task } from "@helpers/essentials";
import { methods as userMethods } from "@models/user";
import { methods as sessionMethods } from "@models/session";
import sumBy from "lodash/sumBy";
import { methods as paymentMethods } from "@models/payment";
import { methods as paymentIntentMethods } from "@models/paymentIntent";
import { methods as saleMethods } from "@models/sale";
import axios from "axios";
import { methods as notificationMethods } from "@models/notification";
import { methods as unlockMethods } from "@models/unlock";

let { sendCustomerRegistrationEmailToAdmin } = notificationMethods;
sendCustomerRegistrationEmailToAdmin =
  sendCustomerRegistrationEmailToAdmin.bind(notificationMethods);

/* ipregistry key */
const ipRegistryKey = process.env.IP_REGISTRY_KEY;

/* creating express router */
const router = server.express.Router();
const { userAuth } = userMethods;

/* send otp */
router.post("/sendOtp", async (req, res) => {
  let response = { resolved: false, otpSent: false };
  /* extract phone number, dial code, and purpose */
  const { countryDialCode, phoneNumber, purpose } = req.body;

  console.log(countryDialCode, phoneNumber, purpose);

  /* send otp request status */
  let sendOtpRequestStatus = false;

  /* if number is indian, use msg91 */
  // if (countryDialCode === "+91")
  //   sendOtpRequestStatus = await userMethods.sendMsg91Otp(phoneNumber);
  // /* other wise use international sms gateway */ else
    sendOtpRequestStatus = await userMethods.sendInternationalOtp(
      countryDialCode,
      phoneNumber
    );

  response.resolved = true;
  response.otpSent = sendOtpRequestStatus;
  res.send(response);
});

/* (verify phone-number) and register customer */
router.post("/registerCustomer", async (req, res) => {
  let response = {
    resolved: false,
    numberAlreadyRegistered: false,
    incorrectOtp: false,
    otpVerified: false,
    registered: false,
    loggedIn: false,
    sessionToken: "",
    cartShifted: false,
    message: "",
  };

  console.log("register called");

  const {
    countryDialCode,
    countryIsoCode,
    phoneNumber,
    otp,
    firstName,
    surName,
    platform,
  } = req.body;

  /* otp verified status */
  let otpVerified = false;

  // if (countryDialCode === "+91")
  //   otpVerified = await userMethods.verifyMsg91Otp(phoneNumber, otp);
  // else
    otpVerified = await userMethods.verifyInternationalOtp(
      countryDialCode,
      phoneNumber,
      otp
    );

  if (otpVerified === false) {
    response.incorrectOtp = true;
    response.message = "Incorrect OTP entered.";
    console.log("incorrect otp");
    res.send(response);
    return;
  }
  /* mark otp as verified */
  response.otpVerified = true;

  /* check if user already exists (by phone number) */
  if ((await userMethods.getUser({ countryDialCode, phoneNumber })) !== null) {
    response.message = "Customer with this phone number already exists";
    response.numberAlreadyRegistered = true;
    console.log("phone number exists");
    res.send(response);
    return;
  }

  /* register customer  */
  const userRegistered = await userMethods.registerUser({
    firstName,
    surName,
    phoneNumber,
    countryDialCode,
    countryIsoCode,
    usergroup: "customer",
  });
  /* if user registration failed */
  if (userRegistered === false) {
    response.message = "Registration Failed.";
    res.send(response);
    return;
  }
  /* mark user as registered */
  response.registered = true;

  /* send admin notification email */
  sendCustomerRegistrationEmailToAdmin({
    firstName,
    surName,
    phoneNumber,
    countryDialCode,
    countryIsoCode,
  });

  /* login user (should shift cart always) */
  const loginAttempt = await userMethods.registerSession(userRegistered._id);

  if (loginAttempt === false) {
    response.message = "Session Generation failed";
    res.send(response);
    return;
  }
  /* mark as logged in */
  if (platform === "web") {
    console.log("setting cookie...");
    res.cookie("swecom_bounipun", loginAttempt.token, {
      maxAge: 15552000000,
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

/* login customer */
router.post("/loginCustomer", async (req, res) => {
  let response = {
    resolved: false,
    numberNotRegistered: false,
    incorrectOtp: false,
    otpVerified: false,
    loggedIn: false,
    sessionToken: "",
    message: "",
  };

  console.log("login customer called");

  /* extract post data  */
  const { countryDialCode, countryIsoCode, phoneNumber, otp, platform } =
    req.body;

  /* check if user already exists (by phone number) */
  if ((await userMethods.getUser({ countryDialCode, phoneNumber })) === null) {
    response.message = "Phone number not registered.";
    response.numberNotRegistered = true;
    res.send(response);
    return;
  }

  let otpVerified = false;

  // if (countryDialCode === "+91")
  //   otpVerified = await userMethods.verifyMsg91Otp(phoneNumber, otp);
  // else
    otpVerified = await userMethods.verifyInternationalOtp(
      countryDialCode,
      phoneNumber,
      otp
    );

  /* if otp verification failed */
  if (otpVerified === false) {
    response.incorrectOtp = true;
    response.message = "Incorrect OTP entered.";
    console.log("incorrect otp");
    res.send(response);
    return;
  }

  /* mark otp as verified */
  response.otpVerified = true;

  /* get user */
  const user = await userMethods.getUser({ countryDialCode, phoneNumber });

  /* if user not found/couldnt fetch */
  if (user === false) {
    response.message = "Could not fetch user";
    res.send(response);
    return;
  }

  /* login user (should shift cart always) */
  const loginAttempt = await userMethods.registerSession(user._id);

  if (loginAttempt === false) {
    response.message = "Session Generation failed";
    res.send(response);
    return;
  }
  /* mark as logged in */
  if (platform === "web") {
    console.log("setting cookie...");
    res.cookie("swecom_bounipun", loginAttempt.token, {
      maxAge: 15552000000,
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

/* shitf local cart to user cart */
router.post("/shiftCart", userAuth("customer"), async (req, res) => {
  let response = { resolved: true, shifted: false };

  if (req.body.cart === undefined || req.body.cart.length === 0) {
    res.send(response);
    return;
  }

  /* user cart is not empty, dont do anything */
  if (req.body.user.cart.length > 0) {
    response.shifted = true;
    res.send(response);
    return;
  }

  /* shifted cart */
  const userCart = req.body.cart.map((item) => ({
    product: item.product,
    colorCode: item.colorCode,
    quantity: item.quantity,
    variant: item.variant === undefined ? null : item.variant,
    fabric: item.fabric === undefined ? null : item.fabric,
  }));

  /* shift cart to database */
  await db
    .model("users")
    .findOneAndUpdate({ _id: req.body.user._id }, { cart: userCart });

  response.shifted = true;

  res.send(response);
});

/* fetch cart */
router.post("/fetchCart", userAuth("customer"), async (req, res) => {
  const { unlocked } = req.body;
  const cart = req.body.user.cart;
  const cartItems = await userMethods.getCartItems(cart, unlocked);
  res.send(cartItems);
});

/* router fetch local cart */
router.post("/fetchLocalCart", async (req, res) => {
  const cart = req.body.cart;
  const cartItems = await userMethods.getCartItems(cart);
  res.send(cartItems);
});

/* fetch product list */
router.post("/fetchProductList", userAuth("customer", false), async (req, res) => {
  /* unlocked */
  const { unlocked, slug } = req.body;
  console.log(slug);
  /* response to be sent back */
  let response = { resolved: false, listDetails: {} };

  const productList: any = await db
    .model("product_lists")
    .findOne({ slug, status: true })
    .populate({
      path: 'list',
      populate: { path: "bounipun_collection colors._id rtsDirectVariant variants._id" }
    })
    .lean();
  
    /* if product list not found */
  if(productList === null) {
    console.log('Product list not found')
    res.send(response);
    return;
  }

  console.log(`Product List ${productList.name} found for slug ${slug}`)

  let products = productList.list;

  /* filter products which are inactive and also check for locked products */
  products = products.filter((product) => {
    if (product.lock === true && unlocked === false) return false;
    return product.status === true;
  });

  products = await saleMethods.normalizePricing(products);
  productList.list = products;
  
  response.listDetails = productList;
  response.resolved = true;
  res.send(response);
});

/* fetch wishlist */
router.post("/fetchWishlist", userAuth("customer"), async (req, res) => {
  const { unlocked } = req.body;

  let response = { resolved: false, products: [] };

  const details: any = await db
    .model("users")
    .findOne({ _id: req.body.user._id })
    .select("name wishlist")
    .populate({
      path: "wishlist.product",
      populate: {
        path: "bounipun_collection colors._id rtsDirectVariant variants._id",
      },
    })
    .lean();

  let products = details.wishlist.map((item) => item.product);

  /* filter products which are inactive and also check for locked products */
  products = products.filter((product) => {
    if (product.lock === true && unlocked === false) return false;
    return product.status === true;
  });

  products = await saleMethods.normalizePricing(products);
  response.products = products;
  response.resolved = true;
  res.send(response);
});
/* cart actions */
router.post("/cartActions", userAuth("customer"), async (req, res) => {
  const { user, action, cartItem } = req.body;
  const { cart } = user;

  let search: any = false;

  switch (action) {
    case "add-to-cart":
      /* if cart is empty, directly push the item */
      if (cart.length === 0 || cart === undefined) {
        cart.push(cartItem);
        break;
      }
      /* check if item already exists in cart */
      search = userMethods.findCartItem(cart, cartItem);
      /* if product found, add qty to existing qty */
      if (search !== false) search.foundCartItem.quantity += cartItem.quantity;
      /* else just add it to the cart array */ else cart.push(cartItem);
      break;
    case "update-quantity":
      /* check if item already exists in cart */
      search = userMethods.findCartItem(cart, cartItem);
      /* if yes, directly overwrite the qty */
      if (search !== false) {
        search.foundCartItem.quantity = parseInt(cartItem.quantity);
      }
      break;
    case "remove-from-cart":
      /*  check if item is already present or not */
      search = userMethods.findCartItem(cart, cartItem);
      /* if yes, remove product from cart array */
      if (search !== false) {
        /* remove item from the cart */
        cart.splice(search.foundIndex, 1);
      }
      break;
  }

  /* save cart back to database */
  await db.model("users").findOneAndUpdate({ _id: user._id }, { cart });

  res.send("cart_updated");
});

/* wishlist actions */
router.post("/wishlistActions", userAuth("customer"), async (req, res) => {
  const { user, action, product, colorCode } = req.body;
  let { wishlist } = user;

  let search: any = false;
  console.log(action);

  /* check if product already exists or not */
  let foundIndex: any = false;
  if (wishlist !== undefined) {
    // foundIndex = wishlist.findIndex(entry => entry.product.toString() === product && entry.colorCode === colorCode)
    foundIndex = wishlist.findIndex(
      (entry) => entry.product.toString() === product
    );
  } else wishlist = [];

  switch (action) {
    case "add-to-wishlist":
      if (foundIndex === false || foundIndex === -1)
        wishlist.push({ product, colorCode });
      break;
    case "remove-from-wishlist":
      if (foundIndex !== false && foundIndex !== -1)
        wishlist.splice(foundIndex, 1);
      break;
  }

  /* save wishlist back to database */
  await db.model("users").findOneAndUpdate({ _id: user._id }, { wishlist });

  res.send("wishlist-updated");
});

/* address book action */
router.post("/addressBookActions", userAuth("customer"), async (req, res) => {
  const { user, action, address } = req.body;
  console.log(address, action);

  let { addressBook } = user;

  if (addressBook === undefined) addressBook = [];

  let foundIndex = -1;

  switch (action) {
    case "save-address":
      addressBook.push(address);
      break;
    case "update-address":
      foundIndex = addressBook.findIndex(
        (add) => add._id.toString() === address._id
      );
      if (foundIndex !== -1) {
        addressBook[foundIndex] = address;
      }
      break;
    case "delete-address":
      foundIndex = addressBook.findIndex(
        (add) => add._id.toString() === address._id
      );
      if (foundIndex !== -1) {
        addressBook.splice(foundIndex, 1);
      }
      break;
  }

  /* save address book back to database */

  console.log(addressBook);

  await db.model("users").findOneAndUpdate({ _id: user._id }, { addressBook });
  res.send("addressbook-updated");
});

/* fetch customer profile */
router.post("/fetchProfile", userAuth("customer"), async (req, res) => {
  const { user } = req.body;
  let fields =
    "firstName surName phoneNumber countryDialCode countryIsoCode profession cart orders wishlist addressBook contentUnlock";

  let profile: any = await db
    .model("users")
    .findOne({ _id: user._id })
    .populate("orders")
    .select(fields);

  /* check if unlockContent is not undefined */
  const { contentUnlock } = profile;
  profile.contentLock =
    contentUnlock === undefined ? { code: "", status: "" } : contentUnlock;

  if (profile.contentUnlock.status === false) {
    console.log("🔒 Unlock code not applied.");
  }

  /* TODO: check content unlock status by validating unlock code status */
  if (profile.contentUnlock.status === true) {
    console.log(
      "🔍 Unlock code already applied, validating user unlock code..."
    );
    /* extract code */
    const { code } = profile.contentUnlock;
    /* validate code */
    const validated = await unlockMethods.validateUnlockCode(code, profile._id);

    /* if validation failed, update user and unlock code log*/
    if (validated === false) {
      console.log(
        "❌ User unlock code not valid, resetting user unlock status"
      );
      profile.contentUnlock = { code: "", status: false };
      await profile.save();
      await unlockMethods.updateUnlockCodeLog(code, profile._id, "remove");
    } else console.log("✅ User unlock code validated");
  }

  res.send(profile);
});

/* fetch customer details */
router.post(
  "/fetchCustomerDataPoints",
  userAuth("customer"),
  async (req, res) => {
    let response = { resolved: false, doc: {} };

    const { user, field } = req.body;

    let query = db.model("users").findOne({ _id: user._id }).select(field);

    switch (field) {
      case "orders":
        query = query.populate(field);
        break;
    }

    /* fetch document */
    const document = await query;
    if (document !== null) {
      response.doc = document;
      response.resolved = true;
    }

    res.send(response);
  }
);

/* update profile */
router.post("/updateProfile", userAuth("customer"), async (req, res) => {
  const { user, profile } = req.body;

  const profileUpdate = await db.model("users").findOneAndUpdate(
    { _id: user._id },
    {
      firstName: profile.firstName,
      surName: profile.surName,
      profession: profile.profession,
    }
  );

  res.send("done");
});

/* set cookie demo */
router.post("/setCookie", (req, res) => {
  console.log(req.headers);

  res.cookie("chill", "1234567", {
    maxAge: 2592000000,
    httpOnly: false,
    sameSite: "none",
    secure: false,
    path: req.headers.origin,
  });
  res.send("what");
});

/* ip lookup */
router.post("/ipLookup", userAuth("customer", false), async (req, res) => {
  /* response to be sent back */
  let response = { resolved: false, countryCode: "IN", dump: {} };

  const { user } = req.body;
  console.log("⌛️ IP Lookup requested for: ", req.ip);
  // response.dump = { ip: req.ip, type: typeof req.ip }

  /* if user is logged in, fetch country code from account */
  if (user.status === true) {
    console.log("🗃  Country IsoCode fetched from user account");
    response.countryCode = user.countryIsoCode;
    response.resolved = true;
    res.send(response);
    return;
  }

  /* validate ip */
  if (req.ip === "::1" || req.ip.includes("::ffff")) {
    console.log("🖥  Accessed via localhost as guest");
    response.resolved = true;
    res.send(response);
    return;
  }
  const usIP = "206.189.205.251";
  console.log(`⌛️ Fetching details from IP Regsitry`);
  /* otherwise do an country lookup */
  const { response: lookupResponse, error } = await task(
    axios.get(`https://api.ipregistry.co/${req.ip}?key=${ipRegistryKey}`)
  );

  /* if error */
  if (error) {
    console.log(
      "❌  Something went wrong, could not fetch details from IP Registry"
    );
    res.send(response);
    return;
  }

  /* if match found */
  if (lookupResponse.data.location.country.code) {
    // response.dump = lookupResponse.data.location.country;
    response.countryCode = lookupResponse.data.location.country.code;
    console.log(
      "✅ Details fetched from IP Registry ; Country IsoCode: ",
      response.countryCode
    );
    response.resolved = true;
  }

  res.send(response);
});

/* logout user */
router.post("/logoutCustomer", userAuth("customer"), async (req, res) => {
  console.log("logout called");
  /* mark session as invalid */
  const { user, token } = req.body;
  await sessionMethods.invalidateSession(user._id, token);
  res.send("logout called");
});

/* cancel sub order */
router.post(
  "/confirmOrderCancellation",
  userAuth("customer"),
  async (req, res) => {
    let response = { resolved: false };
    const { orderId, subOrderId, reason, user } = req.body;
    console.log(user._id, orderId, subOrderId, reason);
    const cancelOrder = await userMethods.cancelOrder(
      orderId,
      subOrderId,
      reason,
      user._id
    );
    response.resolved = !(cancelOrder === false);
    res.send(response);
  }
);

export default router;
