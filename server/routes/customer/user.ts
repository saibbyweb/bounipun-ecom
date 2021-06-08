import { server, db } from "@helpers/essentials";
import { methods as userMethods } from "@models/user";
import sumBy from "lodash/sumBy";
/* creating express router */
const router = server.express.Router();
const { userAuth } = userMethods;

/* send otp */
router.post("/sendOtp", async (req, res) => {
    let response = { resolved: false, otpSent: false };
    /* extract phone number, dial code, and purpose */
    const { countryDialCode, phoneNumber, purpose } = req.body;

    console.log(countryDialCode, phoneNumber, purpose);

    /* TODO: if dial code === +91 */
    const sendOtpRequestStatus = await userMethods.sendMsg91Otp(phoneNumber);

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

    /* TODO: add country ISO code | extract post data  */
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

    /* TODO: verify otp | if dial code === +91*/
    if ((await userMethods.verifyMsg91Otp(phoneNumber, otp)) === false) {
        response.incorrectOtp = true;
        response.message = 'Incorrect OTP entered.'
        console.log('incorrect otp');
        res.send(response);
        return;
    }
    /* mark otp as verified */
    response.otpVerified = true;
    /* register customer */
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

    /* TODO: verify otp | if dial code === +91*/
    if ((await userMethods.verifyMsg91Otp(phoneNumber, otp)) === false) {
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
    // console.log(req.body);
    if (req.body.cart === undefined || req.body.length === 0) {
        res.send(response);
        return;
    }

    /* shifted cart */
    const userCart = req.body.cart.map(item => ({
        product: item._id,
        colorCode: item.colorCode,
        quantity: item.quantity,
        variant: item.variantId === undefined ? null : item.variantId,
        fabric: item.fabricId === undefined ? null : item.fabricId
    }));

    /* shift cart to database */
    await db.model('users').findOneAndUpdate({ _id: req.body.user._id }, { cart: userCart });

    res.send('shifting broo');
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
router.post('/orderCheckout', userAuth('customer'), async(req, res) => {
    let response = { resolved: false, message: ''}
    const { user, orderCartItems, deliveryAddress, amountToBeCharged } = req.body;
    // console.log(orderCartItems);
    /* TODO: to be supa sure, i can match the received cart items to the one in the db */
    const cartItems = await userMethods.getCartItems(user.cart);
    const cartTotal = sumBy(cartItems, item => item.price * item.quantity);
    
    /* if amount doesn't match */
    if(cartItems !== amountToBeCharged) {
        console.log('Amount doesnt match');
        res.send(response);
        return;
    }

    /* TODO: check finesse purchasing routine */

    /* construct order details */
    const orderDetails = {
        id: `BOUNIPUN-${Math.floor(Math.random() * 9999) + 1000}`,
        chargeId: '',
        amount: amountToBeCharged,
        deliveryAddress,
        status: 'pending',
        items: cartItems
    }

    // console.log(deliveryAddress);
    console.log(amountToBeCharged);
    res.send('done')
});

router.post('/setCookie', (req, res) => {

    console.log(req.headers);

    res.cookie('chill', '1234567', { maxAge: 2592000000, httpOnly: false, sameSite: 'none', secure: false, path: req.headers.origin });
    res.send('what')

})
export default router;
