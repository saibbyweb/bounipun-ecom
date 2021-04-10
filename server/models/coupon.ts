import { mongoose, task } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    code: String,
    type: String,
    value: Number,
    validity: Number,
    validityRange: {
        start: Date,
        end: Date
    },
    description: String,
    status: Boolean
},
    {
        timestamps: true
    }
);

/* model */
const model = mongoose.model('coupons', schema);

/* helper methods */
export const methods = {
    register() {
        console.log('registered');
    }
}

export default { model, methods };