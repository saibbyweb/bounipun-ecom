<template>
  <div class="wishlist page -wh center-col">
    <div class="page-header center">
      <h2 class="title">Wishlist</h2>
    </div>

    <div class="wishlist-items">
      <product-card
        v-for="(product, index) in wishlistItems"
        :key="index"
        :product="product"
      />
    </div>

    <div v-if="wishlistEmpty" class="side-pad">
      <ActionResponse
        icon="/icons/cart_empty.png"
        title="Wishlist Empty"
        message="Your wishlist is currently empty."
        action="Browse Store"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wishlistItems: []
    };
  },
  computed: {
      wishlistEmpty() {
        return this.wishlistItems.length === 0
      },
      rawWishlist() {
          const customer = this.$store.state.customer;
          if(!customer.authorized)
            return [];

          if(customer.wishlist === undefined)
            return [];

          return this.$store.state.customer.user.wishlist;
      }
  },
  watch: {
    rawWishlist() {
        console.log('wishlist updated')
        this.fetchWishlistItems()
    }
  },
  mounted() {
    this.fetchWishlistItems();
  },
  methods: {
    async fetchWishlistItems() {
      const wishlistItems = await this.$post("/fetchWishlist");

      if (wishlistItems.resolved === false) return;

      const { products } = wishlistItems.response;

      products.forEach(product => {
        if (
          product.rtsDirectVariant !== undefined ||
          product.rtsDirectVariant === ""
        )
          product.rtsDirectVariant = product.rtsDirectVariant.name;
      });

      this.wishlistItems = wishlistItems.response.products;
      this.$forceUpdate()
    }
  }
};
</script>

<style lang="scss" scoped>
//
.wishlist-items {
  display: flex;
  flex-wrap: wrap;
}

.wishlist {
    margin-top:10vh;

    .title {
        padding-top:10px;
        font-size: 25px !important;
    }
}
</style>
