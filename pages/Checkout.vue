<template>
  <div class="checkout-page page -wh">
    <!-- checkout header -->
    <div class="page-header center">
      <h2 class="title">Checkout</h2>
    </div>

    <!-- order overview -->
    <div class="order-overview flex center">
      <!-- cart items -->
      <div class="cart-items flex center col">
        <h3 class="section-heading">Products</h3>

        <CartItem
          v-for="(item, index) in $store.state.customer.globalRemoteCart"
          :item="item"
          :key="index"
          :allowUpdate="false"
        />
      </div>

      <!-- delivery address and order total and payment specific-->
      <div class="d-o-p flex center col">
        <h3 class="section-heading">Delivery Address</h3>

        <!-- delivery address -->
        <div class="delivery-address">
          <span class="name">
            {{ deliveryAddress.firstName }} {{ deliveryAddress.surName }}
          </span>
          <span> {{ deliveryAddress.addressLine1 }}</span>
          <span> {{ deliveryAddress.addressLine2 }} </span>
          <span> {{ deliveryAddress.state || "" }} </span>
          <span> {{ deliveryAddress.city }} </span>
          <span> {{ deliveryAddress.postalCode }} </span>
          <span> {{ deliveryAddress.mobileNumber }} </span>
          <!-- <span> {{ deliveryAddress.email }} </span> -->
        </div>

        <!-- TODO: show combined standard shipping note (dependent on global config and order history) -->

        <div class="order-total-container">
          <OrderTotal
            v-if="!cartEmpty"
            :deliveryAddress="deliveryAddress"
            :initializeCheckout="true"
            @paymentIntentCreated="onPaymentIntentCreated"
          />
        </div>

        <!-- payment specific -->
        <div class="payment-specific flex center col">
          <!-- TODO: START_FROM_HERE stripe card payment -->

          <!-- shipping note -->
          <p v-if="$store.state.customer.combinedDeliveryConsent" class="note">
            Combined Standard shipping for the whole order:
            {{ maximumShippingTime }} weeks
          </p>

          <h2 v-if="gatewayName === 'stripe'" class="payment-title">
            Payment Information
          </h2>
          <div v-if="gatewayName === 'stripe'" id="stripe-mount" />

          <!-- payment error -->
          <p v-if="paymentError.status" class="msg error">
            {{ paymentError.msg }}
          </p>

          <!-- proceed to checkout -->

          <button
            :class="{ disabled: !enableCheckout }"
            @click="placeOrder"
            class="action checkout-btn"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import currencyHelper from "../helpers/currencyHelper.js";
import sumBy from "lodash/sumBy";
import { loadStripe } from "@stripe/stripe-js";
const style = {
  style: {
    base: {
      iconColor: "#000",
      color: "#000",
      fontWeight: "800",
      fontFamily: "Press Start 2P",
      fontSize: "22px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "green",
      },
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "red",
    },
  },
};

/* demo delivery address */
const demoDeliveryAddress = {
  firstName: "Suhaib",
  surName: "Khan",
  mobileNumber: "9906697711",
  email: "hello@saibbyweb.com",
  addressLine1: "H.no 54, Chinar Enclave",
  addressLine2: "Rawalpora, Near Masjid",
  city: "Srinagar",
  postalCode: "190005",
  countryIsoCode: "US",
};

