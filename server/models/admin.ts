import { mongoose, task } from "@helpers/essentials";
import bcrypt from "bcrypt";
import { model as session, methods as sessionMethods } from "./session";

const typeString = {
    type: String,
    default: ''
}

/* schema */
const schema = new mongoose.Schema({
    name: String,
    countryDialCode: String,
    phoneNumber: String,
    // super admin, manager, support
    access_level: String,
    email: typeString,
    dob: Date,
    gender: typeString,
    address: typeString,
    status: Boolean
},
    {
        timestamps: true
    }
);

/* model */
const model = mongoose.model('admin', schema);

type Admin = {
    name: string,
    countryDialCode: string,
    phoneNumber: string,
    access_level: string,
    email?: string,
    dob?: string,
    gender?: string,
    address?: string,
    status: boolean
}

/* helper methods */
export const methods = {
    register() {
        console.log('admin registered');
        // this.addNewAdmin({
        //     name: "Suhaib Khan",
        //     countryDialCode: '+91',
        //     phoneNumber: '9906697711',
        //     access_level: '1',
        //     status: true
        // });
    },
    async addNewAdmin(details: Admin) {
        const newAdmin = new model(details);
        const { response, error } = await task(newAdmin.save())
        return error ? false : response;
    },
    async updateAdmin(_id: string, details: Admin) {
        const updateQuery = model.findOneAndUpdate({ _id }, details);
        const { response, error } = await task(updateQuery);
        return error ? false : response;
    },
    async permanentlyDeleteAdmin(_id: string) {
        const deleteQuery = model.findOneAndDelete({ _id });
        const { response, error } = await task(deleteQuery);
        return error ? false : response;
    },
    /* get admin */
    async getAdmin(criteria: any) {
        const findAdmin: any = model.findOne(criteria)
        const { response, error } = await task(findAdmin);
        if (error)
            return false;
        return response;
    },
    async registerSession(adminId) {
        adminId = adminId.toString();
        /* generate session token */
        const token = await bcrypt.hash(adminId, 10);
        /* save session token in db */
        const { response: newSession, error } = await task(new session({
            token,
            user: adminId
        }).save());

        return !error ? newSession : false;
    }
}

export default { model, methods };