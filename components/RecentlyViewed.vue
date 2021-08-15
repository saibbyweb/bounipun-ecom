<template>
  <div v-if="!isEmpty" class="recently-viewed">
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
  props: {
    currentProductId: {
      type: String,
      default: ""
    }
  },
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
  computed: {
    isEmpty() {
      return this.recentlyViewedProducts.length === 0;
    }
  },
  methods: {
    async fetchRecentlyViewed() {
      const entries = this.$store.state.customer.recentlyViewed;
      if (entries === undefined || entries.length === 0) return;

      /* remove active product */
      let filteredEntries = entries.filter(entry => {
        return entry.product !== this.currentProductId;
      });

      /* reverse the order */
    //   filteredEntries = filteredEntries.reverse();

      const recentlyViewedProducts = await this.$post("/fetchRecentlyViewed", {
        entries: filteredEntries
      });

      if (recentlyViewedProducts.resolved === false) return;

      let { products } = recentlyViewedProducts.response;

      products.forEach(product => {
        if (
          product.rtsDirectVariant !== undefined ||
          product.rtsDirectVariant === ""
        )
          product.rtsDirectVariant = product.rtsDirectVariant.name;

        /* filter out inactive colors */
        product.colors = product.colors.filter(color => color.status === true);
        product.variants.sort((a,b) => a._id.order - b._id.order);
      });

      /* filter out products with no active colors */
      products = products.filter(
        product => product.colors.length > 0
      );

      this.recentlyViewedProducts = recentlyViewedProducts.response.products;
    }
  }
}
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
