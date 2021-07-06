import { server, db, mongoose, task } from "@helpers/essentials";
import { methods as userMethods } from "@models/user";
import { methods as couponMethods } from "@models/coupon";
import { methods as paymentIntentMethods } from "@models/paymentIntent";

/* user auth middleware */
const { userAuth } = userMethods;

/* creating express router */
const router = server.express.Router();

/* fetch global config */
router.post('/fetchGlobalConfig', async (req, res) => {
    let response = { resolved: false, globalConfig: {} }
    const fetchGlobalConfig: any = db.model('globalConfig').findOne({ bounipun_id: "saibbyweb" }).select('domesticShippingCharge internationalShippingCharge gstPercentage internationalTaxPercentage');
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

/* create payment intent order */
router.post('/createPaymentIntent', userAuth('customer'), async (req, res) => {
    const response = { resolved: false, intentId: "", gatewayToken: "", amount: 0};
    
    /* TODO: verify gateway */
    const { user, intentType, amountToBeCharged, currency, gateway, couponCode, deliveryAddress } = req.body;
    
    /* payload (can be for order or anything) */
    let payload;

    switch (intentType) {
        case "order":
            /* create order payload */
            payload = await userMethods.createOrderPayload(user.cart, amountToBeCharged,currency,couponCode, deliveryAddress);
            
            /* if verification failed, stop execution */
            if(payload === false) {
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
        amount: amountToBeCharged * 100,
        currency,
        gateway,
        payload
    });

    response.gatewayToken = payload.gatewayToken;
    response.intentId = paymentIntent._id;
    response.amount = amountToBeCharged * 100;
    response.resolved = true;

    res.send(response);

});

/*  stripe webhooks */
router.post('/stripeWebhooks', async (req, res) => {
    const event = req.body;
    const amount = event.data.object.amount;
    const currency = event.data.object.currency;

    switch (event.type) {
        case "payment_intent.succeeded":
            const paymentIntent = event.data.object;
            // paymentSucceeded()
            break;
    }

});
export default router;