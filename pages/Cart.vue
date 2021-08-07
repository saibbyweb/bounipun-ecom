<template>
  <div class="cart page -wh">
    <div class="page-header center">
      <h2 class="title">Shopping Bag</h2>
    </div>

    <div v-if="!cartEmpty" class="cart-container flex">
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
      <!-- actions -->
      <div class="actions">
        <!-- coupon box -->
        <div v-if="!cartEmpty" class="coupon-box flex col center">
          <div class="input flex center col">
            <!-- code input box -->
            <InputCredential
              v-model="couponCode"
              label="Enter Promo Code (optional)"
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
              {{ couponApplied ? "Remove" : "Apply Promo Code" }}
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
        <div class="order-total-container">
          <OrderTotal v-if="!cartEmpty" />
        </div>

        <!-- TODO: show combined standard shipping note (dependent on global config and order history) -->

        <div class="delivery-specific">
          <!-- shipping note -->
          <p v-if="$store.state.customer.combinedDeliveryConsent" class="note">
            Combined Standard shipping for the whole order:
            {{ maximumShippingTime }} weeks
          </p>
          
          <!-- shipping disclaimer -->
          <p class="note"> {{ shippingDisclaimer }} </p>

          <!-- consent for combined delivery -->
          <div class="pad-10">
            <Checkbox
              label="I would like receive all items in the order as a single package."
              v-model="combinedDeliveryConsent"
            />
          </div>
        </div>

        <!-- proceed to address page-->
        <div v-if="!cartEmpty" class="proceed flex center">
          <button @click="$router.push('/delivery-address')" class="action">
            Proceed To Buy
          </button>
        </div>
      </div>
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
  head() {
    return {
      title: "Cart | Bounipun Kashmir"
    };
  },
  data() {
    return {
      cartDetails: [],
      couponCode: "",
      couponError: {
        status: false,
        message: "This coupon code is not valid"
      },
      remoteCartItems: this.$store.state.customer.globalRemoteCart,
      combinedDeliveryConsent: true
    };
  },
  watch: {
    $route(newVal) {
      console.log("movedd", newVal);
    },
    combinedDeliveryConsent: {
      handler(newVal) {
        console.log(newVal, "--well");
        this.$store.commit("customer/setCombinedDeliveryConsent", newVal);
      },
      immediate: true
    }
  },
  mounted() {
    // this.$ga.page('/cart');
    console.log("mounted");


    setTimeout(() => {
      this.couponCode = this.coupon.code;
      this.$store.dispatch("customer/fetchCart");
      this.$store.dispatch("customer/fetchCoupon", this.coupon.code);
      this.$store.dispatch("customer/fetchGlobalConfig");
    }, 300);
  },
  computed: {
    maximumShippingTime() {
      if(this.cartEmpty)
        return 1;
      const allTimes = this.$store.state.customer.globalRemoteCart.map(
        item => item.shippingTime
      );
      const maximumShippingTime = Math.max(...allTimes);
      return maximumShippingTime;
    },
    shippingDisclaimer() {
      if(this.$store.state.customer.currency === "INR")
        return this.$store.state.customer.globalConfig.shippingDisclaimerDomestic
      else
        return this.$store.state.customer.globalConfig.shippingDisclaimerInternational
    },
    currency() {
      return this.$store.state.customer.currency + " ";
    },
    cartEmpty: function() {
      return this.$store.state.customer.globalRemoteCart === false || this.$store.state.customer.globalRemoteCart.length === 0
    },
    cartLength() {
      return this.$store.state.customer.globalRemoteCart
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
    test() {
      console.log(process.env.RAZORPAY_KEY_ID_TEST);
      console.log(process.env.RAZORPAY_KEY_ID_PROD);
      console.log(process.env.NODE_ENV)
        // if(process.env.NODE_ENV === 'production') {
        console.log(window.host);
      // }
    },
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
.cart {
  margin-top: 12vh;
  min-height: 89vh;

  .title {
    font-size: 25px !important;
  }
}
.cart-container {
  width: 100%;
  justify-content: flex-start;
  padding-left: 5%;

  .cart-items {
    width: 50%;
    // overflow-y: scroll;
  }
  .actions {
    width: 30%;
    background-color:white;
    @media (min-width: 769px) {
      position: fixed;
      right: 5%;
      top: 11vh;
      height: 88vh;
      z-index: 4;
      overflow: hidden;
      padding:1%;
    }
    // background: red;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0%;
    .cart-items {
      width: 100%;
    }
    .actions {
      width: 100%;
      padding: 0 20px;
    }
  }
}

/* coupon box */
.coupon-box {
  .input {
    width: 70%;
    .apply {
      width: 70%;
      background-color: #32a77c;

      &.applied {
        background-color: rgb(188, 34, 34);
        width: 30%;
        font-size: 12px;
      }
    }

    @media (max-width: 768px) {
      width: 90%;
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
.delivery-specific {
  .note {
    background-color: #32a77c;
    color: white;
    padding: 4px 10px;
    font-size: 12px;
    font-family: $font_1;
    // margin-top: 10px;
    text-align: center;
  }
}

.proceed {
  width: 100%;
}
</style>
