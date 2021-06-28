<template>
  <div class="cart page -wh">
    <div class="page-header center">
      <h2 class="title">Shopping Bag</h2>
    </div>

    <!-- cart items -->
    <div class="cart-items">
      <CartItem
        v-for="(item, index) in $store.state.customer.globalRemoteCart"
        :item="item"
        :key="index"
        @updateQuantity="updateQuantity"
        @removeItem="removeItem"
      />
    </div>

    <!-- sub total -->
    <div v-if="!cartEmpty" class="sub-total">
      <p class="label text">
        Sub Total <br />
        <span class="length"> {{ $store.getters['customer/cartCount']() }} Item(s) : </span>
      </p>
      <span class="value text"> {{ currency }} {{ subTotal }} </span>
    </div>

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
import colorPickerVue from "../components/admin/colors/colorPicker.vue";
export default {
  data() {
    return {
      cartDetails: [],
      remoteCartItems: this.$store.state.customer.globalRemoteCart
    }
  },
  watch: {
    $route(newVal) {
      console.log("movedd", newVal);
    }
  },
  mounted() {
    console.log("mounted");
    setTimeout(() => {
      this.$store.dispatch('customer/fetchCart');
    }, 300);
  },
  computed: {
        currency() {
      return this.$store.state.customer.currency + ' ';
    },
    cartEmpty: function() {
      return this.$store.state.customer.globalRemoteCart.length === 0;
    },
    subTotal() {
      return sumBy(this.$store.state.customer.globalRemoteCart, item => this.adjustPrice(item.price) * item.quantity);
    }
  },
  methods: {
        adjustPrice(price) {
      price = parseInt(price);
      return this.$store.getters['customer/adjustPrice'](price);
    },
    async updateQuantity(payload) {
      const { item: vuexItem, operation } = payload;
      let item = {...vuexItem}
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
      }
      else
        await this.$post('/cartActions', {
          action: 'update-quantity',
          cartItem: item
        })

      await this.$store.dispatch('customer/fetchCart');
      this.$forceUpdate();
    },
    async removeItem(cartItem) {
      /* for guests */
      if (!this.$store.state.customer.authorized) {
        this.$store.commit("customer/removeFromCart", cartItem);
      }
      else
      await this.$post('/cartActions', {
        action: 'remove-from-cart',
        cartItem
      })
      
      await this.$store.dispatch('customer/fetchCart');
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-items {
  .cart-item {
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
    margin: 20px;
    position: relative;
    height: 45vw;
    /* cart item thumbnail/image */
    .image-container {
      width: 35%;
      height: 90%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      img {
        width: 100%;
      }
    }
    /* cart item details and quantity input */
    .details-and-quantity {
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        color: $gray;
        font-size: 11px;
        display: inline-block;
        &.name {
          color: $dark_gray;
          font-family: $font_1_bold;
          text-transform: uppercase;
          font-size: 13px;
        }
        &.collection {
          font-family: $font_2;
          font-size: 11px;
          margin-bottom: 4px;
        }
        &.price {
          color: $dark_gray;
          font-family: $font_1;
          font-size: 12px;
        }
        &.variant {
          font-weight: 900;
          color: $dark_gray;
        }
      }

      .quantity-picker {
        margin-top: 7px;
        display: flex;
        justify-content: space-around;
        border: 1px solid #919191;
        width: 80px;

        button {
          background: transparent;
          font-family: $font_1_bold;
          text-align: center;
          padding: 0px;
          font-size: 10px;

          &:first-child {
            border-right: 1px solid #919191;
            padding: 0 5px;
          }

          &:nth-child(3) {
            border-left: 1px solid #919191;
            padding: 0 5px;
          }

          &.qty {
            width: 50%;
            padding: 0 15px;
          }
        }
      }
    }
    /* remove icon */
    .remove-item {
      position: absolute;
      right: 3%;
      top: 10%;
      width: 6%;
    }
    /* total product price */
    .total-product-price {
      font-family: $font_1_bold;
      position: absolute;
      bottom: 10%;
      right: 3%;
      color: $dark_gray;
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
