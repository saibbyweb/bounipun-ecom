import { mongoose, ObjectId, task, db } from "@helpers/essentials";
import axios from "axios";
import bcrypt from "bcrypt"
import { model as session, methods as sessionMethods } from "./session";
import sumBy from "lodash/sumBy";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio')(accountSid, authToken);
const twilioServiceId = process.env.TWILIO_VERIFY_SERVICE_ID
import { methods as couponMethods } from "@models/coupon";
import { methods as globalConfigMethods } from "@models/globalConfig";
import payment, { methods as paymentMethods } from "@models/payment";
import { methods as paymentIntentMethods } from "@models/paymentIntent";

/* validate session */
const { validateSession } = sessionMethods;

/* msg91 template id */
const templateId = "6037f99d7ea3595ee966782c";

/* schema */
const schema = new mongoose.Schema({
    /* first name */
    firstName: String,
    /* sur name */
    surName: String,
    /* email */
    email: String,
    /* phone number */
    phoneNumber: String,
    /* country dial code */
    countryDialCode: String,
    /* country iso code */
    countryIsoCode: String,
    /* profession */
    profession: String,
    /* usergroup */
    usergroup: String,
    /* address book */
    addressBook: [{
        firstName: String,
        surName: String,
        phoneNumber: String,
        email: String,
        countryDialCode: String,
        countryIsoCode: String,
        addressLine1: String,
        addressLine2: String,
        city: String,
        pincode: String
    }],
    cart: [
        {
            product: { type: ObjectId, ref: 'products' },
            colorCode: String,
            quantity: Number,
            variant: { type: ObjectId, ref: 'variants' },
            fabric: { type: ObjectId, ref: 'fabrics' }
        }
    ],
    /* orders */
    orders: [
        { type: ObjectId, ref: 'orders' }
    ],
    /* status */
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

/* model */
const modelName = 'users';
const model = mongoose.model('users', schema);

/* express auth */
const expressAuth = async (req, res, next, usergroup, strictMode) => {

    req.body.user = { status: false }
    /* no cookie is found, mark user as guest */
    if (req.cookies.swecom_bounipun === undefined) {
        if (strictMode)
            res.send({ notAuthorized: true })
        else
            next();
        return;
    }

    /* if cookie found, validate and return appropriate response */
    const token = req.cookies.swecom_bounipun;
    const session = await validateSession(token);

    /* if session is invalid */
    if (session === false) {
        /* TODO: reset cookie */
        if (strictMode)
            res.send({ notAuthorized: true });
        else
            next()
        return;
    }

    /* if session valid, append user data on req body */
    req.body.user = session.user;
    req.body.token = token;
    next();

}

/* helper methods */
export const methods = {
    async registerModel() {
        console.log(`registered model: ${modelName}`);
        // console.log(await this.sendMsg91Otp('9906697711'));
        // console.log(await this.verifyMsg91Otp('9906697711', '5551'));
    },
    /* send msg91 otp */
    sendMsg91Otp: async (phoneNumber) => {
        let otpSent = false;
        let pushOTPUrl = `https://api.msg91.com/api/v5/otp?authkey=315805A0StIk1DFmc5f61c460P1&template_id=${templateId}&mobile=${phoneNumber}&invisible=1`;

        /* wait for request to resolve */
        const { response, error } = await task(axios.get(pushOTPUrl));

        console.log(pushOTPUrl);

        /* if otp sent failed */
        if (error || response.data.type !== "success") {
            return otpSent;
        }
        /* if otp sent */
        if (response.data.type === "success") otpSent = true;
        return otpSent;
    },
    /* verify otp */
    verifyMsg91Otp: async (phoneNumber, otp) => {
        /* verify otp API */
        const verifyOtpUrl = `https://api.msg91.com/api/v5/otp/verify?mobile=${phoneNumber}&otp=${otp}&authkey=315805AMJ8DdeeF5f117bf9P1`;
        /* wait for the request to resolve */
        const { response, error } = await task(axios.get(verifyOtpUrl));
        // console.log(response.data);
        return !error && response.data.type === "success" ? true : false;
    },
    /* send internation otp */
    sendInternationalOtp: async (countryDialCode, phoneNumber) => {
        let otpSent = false;
        const verfication = await twilio.verify
            .services(twilioServiceId)
            .verifications.create({
                to: countryDialCode + phoneNumber,
                channel: "sms"
            });

        if (verfication.status === 'pending')
            otpSent = true;

        return otpSent;
    },
    /* verify international otp */
    verifyInternationalOtp: async (countryDialCode, phoneNumber, otp) => {
        let verified = false;
        const verification_check = await twilio.verify.services(twilioServiceId)
            .verificationChecks
            .create({ to: countryDialCode + phoneNumber, code: otp });

        console.log(verification_check);
        if (verification_check.status === "approved")
            verified = true;

        return verified;
    },
    /* get user */
    getUser: async (criteria) => {
        const findUser: any = model.findOne(criteria)
        const { response, error } = await task(findUser);
        if (error)
            return false;
        return response;
    },
    /* register user */
    registerUser: async (profile) => {
        const { response: newUser, error } = await task(new model({ ...profile }).save() as any);
        return !error ? newUser : false;
    },
    registerSession: async (userId) => {
        userId = userId.toString();
        /* generate session token */
        const token = await bcrypt.hash(userId, 10);
        /* save session token in db */
        const { response: newSession, error } = await task(new session({
            token,
            user: userId
        }).save());

        return !error ? newSession : false;
    },
    userAuth: (userGroup, strictMode = true) => (...args: [req: any, res: any, next: any]) => {
        return expressAuth(...args, userGroup, strictMode)
    },
    async getCartItems(cart) {

        /*  if cart is empty */
        if (cart.length === 0)
            return [];

        /* get all unique product ids */
        const allUniqueProducts = [...new Set(cart.map(item => item.product))];
        /* fetch all relevant details for each unique product */
        let allProductPromises = []
        for (const productId of allUniqueProducts) {
            const fetchProduct = db.model('products')
                .findOne({ _id: productId, status: true })
                .populate('bounipun_collection', { _id: 0, name: 1 })
                .populate('variants._id', { name: 1 })
                .populate('variants.fabrics._id', { name: 1, info1: 1 })
                .populate('colors._id', { name: 1 })
                .select('name styleId type availabilityType directPrice variants.fabrics.price colors.name colors.code colors.images')
                .lean();
            allProductPromises.push(fetchProduct);
        }

        /* wait for all promises to resolve */
        const allProducts = await Promise.all(allProductPromises);

        /* TODO: you should clear cart from user database and return */


        /* remove all the nulls from cart as well as all products */


        /* TODO: put this to use */
        let itemsToBeRemoved = []

        /* create cart items array */
        let cartItems = cart.map(item => {
            let cartItem = {
                productId: item.product,
                productName: '',
                colorName: '',
                mainImage: '',
                collectionName: '',
                variantName: '',
                fabricName: '',
                fabricInfo1: '',
                price: 0,
                quantity: item.quantity,
                cartEntry: item
            };


            /* find product */
            const product = allProducts.find(prod => {
                return prod._id.toString() == item.product.toString()
            });


            /* if productId didn't match, product is either unpublished or removed from the db,
            mark this as item to be removed */
            if (product === undefined) {
                itemsToBeRemoved.push(item);
                return cartItem;
            }

            /* find selected color */
            const selectedColor = product.colors.find(color => color.code === item.colorCode);

            /* if color is not found, color is either unpublished or removed from the db,
            mark this as item to be removed */
            if (selectedColor === undefined) {
                itemsToBeRemoved.push(item);
                return;
            }

            /* product name */
            cartItem.productName = product.name;
            /* color name */
            cartItem.colorName = selectedColor.name;

            /*  main image */
            if (selectedColor.images.length !== 0) {
                /* find main image */
                const mainImage = selectedColor.images.find(img => img.mainImage === true);
                /* set main image */
                cartItem.mainImage = mainImage !== undefined ? mainImage.path : selectedColor.images[0].path;
            }

            /* price: defaults to direct price */
            cartItem.price = parseInt(product.directPrice);

            /* if under bounipun, set collection name */
            if (product.type === 'under-bounipun') {
                /* collection name */
                cartItem.collectionName = product.bounipun_collection.name;
            }

            /* if under bounipun and made to order */
            if (product.type === 'under-bounipun' && product.availabilityType === 'made-to-order') {
                /* variant name (if made to order) */
                const selectedVariant = product.variants.find(variant => variant._id._id.toString() === item.variant.toString())
                cartItem.variantName = selectedVariant._id.name;

                /* fabric name (if made to order) */
                const selectedFabric = selectedVariant.fabrics.find(fabric => fabric._id._id.toString() === item.fabric.toString());
                cartItem.fabricName = selectedFabric._id.name;

                /* fabric info 1 (if made to order) */
                cartItem.fabricInfo1 = selectedFabric._id.info1;
                /* price (depends on ready to ship or made to order */
                cartItem.price = selectedFabric.price;
            }

            /* if under bounipun and ready to ship */
            if (product.type === 'under-bounipun' && product.availabilityType === 'ready-to-ship') {
                /* set variant and fabric name from style id */
            }

            return cartItem;

        });

        return cartItems;
    },
    /* find cartItem helper  */
    findCartItem(cart, cartItem) {
        /* if cart empty */
        if (cart.length === 0) return false;

        let foundIndex = cart.findIndex(item => {
            /* common params to match */
            let paramsToBeMatched = item.product.toString() === cartItem.product.toString() && item.colorCode === cartItem.colorCode;

            /* TODO: (inventory can change) if variant and fabrics are present, match them as well */
            if (cartItem.variant !== null && cartItem.fabric !== null) {
                paramsToBeMatched = paramsToBeMatched && item.variant.toString() === cartItem.variant.toString() && item.fabric.toString() === cartItem.fabric.toString();
            }
            return paramsToBeMatched;
        });

        return foundIndex !== -1 ? { foundCartItem: cart[foundIndex], foundIndex } : false
    },
    /* validate and calculate discount coupon value */
    async calculateCouponDiscountValue(cartTotal, couponCode, currency) {
        /* validate coupon code */
        const coupon = await couponMethods.validateCoupon(couponCode, currency);
        /* stop execution if coupon is invalid */
        if (coupon === false)
            return false;

        let discountValue = 0;
        switch (coupon.type) {
            case "percentage":
                discountValue = cartTotal * (coupon.value / 100);
                break;
            case "direct-discount":
                discountValue = coupon.value;
                break;
        }

        return {
            coupon: {
                code: coupon.code,
                type: coupon.type,
                value: coupon.value,
            },
            discountValue: discountValue.toFixed(2)
        }
    },
    /* calculate shipping charge */
    calculateShippingCharge(totalOrderQuantity, currency, globalConfig) {
        /* get shipping charge per item (acc. to currency) */
        const shippingChargePerItem = currency === "INR" ? globalConfig.domesticShippingCharge : globalConfig.internationalShippingCharge;

        /* calculate total shipping charge */
        const shippingCharge = shippingChargePerItem * totalOrderQuantity;
        return shippingCharge.toFixed(2);
    },
    /* calculate taxes */
    calculateTaxes(subTotal, currency, globalConfig) {
        /* figure out tax percentage */
        const taxPercentage = currency === "INR" ? globalConfig.gstPercentage : globalConfig.internationalTaxPercentage;
        /* taxable amount */
        const taxableAmount = subTotal * (taxPercentage / 100);
        return taxableAmount.toFixed(2);

    },
    adjustPrice(currency, price, globalConfig) {
        if (currency === "INR")
            return price
        else {
            const inflatedPrice = (price * globalConfig.currencyMultiplier) / globalConfig.dollarValue;
            return inflatedPrice.toFixed(2);
        }
    },
    /* calculate grand total */
    async calculateOrderTotal(cartItems, totalOrderQuantity, currency, couponCode) {
        /* fetch global config */
        const globalConfig: any = await globalConfigMethods.getGlobalConfig();

        /* if config couldn't be fetched */
        if (!globalConfig)
            return false;

        /* cart total */
        let cartTotal = sumBy(cartItems, item => this.adjustPrice(currency, item.price, globalConfig) * item.quantity);
        cartTotal = cartTotal.toFixed(2);

        console.log('CART_TOTAL --> ', cartTotal);

        let coupon: any = {};
        let discountValue: any = 0;
        let subTotal;
        let shippingCharge;
        let taxes;

        /* validate couponCode if provided */
        if (couponCode !== "") {
            const couponDetails = await this.calculateCouponDiscountValue(cartTotal, couponCode, currency);
            if (couponDetails === false)
                return false;

            /* coupon */
            coupon = couponDetails.coupon;
            /* set discount value */
            discountValue = couponDetails.discountValue;
        }
        /* calculate sub-total */
        subTotal = cartTotal - discountValue;

        /* shipping charge */
        shippingCharge = this.calculateShippingCharge(totalOrderQuantity, currency, globalConfig);
        /* taxes */
        taxes = this.calculateTaxes(subTotal, currency, globalConfig);

        const grandTotal = parseFloat(subTotal) + parseFloat(shippingCharge) + parseFloat(taxes);

        return {
            subTotal: subTotal.toFixed(2),
            discountValue,
            coupon,
            shippingCharge,
            tax: {
                percentage: currency === "INR"
                    ? globalConfig.gstPercentage
                    : globalConfig.internationalTaxPercentage,
                value: taxes
            },
            grandTotal: grandTotal.toFixed(2),
        }
    },
    async createOrderPayload(cart, amountToBeCharged, currency, couponCode, deliveryAddress) {
        const cartItems = await this.getCartItems(cart);
        /* total order quantity */
        const totalOrderQuantity = sumBy(cart, item => item.quantity);

        /* grand total should be equal to amount to be charged (PROVIDE COUPON) */
        const orderTotal = await this.calculateOrderTotal(cartItems, totalOrderQuantity, currency, couponCode);

        /* if calculation failed */
        if (orderTotal == false)
            return;

        /* extracting details */
        const { subTotal, coupon, discountValue, shippingCharge, tax, grandTotal } = orderTotal;

        console.log('GRAND TOTAL-->', orderTotal.grandTotal, grandTotal, amountToBeCharged);

        /* if amount doesn't match */
        if (grandTotal !== amountToBeCharged) {
            console.log('Amount doesnt match, yo');
            return false;
        }

        /* according to gateway, generate token/order id */
        let gatewayToken;

        if (currency === "INR") {
            /* create razorpay order */
            const razorpayOrder = await paymentMethods.createRazorpayOrder({
                amount: grandTotal * 100,
                currency: "INR",
                receipt: "Bounipun Test",
            });

            if (razorpayOrder === false)
                return false;

            gatewayToken = razorpayOrder.id;
        }
        /* generate stripe token */
        else {
            const stripePaymentIntent = await paymentMethods.createStripePaymentIntent({
                amount: grandTotal * 100,
                currency: "usd",
                description: 'Bounipun Payment',
                // shipping: {
                //     name: deliveryAddress.firstName + " " + deliveryAddress.surName,
                //     address: {
                //         line1: deliveryAddress.addressLine1,
                //         postal_code: deliveryAddress.postalCode,
                //         city: deliveryAddress.city,
                //         country: 'US'
                //     }
                // }
            });

            gatewayToken = stripePaymentIntent.client_secret;
        }

        /* TODO: check finesse and mbm purchasing routine */
        

        /* construct order details */
        const orderPayload = {
            deliveryAddress,
            cartItems: cartItems,
            coupon,
            discountValue: discountValue * 100,
            subTotal: subTotal * 100,
            shippingCharge: shippingCharge * 100,
            /* TODO: need to check tax.value [may toFixed(2) will fix it] */
            tax: {
                percentage: tax.percentage,
                value: tax.value * 100
            },
            grandTotal: grandTotal * 100,
            gatewayToken
        }

        return orderPayload;
    },
    async verifyGatewayToken() {

    },
    async placeOrder(gatewayToken, gateway) {
        /* verify token is valid */
        const paymentIntent = await paymentIntentMethods.fetchPaymentIntent(gatewayToken);
        if (paymentIntent === false)
            return false;
        /* if valid, check if any dublicate already exists or not */
        /* if validated, proceed with save order details in db */
        /* do the order placing routine */
        
        /* notify the interested parties */
    }
}

export default { model, methods }