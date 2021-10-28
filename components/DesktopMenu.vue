<template>
  <div class="desktop-menu">
      <div class="flex">
       <button
        @click="navigate(collection, 'collection')"
        class="clear item sub-item"
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
};
</script>

<style lang="scss" scoped>
.desktop-menu {
  position: fixed;
  background: $primary_dark;
  border: 1px solid white;
  height: 5vh;
  width: 100%;
  top: 13vh;
  left: 0;
  z-index: 3;
  //   margin-top:13vh;
}
</style>
