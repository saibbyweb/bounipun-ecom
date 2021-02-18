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