<template>
  <div class="desktop-menu flex center">
    <div class="menu-items flex center">
      <button
        @click="navigate(collection, 'collection')"
        class="menu-item"
        v-for="(collection, index) in collections"
        :key="index"
      >
        {{ collection.lock ? "🔒" : "" }}
        {{ collection.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    collections() {
      return this.$store.state.customer.collections;
    },
  },
  methods: {
    navigate(route, type) {
      if (type === "collection") {
        // const slug = '/collections?slug=' + route.slug
        // this.$router.push(slug, { collectionId: route._id });
        this.$router.push({
          path: "/collections",
          query: {
            slug: route.slug,
          },
          params: {
            collectionId: route._id,
          },
        });
        return;
      }
      this.$router.push(route);
    },
  },
};
</script>

<style lang="scss" scoped>
.desktop-menu {
  position: fixed;
  background: $primary_dark;
  //   border-top: 1px solid rgba(148, 148, 148, 0.336);
  height: 7vh;
  width: 100%;
  top: 13vh;
  left: 0;
  z-index: 3;
  //   margin-top:13vh;

  .menu-items {
    width: 100%;
    .menu-item {
      background-color: transparent;
      padding: 0;
      margin: 0;
      border: none;
      color: white;
      width: 15%;
      text-transform: uppercase;
      font-size: 15px;
      font-family: $font_1;
      letter-spacing: 1px;
    }
  }
}
</style>
