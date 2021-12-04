import { mongoose, ObjectId, task } from "@helpers/essentials";
import { Schema } from "mongoose";

/* schema */
const schema: Schema = new mongoose.Schema({
    code: {
        type: String,
        unique: true
    },
    type: String,
    validity: Number,
    validityRange: {
        start: Date,
        end: Date
    },
    log: [{
        user: {
            type: ObjectId,
            ref: 'users'
        },
        usedOn: Date
    }],
    timeline: [{
        user: {
            type: ObjectId,
            ref: 'users'
        },
        action: String,
        taken: Date
    }],
    blackList: [{
        name: String,
        customer: {
            type: ObjectId,
            ref: 'users'
        }
    }],
    description: String,
    status: Boolean
},
    {
        timestamps: true
    }
);

/* model */
const model = mongoose.model('unlock', schema);

/* helper methods */
export const methods = {
    register() {
        console.log('registered');
    },
    /* check for expiry and black list  */
    async validateUnlockCode(code, user, applying = false) {

        const validity = applying ? { $gt: 0 } : { $gte: 0 }

        const checkValidity: any = model.findOne({
            code: code.toUpperCase(),
            status: true,
            validity,
            "validityRange.start": { $lte: new Date() },
            "validityRange.end": { $gte: new Date().setHours(0, 0, 0, 0) }
        }).select('code blackList log');

        /* check validity */
        const { response: codeDoc, error } = await task(checkValidity);

        /* if error occured or code not valid */
        if (error || codeDoc === null) {
            console.log('Unlock Code Invalid');
            return false;
        }

        /* coupon is valid, check if user is in black list*/
        const blackListIndex = codeDoc.blackList.findIndex(u => u.customer.toString() === user.toString())

        if (blackListIndex !== -1) {
            console.log('❌ User found in black list');
            return false;
        }
        /* if code is not getting applied for the first time */
        if (applying === false)
            return codeDoc;

        /* check if user already in log (prevent duplicate usage) */
        const logIndex = codeDoc.log.findIndex(log => log.user.toString() === user.toString())

        if (logIndex !== -1) {
            console.log('❌  User already in unlock usage log');
            return false;
        }

        return codeDoc;

    },
    async updateUnlockCodeLog(code, user, action = 'push') {
        /* fetch unlock code doc */
        const unlockDoc: any = await model.findOne({
            code: code.toUpperCase()
        });

        const currentTimestamp = new Date();

        switch (action) {
            /* add user to log */
            case 'push':
                unlockDoc.log.push({
                    user,
                    usedOn: currentTimestamp
                });
                unlockDoc.validity = unlockDoc.validity - 1;
                break;
            case 'remove':
                const foundIndex = unlockDoc.log.findIndex(entry => entry.user.toString() === user.toString())
                if (foundIndex !== -1)
                    unlockDoc.log.splice(foundIndex, 1);
                break;
        }

        /* add action to timeline */
        if(unlockDoc.timeline === undefined)
            unlockDoc.timeline = [];
        
        unlockDoc.timeline.push({ user, action : action === 'push' ? 'Applied' : 'Removed', taken: currentTimestamp })

        /*  re-save doc */
        await unlockDoc.save();

        /* unlock code log updated */
        console.log('✅ User unlock code log updated, action: ', action);
    }
}

export default { model, methods };