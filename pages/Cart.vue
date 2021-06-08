<template>
  <div class="cart page -wh">
    <div class="page-header center">
      <h2 class="title">Shopping Bag</h2>
    </div>

    <!-- remote cart items -->
    <div class="cart-items">
      <CartItem v-for="(item, index) in remoteCartItems" :item="item" :key="index"/>
    </div>

    <!-- cart items -->
    <div class="cart-items">
      <!-- cart item -->
      <div
        @click="$router.push('/products?_id=' + item._id)"
        class="cart-item"
        v-for="(item, index) in cartDetails"
        :key="index"
      >
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
    </div>

    <!-- sub total -->
    <div class="sub-total">
      <p class="label text">
        Sub Total <br />
        <span class="length"> {{ cartDetails.length }} Item(s) : </span>
      </p>
      <span class="value text"> INR {{ subTotal }} </span>
    </div>

    <!-- proceed to address page-->
    <div class="pad-10">
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
      remoteCartItems: []
    };
  },
  mounted() {
    if (!this.$store.state.customer.persistedStateLoaded)
      setTimeout(() => this.fetchCartDetails(), 300);
    else this.fetchCartDetails();

    this.fetchRemoteCart();
  },
  computed: {
    cartEmpty: function() {
      return this.cartDetails.length === 0;
    },
    subTotal() {
      return sumBy(this.cartDetails, item => item.price * item.quantity);
    }
  },
  methods: {
    async fetchRemoteCart() {
      const cartItems = await this.$post('/fetchCart');
      if(cartItems.resolved === false)
        return;

      this.remoteCartItems = cartItems.response;
    },
    updateQuantity(item, operation) {
      switch (operation) {
        case "decrease":
          if (item.quantity > 1) item.quantity--;
          break;
        case "increase":
          if (item.quantity < 3) item.quantity++;
          break;
      }
      this.quantityUpdated(item.product, item.quantity);
    },
    quantityUpdated(product, newQuantity) {
      this.$store.commit("customer/updateQuantity", {
        product,
        newQuantity
      });
    },
    removeFromCart(product) {
      this.$store.commit("customer/removeFromCart", product);
      this.fetchCartDetails();
    },
    async fetchCartDetails() {
      /* gather the list of (unique) product ids */
      const listOfProductIds = this.$store.getters[
        "customer/getCartProductIds"
      ];
      /* if cart empty */
      if (listOfProductIds === false) {
        console.log("cart empty");
        return;
      }
      /* fetch product details for all ids */
      const cartFetch = this.$axios.$post("/fetchCartDetails", {
        listOfProductIds
      });
      const { response, error } = await this.$task(cartFetch);
      /* if error occurred */
      if (error) {
        console.log("could not fetch cart items");
        return;
      }
      /* construct cart details array by mapping product data to cart items */
      const cartDetails = this.$store.state.customer.cart.map(product => {
        /* cart item */
        let cartItem = {};
        /* find  product details for item */
        const details = response.cartDetails.find(
          pro => pro._id === product._id
        );

        /* if product id didnt match */
        if (details === undefined) {
          /* remove from cache */
          this.$store.commit("customer/removeFromCart", product);
          return false;
        }
        console.log(details, "CART ITEM FOUND");
        /* get color name and main image */
        const color = details.colors.find(
          color => color.code === product.colorCode
        );

        /* if color code didnt match */
        if (color === undefined) {
          /* remove from cache */
          this.$store.commit("customer/removeFromCart", product);
          return false;
        }
        /* add details and quantity to cart item */
        cartItem = {
          _id: product._id,
          product,
          /* if collection is escape, treat color name as product name */
          name: details.name,
          quantity: product.quantity,
          /* collection name */
          collection:
            details.type !== "third-party"
              ? "Bounipun " + details.bounipun_collection.name
              : "",
          fabric: "",
          fabricInfo1: "",
          variant: "",
          /* add color name & main image */
          colorName: color.name,
          mainImage: this.mainImagePath(color)
          // details,
        };

        /* check if product is multipriced */
        const multiPriced =
          details.type === "third-party"
            ? false
            : details.availabilityType === "made-to-order"
            ? true
            : false;

        /* multi priced */
        if (multiPriced) {
          /* find variant index */
          const variant = details.variants.find(
            variant => variant._id._id === product.variantId
          );
          /* find fabric */
          const fabric = variant.fabrics.find(
            fabric => fabric._id._id === product.fabricId
          );
          /* update cart item */
          cartItem = {
            ...cartItem,
            variant: variant._id.name,
            fabric: fabric._id.name,
            fabricInfo1: fabric._id.info1,
            price: fabric.price
          };
        }
        /* if third-party or ready-to-ship, use direct price instead */
        if (
          details.type === "third-party" ||
          details.availabilityType === "ready-to-ship"
        ) {
          cartItem.price = details.directPrice;
        }
        console.log(cartItem);
        return cartItem;
      });
      /* remove un-matched entried (remove from cache as well) */
      this.cartDetails = cartDetails.filter(item => item !== false);
    },
    mainImagePath(color) {
      if (color.images.length === 0) return "/default-image.png";
      let mainImage = "";
      /* find main image */
      const foundImage = color.images.find(image => image.mainImage === true);
      /* if main image found */
      if (foundImage !== undefined) mainImage = foundImage.path;
      else mainImage = color.images[0].path;
      return process.env.baseAWSURL + mainImage;
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
