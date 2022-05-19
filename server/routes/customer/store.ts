import { server, db, mongoose, task, formatDate } from "@helpers/essentials";
import { methods as userMethods } from "@models/user";
import { methods as couponMethods } from "@models/coupon";
import { IntentOptions, methods as paymentIntentMethods, PaymentLinkIntent } from "@models/paymentIntent";
import { methods as messageMethods } from "@models/message";
import { methods as notificationMethods } from "@models/notification";
import { methods as unlockMethods } from "@models/unlock";
import { methods as globalConfigMethods } from "@models/globalConfig";
import { methods as currencyMethods } from "@models/currency"
import { methods as paymentLinkMethods } from "@models/paymentLinks"
import { methods as paymentMethods } from "@models/payment"

let { sendContactFormEmailToAdmin } = notificationMethods;
sendContactFormEmailToAdmin =
  sendContactFormEmailToAdmin.bind(notificationMethods);

/* user auth middleware */
const { userAuth } = userMethods;

/* creating express router */
const router = server.express.Router();

/* send message (contact form) */
router.post("/sendMessage", async (req, res) => {
  let response = { resolved: true };
  const { name, subject, email, message } = req.body;
  const msgSaved: any = await messageMethods.saveMessage(
    name,
    subject,
    email,
    message
  );
  console.log(msgSaved);

  const timestamp = formatDate(msgSaved.createdAt);

  await sendContactFormEmailToAdmin({
    name,
    timestamp,
    subject,
    email,
    message,
  });
  res.send(response);
});

/* fetch global config */
router.post("/fetchGlobalConfig", async (req, res) => {
  console.log("CURRENCY PROVIDED", req.body.currency);
  const { currency } = req.body;
  let response = { resolved: false, globalConfig: {} };

  /* fetch global config */
  const config = await globalConfigMethods.getGlobalConfig(currency);

  /* if config couldn't be fetched */
  if (config === false) {
    res.send(response);
    return;
  }

  response.globalConfig = config;
  response.resolved = true;

  res.send(response);
});

/* validate and fetch coupon code details */
router.post("/fetchCoupon", userAuth("customer", false), async (req, res) => {
  /* response to be sent back */
  let response = { resolved: false, couponDetails: {} };
  /* extract coupon code from body */
  const { couponCode, currency } = req.body;
  /* validate coupon code */
  const couponDetails = await couponMethods.validateCoupon(
    couponCode,
    currency
  );
  /* set reponse */
  response.resolved = couponDetails !== false;
  response.couponDetails = couponDetails;
  res.send(response);
});

/* get valid coupons */
router.post("/fetchValidCoupons", userAuth("customer", false), async (req, res) => {
  /* response to be sent back */
  let response = { resolved: false, coupons: [] };
  /* extract currency from body */
  const { currency } = req.body;
  /* validate coupons */
  const coupons = await couponMethods.getValidCoupons(currency);
  /* set reponse */
  response.resolved = true;
  response.coupons = coupons;
  res.send(response);
});

/* apply unlock code */
router.post("/applyUnlockCode", userAuth("customer"), async (req, res) => {
  /* response to be send back */
  const response = { resolved: false };
  /* extract unlock code and user id from body */
  const { unlockCode, user } = req.body;
  /* validate coupon */
  const unlockDetails = await unlockMethods.validateUnlockCode(
    unlockCode,
    user._id,
    true
  );

  if (unlockDetails === false) {
    res.send(response);
    return;
  }

  /* update user doc in db */
  const updateUserRequest = await db
    .model("users")
    .findOneAndUpdate(
      { _id: user._id },
      {
        contentUnlock: {
          status: true,
          code: unlockCode,
        },
      },
      { returnOriginal: false }
    )
    .select("contentUnlock");

  /* update coupon log */
  await unlockMethods.updateUnlockCodeLog(unlockCode, user._id);

  console.log(updateUserRequest);

  response.resolved = true;
  res.send(response);
});

