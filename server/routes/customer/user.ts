import { server, db, mongoose, task } from "@helpers/essentials";
import { methods as userMethods } from "@models/user";
import { methods as sessionMethods } from "@models/session"
import sumBy from "lodash/sumBy";
import { methods as paymentMethods } from "@models/payment"
import { methods as paymentIntentMethods } from "@models/paymentIntent";
import axios from "axios";

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
    if (countryDialCode === "+91")
        sendOtpRequestStatus = await userMethods.sendMsg91Otp(phoneNumber)
    /* other wise use international sms gateway */
    else
        sendOtpRequestStatus = await userMethods.sendInternationalOtp(countryDialCode, phoneNumber)

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
        sessionToken: '',
        cartShifted: false,
        message: ''
    };

    console.log('register called');

    const {
        countryDialCode,
        countryIsoCode,
        phoneNumber,
        otp,
        firstName,
        surName,
        platform
    } = req.body;

    /* check if user already exists (by phone number) */
    if ((await userMethods.getUser({ countryDialCode, phoneNumber })) !== null) {
        response.message = 'Customer with this phone number already exists';
        response.numberAlreadyRegistered = true;
        console.log('phone number exists');
        res.send(response);
        return;
    }

    /* otp verified status */
    let otpVerified = false;

    if (countryDialCode === "+91")
        otpVerified = await userMethods.verifyMsg91Otp(phoneNumber, otp)
    else
        otpVerified = await userMethods.verifyInternationalOtp(countryDialCode, phoneNumber, otp)

    if (otpVerified === false) {
        response.incorrectOtp = true;
        response.message = 'Incorrect OTP entered.'
        console.log('incorrect otp');
        res.send(response);
        return;
    }
    /* mark otp as verified */
    response.otpVerified = true;
    /* register customer  */
    const userRegistered = await userMethods.registerUser({
        firstName,
        surName,
        phoneNumber,
        countryDialCode,
        countryIsoCode,
        usergroup: "customer"
    });
    /* if user registration failed */
    if (userRegistered === false) {
        response.message = 'Registration Failed.'
        res.send(response);
        return;
    }
    /* mark user as registered */
    response.registered = true;
    /* login user (should shift cart always) */
    const loginAttempt = await userMethods.registerSession(userRegistered._id);

    if (loginAttempt === false) {
        response.message = 'Session Generation failed'
        res.send(response);
        return;
    }
    /* mark as logged in */
    if (platform === 'web') {
        console.log('setting cookie...');
        res.cookie('swecom_bounipun', loginAttempt.token, { maxAge: 2592000000, httpOnly: false, sameSite: 'none', secure: true });
    }

    response.loggedIn = true;
    response.sessionToken = loginAttempt.token;
    response.resolved = true;

    /* revert with response */
    res.send(response);
});

/* login customer */
router.post('/loginCustomer', async (req, res) => {
    let response = {
        resolved: false,
        numberNotRegistered: false,
        incorrectOtp: false,
        otpVerified: false,
        loggedIn: false,
        sessionToken: '',
        message: ''
    };

    console.log('login customer called');

    /* TODO: add country ISO code | extract post data  */
    const {
        countryDialCode,
        countryIsoCode,
        phoneNumber,
        otp,
        platform
    } = req.body;

    /* check if user already exists (by phone number) */
    if ((await userMethods.getUser({ countryDialCode, phoneNumber })) === null) {
        response.message = 'Phone number not registered.';
        response.numberNotRegistered = true;
        console.log('phone number does not exist');
        res.send(response);
        return;
    }

    let otpVerified = false;
    
    if (countryDialCode === "+91")
        otpVerified = await userMethods.verifyMsg91Otp(phoneNumber, otp)
    else
        otpVerified = await userMethods.verifyInternationalOtp(countryDialCode, phoneNumber, otp)

    /* if otp verification failed */
    if (otpVerified === false) {
        response.incorrectOtp = true;
        response.message = 'Incorrect OTP entered.'
        console.log('incorrect otp');
        res.send(response);
        return;
    }

    /* mark otp as verified */
    response.otpVerified = true;

    /* get user */
    const user = await userMethods.getUser({ countryDialCode, phoneNumber });

    /* if user not found/couldnt fetch */
    if (user === false) {
        response.message = 'Could not fetch user';
        res.send(response);
        return;
    }

    /* login user (should shift cart always) */
    const loginAttempt = await userMethods.registerSession(user._id);

    if (loginAttempt === false) {
        response.message = 'Session Generation failed'
        res.send(response);
        return;
    }
    /* mark as logged in */
    if (platform === 'web') {
        console.log('setting cookie...');
        res.cookie('swecom_bounipun', loginAttempt.token, { maxAge: 2592000000, httpOnly: false, sameSite: 'none', secure: true });
    }

    response.loggedIn = true;
    response.sessionToken = loginAttempt.token;
    response.resolved = true;

    /* revert with response */
    res.send(response);

})
/* shitf local cart to user cart */
router.post('/shiftCart', userAuth('customer'), async (req, res) => {
    let response = { resolved: true, shifted: false }

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
    const userCart = req.body.cart.map(item => ({
        product: item.product,
        colorCode: item.colorCode,
        quantity: item.quantity,
        variant: item.variant === undefined ? null : item.variant,
        fabric: item.fabric === undefined ? null : item.fabric
    }));

    /* shift cart to database */
    await db.model('users').findOneAndUpdate({ _id: req.body.user._id }, { cart: userCart });

    response.shifted = true;

    res.send(response);
});

