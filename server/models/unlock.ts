import { mongoose, ObjectId, task } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    code: String,
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
    blackList: [{
        type: ObjectId,
        ref: 'users'
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
        const checkValidity: any = model.findOne({
            code: code.toUpperCase(),
            status: true,
            validity: { $gt: 0 },
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
        const blackListIndex = codeDoc.blackList.findIndex(u => u.toString() === user.toString())

        if (blackListIndex !== -1) {
            console.log('User found in black list');
            return false;
        }
        /* if code is not getting applied for the first time */
        if(applying === false)
            return codeDoc;
            
        /* check if user already in log (prevent duplicate usage) */
        const logIndex = codeDoc.log.findIndex(log => log.user.toString() === user.toString())

        if (logIndex !== -1) {
            console.log('User already in log');
            return false;
        }

        return codeDoc;

    },
    async updateUnlockCodeLog(code, user) {
        /* fetch update */
        const updateDoc = await model.findOne({
            code: code.toUpperCase()
        });
        
        /* update log */
        updateDoc.log.push({
            user,
            usedOn: new Date()
        });
        
        await updateDoc.save();

    }
}

export default { model, methods };