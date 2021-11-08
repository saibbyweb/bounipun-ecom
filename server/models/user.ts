import { mongoose, ObjectId, task, db } from "@helpers/essentials";
import axios from "axios";
import bcrypt from "bcrypt"
import { model as session, methods as sessionMethods } from "./session";
import sumBy from "lodash/sumBy";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio')(accountSid, authToken);
const twilioServiceId = process.env.TWILIO_VERIFY_SERVICE_ID
import { methods as globalConfigMethods } from "@models/globalConfig";
import payment, { methods as paymentMethods } from "@models/payment";
import { methods as paymentIntentMethods } from "@models/paymentIntent";
import { methods as productMethods } from "@models/product";
import { methods as couponMethods } from "@models/coupon";
import { methods as notificationMethods } from "@models/notification";
import { methods as unlockMethods } from "@models/unlock";

let { newOrderEmailToAdmin, orderCancelEmailToAdmin, orderUpdateEmailToCustomer } = notificationMethods;
newOrderEmailToAdmin = newOrderEmailToAdmin.bind(notificationMethods);
orderCancelEmailToAdmin = orderCancelEmailToAdmin.bind(notificationMethods);
orderUpdateEmailToCustomer = orderUpdateEmailToCustomer.bind(notificationMethods);


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
        firstName: { type: String },
        surName: { type: String },
        mobileNumber: { type: String },
        email: { type: String },
        addressType: { type: String },
        state: { type: String },
        countryDialCode: { type: String },
        countryIsoCode: { type: String },
        addressLine1: { type: String },
        addressLine2: { type: String },
        city: { type: String },
        postalCode: { type: String },
        type: { type: String }
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
    wishlist: [
        {
            product: { type: ObjectId, ref: 'products' },
            colorCode: String,
        }
    ],
    /* orders */
    orders: [
        { type: ObjectId, ref: 'orders' }
    ],
    /* content unlock */
    contentUnlock: {
        code: String,
        status: Boolean
    },
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

const formatCurrency = (price, currency) => {
    let formattedNumber = price;
    /* if currence is INR */
    if (currency === "INR") {
        formattedNumber = new Intl.NumberFormat('en-IN', { currency: 'INR' }).format(price)
        return formattedNumber;
    }
    else {
        formattedNumber = new Intl.NumberFormat('en-US', { currency: 'USD' }).format(price);
        return formattedNumber;
    }
}

