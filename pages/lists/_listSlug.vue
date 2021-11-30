<template>
  <div class="center-col page -wh">
    <div class="page-header center">
      <h2 class="title">{{ list.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.list.name} | Bounipun Kashmir`,
    };
  },
  data() {
    return {
      gridView: true,
      /* rawCriterion */
      rawCriterion: {
        search: {
          key: "name",
          term: "",
        },
        filters: {},
        sortBy: {},
        limit: 50,
        cursor: 1,
      },
      products: [],
      list: {
        name: "fetching...",
      },
      filterData: [],
      sortData: {},
      filtersOpen: false,
      sortOpen: false,
      filterDataFetched: false,
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        this.products = [];
        this.list = { name: 'fetching...'};
        console.log(to.params.listSlug, "--param slug--");
        // this.fetchResults(to.params.slug);
      },
      immediate: true,
    },
  },
  methods: {
    async fetchResults() {
      const listItems = await this.$axios.$post("/fetchProductList", {
        slug: this.$route.params.listSlug,
        lockCheck: true,
      });
      /* if list not fetched */
      if (listItems.resolved === false) return;

      let { products } = listItems;
      products.forEach((product) => {
        /* sort variants */
        product.variants.sort((a, b) => a._id.order - b._id.order);
      });

      /* filter out products with no active colors */
      products = products.filter((product) => product.colors.length > 0);

      this.list = products;
    },
  },
};
</script>
