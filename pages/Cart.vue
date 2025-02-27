<template>
  <div class="cart page -wh">
    <div class="page-header center">
      <h2 class="title">Shopping Bag</h2>
    </div>
    <!-- cart item + actions container -->
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
        <div
          v-if="!cartEmpty"
          class="coupon-box flex col center"
          :style="couponSuggestions.length > 0 ? `border: 0.5px dotted #a8a8a8; padding: 10px` : ''"
        >
          <div class="input flex center col">
            <!-- code input box -->
            <InputCredential
              v-model="couponCode"
              label="Enter Promo Code (optional)"
              :uppercase="true"
              :checked="couponApplied"
              :disabled="couponApplied"
              :fullWidth="true"
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

            <!-- coupon suggestions -->
            <div
            v-if="couponSuggestions.length > 0"
              class="flex col center coupon-suggestions"
              style="width: 100%; margin: 25px 0; row-gap: 30px"
            >
              <CouponSuggestion
                v-for="suggestion in couponSuggestions"
                @selection="selectCoupon(suggestion.code)"
                :key="suggestion._id"
                :code="suggestion.code"
                :text="suggestion.text"
              />
            </div>
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
          <!-- shipping disclaimer -->
          <p class="note disclaimer">{{ shippingDisclaimer }}</p>

          <!-- consent for combined delivery -->
          <div class="pad">
            <Checkbox
              label="Receive all items in this order as a single package."
              v-model="combinedDeliveryConsent"
            />

            <!-- shipping note -->
            <p
              v-if="$store.state.customer.combinedDeliveryConsent"
              class="note"
            >
              Combined Standard shipping for the whole order:
              {{ maximumShippingTime }} weeks
            </p>
          </div>
        </div>

        <!-- gift message -->
        <div v-if="giftMessagesAvailable" class="gift-box">
          <Checkbox
            label="Personalised Gift Card Message"
            v-model="gift.status"
          />

          <GiftMessage
            v-if="gift.status"
            @close="gift.status = false"
            v-model="gift"
            :error="giftError"
            @input="giftError.status = false"
          />
        </div>

        <br />

        <!-- proceed to address page-->
        <div v-if="!cartEmpty" class="proceed flex center">
          <button @click="moveToDeliveryPage" class="action">
            Proceed To Buy
          </button>
        </div>
      </div>
    </div>

    <!-- cart empty -->
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
export default {
  head() {
    return {
      title: "Cart | Bounipun Kashmir",
    };
  },
  data() {
    return {
      cartDetails: [],
      couponCode: "",
      couponError: {
        status: false,
        message: "This coupon code is not valid",
      },
      remoteCartItems: this.$store.state.customer.globalRemoteCart,
      combinedDeliveryConsent: true,
      gift: {
        status: false,
        to: "",
        from: "",
        message: "",
      },
      giftMessagesAvailable: false,
      giftError: { status: false, msg: "" },
      couponSuggestions: [],
    };
  },
  watch: {
    $route(newVal) {
      console.log("movedd", newVal);
    },
    combinedDeliveryConsent: {
      handler(newVal) {
        this.$store.commit("customer/setCombinedDeliveryConsent", newVal);
      },
      immediate: true,
    },
  },
  mounted() {
    setTimeout(async () => {
      this.couponCode = this.coupon.code;
      this.$store.dispatch("customer/fetchCart");
      this.$store.dispatch("customer/fetchCoupon", this.coupon.code);
      await this.$store.dispatch("customer/fetchGlobalConfig");
      console.log("fetched global config");
      this.fetchCouponSuggestions();
      this.giftMessagesAvailable = this.$featureAvailable("giftMessages");
    }, 300);
  },
  computed: {
    maximumShippingTime() {
      if (this.cartEmpty) return 1;
      const allTimes = this.$store.state.customer.globalRemoteCart.map(
        (item) => item.shippingTime
      );
      const maximumShippingTime = Math.max(...allTimes);
      return maximumShippingTime;
    },
    shippingDisclaimer() {
      if (this.$store.state.customer.currency === "INR")
        return this.$store.state.customer.globalConfig
          .shippingDisclaimerDomestic;
      else
        return this.$store.state.customer.globalConfig
          .shippingDisclaimerInternational;
    },
    currency() {
      return this.$store.state.customer.currency + " ";
    },
    cartEmpty: function () {
      return (
        this.$store.state.customer.globalRemoteCart === false ||
        this.$store.state.customer.globalRemoteCart.length === 0
      );
    },
    cartLength() {
      return this.$store.state.customer.globalRemoteCart;
    },
    coupon() {
      return this.$store.state.customer.coupon;
    },
    couponApplied() {
      return this.$store.state.customer.coupon.applied === true;
    },
    cartTotal() {
      return this.$store.getters["customer/getCartTotal"];
    },
  },
  methods: {
    async selectCoupon(code) {
      if (code === this.couponCode) return;
      /* remove existing applied coupon */
      await this.$store.commit("customer/setCoupon", {
        applied: false,
        code: "",
      });
      /* applying new code */
      setTimeout(() => {
        this.couponCode = code;
        this.applyCoupon();
      }, 100);
    },
    async fetchCouponSuggestions() {
      const result = await this.$post('/fetchValidCoupons', {currency: this.$store.state.customer.currency});
      this.couponSuggestions = result?.response?.coupons;
    },
    moveToDeliveryPage() {
      const { to, from, message, status } = this.gift;

      if (status) {
        /* validate fields */
        const validatedTo = to.trim() !== "";
        const validatedFrom = from.trim() !== "";
        const validated = validatedTo && validatedFrom;

        // if(!validated)
        //   return this.giftError = { status: true, msg: 'To & From field cannot be left blank'}
      }

      this.$store.commit(
        "customer/setGiftMessage",
        this.gift.status ? this.gift : { status: false }
      );
      this.$router.push("/delivery-address");
    },
    async applyCoupon() {
      if (this.couponApplied === false) {
        const couponDetails = await this.$store.dispatch(
          "customer/fetchCoupon",
          this.couponCode
        );
        this.couponError.status = couponDetails === false;
      } else {
        this.couponCode = ''
        const radioButtons = document.getElementsByClassName('coupon-select')
        radioButtons.forEach(button => button.checked = false)
        this.$store.commit("customer/setCoupon", { applied: false, code: "" });
      }
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
          cartItem: item,
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
          cartItem,
        });

      await this.$store.dispatch("customer/fetchCart");
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  // margin-top: calc($pageMarginTop + 2vh);
  padding-top: 6%;
  min-height: 90vh;
  display: grid;

  .title {
    font-size: 25px !important;
  }
}

.cart-container {
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  // padding-left: 5%;

  .cart-items {
    width: 60%;
    // background-color: hotpink;
  }

  .actions {
    width: 30%;
    // background-color: greenyellow;

    @media (min-width: 769px) {
      // top: calc($pageMarginTop + 1vh);
      min-height: 89vh;
      z-index: 2;
      overflow: hidden;
      padding: 0 1%;
    }
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
    width: 100%;
    .apply {
      margin-top: 4px;
      // padding: 1px;
      font-size: 14px;
      // width: 70%;
      // background-color: #32a77c;
      background-color: #333;

      &.applied {
        background-color: rgb(188, 34, 34);
        // width: 30%;
        // font-size: 12px;
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
      font-size: 13px;
    }
  }
}

.delivery-specific {
  .note {
    // background-color: #32a77c;
    background-color: #333;
    margin-top: 5px;
    color: white;
    padding: 2px 10px;
    font-size: 11px;
    font-family: $font_1;
    // margin-top: 10px;
    text-align: center;
    &.disclaimer {
      // color: #32a77c;
      color: #333;
      background-color: transparent;
    }
  }
}

.gift-box {
  margin-top: 10px;
}

.proceed {
  width: 100%;
}
</style>