/* express auth */
const expressAuth = async (req, res, next, usergroup, strictMode) => {
    console.log('🔹🔹 Customer Auth Middleware');
    req.body.user = { status: false }
    req.body.unlocked = false;

    /* no cookie is found, mark user as guest */
    if (req.cookies.swecom_bounipun === undefined) {
        if (strictMode) {
            console.log('No cookie found', '--strict mode');
            res.send({ notAuthorized: true })
        }
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

    /* extract user from session */
    const { user } = session;

    /* if session valid, check for any additional checks*/
    if (req.body.lockCheck === true) {
        console.log('🔸🔸 Request asked for lock access check');
        /* if content unlock status not found for user */
        if(user.contentUnlock === undefined) {
            user.contentUnlock = { status: false, code: ''}
        }
           

        if (user.contentUnlock.status === true) {
            /* run db query, match the lock access code from user doc in the unlock collection, (check for expiry, usage limit and black list) */
            const validated = await unlockMethods.validateUnlockCode(user.contentUnlock.code, user._id);
            /* if valid, append unlock status to the user object */
            if (validated !== false)
                console.log('✅ Lock access granted')

            req.body.unlocked = validated === false ? false : true;
        }
        else
            console.log('🔸🔸 No unlock code applied!')
    }


    /* append user data on req body */
    req.body.user = user;
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
    async getCartItems(cart, unlocked = false) {

        /*  if cart is empty */
        if (cart.length === 0)
            return [];

        /* get all unique product ids */
        const allUniqueProducts = [...new Set(cart.map(item => item.product))];
        /* fetch all relevant details for each unique product */
        let allProductPromises = []
        for (const productId of allUniqueProducts) {
            /* filter */
            const filter: any = { _id: productId, status: true };

            if (unlocked === false)
                filter.lock = false;

            const fetchProduct = db.model('products')
                .findOne(filter)
                .populate('bounipun_collection', { _id: 0, name: 1, edt: 1 })
                .populate('variants._id', { name: 1, hsnCode: 1, gstPercentage: 1 })
                .populate('variants.fabrics._id', { name: 1, info1: 1 })
                .populate('colors._id', { name: 1 })
                .populate('rtsDirectVariant', { name: 1 })
                .populate('rtsDirectFabric', { name: 1 })
                .select('name slug styleId type availabilityType directPrice variants.fabrics.price colors.name colors.code colors.images colors.status rtsDirectVaraint rtsDirectFabric lock')
                .lean();
            allProductPromises.push(fetchProduct);
        }

        /* wait for all promises to resolve */
        let allProducts: any = await Promise.all(allProductPromises);

        allProducts = allProducts.filter(prod => prod !== null);

        if (allProducts.length === 0) {
            return false;
        }

        /* remove all inactive colors */
        allProducts.forEach(product => {
            /* filter out inactive colors */
            // console.log(product.name, product.colors)
            product.colors = product.colors.filter(color => color.status === true);
        });

        /* TODO: you should clear cart from user database and return */


        /* remove all the nulls from cart as well as all products */


        /* TODO: put this to use */
        let itemsToBeRemoved = []

        /* create cart items array */
        let cartItems = cart.map(item => {
            let cartItem = {
                productId: item.product,
                productName: '',
                slug: '',
                colorName: '',
                mainImage: '',
                collectionName: '',
                shippingTime: '4',
                variantName: '',
                hsnCode: '',
                gstPercentage: '',
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
                return false;
            }

            /* find selected color */
            const selectedColor = product.colors.find(color => color.code === item.colorCode);

            /* if color is not found, color is either unpublished or removed from the db,
            mark this as item to be removed */
            if (selectedColor === undefined) {
                itemsToBeRemoved.push(item);
                return false;
            }

            /* product name */
            cartItem.productName = product.name;
            /* slug */
            cartItem.slug = product.slug;
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
                /* shipping time */
                cartItem.shippingTime = product.bounipun_collection.edt;
                // console.log(cartItem);
            }

            /* if under bounipun and made to order */
            if (product.type === 'under-bounipun' && product.availabilityType === 'made-to-order') {
                /* variant name (if made to order) */
                const selectedVariant = product.variants.find(variant => variant._id._id.toString() === item.variant.toString())
                cartItem.variantName = selectedVariant._id.name;
                cartItem.hsnCode = selectedVariant._id.hsnCode;
                cartItem.gstPercentage = selectedVariant._id.gstPercentage;


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
                /* set variant and fabric name */
                cartItem.variantName = product.rtsDirectVariant.name;
                cartItem.fabricName = product.rtsDirectFabric.name;
                cartItem.shippingTime = '1';
            }

            return cartItem;

        });

        cartItems = cartItems.filter(item => item !== false)
        // console.log(itemsToBeRemoved)
        return cartItems;
    },
    async clearUserCart(userId) {
        await model.findOneAndUpdate({ _id: userId }, { cart: [] });
    },
    /* find cartItem helper  */
    findCartItem(cart, cartItem) {
        /* if cart empty */
        if (cart.length === 0) return false;

        console.log(cart, cartItem);

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

        cartItems.forEach(item => {
            item.price = this.adjustPrice(currency, item.price, globalConfig);
        });

        let cartTotal = sumBy(cartItems, item => item.price * item.quantity);

        /* cart total */
        // let cartTotal = sumBy(cartItems, item => this.adjustPrice(currency, item.price, globalConfig) * item.quantity);

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
    async createOrderPayload(cart, amountToBeCharged, currency, couponCode, deliveryAddress, combinedDeliveryConsent) {
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

        console.log('GRAND TOTAL-->', grandTotal, amountToBeCharged);

        /* if amount doesn't match */
        if (grandTotal !== amountToBeCharged) {
            console.log('Amount doesnt match, yo');
            return false;
        }

        /* according to gateway, generate token/order id */
        let gatewayToken;

        /* set amount for gateway (as a whole number) */
        let amount: any = (grandTotal * 100).toFixed(2);
        amount = parseInt(amount)

        if (currency === "INR") {
            /* create razorpay order */
            const razorpayOrder = await paymentMethods.createRazorpayOrder({
                amount,
                currency: "INR",
                receipt: "Bounipun Test",
            });

            if (razorpayOrder === false)
                return false;

            gatewayToken = razorpayOrder.id;
        }
        /* generate stripe token */
        else {
            console.log(grandTotal, '-- ORDER_TOTAL_FROM_STRIPE', (grandTotal * 100).toFixed(2))

            const stripePaymentIntent = await paymentMethods.createStripePaymentIntent({
                amount,
                currency: "usd",
                description: 'Bounipun Payment',
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
            subTotal: parseInt((subTotal * 100).toFixed(2)),
            shippingCharge: shippingCharge * 100,
            combinedDeliveryConsent,
            /* TODO: need to check tax.value [may toFixed(2) will fix it] */
            /* TODO: get frontend and backend value EQUAL */
            tax: {
                percentage: tax.percentage,
                value: tax.value * 100
            },
            grandTotal: amount,
            gatewayToken
        }

        return orderPayload;
    },
    async verifyGatewayToken() {

    },
    /* get next sequence */
    async getNextSequence() {
        /* generate new id  */
        const nextDoc: any = db.model('orderSequence').findOneAndUpdate({ seqId: "sw-seq" }, {
            $inc: { sequence: 1 }
        }, { upsert: true, returnOriginal: false });

        /* wait for query to process */
        const { response, error } = await task(nextDoc);

        if (response === null || error) {
            return '..';
        }

        let str = "" + response.sequence;
        let pad = "000"
        let ans = pad.substring(0, pad.length - str.length) + str;

        return ans;
    },
    async placeOrder(gatewayToken, transactionId, gateway) {


        /* verify token is valid */
        const paymentIntent: any = await paymentIntentMethods.fetchPaymentIntent(gatewayToken);

        console.log(paymentIntent);

        if (paymentIntent === false) {
            console.log('PAYMENT INTENT INVALID')
            return false;
        }
        /* if valid, check if any dublicate already exists or not */
        /* if validated, proceed with save order details in db */

        /* do the order placing routine */
        const { deliveryAddress, cartItems, subTotal, discountValue, shippingCharge, combinedDeliveryConsent, coupon } = paymentIntent.payload;

        /* discount per item */
        let discountPerItem: any = (discountValue / 100 / cartItems.length);
        discountPerItem = discountPerItem.toFixed(2);

        const newOrderNumber = 'BP-ORDER-' + await this.getNextSequence();

        const orderDetails = {
            paymentIntent: paymentIntent._id,
            // number: `BOUNIPUN-${Math.floor(Math.random() * 9999) + 1000}`,
            number: newOrderNumber,
            paymentGateway: gateway,
            transactionId,
            amount: paymentIntent.amount,
            currency: paymentIntent.currency,
            combinedDeliveryConsent: combinedDeliveryConsent,
            deliveryAddress,
            subTotal,
            discountValue,
            discountPerItem,
            shippingCharge,
            /* add shipping and taxes here */
            items: cartItems.map(item => {
                let itemAmount: any = item.price * item.quantity;
                itemAmount = itemAmount.toFixed(2);

                let itemTotal: any = itemAmount - discountPerItem;
                itemTotal = itemTotal.toFixed(2);


                return {
                    _id: mongoose.Types.ObjectId(),
                    ...item,
                    /* TODO: needs to be figured out */
                    itemAmount,
                    itemTotal,
                    status: 'pending',
                    timeline: [],
                    trackingId: '',
                    trackingUrl: '',
                    delivered: ''
                }
            }
            ),
        }

        /* save processed order in database */
        const ordersCollection = db.model('orders');
        /* save order details to database */
        const orderSaved: any = await new ordersCollection(orderDetails).save();
        console.log('Order Saved in DB');
        /* save order id to user account */
        const userOrdersUpdated: any = await db.model('users').findOneAndUpdate({ _id: paymentIntent.createdBy }, { $push: { orders: orderSaved._id } });
        /* mark payment intent as invalid */
        await paymentIntentMethods.setIntentAsInvalid(paymentIntent._id);
        /* clear user cart */
        await this.clearUserCart(paymentIntent.createdBy);
        /* update stock if ready to ship */
        const listOfProducts = orderDetails.items.map(item => ({ _id: item.productId, quantity: item.quantity }));
        /* update stock */
        await productMethods.updateStock(listOfProducts);
        /* update coupon log if needed */
        if (coupon !== undefined) {
            await couponMethods.updateCouponLog(coupon.code, paymentIntent.currency, orderSaved.number);
        }
        else
            console.log('COUPON_NOT_APPLIED')
        /* notify the interested parties */
        console.log('order placing complete');

        /* notify admin about new order */
        newOrderEmailToAdmin({
            orderId: newOrderNumber,
            amount: paymentIntent.amount / 100,
            currency: paymentIntent.currency,
            gateway: gateway
        });

        /* extract name for this */
        console.log(userOrdersUpdated);
        const { firstName, surName } = userOrdersUpdated;

        /* extract email from delivery address */
        console.log(deliveryAddress);


        /* notify customer about the new order */
        /* email */
        /* user name, orderId, amount, currency */

        orderUpdateEmailToCustomer('placed', deliveryAddress.email, {
            name: firstName + " " + surName,
            orderId: newOrderNumber,
            amount: paymentIntent.amount / 100,
            currency: paymentIntent.currency,
        });


        return true;
    },
    async orderBelongsToUser(userId, orderId) {
        const orderBelongsToUser = await db.model('users').findOne({ _id: userId, orders: orderId }).select('_id')
        return orderBelongsToUser === null ? false : true;
    },
    async cancelOrder(orderId, subOrderId, reason, userId) {


        /* check if the order belongs to the user id or not */
        if (userId !== false) {
            const orderIdValid = await this.orderBelongsToUser(userId, orderId);
            if (orderIdValid === false)
                return;
        }

        /* if exists, check the existing status (if already cancelled or delivered, return) */

        /* change the order status to cancelled, update timeline as well */
        const subOrderFilter = {
            _id: orderId,
            'items._id': subOrderId
        }

        const cancelSubOrder: any = await db.model('orders').findOneAndUpdate(subOrderFilter, {
            $set: {
                "items.$.status": "cancelled",
                "items.$.cancellation": {
                    by: 'customer',
                    reason
                }
            },
            $push: {
                "items.$.timeline": {
                    status: "cancelled",
                    updatedAt: new Date()
                }
            }
        });

        console.log(cancelSubOrder.number, reason);

        /* notify admin */
        await orderCancelEmailToAdmin({
            orderNumber: cancelSubOrder.number,
            reason
        })


        /* return with response */
        return cancelSubOrder === null ? false : cancelSubOrder;
    }
}

export default { model, methods }