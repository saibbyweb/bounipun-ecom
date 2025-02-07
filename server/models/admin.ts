import { mongoose, task } from "@helpers/essentials";
import bcrypt from "bcrypt";
import { model as session, methods as sessionMethods } from "./session";
/* validate session */
const { validateSession } = sessionMethods;

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

/* admin express auth */
const adminExpressAuth = async (req, res, next, accessLevel, strictMode = true) => {
    console.log('ADMIN_AUTH_MIDDLEWARE',req.cookies)

    req.body.admin = { status: false };
    /* no cookie is found, mark user as guest */
    if (req.cookies.swecom_bounipun_admin === undefined) {
        console.log('❌ ADMIN_COOKIE_NOT_PROVIDED');
        res.send({ adminNotAuthorized: true })
        return;
    }

    /* if cookie found, validate and return appropriate response */
    const token = req.cookies.swecom_bounipun_admin;
    const session = await validateSession(token);

    /* if session is invalid */
    if (session === false || session.valid === false) {
        console.log('FALSE AAHGAYA')
        /* reset cookie */
        res.send({ adminNotAuthorized: true });
        return;
    }

    /* attach admin object to req body */
    req.body.admin = session.admin;

    /* at this point, admin session has been validated */
    if(strictMode === false) {
        next();
        return;
    }

    /* if strict mode is on, check access level authorization */
    /* match access_level (if in strict mode, by default strict mode should be on) */
    /*TODO: access level should either match or should be lower than the value */
    // if (session.admin.access_level !== accessLevel) {
    //     res.send({ adminNotAuthorized: true });
    //     return;
    // }

    console.log('ADMIN_AUTH_PASSED')
    next();
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
            admin: adminId
        }).save());

        return !error ? newSession : false;
    },
    adminAuth: (accessLevel, strictMode) => (...args: [req: any, res: any, next: any]) => {
        return adminExpressAuth(...args, accessLevel, strictMode)
    }

}

export default { model, methods };