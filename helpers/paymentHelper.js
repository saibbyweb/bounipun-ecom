import currencyHelper from "../helpers/currencyHelper.js";
import { loadStripe } from "@stripe/stripe-js";

export default {
  props: {
      currency: String
  },
  mixins: [currencyHelper],
  mounted() {
    this.setKeys();
    /* according to currency, setup payment options */
    if (this.currency !== "INR") this.initializeStripe();
  },
  data() {
    return {
      razorpayCheckout: null,
      stripe: null,
      paymentIntentId: "",
      paymentError: {
        status: false,
        msg: "",
      },
      gatewayToken: "",
      enableCheckout: false,
      elements: null,
      razorpayKeyId: "",
      stripePK: "",
      processingStripe: false,
    };
  },
  computed: {
    gatewayName() {
      return this.currency === "INR" ? "razorpay" : "stripe";
    },
    stripeBillingAddress() {
      const {
        firstName,
        surName,
        email,
        city,
        addressLine1,
        addressLine2,
        postalCode,
        countryIsoCode,
      } = this.deliveryAddress;

      return {
        name: firstName + " " + surName,
        email: email,
        address: {
          city: city,
          line1: addressLine1 + " | " + addressLine2,
          postal_code: postalCode,
          country: countryIsoCode,
        },
      };
    },
    stripeShippingObject() {
      const { firstName, surName, addressLine1, addressLine2, countryIsoCode } =
        this.deliveryAddress;
      return {
        address: {
          line1: addressLine1 + " " + addressLine2,
          country: countryIsoCode,
        },
        name: firstName + " " + surName,
      };
    },
  },
  methods: {
    setKeys() {
      const {
        NODE_ENV,
        MODE,
        VITE_RAZORPAY_KEY_ID_TEST,
        RAZORPAY_KEY_ID_PROD,
        STRIPE_PK_PROD,
        VITE_STRIPE_PK_TEST,
      } = process.env;

      /* if environment is dev, use test keys */
      if (NODE_ENV === "development" || MODE === "development") {
        this.razorpayKeyId = VITE_RAZORPAY_KEY_ID_TEST;
        this.stripePK = VITE_STRIPE_PK_TEST;
        return;
      }

      /* if environment is production, set live key only on main domain */
      if (NODE_ENV === "production") {
        switch (window.location.hostname) {
          case "bounipun.in":
            this.razorpayKeyId = RAZORPAY_KEY_ID_PROD;
            this.stripePK = STRIPE_PK_PROD;
            break;
          default:
            this.razorpayKeyId = RAZORPAY_KEY_ID_TEST;
            this.stripePK = STRIPE_PK_TEST;
            break;
        }
      }
    },
    async initializeStripe() {
      this.stripe = await loadStripe(this.stripePK);
      this.elements = this.stripe.elements();
      const element = this.elements.create("card", { hidePostalCode: true });
      element.on("change", (event) => {
        this.paymentError.status = false;
        this.enableCheckout = event.complete === true;
      });

      element.mount("#stripe-mount");
    },
    onPaymentIntentCreated(details) {
      /* save payment intent id */
      this.paymentIntentId = details.intentId;
      this.gatewayToken = details.gatewayToken;

      /* act according to gateway */
      if (this.gatewayName === "razorpay")
        this.setupRazorpayOrder(details.gatewayToken, details.amount);
    },
    setupRazorpayOrder(orderId, amount) {
      const { firstName, surName, email, mobileNumber } = this.deliveryAddress;
      let options = {
        key: this.razorpayKeyId, // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Bounipun Ecom",
        description: "Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        prefill: {
          name: firstName + " " + surName,
          email: email,
          contact: mobileNumber,
        },
        theme: {
          color: "#3399cc",
        },
        handler: async (response) => {
          console.log(response);

          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            response;

          /* complete checkout routine */
          const completeCheckout = await this.$post("/razorpayPaymentSuccess", {
            razorpay_order_id,
            transactionId: razorpay_payment_id,
          });

          if (completeCheckout.resolved === false) {
            return;
          }

          /* move to order placed page */
          this.$store.dispatch("customer/fetchCart");
          this.$router.push("/order-placed-successfully");
        },
      };

      /* razorpay anchor */
      this.razorpayCheckout = new Razorpay(options);
      this.enableCheckout = true;
    },
    async stripeCheckout() {
      if (this.processingStripe) return;

      this.processingStripe = true;

      const cardElement = this.elements.getElement("card");
      this.$store.commit("customer/setLoading", true);
      /* create payment methods from card details  */
      const { paymentMethod, error: pmError } =
        await this.stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: this.stripeBillingAddress,
        });
      this.$store.commit("customer/setLoading", false);

      /* if error occured while generating payment method */
      if (pmError) {
        console.log("could not process payment method request");
        this.paymentError.msg =
          "Could not process payment. Kindly try after sometime.";
        this.paymentError.status = true;
        this.processingStripe = false;
        return;
      }

      console.log(paymentMethod);

      /* process card payment */
      this.$store.commit("customer/setLoading", true);

      const { error } = await this.stripe.confirmCardPayment(
        this.gatewayToken,
        {
          payment_method: paymentMethod.id,
          shipping: this.stripeShippingObject,
        }
      );
      this.$store.commit("customer/setLoading", false);
      this.processingStripe = false;

      /* if error occurred while processing card payment */
      if (error) {
        console.log("could not process STRIPE PAYMENT");
        console.log(error);
        this.paymentError.msg =
          "We are facing some technical difficulties at the moment. Kindly, try again after sometime.";
        this.paymentError.status = true;
        return;
      }

      /* move to order placed page */
      this.$store.dispatch("customer/fetchCart");
      this.$router.push("/order-placed-successfully");
    },
  },
};
