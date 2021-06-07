<template>
  <div @click="$router.push('/products?_id=' + item._id)">
    <!-- main image -->
    <div
      class="image-container"
      :style="`background-image: url(${item.mainImage})`"
    >
      <!-- <img :src="item.mainImage" /> -->
    </div>

    <!-- details and quantity -->
    <div class="details-and-quantity">
      <!-- name -->
      <span class="name"> {{ item.name }} </span>
      <!-- color name -->
      <span class="color-name"> {{ item.colorName }} </span>
      <!-- collection -->
      <span class="collection"> {{ item.collection }} </span>
      <!-- variant -->
      <span class="variant"> {{ item.variant }} </span>
      <!-- fabric -->
      <span class="fabric"> {{ item.fabric }} </span>
      <!-- fabric info 1-->
      <span class="fabric"> {{ item.fabricInfo1 }} </span>
      <!-- price -->
      <span class="price"> INR {{ item.price }} </span>

      <!-- quantity picker -->
      <div class="quantity-picker">
        <button @click.stop="updateQuantity(item, 'decrease')">-</button>
        <button class="qty">{{ item.quantity }}</button>
        <button @click.stop="updateQuantity(item, 'increase')">+</button>
      </div>
    </div>
    <!-- remove item -->
    <img
      @click="removeFromCart(item.product)"
      class="remove-item"
      src="/icons/dark/remove-cart-item.png"
    />
    <!-- total product price -->
    <p class="total-product-price">INR {{ item.quantity * item.price }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItem: {
          product: {},
          colorCode: '',
          quantity: 0,
          variant: {},
          fabric: {}
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
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
</style>
