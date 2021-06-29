<template>
  <div class="order-total">
    <!-- cart total -->
    <div class="data-point flex between">
      <span class="name"> Cart Total: </span>
      <span class="value"> {{ currency }} {{ cartTotal }} </span>
    </div>
    <!-- discount -->
    <div class="data-point flex between">
      <span class="name green"> Discount: </span>
      <span class="value green small"> - {{ currency }} {{ discountValue }} </span>
    </div>

    <hr />

    <!-- sub total -->
    <div class="data-point flex between">
      <span class="name"> Sub-Total: </span>
      <span class="value"> {{ currency }} {{ subTotal }} </span>
    </div>

    <!-- shipping charge -->
    <div class="data-point flex between">
      <span class="name"> Shipping Charge: </span>
      <span v-if="!zeroShippingCharge" class="value small">
        {{ `+ ${currency} ${shippingCharge}` }}
      </span>
      <span v-else class="value green small">
        Free Shipping
      </span>
    </div>
    <!-- taxes -->
    <div class="data-point flex between">
      <span class="name"> Taxes: </span>
      <span v-if="!zeroTaxes" class="value small">  {{ `+ ${currency} ${taxes}` }} </span>
      <span v-else class="value green small"> Tax Included </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currency() {
      return this.$store.state.customer.currency + " ";
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
        case "directDiscount":
          discountValue = this.coupon.value;
          break;
      }
      return discountValue.toFixed(2);
    },
    shippingCharge() {
      /* calculate the total number of item in total (sum of all quantities) */
      const totalCartItems = this.$store.getters["customer/getTotalCartItems"];
      const shippingCharge =
        this.$store.getters["customer/getShippingCharge"] * totalCartItems;
      return shippingCharge.toFixed(2);
    },
    zeroShippingCharge() {
      return this.shippingCharge === "0.00";
    },
    taxes() {
      const taxPercentage = this.$store.getters["customer/getTaxPercentage"];
      const taxableAmount = this.subTotal * (taxPercentage / 100);
      return taxableAmount.toFixed(2);
    },
    zeroTaxes() {
      return this.taxes === "0.00";
    },
    subTotal() {
      const subTotal = this.cartTotal - this.discountValue;
      return subTotal.toFixed(2);
    },
    cartTotal() {
      return this.$store.getters["customer/getCartTotal"].toFixed(2);
    },
    cartCount() {
      return this.$store.getters["customer/cartCount"];
    }
  }
};
</script>

<style lang="scss" scoped>
.order-total {
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
  margin: 5%;
  padding: 10px;

  .data-point {
    .name {
      color: $gray;
      font-family: $font_1;
      text-transform: uppercase;
         &.green {
        color: rgb(37, 154, 107);
      }
    }
    .value {
      color: $dark_gray;
      font-size: 17px;
      font-family: $font_2_bold;

      &.green {
        color: rgb(37, 154, 107);
      }

      &.small {
          font-family: $font_2;
          font-size: 16px;
      }
    }
  }
}
</style>
