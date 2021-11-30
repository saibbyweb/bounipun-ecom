<template>
  <div class="center-col page -wh">
    <div class="page-header center">
      <h2 class="title">{{ listName }}</h2>
    </div>

    <!-- product list -->
    <div class="flex center">
      <div class="product-list flex center wrap">
        <product-card
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.listName} | Bounipun Kashmir`,
    };
  },
  data() {
    return {
      gridView: true,
      products: [],
      listName: "fetching...",
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        this.products = [];
        this.listName = {
          name: "fetching...",
        };
        this.fetchResults(to.params.listSlug);
      },
      immediate: true,
    },
  },
  methods: {
    async fetchResults(listSlug) {
      const productList = await this.$axios.$post("/fetchProductList", {
        slug: listSlug,
        lockCheck: true,
      });
      /* if list not fetched */
      if (productList.resolved === false) return;

      /* extract products and list name*/
      let { products, name } = productList;
      /* set list name */
      this.listName = name;
      products.forEach((product) => {
        /* sort variants */
        product.variants.sort((a, b) => a._id.order - b._id.order);
            if (
          product.rtsDirectVariant !== undefined ||
          product.rtsDirectVariant === ""
        )
          product.rtsDirectVariant = product.rtsDirectVariant.name;
      });

      /* filter out products with no active colors */
      products = products.filter((product) => product.colors.length > 0);

      this.products = products;
    },
  },
};
</script>
