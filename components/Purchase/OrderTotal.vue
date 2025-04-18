<template>
  <div class="order-total">
    <!-- cart total -->
    <div class="data-point flex between">
      <p class="name">
        Cart Total: <span class="count"> {{ cartCount }} Items (s) </span>
      </p>
      <span class="value"> {{ formatCurrency(cartTotal) }} </span>
    </div>
    <hr />
    <!-- discount -->
    <div v-if="couponApplied" class="data-point flex between">
      <span class="name green"> Discount: </span>
      <span class="value green small">
        - {{ formatCurrency(discountValue) }}
      </span>
    </div>

    <hr v-if="couponApplied" />

    <!-- sub total -->
    <div v-if="couponApplied" class="data-point flex between">
      <span class="name"> Sub-Total: </span>
      <span class="value">  {{ formatCurrency(subTotal) }} </span>
    </div>
    <hr v-if="couponApplied" />

    <!-- shipping charge -->
    <div class="data-point flex between">
      <span class="name"> Shipping: </span>
      <span v-if="!zeroShippingCharge" class="value small">
        +{{ formatCurrency(shippingCharge) }}
      </span>
      <span v-else class="value green small">
        Free Shipping
      </span>
    </div>
    <hr />

    <!-- taxes -->
    <div class="data-point flex between">
      <span class="name"> Taxes: </span>
      <span v-if="!zeroTaxes" class="value small">
        + {{ taxes }}
      </span>
      <span v-else class="value green small"> Tax Included </span>
    </div>

    <hr />

    <!-- grand total -->
    <div class="data-point grand-total flex between">
      <p class="name flex center col">
        Grand Total: <br />
      </p>
      <span class="value"> {{ formatCurrency(grandTotal) }} </span>
    </div>
  </div>
</template>

<script>
import CurrencyHelper from "../../helpers/currencyHelper.js";
export default {
  mixins: [CurrencyHelper],
  mounted() {
    setTimeout(() => {
      if (this.initializeCheckout) this.createPaymentIntent();
    }, 1000);
  },
  props: {
    initializeCheckout: {
      type: Boolean,
      default: false
    },
    deliveryAddress: Object
  },
  computed: {
    gatewayName() {
      return this.currency === "INR" ? "razorpay" : "stripe";
    },
    cartEmpty: function() {
      return this.$store.state.customer.globalRemoteCart.length === 0;
    },
    coupon() {
      return this.$store.state.customer.coupon;
    },
    couponApplied() {
      return this.$store.state.customer.coupon.applied === true;
    },
    discountValue() {
      if (!this.couponApplied) return 0;

      /* cross check currency once again */
      let discountValue = 0;
      switch (this.coupon.type) {
        case "percentage":
          discountValue = this.cartTotal * (this.coupon.value / 100);
          break;
        case "direct-discount":
          discountValue = this.coupon.value;
          break;
      }
      return discountValue.toFixed(2);
    },
    shippingCharge() {
      /* calculate the total number of items in total (sum of all quantities) */
      const totalCartItems = this.$store.getters["customer/getTotalCartItems"];
      const shippingCharge =
        this.$store.getters["customer/getShippingCharge"] * totalCartItems;
      return shippingCharge.toFixed(2);
    },
    zeroShippingCharge() {
      return this.shippingCharge === "0.00";
    },
    taxes() {
      /* not used at all (taxes are included) */
      const taxPercentage = this.$store.getters["customer/getTaxPercentage"];
      const taxableAmount = this.subTotal * (taxPercentage / 100);
      return taxableAmount.toFixed(2);
    },
    zeroTaxes() {
      return this.taxes === "0.00";
    },
    subTotal() {
      let subTotal = this.cartTotal - this.discountValue;
      return subTotal.toFixed(2);
    },
    cartTotal() {
      const cartTotal = this.$store.getters["customer/getCartTotal"];
      return cartTotal.toFixed(2);
    },
    cartCount() {
      return this.$store.getters["customer/getCartCount"];
    },
    grandTotal() {
      let grandTotal =
        parseFloat(this.subTotal) +
        parseFloat(this.shippingCharge) +
        parseFloat(this.taxes);
      return grandTotal.toFixed(2);
    }
  },
  methods: {
    async createPaymentIntent() {
      const paymentIntentFetch = await this.$post("/createPaymentIntent", {
        intentType: "order",
        amountToBeCharged: this.grandTotal,
        currency: this.currency.trim(),
        gateway: this.gatewayName,
        couponCode: this.coupon.code,
        deliveryAddress: this.deliveryAddress,
        combinedDeliveryConsent: this.$store.state.customer.combinedDeliveryConsent,
        giftMessage: this.$store.state.customer.giftMessage
      });

      console.log(paymentIntentFetch);

      if(paymentIntentFetch.resolved === false) {
        return;
        /* refresh or move to cart */
        // this.$router.push('/cart');
      }

      this.$emit('paymentIntentCreated', paymentIntentFetch.response);
    }
  }
};
</script>

<style lang="scss" scoped>
.order-total {
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
  margin: 5% 0;
  padding: 5px 10px;
  box-sizing: border-box;

  .data-point {
    margin: 1px 0;

    .name {
      color: $gray;
      font-family: $font_1;
      font-size: 13px;
      // text-transform: uppercase;

      &.green {
        color: rgb(37, 154, 107);
      }
    }

    .value {
      color: $dark_gray;
      font-size: 15px;
      font-family: $font_2;

      &.small {
        font-family: $font_1;
        font-size: 13px;
      }

      &.green {
        color: rgb(37, 154, 107);
        // text-transform: uppercase;
      }
    }
  }

  .grand-total {
    .name {
      font-family: $font_1;
    }
    .value {
      font-family: $font_1_bold;
    }
  }

  .count {
    color: $dark_gray;
    font-size: 12px;
    font-family: $font_2_bold;
  }

  hr {
    opacity: 0.5;
  }
}
</style>
