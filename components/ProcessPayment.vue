<template>
  <div class="process-payment flex center col">
    <!-- stripe card element -->
    <div v-if="gateway === 'stripe'" id="stripe-card" />
    <!-- checkout -->
    <button
      :class="{ disabled: !enableCheckout }"
      class="checkout-btn action"
      @click="proceedPayment"
    >
      {{ actionBtnText }}
    </button>
  </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";
import { RAZORPAY_KEY_ID, STRIPE_PUBLISHABLE_KEY } from "../helpers/MiscHelper";

/* error messages */
const errorMsgs = {
  technicalDifficulty:
    "We are facing some technical difficulties at the moment. Kindly, try again after sometime.",
  couldNotProcessPayment:
    "Could not process payment. Kindly try after sometime.",
};
export default {
  props: {
    demoMode: Boolean,
    /* order, payment link, gift etc. */
    type: String,
    /* three letter currency code */
    currency: String,
    /* preffered gateway (optional) */
    prefferedGateway: String,
    /* amount (not in sub units) */
    amount: Number | String,
    /* in delivery address shape */
    address: Object,
    /* additional payload to be sent to server while creating payment intent */
    payload: Object,
    actionBtnText: {
      type: String,
      default: "Make Payment"
    }
  },
  data() {
    return {
      /* payment intent */
      paymentIntent: {
        gatewayToken: "",
        dbId: "",
      },
      /* enable checkout flag (when card details have been entered) */
      enableCheckout: false,
      /* processing */
      processing: false,
      /* stripe */
      stripe: {
        elements: null,
        sdk: null,
        shippingAddress: null,
        billingAddress: null,
      },
      /* gateway */
      gateway: "",
      /* razorpay checkout */
      razorpayCheckout: null,
      /* flag indicatring payment intent has been created */
      paymentIntentCreated: false,
      /* error */
      error: {
        status: false,
        msg: "",
      },
    };
  },
  mounted() {
    /* finalize gateway, render UI & prepare required data */
    console.log('👋 Hello from Process Payment component')
    this.initializePayment();
  },
  methods: {
    /* proceed payment */
    proceedPayment() {
      /* if demo mode */
      if(this.demoMode) {
        this.$emit('paymentProcessed')
        return;
      }

      if (this.processing) return;

      /* gateway */
      switch (this.gateway) {
        case "razorpay":
          this.razorpayCheckout.open();
          break;
        case "stripe":
          this.stripeCheckout();
          break;
      }
    },
    /* initialize payment */
    initializePayment() {
      /* finalize gateway */
      // this.gateway =
      //   this.prefferedGateway ?? this.currency === "INR"
      //     ? "razorpay"
      //     : "stripe";

          this.gateway = "razorpay"

      /* do gateway related stuff */
      switch (this.gateway) {
        case "stripe":
          this.createStipeCardElement();
          this.createStripeShippingAndBillingAddresses();
          break;
      }

      /* create a payment intent */
      this.createPaymentIntent();
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

      /* extract gateway token and intent id */
      const { gatewayToken, intentId, amount } = paymentIntentFetch.response;

      /* save payment intent token and id */
      this.paymentIntent.gatewayToken = gatewayToken;
      this.paymentIntent.dbId = intentId;

      /* act according to gateway */
      switch (this.gateway) {
        case "razorpay":
          this.setupRazorpayOrder(amount);
          break;
      }
    },
    /* initialize stripe elements */
    async createStipeCardElement(
      options = {
        hidePostalCode: true,
      }
    ) {
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
        this.enableCheckout = event.complete ? true : false;
      });
    },
    /* setup razorpay order (set handler methods) */
    setupRazorpayOrder(amount) {
      const { firstName, surName, email, mobileNumber } = this.address;
      let options = {
        key: RAZORPAY_KEY_ID,
        order_id: this.paymentIntent.gatewayToken,
        currency: this.currency,
        name: "Bounipun Ecom",
        description: "Transaction",
        image: "https://bounipun.in/icons/light/logo.png",
        prefill: {
          name: `${firstName} ${surName}`,
          email: email,
          contact: mobileNumber,
        },
        theme: {
          color: "#3399cc",
        },
        amount,
        handler: this.onRazorpayPaymentSuccess,
      };
      /* create razorpay checkout object */
      this.razorpayCheckout = new Razorpay(options);
      /* enable payment processing from client side */
      this.enableCheckout = true;
    },
    /* on razorpay payment success */
    async onRazorpayPaymentSuccess(response) {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        response;
      /* call server api on payment success */
      await this.$post("/razorpayPaymentSuccess/v2", {
        /* razorpay_order_id is same as this.paymentIntent.gatewayToken */
        gatewayToken: razorpay_order_id,
        transactionId: razorpay_payment_id,
        signature: razorpay_signature,
        type: this.type,
      });
      /* emit payment processed event  */
      this.$emit("paymentProcessed");
    },
    /* set stripe shipping and billing address */
    createStripeShippingAndBillingAddresses() {
      const {
        firstName,
        surName,
        email,
        city,
        addressLine1,
        addressLine2,
        postalCode,
        countryIsoCode,
      } = this.address;

      /* set stripe shipping address */
      this.stripe.shippingAddress = {
        address: {
          line1: `${addressLine1} | ${addressLine2}`,
          country: countryIsoCode,
        },
        name: `${firstName} ${surName}`,
      };
      /* set stripe billing address */
      this.stripe.billingAddress = {
        name: this.stripe.shippingAddress.name,
        email: email,
        address: {
          city,
          postal_code: postalCode,
          ...this.stripe.shippingAddress.address,
        },
      };
    },
    /* create stripe payment method */
    async createStripePaymentMethod() {
      this.setLoading(true);

      /* get card element from the dom */
      const cardElement = this.stripe.elements.getElement("card");
      /* create payment method from card details */
      const { paymentMethod, error } =
        await this.stripe.sdk.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: this.stripe.billingAddress,
        });

      this.setLoading(false);

      /* if error occured while generating payment method */
      if (error) return this.setError(true, errorMsgs.couldNotProcessPayment);

      return paymentMethod;
    },
    /* confirm stripe card payment */
    async confirmStripeCardPayment(paymentMethodId) {
      /* set loading state */
      this.setLoading(true);

      /* confirm card payment */
      const { error } = await this.stripe.sdk.confirmCardPayment(
        this.paymentIntent.gatewayToken,
        {
          payment_method: paymentMethodId,
          shipping: this.stripe.shippingAddress,
        }
      );
      /* disbale loading state */
      this.setLoading(false);

      return error ? this.setError(true, errorMsgs.technicalDifficulty) : true;
    },
    /* stripe checkout process */
    async stripeCheckout() {
      if (this.processing) return;
      /* create a payment method from card details */
      const paymentMethod = await this.createStripePaymentMethod();
      /* if operation failed, return */
      if (!paymentMethod) return;
      /* confirm card payment */
      const paymentProcessed = await this.confirmStripeCardPayment(
        paymentMethod.id
      );
      /* if payment processing failed */
      if (!paymentProcessed) {
        this.$emit('paymentFailed');
        return;
      }
      /* emit payment processed event  */
      this.$emit("paymentProcessed");
    },
    /* set loading state */
    setLoading(value) {
      this.$store.commit("customer/setLoading", value);
      this.processing = value;
    },
    /* set error state and msg */
    setError(value, msg) {
      this.error.status = value;
      this.error.msg = msg;
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
.process-payment {
  width: 100%;
}
#stripe-card {
  margin: 20px 0;
  width: 100%;
  min-width: 30vw;
  max-width: 500px;
  background-color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
  padding: 3%;

  @media(max-width: 768px) {
    width: 90vw;
  }
}

#stripe-mount {
    margin-top: 20px;
    width: 100%;
    background-color: white;
    /* box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16); */
    padding: 3%;
  }
/* .checkout-btn {
  &.disabled {
    background-color: gray;
  }
} */

.checkout-btn {
  width: 100%;
  min-width: 10vw;
  padding: 10px 15px;
  margin-top: 20px;

  @media(max-width: 768px) {
    min-width: 33vw;
    padding: 10px 15px !important;
  }
  &.disabled {
    background-color: gray;
    &:hover {
      background-color: gray;
    }
  }
}
</style>
