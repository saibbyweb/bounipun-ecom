<template>
  <div v-if="relatedProducts.length && relatedProducts.length > 0" class="related-products">
    <h2 class="title">You may also like</h2>
    <div class="flex center">
      <div class="flex wrap">
        <product-card
          v-for="(product, index) in relatedProducts"
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
    },
    currentProductDate: {
      type: String,
      default: ""
    }
  },
  watch: {
    currentProductId: {
      handler(newVal) {
        this.fetchRelatedProducts();
      },
      immediate: true
    }
  },
  data() {
    return {
      relatedProducts: []
    };
  },
  methods: {
    async fetchRelatedProducts() {
      console.log(this.currentProductId, this.currentProductDate);
      const relatedProducts = await this.$post("/fetchRelatedProducts", {
        currentProductId: this.currentProductId,
        currentProductDate: this.currentProductDate
      });

      if (relatedProducts.resolved === false) return;

      let { products } = relatedProducts.response;
      products.forEach(product => {
        if (
          product.rtsDirectVariant !== undefined ||
          product.rtsDirectVariant === ""
        )
          product.rtsDirectVariant = product.rtsDirectVariant.name;

        /* filter out inactive colors */
        product.colors = product.colors.filter(color => color.status === true);
        product.variants.sort((a, b) => a._id.order - b._id.order);
      });

      /* filter out products with no active colors */
      products = products.filter(product => product.colors.length > 0);

      this.relatedProducts = relatedProducts.response.products;
    }
  }
};
</script>

<style lang="scss" scoped>
.related-products {
  // padding: 10%;
  .title {
    padding: 0 3%;
    font-family: $font_1_bold;
    text-transform: uppercase;
  }
}
</style>
