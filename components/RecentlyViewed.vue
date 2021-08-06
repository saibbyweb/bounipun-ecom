<template>
  <div class="recently-viewed">
    <h2 class="title">Recently Viewed</h2>
    <div class="flex center">
      <div class="flex wrap">
        <product-card
          v-for="(product, index) in recentlyViewedProducts"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    currentProductId: {
      handler(newVal) {
        this.fetchRecentlyViewed();
      },
      immediate: true
    }
  },
  data() {
    return {
      recentlyViewedProducts: []
    };
  },
  methods: {
    async fetchRecentlyViewed() {
      const entries = this.$store.state.customer.recentlyViewed;
      if (entries === undefined || entries.length === 0) return;

      /* remove active product */
      const filteredEntries = entries.filter(
        entry => entry.product !== this.currentProductId
      );

      const recentlyViewedProducts = await this.$post("/fetchRecentyViewed", {
        entries: filteredEntries
      });

      if (recentlyViewedProducts.resolved === false) return;

      const { products } = recentlyViewedProducts.response;
      products.forEach(product => {
        if (
          product.rtsDirectVariant !== undefined ||
          product.rtsDirectVariant !== ""
        )
          product.rtsDirectVariant = product.rtsDirectVariant.name;
      });

      this.recentlyViewedProducts = relatedProducts.response.products;
    }
  }
};
</script>

<style lang="scss" scoped>
.recently-viewed {
  // padding: 10%;
  .title {
    padding: 0 3%;
    font-family: $font_1_bold;
    text-transform: uppercase;
  }
}
</style>
