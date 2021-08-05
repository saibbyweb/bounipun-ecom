<template>
  <div class="related-products">
    <h2>Related Products</h2>
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
    return {};
  },
  methods: {
    async fetchRelatedProducts() {
      console.log(this.currentProductId, this.currentProductDate);
      const relatedProducts = await this.$post("/fetchRelatedProducts", {
        currentProductId: this.currentProductId,
        currentProductDate: this.currentProductDate
      });

      if (relatedProducts.resolved === false) return;
    }
  }
};
</script>
