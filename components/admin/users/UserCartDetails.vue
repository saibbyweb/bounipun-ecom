<template>
  <div style="width: 120%; padding-left: 10px; margin: 20px 0;">
    <h4> Products in Cart: </h4>
    <p style="font-size: 13px; color: grey;" v-if="cartItems.length === 0"> No active products found in cart! </p>
    <CartItem v-for="(item, index) in cartItems" :key="index" :item="item" :allowUpdate="false"  />
  </div>
</template>

<script>
import CartItem from "../../../components/Purchase/CartItem.vue";
export default {
  props: {
    cart: Array,
    userId: String
  },
  components: {
    CartItem
  },
  data() {
    return {
        cartItems: []
    };
  },
  computed: {
    cartItemIds() {
      if (this.cart && this.cart.length) return this.cart.map((c) => c._id);
      else return [];
    },
  },
  watch: {
    cartItemIds() {
      this.fetchCartItems();
    },
  },
  mounted() {},
  methods: {
    async fetchCartItems() {
      try {
        const { resolved, response } = await this.$post("/fetchUserCart", {
            cartItemIds: this.cartItemIds, 
            userId: this.userId
        });
        console.log(response, '__RESOLVED__')
        this.cartItems = response;
      } catch (e) {

      }
    },
  },
};
</script>