/* create payment intent order */
router.post("/createPaymentIntent", userAuth("customer"), async (req, res) => {
  const response = {
    resolved: false,
    intentId: "",
    gatewayToken: "",
    amount: 0,
    currency: ""
  };

  /* TODO: verify gateway */
  const {
    user,
    intentType,
    amountToBeCharged,
    currency,
    gateway,
    couponCode,
    deliveryAddress,
    combinedDeliveryConsent,
    giftMessage
  } = req.body;

  let zeroDecimal = false;

  if (currency !== "INR") {
    const currencyDetails = await currencyMethods.getCurrency(currency);
    zeroDecimal = currencyDetails.zeroDecimal;
  }

  /* payload (can be for order or anything) */
  let payload;

  switch (intentType) {
    case "order":
      /* create order payload */
      payload = await userMethods.createOrderPayload(
        user.cart,
        amountToBeCharged,
        currency,
        couponCode,
        deliveryAddress,
        combinedDeliveryConsent,
        zeroDecimal,
        giftMessage
      );
      /* if verification failed, stop execution */
      if (payload === false) {
        res.send(response);
        return;
      }

      break;
    case "..gift_card_maybe":
      res.send(response);
      return;
  }

  /* save payment intent in database */
  const paymentIntent = await paymentIntentMethods.createNew({
    intentType,
    createdBy: user._id,
    amount: amountToBeCharged * 100,
    currency,
    gateway,
    payload,
    valid: true,
  });

  response.gatewayToken = payload.gatewayToken;
  response.intentId = paymentIntent._id;
  response.amount = amountToBeCharged * 100;
  response.currency = currency;
  response.resolved = true;

  console.log(giftMessage);

  res.send(response);
});

/* payment link request payload */
type paymentLinkReqPayload = {
  linkId: string;
  countryCode: string;
  phoneNumber: string;
}

/* TODO: create universal payment intent */
router.post("/createPaymentIntent/v2", userAuth("customer", false), async (req, res) => {

  /* response object to be send back */
  const response = {
    resolved: false,
    intentId: "",
    gatewayToken: "",
    amount: 0,
    currency: "",
    msg: ""
  };

  /* request body */
  const {
    user,
    type,
    amount,
    currency,
    gateway,
    billingAddress,
    shippingAddress,
    /* can have coupon code, delivery address, combined delivery consent, gift message, payment link details etc. */
    payload
  } = req.body;

  /* msg */
  let msg = '';

  console.log(`✴️ Payment Intent creation requested for: ${type} | Amount: ${amount} | Currency: ${currency}`);
  /* TODO: validate request */

  /* create intent payload & verify amount */
  let intentPayload = null;

  switch (type) {
    case 'order':
      break;
    case 'paymentLink':
      const reqPayload = payload as paymentLinkReqPayload
      /* validate details */
      const detailsValid = await paymentLinkMethods.validateLinkDetails(reqPayload.linkId, {
        amount,
        currency,
        countryCode: reqPayload.countryCode,
        phoneNumber: reqPayload.phoneNumber
      })
      /* if details invalid */
      if (!detailsValid) {
        msg = '❌ Invalid link details provided'
        console.log(msg);
        return res.send({ ...response, msg });
      }

      console.log('🔰 Payment link details validated')

      /* create intent payload */
      intentPayload = {
        linkId: payload.linkId,
      } as PaymentLinkIntent['payload']

      break;
  }

  console.log('🔰 Payment Intent payload created')

  /* check if currency is zero decimal or not */
  const currencyDetails = await currencyMethods.getCurrency(currency);
  const zeroDecimal = currencyDetails.zeroDecimal;
  /* amount in sub-units */
  const amountInSubUnits = parseInt((amount * 100).toFixed(2))

  console.log(`🔸 Amount in sub-units: ${amountInSubUnits} ${currency} | Zero Decimal: ${zeroDecimal}`)

  /* create gateway token (payment intent)  */
  let gatewayResponse = null;
  switch (gateway) {
    case 'razorpay':
      gatewayResponse = await paymentMethods.createRazorpayOrder({
        amount: amountInSubUnits,
        currency: "INR",
        receipt: "Bounipun Transaction",
      });
      break;
    case 'stripe':
      gatewayResponse = await paymentMethods.createStripePaymentIntent({
        amount: zeroDecimal ? amount : amountInSubUnits,
        currency,
        description: "Bounipun Transaction",
      });
      break;
  }

  /* if payment intent creation failed */
  if (!gatewayResponse) {
    msg = '❌ Gateway intent creation failed'
    console.log(msg);
    return res.send({ ...response, msg });
  }

  /* set gateway token */
  const gatewayToken = gateway === 'stripe' ? gatewayResponse.client_secret : gatewayResponse.id;

  /* save payment intent in database */
  const paymentIntent = await paymentIntentMethods.createNew({
    payload: { ...intentPayload, gatewayToken },
    intentType: type,
    createdBy: user._id,
    amount: amountInSubUnits,
    currency,
    gateway,
    valid: true
  });

  console.log(`✅ Payment intent created: ${paymentIntent._id}`)

  /* attaching required details to response body */
  response.gatewayToken = gatewayToken;
  response.intentId = paymentIntent._id;
  response.amount = amountInSubUnits;
  response.currency = currency;
  response.resolved = true;

  res.send(response);
});

