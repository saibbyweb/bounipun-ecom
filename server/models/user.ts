import { mongoose, task } from "@helpers/essentials";
import axios from "axios";

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
    /* get user */
    getUser: async (criteria) => {
        const findUser: any = model.findOne(criteria)
        const { response, error } = await task(findUser);
        if (error)
            return false;
        return response;
    },
    /* register user */
    registerUser: async(profile) => {
        const {response: newUser, error } = await task(new model({...profile}).save() as any);
        return !error ? newUser : false;
    },
    loginUser: async() => {

    }
}

model.find().then(docs => console.log(docs));

export default { model, methods }