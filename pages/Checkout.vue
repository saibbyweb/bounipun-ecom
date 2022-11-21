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
          <OrderTotalV2
            v-if="!cartEmpty"
            :deliveryAddress="deliveryAddress"
            :initializeCheckout="true"
            @getOrderRequestDetails="onOrderRequestDetailsReceived"
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

          <!-- overview + payment completion -->
          <div v-if="ORDER_REQUEST_DETAILS_FETCHED" class="payment-overview flex center">
            <ProcessPayment
              type="order"
              :currency="ORDER_REQUEST_DETAILS.currency"
              :amount="ORDER_REQUEST_DETAILS.amount"
              :address="ORDER_REQUEST_DETAILS.deliveryAddress"
              :payload="{
                couponCode: ORDER_REQUEST_DETAILS.couponCode,
                combinedDeliveryConsent: ORDER_REQUEST_DETAILS.combinedDeliveryConsent,
                deliveryAddress: ORDER_REQUEST_DETAILS.deliveryAddress,
                giftMessage: ORDER_REQUEST_DETAILS.giftMessage,
              }"
              :demoMode="false"
              @paymentProcessed="paymentProcessed"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import currencyHelper from "../helpers/currencyHelper.js";
import { loadStripe } from "@stripe/stripe-js";
import { RAZORPAY_KEY_ID, STRIPE_PUBLISHABLE_KEY } from "../helpers/MiscHelper";

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
    //   if (this.currency !== "INR") this.initializeStripe();
    };

    work();
  },
  data() {
    return {
      deliveryAddress: this.$route.params.deliveryAddress,
      // deliveryAddress: demoDeliveryAddress,
      remoteCartItems: this.$store.state.customer.globalRemoteCart,
      paymentError: {
        status: false,
        msg: "",
      },
      ORDER_REQUEST_DETAILS_FETCHED: false,
      ORDER_REQUEST_DETAILS: {}
    };
  },
  computed: {
    cartEmpty: function () {
      return this.$store.state.customer.globalRemoteCart.length === 0;
    },
    coupon() {
      return this.$store.state.customer.coupon;
    },
    /* TODO: copied */
    gatewayName() {
      return this.currency === "INR" ? "razorpay" : "stripe";
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
    onOrderRequestDetailsReceived(details) {
        // console.clear();
        console.log('✅ Order Request Details Fetched', details);
        this.ORDER_REQUEST_DETAILS = details;
        this.ORDER_REQUEST_DETAILS_FETCHED = true;
        // Vue.set(this.ORDER_REQUEST_DETAILS, details)
    },
    paymentProcessed() {
      console.log('✅ Payment has been processed, now do something')
    }
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
    &:hover {
      background-color: gray;
    }
  }
}
</style>
