<template>
  <div>
    <BounipunHeader @showMenu="menuOpen = true" />
    <OffCanvasMenu :class="{'visible': menuOpen }" @closeMenu="menuOpen = false"/>
    <Nuxt />
    <BounipunFooter />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$axios.$get('/api').then(data => console.log(data))
  },
  data() {
    return {
      showSearch: false,
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