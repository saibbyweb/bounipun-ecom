<template>
  <div>
    <BounipunHeader @showMenu="menuOpen = true" @showSearch="searchOpen = true" />
    <OffCanvasMenu :class="{'visible': menuOpen }" @closeMenu="menuOpen = false"/>
    <Search :class="{'visible': searchOpen }" @closeSearch="searchOpen = false" />
    <Nuxt />
    <BounipunFooter />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$axios.$get('/upload').then(data => console.log(data))
  },
  data() {
    return {
      searchOpen: false,
      menuOpen: false
    }
  }
}
</script>
<style>
body {
  margin: 0px;
}
</style>