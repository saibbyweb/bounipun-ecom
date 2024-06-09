<template>
  <div class="wishlist page -wh">
    <div class="page-header center">
      <h2 class="title">Wishlist</h2>
    </div>

    <div class="flex center">
      <div class="wishlist-items flex center wrap">
        <product-card
          v-for="(product, index) in wishlistItems"
          :key="index"
          :product="product"
        />
      </div>
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
      abc:[]
      // wishlistItems: []
    };
  },
  computed: {
    wishlistItems() {
      return this.$store.state.customer.globalWishlist;
    },
    wishlistEmpty() {
      return this.wishlistItems.length === 0;
    },
    rawWishlist() {
      const customer = this.$store.state.customer;
      if (!customer.authorized) return [];

      if (customer.wishlist === undefined) return [];

      return this.$store.state.customer.user.wishlist;
    }
  },
  watch: {
    rawWishlist() {
      console.log("wishlist updated");
      this.fetchWishlistItems();
    }
  },
  mounted() {
      if(!this.$store.state.customer.authorized)
        this.$router.push('/login');
    this.fetchWishlistItems();
  },
  methods: {
    async fetchWishlistItems() {
      // const wishlistItems = await this.$post("/fetchWishlist");

      const wishlistItems = await this.$axios.$post('/fetchWishlist', {
        lockCheck: true
      });

      if (wishlistItems.resolved === false) return;

      let { products } = wishlistItems;

      products.forEach(product => {
        /* filter out inactive colors */
        product.colors = product.colors.filter(color => color.status === true);
        product.variants.sort((a, b) => a._id.order - b._id.order);

        if (
          product.rtsDirectVariant !== undefined ||
          product.rtsDirectVariant === ""
        )
          product.rtsDirectVariant = product.rtsDirectVariant.name;
      });

      /* filter out products with no active colors */
      products = products.filter(product => product.colors.length > 0);

      this.wishlistItems = products;
      this.$forceUpdate();
    }
  }
};
</script>

<style lang="scss" scoped>
//
.wishlist-items {

}

.wishlist {

  .title {
    // padding-top: 10px;
    font-size: 25px !important;
  }
}
</style>
