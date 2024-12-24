import { mongoose, ObjectId, environment } from "@helpers/essentials";
import sgMail, { MailDataRequired } from '@sendgrid/mail'
import { ConferenceInstance } from "twilio/lib/rest/api/v2010/account/conference";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/* template id send grid */
const templateIdSG = 'd-4d596c48997442849bc5e4358851973b';
const contactEmailTemplateId = 'd-7759ca45d9e54e08841cdddc3b2d427f';
const customerRegistrationTemplateId = 'd-a3ec24c9d180470c955f0d62ef10b4a8'
const newOrderAdminTemplateId = 'd-4d596c48997442849bc5e4358851973b';
const orderCancelledAdminTemplateId = 'd-fe286d508f9545d0b96569179293ef75';
const orderUpdateCustomerTemplateId = 'd-4831632c7d7b4da98f41b97fa548b013';
const orderPlacedCustomerTemplateId = 'd-85ed720ba2ea445fba54555ec1da9baf';
const paymentReceivedAdminTemplateId = 'd-0b533bae3eaa458d95e08c0ab95d9875'
const paymentLinkCustomerTemplateId = 'd-5291767f141f4a79aab77efaac2c5336';

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
    receipt: Array<string>,
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

export type paymentLinkCustomerEmailTemplate = {
    name: string,
    for: string,
    amount: string | number,
    currency: string,
    dueDate: string,
    linkId: string
}
/* payment received email template */
export type paymentReceivedAdminEmailTemplate = {
    name: string,
    for: string,
    amount: string,
    currency: string,
    gateway: string
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

        /* email sending attempt */
        let attempt: any = false;

        /* try sending with send grid */
        try {
            attempt = await sgMail.send(emailData);
        }
        /* if error occurred */
        catch (e) {
            console.log(e)
            return false;
        }

        console.log('✅ Email probably sent.');
        return true;
    },
    async sendEmailNotification(details: EmailNotification) {
        console.log(environment,'--preventing emails--');
        return;
        const { to, subject, templateId, templateData, emailProvider, type, customer } = details;
        let { receipt } = details;

        console.log('📤 Email notification request type:', type)

        //remove @bounipun emails from list (for dev)
        if (environment === 'development') {
            receipt = receipt.filter(email => email.includes('@bounipun') === false)
            console.log('🔸 Removed @bounipun.in email for dev. environement')
        }

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
            receipt: ['contact@bounipun.in'],
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
            receipt: ['contact@bounipun.in', 'hello@saibbyweb.com'],
            subject: 'New Customer Signup',
            templateId: customerRegistrationTemplateId,
            templateData: details,
            emailProvider: 'sendgrid',
            type: 'customer-signup'
        })
    },
    async newOrderEmailToAdmin(details: AdminOrderEmailTemplate) {

        await this.sendEmailNotification({
            to: 'admin',
            receipt: ['orders@bounipun.in', 'hello@saibbyweb.com'],
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
            receipt: ['orders@bounipun.in'],
            subject: 'Order Cancelled by Customer',
            templateId: orderCancelledAdminTemplateId,
            templateData: details,
            emailProvider: 'sendgrid',
            type: 'order-cancelled'
        });
    },
    async orderUpdateEmailToCustomer(action, email, payload) {

        /* set type */
        let type = 'order-' + action;
        let templateId = orderUpdateCustomerTemplateId;
        let subject = '';

        switch (action) {
            case 'placed':
                templateId = orderPlacedCustomerTemplateId;
                subject = 'Bounipun Order Placed Successfully';
                break;
            case 'confirmed':
                subject = 'Bounipun Order Confirmed'
                break;
            case 'shipped':
                subject = 'Bounipun Order Shipped'
                break;
            case 'delayed':
                subject = 'Bounipun Order Delayed'
                break;
            case 'delivered':
                subject = 'Bounipun Order Delivered'
                break;
            case 'cancelled':
                subject = 'Bounipun Order Cancelled'
                break;
        }

        await this.sendEmailNotification({
            to: 'customer',
            templateId,
            receipt: [email],
            subject,
            templateData: payload,
            emailProvider: 'sendgrid',
            type
        });
    },
    async paymentLinkUpdate(type: PaymentLinkUpdateType, templateData: PaymentLinkUpdateTemplate, email?: string, ) {
        let emailList = [];
        let subject = '';
        let to = '';

        switch(type) {
            case 'paymentReceivedAdmin':
                subject = 'Payment Received'
                emailList = ['hello@saibbyweb.com']
                to = 'admin'
                break;
            case 'paymentLinkCustomer':
                subject = 'Payment Requested | Bounipun'
                emailList = [email]
                to = 'customer'
                break;
        }

        await this.sendEmailNotification({
            to,
            receipt: emailList,
            subject,
            templateId: to === 'admin' ? paymentReceivedAdminTemplateId : paymentLinkCustomerTemplateId,
            templateData,
            emailProvider: 'sendgrid',
            type: 'payment-link-update'
        });
    }
}

type PaymentLinkUpdateType = 'paymentReceivedAdmin' | 'paymentLinkCustomer'
type PaymentLinkUpdateTemplate = paymentReceivedAdminEmailTemplate | paymentLinkCustomerEmailTemplate
export default { model, methods };