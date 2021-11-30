<template>
  <div class="page -wh">
    <!-- list header -->
    <div
      v-if="listImageProvided"
      class="c-header center"
      :style="{
        backgroundImage: `url(${getListImage(listImage)})`,
      }"
    ></div>

    <!-- main text block -->
    <div class="main-text-block flex center col">
      <h2 class="text-1">{{ list.name }}</h2>
      <p class="text-2">{{ listText }}</p>
    </div>

    <!-- product list -->
    <div class="flex center">
      <div class="product-list flex center wrap">
        <product-card
          v-for="(product, index) in list.list"
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
      title: `${this.list.name} | Bounipun Kashmir`,
    };
  },
  data() {
    return {
      gridView: true,
      list: {
        products: [],
        name: "fetching...",
        text: "fetching...",
        lockedText: "",
        image: "",
        lockedImage: "",
        lock: false,
      },
    };
  },
  computed: {
    listImageProvided() {
      return this.listImage !== "";
    },
    listImage() {
      return this.listLocked ? this.list.lockedImage : this.list.image;
    },
    listText() {
      return this.listLocked ? this.list.lockedText : this.list.text;
    },
    listLocked() {
      /* if collection is locked */
      if (this.list.lock === true) {
        const customer = this.$store.state.customer;
        switch (customer.authorized) {
          case true:
            return !(customer.user.contentUnlock.status === true);
            break;
          case false:
            return true;
            break;
        }
      }

      return false;
    },
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
    getListImage(image) {
      if (image === undefined) return "";
      return this.$getOriginalPath(image);
    },
    async fetchResults(listSlug) {
      const productList = await this.$axios.$post("/fetchProductList", {
        slug: listSlug,
        lockCheck: true,
      });
      /* if list not fetched */
      if (productList.resolved === false) return;

      const { listDetails } = productList;

      /* set list name */
      listDetails.list.forEach((product) => {
        /* sort variants */
        product.variants.sort((a, b) => a._id.order - b._id.order);
        if (
          product.rtsDirectVariant !== undefined ||
          product.rtsDirectVariant === ""
        )
          product.rtsDirectVariant = product.rtsDirectVariant.name;
      });

      /* filter out products with no active colors */
      listDetails.list = listDetails.list.filter(
        (product) => product.colors.length > 0
      );
      this.list = listDetails;
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="scss" scoped>
.c-header {
  height: 40vw;
  margin-top: 5vh;
  background-size: cover;
  width: 100%;

  .heading {
    color: $primary_dark;
    text-transform: uppercase;
    font-family: $font_1_bold;
    font-size: 10vw;
  }
}
.main-text-block {
  padding: 5%;

  .text-1 {
    font-family: $font_3_bold;
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
  }

  .text-2 {
    font-size: 14px;
    text-align: justify;
    margin-bottom: 5px;
    font-family: $font_1;
  }

  .text-3 {
    font-family: $font_4;
    font-size: 19px;
  }
}
</style>
