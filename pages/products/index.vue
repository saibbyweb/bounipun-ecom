<template>
  <div class="page">Redirecting....</div>
</template>

<script>
export default {
  mounted() {
    const productId = this.$route.query._id;
    
    this.tryRedirect(productId);
  },
  methods: {
    async tryRedirect(productId) {
      const response = await this.$axios.$post("/productIdToSlug", {
        productId,
      });

      if(response.resolved === false) {
        return;
      }

      this.$router.push({
        path: `/${response.product.slug}`
      });

      window.scroll({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
