<script>
import { loadStripe } from "@stripe/stripe-js";
export default {
  props: {
    currency: String,
    gateway: String,
    amount: Number,
    shippingAddress: Object,
    billingAddress: Object,
  },
  data() {
    return {
      gateways: {
        stripe: {
          sdk: null,
          publishableKey: "",
        },
        razorpay: {
          keyId: "",
        },
      },
      enablePaymentProcessing: false,
      /* error */
      error: {
        status: false,
        msg: "",
      },
    };
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
    renderStipeCardElement(options = { hidePostalCode: true }) {
      const { stripe } = this.gateways;
      /* load client side stripe sdk */
      stripe.sdk = await loadStripe(stripe.publishableKey);
      /* create stripe card element */
      const element = stripe.sdk.elements().create("card", options);
      /* mount card element to DOM  */
      element.mount("#stripe-card");
      /* enable processing when mount is complete */
      element.on("change", (event) => {
        this.error.status = false;
        this.enablePaymentProcessing = event.complete;
      });
    },
  },
};
</script>
