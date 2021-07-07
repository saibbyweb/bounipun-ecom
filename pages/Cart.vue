<template>
  <div class="cart page -wh">
    <div class="page-header center">
      <h2 class="title">Shopping Bag</h2>
    </div>

    <!-- cart items -->
    <div class="cart-items flex center col">
      <CartItem
        v-for="(item, index) in $store.state.customer.globalRemoteCart"
        :item="item"
        :key="index"
        @updateQuantity="updateQuantity"
        @removeItem="removeItem"
      />
    </div>

    <!-- coupon box -->
    <div v-if="!cartEmpty" class="coupon-box flex col center">
      <div class="input flex center col">
        <!-- code input box -->
        <InputCredential
          v-model="couponCode"
          label="Enter Coupon Code (optional)"
          :uppercase="true"
          :checked="couponApplied"
          :disabled="couponApplied"
          @input="couponError.status = false"
        />

        <!-- apply button -->
        <button
          @click="applyCoupon"
          class="action apply"
          :class="{ applied: couponApplied }"
        >
          {{ couponApplied ? "Remove" : "Apply Coupon" }}
        </button>
      </div>

      <!-- coupon applied -->
      <div class="applied"></div>
      <!-- coupon error -->
      <p v-if="couponError.status" class="error msg">
        {{ couponError.message }}
      </p>
    </div>

    <!-- order total -->
    <OrderTotal v-if="!cartEmpty" />

    <!-- TODO: show grand total (with coupon discount) -->
    <!-- TODO: show combined standard shipping note (dependent on global config and order history) -->

    <!-- proceed to address page-->
    <div v-if="!cartEmpty" class="pad-10">
      <button @click="$router.push('/delivery-address')" class="action">
        Proceed To Buy
      </button>
    </div>

    <div v-if="cartEmpty" class="side-pad">
      <ActionResponse
        icon="/icons/cart_empty.png"
        title="Bag Empty"
        message="Your bag is currently empty."
        action="Continue Shopping"
      />
    </div>
  </div>
</template>

<script>
import sumBy from "lodash/sumBy";
// import colorPickerVue from "../components/admin/colors/colorPicker.vue";
// import InputBox from "../components/admin/input/InputBox.vue";
export default {
  data() {
    return {
      cartDetails: [],
      couponCode: "",
      couponError: {
        status: false,
        message: "This coupon code is not valid"
      },
      remoteCartItems: this.$store.state.customer.globalRemoteCart
    };
  },
  watch: {
    $route(newVal) {
      console.log("movedd", newVal);
    }
  },
  mounted() {
    console.log("mounted");

    setTimeout(() => {
      this.couponCode = this.coupon.code;
      this.$store.dispatch("customer/fetchCart");
      this.$store.dispatch("customer/fetchCoupon", this.coupon.code);
        this.$store.dispatch('customer/fetchGlobalConfig');
    }, 300);
  },
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
    cartTotal() {
      return this.$store.getters["customer/getCartTotal"];
    }
  },
  methods: {
    async applyCoupon() {
      if (this.couponApplied === false) {
        const couponDetails = await this.$store.dispatch(
          "customer/fetchCoupon",
          this.couponCode
        );
        this.couponError.status = couponDetails === false;
      } else
        this.$store.commit("customer/setCoupon", { applied: false, code: "" });
    },
    adjustPrice(price) {
      price = parseInt(price);
      return this.$store.getters["customer/adjustPrice"](price);
    },
    async updateQuantity(payload) {
      const { item: vuexItem, operation } = payload;
      let item = { ...vuexItem };
      switch (operation) {
        case "decrease":
          if (item.quantity > 1) item.quantity--;
          else return;
          break;
        case "increase":
          if (item.quantity < 3) item.quantity++;
          else return;
          break;
      }

      console.log(payload);
      /* if user is guest */
      if (!this.$store.state.customer.authorized) {
        this.$store.commit("customer/updateQuantity", item);
      } else
        await this.$post("/cartActions", {
          action: "update-quantity",
          cartItem: item
        });

      await this.$store.dispatch("customer/fetchCart");
      this.$forceUpdate();
    },
    async removeItem(cartItem) {
      /* for guests */
      if (!this.$store.state.customer.authorized) {
        this.$store.commit("customer/removeFromCart", cartItem);
      } else
        await this.$post("/cartActions", {
          action: "remove-from-cart",
          cartItem
        });

      await this.$store.dispatch("customer/fetchCart");
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-items {
 
}
/* coupon box */
.coupon-box {
  .input {
    width: 70%;
    .apply {
      width: 70%;
      background-color: rgb(86, 152, 86);

      &.applied {
        background-color: rgb(188, 34, 34);
        width: 30%;
        font-size: 12px;
      }
    }
  }
}
.sub-total {
  display: flex;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
  margin: 10%;
  justify-content: center;
  align-items: center;

  .text {
    font-family: $font_1_bold;
    font-size: 12px;
    padding: 10px;
    margin: 0 3px;

    .length {
      color: $dark_gray;
      font-family: $font_1_bold;
    }
  }

  p {
    &.label {
      color: $gray;
      font-family: $font_1;
      text-transform: uppercase;
    }
  }
  span {
    &.value {
      color: $dark_gray;
      font-size: 17px;
    }
  }
}
</style>
