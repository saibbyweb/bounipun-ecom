import { mongoose, ObjectId, task } from "@helpers/essentials";

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
    log: [{ order: String, usedOn: Date }],
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
    async validateCoupon(code, currency) {
        const findActiveCoupon: any = model.findOne({
            code: code.toUpperCase(),
            status: true,
            // currency,
            validity: { $gt: 0 },
            "validityRange.start": { $lte: new Date() },
            "validityRange.end": { $gte: new Date().setHours(0, 0, 0, 0) }
        }).select('code type value currency');

        /* find active coupon */
        const { response, error } = await task(findActiveCoupon);

        /* if error occured or coupon not valid */
        if (error || response === null) {
            return false;
        }

        /* if coupon found, validate coupon currency */
        const couponValid = response.currency === 'all' || response.currency === currency
        if(!couponValid)
            return false;

        return response;

    },
    async updateCouponLog(couponCode, currency, number) {
        const updateLog = await model.findOneAndUpdate({
            code: couponCode,
            currency
        }, {
            $push: { log: { order: number, usedOn: new Date() } },
            $inc: { validity: -1 }
        });
        console.log(updateLog,'--bro update log from coupon')
        return updateLog === null ? false : true;
    }
}

export default { model, methods };