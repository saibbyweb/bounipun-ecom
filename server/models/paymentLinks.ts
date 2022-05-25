import { mongoose, MongoId } from "@helpers/essentials";
import { methods as notificationMethods, paymentLinkCustomerEmailTemplate } from "@models/notification";

type Gateway = 'stripe' | 'razorpay';
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
        /* discount */
        discount: {
            type: { type: String, enum: ['percentage', 'direct'] },
            value: Number
        },
        /* courier charges */
        courierCharges: Number,
        /* amount */
        amount: Number,
        /* paid */
        paid: { type: Boolean, default: false },
        /* customer note */
        customerNote: { type: String, default: '' },
        /* payment details */
        paymentDetails: {
            gateway: String,
            timestamp: Date
        },
        notifyLog: [{
            mode: String,
            to: String,
            timestamp: { type: Date }
        }],
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
    /* validate link details */
    async validateLinkDetails(linkId: MongoId, details: LinkDetailsToBeMatched) {
        const doc = await model.findById(linkId);
        if (!doc)
            return false;

        return doc.amount == details.amount && doc.currency == details.currency && doc.countryCode == details.countryCode && doc.phoneNumber == details.phoneNumber;
    },
    /* mark as paid */
    async markAsPaid(linkId: MongoId, gateway: Gateway) {
        const updated = await model.findByIdAndUpdate(linkId, {
            paid: true,
            paymentDetails: {
                gateway,
                timestamp: new Date()
            }
        })

        /* send email notification to admin */
        await notificationMethods.paymentLinkUpdate('paymentReceivedAdmin', {
            name: updated.payeeName,
            for: updated.name,
            amount: updated.amount,
            currency: updated.currency,
            gateway: gateway.toUpperCase()
        });

        return updated ? true : false;
    },
    /* notify client */
    async notifyClient(mode: 'email' | 'sms', details: any, email: string) {
        await notificationMethods.paymentLinkUpdate('paymentLinkCustomer', {
            name: details.payeeName,
            for: details.for,
            amount: details.amount,
            currency: details.currency,
            dueDate: details.dueDate,
            linkId: details.linkId
        }, email);

        /* update notify log for payment link */
        await model.findByIdAndUpdate(details.linkId, {
            $push: { notifyLog: { mode, to: email, timestamp: new Date() } }
        });

        console.log('updated payment link')

        return true;
    }
}


export default { model, methods };