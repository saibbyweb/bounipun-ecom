import { mongoose, MongoId } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema(
    {
        name: String,
        /* payee name */
        payeeName: String,
        /* country code */
        countryCode: String,
        /* phone number */
        phoneNumber: String,
        /* email */
        email: String,
        /* currency */
        currency: String,
        /* items */
        items: [{
            styleId: String,
            name: String,
            colorName: String,
            variantName: String,
            collectionName: String,
            hsnCode: String,
            fabricName: String,
            quantity: String,
            rate: Number,
            total: Number,
        }],
        validityRange: {
            start: Date,
            end: Date
        },
        /* amount */
        amount: Number,
        description: { type: String, default: '' },
        status: { type: Boolean, default: false }
    },
    {
        timestamps: true,
    }
);

/* model */
const model = mongoose.model("paymentlink", schema);

/* link details */
type LinkDetailsToBeMatched = { amount: number, currency: string, countryCode: string, phoneNumber: string }

/* helper methods */
export const methods = {
    register() {
        console.log('registered paymentlinks')
    },
    async validateLinkDetails(linkId: MongoId, details: LinkDetailsToBeMatched) {
        const doc = await model.findById(linkId);
        if (!doc)
            return false;

        return doc.amount == details.amount && doc.currency == details.currency && doc.countryCode == details.countryCode && doc.phoneNumber == details.phoneNumber;
    }
}


export default { model, methods };