export default {
  mixins: [currencyHelper],
  head() {
    return {
      title: "Checkout | Bounipun Kashmir",
    };
  },
  mounted() {
    const work = async () => {
      /* this page should not be accessible to guest */
      if (!this.$store.state.customer.authorized) return;

      /* set keys according to environment */
      this.setKeys();

      /* fetch updated cart from user account */
      await this.$store.dispatch("customer/fetchCart");
      await this.$store.dispatch("customer/fetchCoupon", this.coupon.code);
      await this.$store.dispatch("customer/fetchGlobalConfig");

      /* decide which gateway is to be used */

      /* if cart is empty redirect to cart | homepage */
      if (this.cartEmpty) {
        this.$router.push("/");
        return;
      }
      /* create payment intent */

      /* according to currency, setup payment options */
      if (this.currency !== "INR") this.initializeStripe();
    };

    work();
  },
  data() {
    return {
      deliveryAddress: this.$route.params.deliveryAddress,
      remoteCartItems: this.$store.state.customer.globalRemoteCart,
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
      orderDetails: {},
      combinedDeliveryConsent: true,
      razorpayKeyId: "",
      stripePK: "",
      processingStripe: false,
    };
  },
  computed: {
    cartEmpty: function () {
      return this.$store.state.customer.globalRemoteCart.length === 0;
    },
    coupon() {
      return this.$store.state.customer.coupon;
    },
    gatewayName() {
      return this.currency === "INR" ? "razorpay" : "stripe";
    },
    stripeBillingAddress() {
      return {
        name:
          this.deliveryAddress.firstName + " " + this.deliveryAddress.surName,
        email: this.deliveryAddress.email,
        address: {
          city: this.deliveryAddress.city,
          line1:
            this.deliveryAddress.addressLine1 +
            " | " +
            this.deliveryAddress.addressLine2,
          postal_code: this.deliveryAddress.postalCode,
          country: this.deliveryAddress.countryIsoCode,
        },
      };
    },
    stripeShippingObject() {
      return {
        address: {
          line1:
            this.deliveryAddress.addressLine1 +
            " " +
            this.deliveryAddress.addressLine2,
          country: this.deliveryAddress.countryIsoCode,
        },
        name:
          this.deliveryAddress.firstName + " " + this.deliveryAddress.surName,
      };
    },
    maximumShippingTime() {
      const allTimes = this.$store.state.customer.globalRemoteCart.map(
        (item) => item.shippingTime
      );
      const maximumShippingTime = Math.max(...allTimes);
      return maximumShippingTime;
    },
  },
  methods: {
    setKeys() {
      /* if environment is dev, use test keys */
      if (
        process.env.NODE_ENV === "development" ||
        process.env.MODE === "development"
      ) {
        this.razorpayKeyId = process.env.VITE_RAZORPAY_KEY_ID_TEST;
        this.stripePK = process.env.VITE_STRIPE_PK_TEST;
        return;
      }

      /* if environment is production, set live key only on main domain */
      if (process.env.NODE_ENV === "production") {
        switch (window.location.hostname) {
          case "bounipun.in":
            this.razorpayKeyId = process.env.RAZORPAY_KEY_ID_PROD;
            this.stripePK = process.env.STRIPE_PK_PROD;
            break;
          default:
            this.razorpayKeyId = process.env.RAZORPAY_KEY_ID_TEST;
            this.stripePK = process.env.STRIPE_PK_TEST;
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
        if (event.complete) this.enableCheckout = true;
        else this.enableCheckout = false;
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
      let options = {
        key: this.razorpayKeyId, // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Bounipun Ecom",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async (response) => {
          console.log(response);

          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            response;

          // /* complete checkout routine */
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
        prefill: {
          name:
            this.deliveryAddress.firstName + " " + this.deliveryAddress.surName,
          email: this.deliveryAddress.email,
          contact: this.deliveryAddress.mobileNumber,
        },
        theme: {
          color: "#3399cc",
        },
      };

      /* razorpay anchor */
      this.razorpayCheckout = new Razorpay(options);
      this.enableCheckout = true;
    },
    async placeOrder() {
      if (!this.enableCheckout) return false;

      if (this.currency.trim() === "INR") this.razorpayCheckout.open();
      else this.stripeCheckout();
      return;
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
</script>

<style lang="scss" scoped>
.checkout-page {
  margin-top: 12vh;

  .title {
    font-size: 30px !important;
  }
}

.order-overview {
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;

  .cart-items {
    width: 50%;
  }

  .d-o-p {
    width: 30%;

    // @media (min-width: 769px) {
    //   position: fixed;
    //   right: 5%;
    //   top: 10vh;
    //   height: 90vh;
    // }

    .delivery-address {
      width: 100%;
    }
    .order-total-container {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .cart-items {
      width: 100%;
    }
    .d-o-p {
      width: 100%;
      padding: 0 20px;
      .order-total-container {
      }
    }
  }

  .section-heading {
    text-transform: uppercase;
    font-family: $font_2;
    font-size: 20px;
    margin: 10px 0;
  }

  .delivery-address {
    margin-top: 20px;
    width: 80%;
    position: relative;
    background: rgb(255, 255, 255);
    padding: 3%;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);

    span {
      font-family: $font_2;
      font-size: 14px;
      margin: 2px 0;

      &.name {
        font-family: $font_1_bold;
        font-weight: 900;
      }
    }
  }

  .note {
    background-color: #32a77c;
    color: white;
    padding: 4px 10px;
    font-size: 12px;
    font-family: $font_1;
    // margin-top: 10px;
    text-align: center;
  }

  .error {
    width: 80%;
  }

  .payment-title {
    margin-top: 20px;
  }

  #stripe-mount {
    margin-top: 20px;
    width: 100%;
    background-color: white;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
    padding: 3%;
  }
}

.payment-specific {
  width: 100%;
}
.checkout-btn {
  width: 100%;
  margin-top: 20px;
  &.disabled {
    background-color: gray;
  }
}
</style>
