import { server, db, mongoose, task } from "@helpers/essentials";
import { methods as userMethods } from "@models/user";
import { methods as couponMethods } from "@models/coupon";
import { methods as paymentIntentMethods } from "@models/paymentIntent";

/* user auth middleware */
const { userAuth } = userMethods;

/* creating express router */
const router = server.express.Router();

/* fetch global config */
router.post('/fetchGlobalConfig', async(req,res) => {
    let response = { resolved: false, globalConfig: {}}
    const fetchGlobalConfig:any = db.model('globalConfig').findOne({bounipun_id: "saibbyweb"}).select('domesticShippingCharge internationalShippingCharge gstPercentage internationalTaxPercentage');
    const {response: config, error} = await task(fetchGlobalConfig);
    /* if error occurred */
    if(error || config === null) {
        res.send(response);
        return;
    }

    response.globalConfig = config;
    response.resolved = true;

    res.send(response);
});

/* validate and fetch coupon code details */
router.post('/fetchCoupon', userAuth('customer', false), async(req, res) => {
    /* response to be sent back */
    let response = { resolved: false, couponDetails: {}};
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
router.post('/createPaymentIntent', userAuth('customer'), async(req, res) => {
    const { intentType, amount, currency, gateway, payload } = req.body;
    
});

/*  stripe webhooks */
router.post('/stripeWebhooks', async(req, res) => {
    const event = req.body;
    const amount = event.data.object.amount;
    const currency = event.data.object.currency;

    switch(event.type) {
        case "payment_intent.succeeded":
            const paymentIntent = event.data.object;
            // paymentSucceeded()
            break;
    }

});
export default router;