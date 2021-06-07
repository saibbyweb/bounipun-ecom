import { server, db } from "@helpers/essentials";
import { methods as userMethods } from "@models/user";
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
    console.log(cart);
    /* get all unique product ids */
    const allUniqueProducts = [...new Set(cart.map(item => item.product))];
    /* fetch all relevant details for each unique product */
    let allProductPromises = []
    for (const productId of allUniqueProducts) {
        const fetchProduct = db.model('products')
        .findOne({ _id: productId, status: true })
        .populate('bounipun_collection', { _id: 0, name: 1})
        .populate('variants._id', { name: 1})
        .populate('variants.fabrics._id', { name: 1, info1: 1 })
        .populate('colors._id', { name: 1})
        .select('name styleId type availabiltyType variants.fabrics.price colors.name colors.code colors.images')
        .lean();
        allProductPromises.push(fetchProduct);
    }
    /* wait for all promises to resolve */
    const allProducts = await Promise.all(allProductPromises);
    console.log(JSON.stringify(allProducts));

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
            quantity: item.quantity
        };
        /* find product */
        const product = allProducts.find(prod => prod._id === item.product);
        /* if productId didn't match, product is either unpublished or removed from the db,
        mark this as item to be removed */
        if(product === undefined) {
            itemsToBeRemoved.push(item);
            return false;
        }
        
        /* find selected color */
        const selectedColor = product.colors.find(color => color.code === item.colorCode);

        /* if color is not found, color is either unpublished or removed from the db,
        mark this as item to be removed */
        if(selectedColor === undefined) {
            itemsToBeRemoved.push(item);
            return;
        }

        /* product name */
        cartItem.productName = product.name;
        /* color name */
        cartItem.colorName = selectedColor.name;
        /* main image */
        cartItem.mainImage = '...';
        /*  collection name */
        cartItem.collectionName = product.bounipun_collection.name;
        /* variant name */
        const selectedVariant = product.variants.find(variant => variant._id._id === item.variant)
        cartItem.variantName = selectedVariant._id.name;
         /* fabric name */
        const selectedFabric = selectedVariant.fabrics.find(fabric => fabric._id._id === item.fabric);
        cartItem.fabricName = selectedFabric._id.name;
        /* fabric info 1 */
        cartItem.fabricInfo1 = selectedFabric._id.info1;
        /* price */
        cartItem.price = selectedFabric.price;

        /* -- check for direct pricing & ready to ship cases from left side */
    });

    // product name
    // colorname
    // collectionname (if under bounipun)
    // variant name
    // fabric name
    // fabric info 1
    // price
    // quantity
    // main image
    // product id

    res.send('ok broo');
});
router.post('/setCookie', (req, res) => {

    console.log(req.headers);

    res.cookie('chill', '1234567', { maxAge: 2592000000, httpOnly: false, sameSite: 'none', secure: false, path: req.headers.origin });
    res.send('what')

})
export default router;
