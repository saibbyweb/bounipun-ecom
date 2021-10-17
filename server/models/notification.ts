import { mongoose, ObjectId } from "@helpers/essentials";
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const typeString = {
    type: String,
    default: ''
}

/* schema */
const schema = new mongoose.Schema({
    channel: String, // email or text
    type: String, // registration, order
    to: String, // admin, customer
    // related customer
    customer: {
        ref: 'users',
        type: ObjectId
    },
    receiptEmail: typeString,
    receiptPhoneNumber: typeString, // with country code
    receiptCountryISOCode: typeString,
    smsProvider: typeString, // msg91, twilio, firebase
    emailProvider: typeString // sendgrid, aws
},
    {
        timestamps: true
    }
);

/* model */
const model = mongoose.model('notification', schema);

/* helper methods */
export const methods = {
    register() {
        console.log('notification registered');
        // this.sendTestDynamicMail();
    },
    sendTestMail() {
        const msg = {
            to: 'hello@saibbyweb.com', // Change to your recipient
            from: 'noreply@bounipun.in', // Change to your verified sender
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })
    },
    sendTestDynamicMail() {
        const msg = {
            to: 'suhaibzreason@gmail.com',
            from: 'noreply@bounipun.in',
            templateId: 'd-4d596c48997442849bc5e4358851973b',
            dynamicTemplateData: {
                subject: 'Bounipun Order Update',
                senderName: 'Suhaib Khan',
                orderId: 'BP-001',
            },
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
    }
}

export default { model, methods };