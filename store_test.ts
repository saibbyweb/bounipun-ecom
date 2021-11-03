import { server, db, mongoose, task, formatDate } from "@helpers/essentials";
import { methods as userMethods } from "@models/user";
import { methods as couponMethods } from "@models/coupon";
import { methods as paymentIntentMethods } from "@models/paymentIntent";
import { methods as messageMethods } from "@models/message";
import { methods as notificationMethods } from "@models/notification";
import { methods as unlockMethods } from "@models/unlock"

let { sendContactFormEmailToAdmin } = notificationMethods;
sendContactFormEmailToAdmin = sendContactFormEmailToAdmin.bind(notificationMethods);

/* user auth middleware */
const { userAuth } = userMethods;

/* creating express router */
const router = server.express.Router();

/* send message (contact form) */
router.post('/sendMessage', async (req, res) => {
    let response = { resolved: true }
    const { name, subject, email, message } = req.body;
    const msgSaved: any = await messageMethods.saveMessage(name, subject, email, message);
    console.log(msgSaved);

    const timestamp = formatDate(msgSaved.createdAt);

    await sendContactFormEmailToAdmin({
        name,
        timestamp,
        subject,
        email,
        message
    });
    res.send(response);
});

/* fetch global config */
router.post('/fetchGlobalConfig', async (req, res) => {
    let response = { resolved: false, globalConfig: {} }
    const fetchGlobalConfig: any = db.model('globalConfig').findOne({ bounipun_id: "saibbyweb" }).select('currencyMultiplier dollarValue domesticShippingCharge internationalShippingCharge gstPercentage internationalTaxPercentage shippingDisclaimerDomestic shippingDisclaimerInternational');

    /* config */
    const { response: config, error } = await task(fetchGlobalConfig);

    /* if error occurred */
    if (error || config === null) {
        res.send(response);
        return;
    }

    response.globalConfig = config;
    response.resolved = true;

    res.send(response);
});

/* validate and fetch coupon code details */
router.post('/fetchCoupon', userAuth('customer', false), async (req, res) => {
    /* response to be sent back */
    let response = { resolved: false, couponDetails: {} };
    /* extract coupon code from body */
    const { couponCode, currency } = req.body;
    /* validate coupon code */
    const couponDetails = await couponMethods.validateCoupon(couponCode, currency);
    /* set reponse */
    response.resolved = couponDetails !== false;
    response.couponDetails = couponDetails;
    res.send(response);
});

/* apply unlock code */
router.post('/applyUnlockCode', userAuth('customer'), async (req, res) => {
    /* response to be send back */
    const response = { resolved: false };
    /* extract unlock code and user id from body */
    const { unlockCode, user } = req.body;
    /* validate coupon */
    const unlockDetails = await unlockMethods.validateUnlockCode(unlockCode, user._id);

    if (unlockDetails === false) {
        res.send(response);
        return;
    }

    /* update user doc in db */
    const updateUserRequest = await db.model('users').findOneAndUpdate({ _id: user._id }, {
        contentUnlock: {
            status: true,
            code: unlockCode
        }
    }, { returnOriginal: false }).select('contentUnlock');


    /* update coupon log */
    await unlockMethods.updateUnlockCodeLog(unlockCode, user._id);

    console.log(updateUserRequest);

    response.resolved = true;
    res.send(response);
});

/* create payment intent order */
router.post('/createPaymentIntent', userAuth('customer'), async (req, res) => {
    const response = { resolved: false, intentId: "", gatewayToken: "", amount: 0 };

    /* TODO: verify gateway */
    const { user, intentType, amountToBeCharged, currency, gateway, couponCode, deliveryAddress, combinedDeliveryConsent } = req.body;


    console.log('COMBINED_DELIVERY_CONSENT', combinedDeliveryConsent);


    /* payload (can be for order or anything) */
    let payload;

    switch (intentType) {
        case "order":
            /* create order payload */
            payload = await userMethods.createOrderPayload(user.cart, amountToBeCharged, currency, couponCode, deliveryAddress, combinedDeliveryConsent);

            /* if verification failed, stop execution */
            if (payload === false) {
                res.send(response);
                return;
            }

            break;
        case "..gift_card_maybe":
            res.send(response)
            return;
            break;
    }

    /* save payment intent in database */
    const paymentIntent = await paymentIntentMethods.createNew({
        intentType,
        createdBy: user._id,
        amount: amountToBeCharged * 100,
        currency,
        gateway,
        payload,
        valid: true
    });

    response.gatewayToken = payload.gatewayToken;
    response.intentId = paymentIntent._id;
    response.amount = amountToBeCharged * 100;
    response.resolved = true;

    res.send(response);

});

/* process stripe payment */
router.post('/processStripePayment', userAuth('customer'), async (req, res) => {

});

/*  stripe webhooks */
router.post('/stripeWebhook', async (req, res) => {
    const event = req.body;

    /* TODO: dude, verify the signature first */
    // console.log(event);
    const amount = event.data.object.amount;
    const currency = event.data.object.currency;

    switch (event.type) {
        case "payment_intent.succeeded":
            console.log('WEBHOOK CALLED, PAYMENT SUCCEEDED')

            const paymentIntent = event.data.object;
            // console.log('CLIENT_SECRET', paymentIntent.client_secret);
            const { id: transactionId, client_secret } = paymentIntent;
            await userMethods.placeOrder(client_secret, transactionId, 'stripe');
            break;
    }

    res.send({ resolved: true })

});

/* razorpay payment success */
router.post('/razorpayPaymentSuccess', async (req, res) => {
    const { razorpay_order_id, transactionId } = req.body;
    console.log(req.body);
    await userMethods.placeOrder(razorpay_order_id, transactionId, 'razorpay');
    res.send({ resolved: true });
});

export default router;