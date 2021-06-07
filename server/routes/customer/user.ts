import { server } from "@helpers/essentials";
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
    if(platform === 'web') {
        console.log('setting cookie...');
        res.cookie('swecom_bounipun',loginAttempt.token, { maxAge: 2592000000, httpOnly: false, sameSite: 'none', secure: true});
    }

    response.loggedIn = true;
    response.sessionToken = loginAttempt.token;
    response.resolved = true;
    
    /* revert with response */
    res.send(response);
});

/* shitf local cart to user cart */
router.post('/shiftCart', userAuth('customer') ,async(req, res) => {
    console.log(req.body.user);
    res.send('shifting broo');
});


router.post('/setCookie', (req, res) => {
    
    console.log(req.headers);

    res.cookie('chill','1234567', { maxAge: 2592000000, httpOnly: false, sameSite: 'none', secure: false, path: req.headers.origin });
    res.send('what')

})
export default router;
