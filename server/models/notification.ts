import { mongoose, ObjectId } from "@helpers/essentials";
import sgMail, { MailDataRequired } from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/* template id send grid */
const templateIdSG = 'd-4d596c48997442849bc5e4358851973b';

const typeString = {
    type: String,
    default: ''
}

/* schema */
const schema = new mongoose.Schema({
    channel: String, // email or text
    type: String, // registration, order update (confirm, shipped, delivered, delayed, cancelled)
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

type EmailNotification = {
    to: string,
    receipt: string,
    subject: string,
    templateId: string,
    templateData: any,
    emailProvider: string,
    type: string,
    customer?: string,
}

type TextNotification = {
    receipt: string,
    countryISOCode: string,
    smsProvider: string,
    templateId: string
}

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

    },
    async sendDynamicEmailViaSendGrid(to:string, subject: string, templateId:string, dynamicTemplateData:any, from:string = 'noreply@bounipun.in') {
        /* construct email data */
        const emailData: MailDataRequired = {
            to,
            from,
            subject,
            templateId,
            dynamicTemplateData
        }
            
        /* email sending attempt */
        let attempt: any = false;
        
        /* try sending with send grid */
        try {
            attempt = await sgMail.send(emailData);
        }
        /* if error occurred */
        catch(e) {
            console.log(e);
            return false;
        }

        console.log('Email probably sent.');
        console.log(attempt);
        return true;

    },
    async sendEmailNotification(details: EmailNotification) {
        const { to, receipt, subject, templateId, templateData, emailProvider, type, customer  } = details;

        switch(details.emailProvider) {
            case 'sendgrid':
                this.sendDynamicEmailViaSendGrid(receipt, subject, templateId, templateData);
                break;
            default:
                break;
        }
        
        /* new notification */
        const newNotification = new model({
            channel: 'email',
            type,
            to,
            customer,
            receiptEmail: receipt,
            emailProvider
        });

        await newNotification.save();


    },
    async sendTextNotification(details: TextNotification) {

    }
}

export default { model, methods };