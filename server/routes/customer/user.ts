import { server, db, task } from "@helpers/essentials";
import admin from "@helpers/admin";
import customer from "@helpers/customer";
import { methods as userMethods }  from "@models/user"

/* creating express router */
const router = server.express.Router();

/* send otp */
router.post('/sendOtp', async(req, res) => {
    let response = { resolved: false, otpSent: false };
    /* extract phone number, dial code, and purpose */
    const { dialCode, phoneNumber, purpose } = req.body;

    console.log(dialCode, phoneNumber, purpose)
    
    /* TODO: if dial code === +91 */
    const sendOtpRequestStatus = await userMethods.sendMsg91Otp(phoneNumber);
    
    response.resolved = true;
    response.otpSent = sendOtpRequestStatus;
    res.send(response);
});

export default router;