import { mongoose, ObjectId } from "@helpers/essentials";
import sgMail, { MailDataRequired } from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/* template id send grid */
const templateIdSG = 'd-4d596c48997442849bc5e4358851973b';
const contactEmailTemplateId  = 'd-7759ca45d9e54e08841cdddc3b2d427f';
const customerRegistrationTemplateId = 'd-a3ec24c9d180470c955f0d62ef10b4a8'
const newOrderAdminTemplateId = 'd-4d596c48997442849bc5e4358851973b';
const orderCancelledAdminTemplateId = 'd-fe286d508f9545d0b96569179293ef75';

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
    receipt: string | Array<string>,
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

type ContactEmailTemplate = {
    name: string
    timestamp: string,
    subject: string,
    email: string,
    message: string
}

type CustomerRegistrationEmailTemplate = {
    firstName: string,
    surName: string,
    phoneNumber: string,
    countryDialCode: string,
    countryIsoCode: string
}

type AdminOrderEmailTemplate = {
    orderId: string,
    amount: string | number,
    currency: string,
    gateway: string
}

 type AdminOrderCancelledEmailTemplate = {
     orderNumber: string,
     reason: string
 }

// {
//     "name": "Suhaib Khan",
//     "timestamp":"2021-08-28T11:49:50.524+00:00",
//     "subject": "Bulk Orders ASAP",
//     "email": "hello@saibbyweb.com",
//     "message": "Hello there, I wanted to know about bulk pricing. Reach me at 9906697711 for more information"
//     }

/* helper methods */
export const methods = {
    register() {
        console.log('notification registered');
        // this.sendTestDynamicMail();
    },
    async sendDynamicEmailViaSendGrid(to: string | Array<string>, subject: string, templateId: string, dynamicTemplateData: any, from: string = 'noreply@bounipun.in') {
        /* construct email data */
        const emailData: MailDataRequired = {
            to,
            from,
            subject,
            templateId,
            dynamicTemplateData
        }

        console.log(subject);

        /* email sending attempt */
        let attempt: any = false;

        /* try sending with send grid */
        try {
            attempt = await sgMail.send(emailData);
        }
        /* if error occurred */
        catch (e) {
            console.log(e);
            return false;
        }

        console.log('Email probably sent.');
        // console.log(attempt);
        return true;
    },
    async sendEmailNotification(details: EmailNotification) {
        const { to, receipt, subject, templateId, templateData, emailProvider, type, customer } = details;

        switch (details.emailProvider) {
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
            receiptEmail: receipt.toString(),
            emailProvider
        });

        await newNotification.save();


    },
    async sendTextNotification(details: TextNotification) {

    },
    async sendContactFormEmailToAdmin(details: ContactEmailTemplate) {
        await this.sendEmailNotification({
            to: 'admin',
            receipt: ['contact@bounipun.in','hello@saibbyweb.com','suhaibzreason@gmail.com'],
            subject: 'New Contact Request | Bounipun Ecom',
            templateId: contactEmailTemplateId,
            templateData: details,
            emailProvider: 'sendgrid',
            type: 'contact-request'
        });
    },
    async sendCustomerRegistrationEmailToAdmin(details: CustomerRegistrationEmailTemplate) {
        await this.sendEmailNotification({
            to: 'admin',
            receipt: ['contact@bounipun.in','hello@saibbyweb.com'],
            subject: 'New Customer Signup',
            templateId: customerRegistrationTemplateId,
            templateData: details,
            emailProvider: 'sendgrid',
            type: 'customer-signup'
        })
    },
    async newOrderEmailToAdmin(details: AdminOrderEmailTemplate) {
        
        console.log(details);

        await this.sendEmailNotification({
            to:'admin',
            receipt: ['hello@saibbyweb.com','suhaibzreason@gmail.com'],
            subject: 'New Order Received',
            templateId: newOrderAdminTemplateId,
            templateData: details,
            emailProvider: 'sendgrid',
            type: 'order-received'
        });
    },
    async orderCancelEmailToAdmin(details: AdminOrderCancelledEmailTemplate) {
        await this.sendEmailNotification({
            to: 'admin',
            receipt: ['hello@saibbyweb.com','suhaibzreason@gmail.com'],
            subject:'Order Cancelled by Customer',
            templateId: orderCancelledAdminTemplateId,
            templateData: details,
            emailProvider: 'sendgrid',
            type: 'order-cancelled'
        });
    }
}

export default { model, methods };