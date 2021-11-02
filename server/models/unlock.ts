import { mongoose, ObjectId } from "@helpers/essentials";

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
        }, usedOn: Date
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
    async validateUnlockCode(code, user) {

    },
    async updateUnlockCodeLog(code, user) {

    }
}

export default { model, methods };