<template>
    <div class="process-payment">
        <button class="action"> Make Payment </button>
    </div>
</template>
<script>
import { loadStripe } from "@stripe/stripe-js";
import { RAZORPAY_KEY_ID, STRIPE_PUBLISHABLE_KEY } from "../helpers/MiscHelper";
export default {
  props: {
    /* order, payment link, gift etc. */
    type: String,
    currency: String,
    gateway: String,
    /* amount (not in sub units) */
    amount: Number,
    shippingAddress: Object,
    billingAddress: Object,
    payload: Object,
  },
  data() {
    return {
      /* payment intent */
      paymentIntent: {
        gatewayToken: "",
        dbId: "",
      },
      processing: false,
      /* stripe */
      stripe: {
        elements: null,
        sdk: null,
      },
      /* razorpay checkout */
      razorpayCheckout: null,
      /* flag indicating UI is ready to process payment */
      enablePaymentProcessing: false,
      /* error */
      error: {
        status: false,
        msg: "",
      },
    }
  },
  mounted() {
    this.deciceGateway();
  },
  methods: {
    /* decide gateway */
    deciceGateway() {
      if (this.currency !== "INR") this.renderStipeCardElement();
    },
    /* initialize stripe elements */
    async renderStipeCardElement(options = { hidePostalCode: true }) {
      const { stripe } = this;
      /* load client side stripe sdk */
      stripe.sdk = await loadStripe(STRIPE_PUBLISHABLE_KEY);
      stripe.elements = stripe.sdk.elements();
      /* create stripe card element */
      const element = stripe.elements.create("card", options);
      /* mount card element to DOM  */
      element.mount("#stripe-card");
      /* enable processing when mount is complete */
      element.on("change", (event) => {
        this.error.status = false;
        this.enablePaymentProcessing = event.complete;
      });
    },
    /* create payment intent */
    async createPaymentIntent() {
      const paymentIntentFetch = await this.$post("/createPaymentIntent/v2", {
        type: this.type,
        amount: this.amount,
        currency: this.currency,
        gateway: this.gateway,
        billingAddress: this.billingAddress,
        shippingAdress: this.shippingAddress,
        payload: this.payload,
      });

      /* if payment intent creation failed */
      if (paymentIntentFetch.resolved === false) {
        return;
      }

      /* process response */
      this.onPaymentIntentCreated(paymentIntentFetch.response);
    },
    /* on payment intent created */
    onPaymentIntentCreated(details) {
      /* save payment intent token and id */
      this.paymentIntent.gatewayToken = details.gatewayToken;
      this.paymentIntent.dbId = details.intentId;

      /* act according to gateway */
      switch (this.gateway) {
        case "razorpay":
          this.setupRazorpayOrder(details.amount);
          break;
      }
    },
    /* setup razorpay order (set handler methods) */
    setupRazorpayOrder(amount) {
      const { firstName, surName, email, mobileNumber } = this.billingAddress;
      let options = {
        key: RAZORPAY_KEY_ID,
        order_id: this.paymentIntent.gatewayToken,
        currency: "INR",
        name: "Bounipun Ecom",
        description: "Transaction",
        image: "https://bounipun.in/icons/light/logo.png",
        prefill: {
          name: `${firstName} ${surName}`,
          email: email,
          contact: mobileNumber,
        },
        theme: { color: "#3399cc" },
        amount,
        handler: async (response) => {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            response;

          await this.$post("/razorpayPaymentSuccess/v2", {
            gatewayToken: razorpay_order_id,
            transactionId: razorpay_payment_id,
            signature: razorpay_signature,
            type: this.type,
          });

          /* act according to payment type */
          switch (this.type) {
            case "order":
              /* move to order placed page */
              this.$store.dispatch("customer/fetchCart");
              this.$router.push("/order-placed-successfully");
              break;
            case "paymentLink":
              break;
          }
        },
      };
      /* create razorpay checkout object */
      this.razorpayCheckout = new Razorpay(options);
      /* enable payment processing */
      this.enablePaymentProcessing = true;
    },
    /* create stripe billing address */
    createStripeBillingAddress() {
      const {
        firstName,
        surName,
        email,
        city,
        addressLine1,
        addressLine2,
        postalCode,
        countryIsoCode,
      } = this.billingAddress;

      return {
        name: `${firstName} ${surName}`,
        email: email,
        address: {
          city,
          line1: `${addressLine1} | ${addressLine2}`,
          postal_code: `${postalCode}`,
          country: countryIsoCode,
        },
      };
    },
    /* create stripe payment method */
    async createStripePaymentMethod() {
      this.$store.commit("customer/setLoading", true);
      this.processing = true;

      /* get card element from the dom */
      const cardElement = this.stripe.elements.getElement("card");
      /* create payment method from card details */
      const { paymentMethod, error } =
        await this.stripe.sdk.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: this.createStripeBillingAddress(),
        });

      this.$store.commit("customer/setLoading", false);
      this.processing = false;

      /* if error occured while generating payment method */
      if (error) {
        this.error.msg = "Could not process payment. Kindly try after sometime.";
        this.error.status = true;
        return null;
      }

      return paymentMethod;
    },
    /* TODO: stripe confirm card payment */
    async stripeCheckout() {
      if (this.processing) return;
      const paymentMethod = await this.createStripePaymentMethod();
      if(!paymentMethod)
        return;
        
    },
  },
};
</script>
