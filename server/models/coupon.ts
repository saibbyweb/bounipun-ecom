import { mongoose, task } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    code: String,
    type: String,
    value: Number,
    currency: String,
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
    },
    async validateCoupon(code) {
        const findActiveCoupon: any = model.findOne({
            code: code.toUpperCase(),
            status: true,
            validity: { $gt: 0 },
            "validityRange.start": { $lte: new Date() },
            "validityRange.end": { $gte: new Date().setHours(0,0,0,0) }
        });

        /* find active coupon */
        const { response, error } = await task(findActiveCoupon);
        
        /*  */

    }
}

export default { model, methods };