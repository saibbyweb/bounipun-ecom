<template>
  <div class="cart page -wh">
    <!-- checkout header -->
    <div class="page-header center">
      <h2 class="title">Checkout</h2>
    </div>

    <!-- order overview -->
    <div class="order-overview">
      <!-- cart items -->
      <h3 class="section-heading">Products</h3>
      <div class="cart-items">
        <CartItem
          v-for="(item, index) in $store.state.customer.globalRemoteCart"
          :item="item"
          :key="index"
          :allowUpdate="false"
        />
      </div>
      <!-- delivery address -->
      <h3 class="section-heading">Delivery Address</h3>
      <div class="delivery-address">
        <span class="name">
          {{ deliveryAddress.firstName }} {{ deliveryAddress.surName }}
        </span>
        <span> {{ deliveryAddress.mobileNumber }} </span>
        <!-- <span> {{ deliveryAddress.email }} </span> -->
        <span> {{ deliveryAddress.addressLine1 }}</span>
        <span> {{ deliveryAddress.addressLine2 }} </span>
        <span> {{ deliveryAddress.city }} </span>
        <span> {{ deliveryAddress.postalCode }} </span>
      </div>

      <!-- TODO: show combined standard shipping note (dependent on global config and order history) -->
      <!-- TODO: show user consent checkbox for combined delivery for all items -->

      <!-- sub total -->
      <!-- <div v-if="!cartEmpty" class="sub-total">
        <p class="label text">
          Grand Total: <br />
          <span class="length">
            {{ $store.getters["customer/cartCount"] }} Item(s) :
          </span>
        </p>
        <span class="value text"> INR {{ subTotal }} </span>
      </div> -->

      <OrderTotal v-if="!cartEmpty" :deliveryAddress="deliveryAddress" :initializeCheckout="true" @paymentIntentCreated="onPaymentIntentCreated" />

      <!-- shipping note -->
      <p class="note">Standard shipping 4 weeks</p>

      <!-- TODO: START_FROM_HERE stripe card payment -->
      <h2 class="payment-title">Payment Information</h2>
      <div v-if="gatewayName === 'stripe'" id="stripe-mount" />
    </div>

    <!-- proceed to checkout -->
    <div class="pad-10">
      <button
        :class="{ disabled: !enableCheckout }"
        @click="placeOrder"
        class="action checkout-btn"
      >
        Place Order
      </button>
    </div>
  </div>
</template>

<script>
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
        color: "#fce883"
      },
      "::placeholder": {
        color: "green"
      }
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "red"
    }
  }
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
  postalCode: "190005"
};

export default {
  mounted() {
    /* this page should not be accessible to guest */

    /* fetch updated cart from user account */
    this.$store.dispatch("customer/fetchCart");
    this.$store.dispatch("customer/fetchCoupon", this.coupon.code);
    this.$store.dispatch('customer/fetchGlobalConfig');
    
    /* decide which gateway is to be used */

    /* if cart is empty redirect to cart | homepage */
    if(this.cartEmpty) {
      this.$router.push('/');
      return;
    }
    /* create payment intent */

    /* according to currency, setup payment options */

    this.initializeStripe();
    // if (this.currency.trim() === "INR") this.fetchRazorpayOrderId();
    // else this.initializeStripe();
  },
  data() {
    return {
      deliveryAddress: demoDeliveryAddress,
      // deliveryAddress: this.$route.params.deliveryAddress,
      remoteCartItems: this.$store.state.customer.globalRemoteCart,
      razorpayCheckout: null,
      stripe: null,
      enableCheckout: false,
      elements: null,
      orderDetails: {}
    };
  },
  computed: {
    currency() {
      return this.$store.state.customer.currency + " ";
    },
    cartEmpty: function() {
      return this.$store.state.customer.globalRemoteCart.length === 0;
    },
    subTotal() {
      return sumBy(
        this.$store.state.customer.globalRemoteCart,
        item => this.adjustPrice(item.price) * item.quantity
      );
    },
      coupon() {
      return this.$store.state.customer.coupon;
    },
    gatewayName() {
      return this.currency.trim() === "INR" ? "razorpay" : "stripe";
    }
  },
  methods: {
    adjustPrice(price) {
      price = parseInt(price);
      return this.$store.getters["customer/adjustPrice"](price);
    },
    async initializeStripe() {
      console.log();
      this.stripe = await loadStripe(process.env.STRIPE_PK);
      this.elements = this.stripe.elements();
      const element = this.elements.create("card", { hidePostalCode: true });
      element.on("change", event => {
        if (event.complete) this.enableCheckout = true;
        else this.enableCheckout = false;
      });
      element.mount("#stripe-mount");
    },
    async fetchRazorpayOrderId() {
      const razorpayOrder = await this.$post("/createRazorpayOrder", {
        amountToBeCharged: this.subTotal,
        deliveryAddress: this.deliveryAddress
      });

      if (razorpayOrder.resolved === false) return;

      console.log(razorpayOrder);

      this.setupRazorpayOrder(razorpayOrder.response.razorpayOrderId);
      /* save payment intent id */
      this.paymentIntentId = razorpayOrder.response.paymentIntentId;
    },
    onPaymentIntentCreated(details) {
      /* save payment intent id */
      this.paymentIntentId = details.intentId;
      
      /* act according to gateway */
      if(this.gatewayName === "razorpay")
        this.setupRazorpayOrder(details.gatewayToken, details.amount);
      

    },
    setupRazorpayOrder(orderId, amount) {
      let options = {
        key: "rzp_test_LnJPEC0MOtvlSn", // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Bounipun Ecom",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async response => {
          console.log(response);

          const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
          } = response;
        
          /* complete checkout routine */
          const completeCheckout = await this.$post("/completeCheckout", {
            gateway: "razorpay",
            gatewayResponse: {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature
            },
            paymentIntentId: this.paymentIntentId
          });

          if (completeCheckout.resolved === false) {
            return;
          }

          /* move to order placed page */
          this.$router.push("/order-placed-successfully");
        },
        prefill: {
          name:
            this.deliveryAddress.firstName + " " + this.deliveryAddress.surName,
          email: this.deliveryAddress.email,
          contact: this.deliveryAddress.mobileNumber
        },
        theme: {
          color: "#3399cc"
        }
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
    async stripeCheckout() {},

  }
};
</script>

<style lang="scss" scoped>
.order-overview {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cart-items {
    width: 90%;
  }

  .section-heading {
    text-transform: uppercase;
    font-family: $font_2;
    font-size: 15px;
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
  }

  .payment-title {
    margin-top: 20px;
  }

  #stripe-mount {
    margin-top: 20px;
    width: 80%;
    background-color: white;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
    padding: 3%;
  }
}
.checkout-btn {
  &.disabled {
    background-color: gray;
  }
}
</style>
