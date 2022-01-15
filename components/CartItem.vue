<template>
  <div @click="navigateToProductPage(item)" class="cart-item">
    <!-- main image -->
    <div
      class="image-container"
      :style="`background-image: url(${getS3Path(item.mainImage)})`"
    >
    </div>

    <!-- details and quantity -->
    <div class="details-and-quantity">
      <!-- name -->
      <span class="name"> {{ item.productName }} </span>
      <!-- color name -->
      <span class="color-name"> {{ item.colorName }} </span>
      <!-- collection -->
      <span class="collection"> {{ item.collectionName }} </span>
      <!-- variant -->
      <span class="variant"> {{ item.variantName }} </span>
      <!-- fabric -->
      <span class="fabric"> {{ item.fabricName }} </span>
      <!-- fabric info 1-->
      <span class="fabric"> {{ item.fabricInfo1 }} </span>
      <!-- price -->
      <span v-if="!item.askForPrice" class="price">
        {{ formatCurrency(cartItemPrice) }}
      </span>
      <!-- qty -->
      <span v-if="!allowUpdate" class="qty"> Qty: {{ item.quantity }} </span>
      <!-- shipping time -->
      <span class="shippingTime">
        Standard Shipping: {{ item.shippingTime }} week(s)
      </span>

      <!-- quantity picker -->
      <div v-if="allowUpdate" class="quantity-picker">
        <button @click.stop="emitUpdateQuantity(item, 'decrease')">-</button>
        <button class="qty">{{ item.quantity }}</button>
        <button @click.stop="emitUpdateQuantity(item, 'increase')">+</button>
      </div>
    </div>
    <!-- remove item -->
    <img
      v-if="allowUpdate"
      @click.stop="emitRemoveFromCart(item)"
      class="remove-item"
      src="/icons/dark/remove-cart-item.png"
    />
    <!-- total product price -->
    <p v-if="!item.askForPrice" class="total-product-price">
      {{ formatCurrency(totalCartItemPrice) }}
    </p>
  </div>
</template>

<script>
import CurrencyHelper from "../helpers/currencyHelper.js";

export default {
  mixins: [CurrencyHelper],
  props: {
    item: Object,
    allowUpdate: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      cartItem: {
        product: {},
        colorCode: "",
        quantity: 0,
        variant: {},
        fabric: {}
      }
    };
  },
  computed: {
    cartItemPrice() {
      if(this.currencyIsINR)
        return this.item.price;
      else
        return this.item.pricing[this.currency];
    },
    totalCartItemPrice() {
      return this.cartItemPrice * this.item.quantity;
    }
  },
  mounted() {},
  methods: {
    navigateToProductPage() {
      // this.$router.push("/products?_id=" + this.item.productId);

      this.$router.push({
        path: `/${this.item.slug}`
        // query
      });

      window.scroll({ top: 0, behavior: "smooth" });
    },
    getS3Path(fileName) {
      return this.$getImage(fileName,'productPages');
    },
    emitUpdateQuantity(item, operation) {
      this.$emit("updateQuantity", { item: item.cartEntry, operation });
    },
    emitRemoveFromCart(item) {
      this.$emit("removeItem", item.cartEntry);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
  margin: 5px;
  position: relative;
  height: 200px;
  width: 80%;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90%;
    height: 68vw;
    margin: 10px;
  }

  /* cart item thumbnail/image */
  .image-container {
    width: 35%;
    height: 90%;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;

    img {
      width: 100%;
    }
  }
  /* cart item details and quantity input */
  .details-and-quantity {
    width: 65%;
    padding-left: 4px;
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
        color:black;

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
</style>