/* process stripe payment */
router.post(
  "/processStripePayment",
  userAuth("customer"),
  async (req, res) => { }
);

/*  stripe webhooks */
router.post("/stripeWebhook", async (req, res) => {
  const event = req.body;

  /* TODO: dude, verify the signature first */
  const amount = event.data.object.amount;
  const currency = event.data.object.currency;

  switch (event.type) {
    case "payment_intent.succeeded":
      console.log("WEBHOOK CALLED, PAYMENT SUCCEEDED");

      const paymentIntent = event.data.object;
      // console.log('CLIENT_SECRET', paymentIntent.client_secret);
      const { id: transactionId, client_secret } = paymentIntent;
      await userMethods.placeOrder(client_secret, transactionId, "stripe");
      break;
  }

  res.send({ resolved: true });
});

/*  stripe webhooks */
router.post("/stripeWebhook/v2", async (req, res) => {
  /* TODO: dude, verify the signature first */
  const event = req.body;
  const { id: transactionId, client_secret: gatewayToken } = event.data.object;
  /* verify token is valid */
  const paymentIntent: IntentOptions = await paymentIntentMethods.fetchAndVerifyPaymentIntent(
    gatewayToken
  );

  /* if payment intent is invalid */
  if (!paymentIntent)
    return res.send({ resolved: false, msg: 'Gateway token invalid' })

  /* if payment successed  */
  if (event.type === "payment_intent.succeeded") {
    console.log('💳 Payment Succeeded');
    switch (paymentIntent.intentType) {
      case 'order':
        await userMethods.placeOrder(gatewayToken, transactionId, "stripe");
        break;
      case 'paymentLink':
        await paymentLinkMethods.markAsPaid((paymentIntent as PaymentLinkIntent).payload.linkId, "stripe")
        break;
    }
  }

  res.send({ resolved: true });
});

/* razorpay payment success */
router.post("/razorpayPaymentSuccess", async (req, res) => {
  const { razorpay_order_id, transactionId } = req.body;
  console.log(req.body);
  await userMethods.placeOrder(razorpay_order_id, transactionId, "razorpay");
  res.send({ resolved: true });
});

/* razorpay payment success - v2 */
router.post("/razorpayPaymentSuccess/v2", async (req, res) => {
  // console.log('Request body: ', req.body);
  const { gatewayToken, transactionId, signature, type } = req.body;

  /* verify token is valid */
  const paymentIntent: any = await paymentIntentMethods.fetchAndVerifyPaymentIntent(
    gatewayToken
  );

  /* if payment intent is invalid */
  if (!paymentIntent)
    return console.log("Payment Intent Invalid")

  console.log(`✅  Payment Intent is valid, type: ${type}`)

  switch (type) {
    case 'order':
      /* place order */
      await userMethods.placeOrder(gatewayToken, transactionId, "razorpay");
      break;
    case 'paymentLink':
      /* mark payment link as paid */
      await paymentLinkMethods.markAsPaid((paymentIntent as PaymentLinkIntent).payload.linkId, "razorpay")
      break;
  }

  console.log('✅  Post payment routine complete.')

  res.send({ resolved: true });
});

export default router;
