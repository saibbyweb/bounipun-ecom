<template>
  <div v-if="showBanner" class="admin-view-banner">
    Master View
  </div>
</template>

<script>
export default {
  computed: {
    showBanner() {
      // alert(this.$store.state.customer.adminAuthorized);
      // Only show if admin is authorized and not in admin panel
      return this.$store.state.customer.adminAuthorized && 
             !this.$route.path.startsWith('/admin-panel');
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-view-banner {
  position: fixed;
  top: 0;
  right: 0;
  background-color: #562828;
  color: white;
  padding: 5px 15px;
  font-family: $font_2_semibold;
  font-size: 12px;
  z-index: 9999;
  border-bottom-left-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: default;
  user-select: none;
}
</style> 