/* fetch cart */
router.post('/fetchCart', userAuth('customer'), async (req, res) => {
    const cart = req.body.user.cart;
    const cartItems = await userMethods.getCartItems(cart);
    res.send(cartItems);
});

/* router fetch local cart */
router.post('/fetchLocalCart', async (req, res) => {
    const cart = req.body.cart;
    const cartItems = await userMethods.getCartItems(cart);
    res.send(cartItems);
});

/* cart actions */
router.post('/cartActions', userAuth('customer'), async (req, res) => {
    const { user, action, cartItem } = req.body;
    const { cart } = user;

    let search: any = false;

    switch (action) {
        case 'add-to-cart':
            /* if cart is empty, directly push the item */
            if (cart.length === 0 || cart === undefined)
                cart.push(cartItem);
            /* check if item already exists in cart */
            search = userMethods.findCartItem(cart, cartItem);
            /* if product found, add qty to existing qty */
            if (search !== false)
                search.foundCartItem.quantity += cartItem.quantity;
            /* else just add it to the cart array */
            else cart.push(cartItem);
            break;
        case 'update-quantity':
            /* check if item already exists in cart */
            search = userMethods.findCartItem(cart, cartItem);
            /* if yes, directly overwrite the qty */
            if (search !== false) {
                search.foundCartItem.quantity = parseInt(cartItem.quantity);
            }
            break;
        case 'remove-from-cart':
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
    await db.model('users').findOneAndUpdate({ _id: user._id }, { cart })

    res.send('cart_updated')

});

/* checkout */
router.post('/orderCheckout', userAuth('customer'), async (req, res) => {
    let response = { resolved: false, message: '' }
    const { user, orderCartItems, deliveryAddress, amountToBeCharged } = req.body;
    // console.log(orderCartItems);
    /* TODO: to be supa sure, i can match the received cart items to the one in the db */
    const cartItems = await userMethods.getCartItems(user.cart);
    const cartTotal = sumBy(cartItems, item => item.price * item.quantity);

    /* if amount doesn't match */
    if (cartTotal !== amountToBeCharged) {
        console.log('Amount doesnt match');
        res.send(response);
        return;
    }

    /* TODO: check finesse and mbm purchasing routine */

    /* construct order details */
    const orderDetails = {
        number: `BOUNIPUN-${Math.floor(Math.random() * 9999) + 1000}`,
        paymentGateway: 'razorpay',
        transactionId: '',
        amount: amountToBeCharged,
        deliveryAddress,
        items: cartItems.map(item => ({ _id: mongoose.Types.ObjectId(), ...item, status: 'pending', timeline: [], trackingId: '', trackingUrl: '', delivered: '' })),
        status: 'pending'
    }

    // console.log(deliveryAddress);
    // console.log(orderDetails);
    const ordersCollection = db.model('orders');
    /* save order details to database */
    const orderSaved = await new ordersCollection(orderDetails).save();
    /* save order id to user account */
    const userOrdersUpdated = await db.model('users').findOneAndUpdate({ _id: user._id }, { $push: { orders: orderSaved._id } });

    console.log(userOrdersUpdated);

    response.resolved = true;

    res.send(response);
});

/* fetch customer profile */
router.post('/fetchProfile', userAuth('customer'), async (req, res) => {
    const { user } = req.body;

    const profile = await db
        .model('users')
        .findOne({ _id: user._id })
        .populate('orders')

    res.send(profile)
});

/* update profile */
router.post('/updateProfile', userAuth('customer'), async (req, res) => {
    const { user, profile } = req.body;

    const profileUpdate = await db.model('users').findOneAndUpdate({ _id: user._id }, {
        firstName: profile.firstName,
        surName: profile.surName,
        profession: profile.profession
    });

    res.send('done');
});

/* fetch razorpay order id */
router.post('/createRazorpayOrder', userAuth('customer'), async (req, res) => {
    /* response to be sent back */
    let response = { resolved: false, razorpayOrderId: '', paymentIntentId: '' };

    const { user, amountToBeCharged, deliveryAddress } = req.body;

    /* verify cart and create order payload */
    const orderPayload = await userMethods.createOrderPayload(user.cart, amountToBeCharged, 'INR', deliveryAddress);

    /* if verification failed */
    if (orderPayload === false) {
        res.send(response);
        return;
    }

    /* create razorpay order */
    const razorpayOrder = await paymentMethods.createRazorpayOrder({
        amount: amountToBeCharged * 100,
        currency: "INR",
        receipt: "Bounipun Test",
    }, orderPayload);

    if (!razorpayOrder) {
        res.send(response);
        return;
    }

    /* create payment intent */
    const paymentIntent = await paymentIntentMethods.createNew({
        intentType: 'order',
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        gateway: 'razorpay',
        payload: { ...orderPayload, razorpay_order_id: razorpayOrder.id }
    });

    console.log(razorpayOrder);
    console.log(paymentIntent);

    /* set razorpay order id */
    response.razorpayOrderId = razorpayOrder.id;
    /* set payment intent id */
    response.paymentIntentId = paymentIntent._id;
    response.resolved = true;
    res.send(response);

});

/* complete checkout */
router.post('/completeCheckout', userAuth('customer'), async (req, res) => {
    /* response */
    let response = { resolved: false };
    /* extract body */
    const { user, gateway, gatewayResponse, paymentIntentId } = req.body;

    /* common transaction id | RAZORPAY - STRIPE */
    let transactionId;

    /* fetch payment intent details */
    const paymentIntentDetails: any = await db.model('paymentIntents').findOne({ _id: paymentIntentId });

    /* act according to gateway */
    switch (gateway) {
        case 'razorpay':
            /* match order id, only then proceed */
            if (paymentIntentDetails.payload.razorpay_order_id !== gatewayResponse.razorpay_order_id) {
                console.log('payment verification failed');
                res.send(response);
                return;
            }
            /* add transaction id */
            transactionId = gatewayResponse.razorpay_payment_id;
            break;
        case 'stripe':
            /* payment routine might be processed here only */
            break;
    }

    /* give order shape */
    const orderDetails = {
        number: `BOUNIPUN-${Math.floor(Math.random() * 9999) + 1000}`,
        paymentGateway: gateway,
        gatewayResponse,
        transactionId,
        amount: paymentIntentDetails.amount,
        currency: paymentIntentDetails.currency,
        deliveryAddress: paymentIntentDetails.payload.deliveryAddress,
        items: paymentIntentDetails.payload.cartItems.map(item => ({ _id: mongoose.Types.ObjectId(), ...item, status: 'pending', timeline: [], trackingId: '', trackingUrl: '', delivered: '' })),
    }

    /* save processed order in database */
    const ordersCollection = db.model('orders');
    /* save order details to database */
    const orderSaved = await new ordersCollection(orderDetails).save();
    /* save order id to user account */
    const userOrdersUpdated = await db.model('users').findOneAndUpdate({ _id: user._id }, { $push: { orders: orderSaved._id } });

    response.resolved = true;
    res.send(response);
});
/* set cookie demo */
router.post('/setCookie', (req, res) => {

    console.log(req.headers);

    res.cookie('chill', '1234567', { maxAge: 2592000000, httpOnly: false, sameSite: 'none', secure: false, path: req.headers.origin });
    res.send('what')

});

/* ip lookup */
router.post('/ipLookup', userAuth('customer', false), async (req, res) => {
    /* response to be sent back */
    let response = { resolved: false, countryCode: 'IN' };

    const { user } = req.body;

    /* if user is logged in, fetch country code from account */
    if (user.status === true) {
        console.log('LOGGED IN, IP fetched from account')
        response.countryCode = user.countryIsoCode;
        response.resolved = true;
        res.send(response);
        return;
    }
    
    /* otherwise do an country lookup */
    const ipLookup = axios.get(`https://api.ipregistry.co/?key=${ipRegistryKey}`);
    const { response: lookupResponse, error } = await task(ipLookup);
    /* if error */
    if (error) {
        res.send(response);
        return;
    }

    /* if match found */
    if (lookupResponse.data.location.country.code) {
        console.log('IP Looked-Up');
        response.countryCode = lookupResponse.data.location.country.code;
        response.resolved = true;
    }

    res.send(response);

});

/* logout user */
router.post('/logoutCustomer', userAuth('customer'), async (req, res) => {
    console.log('logout called');
    /* mark session as invalid */
    const { user, token } = req.body;
    await sessionMethods.invalidateSession(user._id, token);
    res.send('logout called');
});
export default router;
