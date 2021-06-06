import { mongoose, task } from "@helpers/essentials";
import axios from "axios";

/* msg91 template id */
const templateId = "6037f99d7ea3595ee966782c";

/* schema */
const schema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    countryCode: String,
    profession: String
}, {
    timestamps: true
});

/* model */
const modelName = 'users';
const model = mongoose.model('users', schema);

/* helper methods */
export const methods = {
    async registerModel() {
        console.log(`registered model: ${modelName}`);
    },
    /* send msg91 otp */
    sendMsg91Otp: async phoneNumber => {
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
    }
}

export default { model, methods }