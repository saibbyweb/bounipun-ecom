<template>
<div>
    <div class="loading center" v-if="$store.state.customer.loading">
        <img src="/loading.gif" />
    </div>
    <BounipunHeader @showMenu="menuOpen = true" @showSearch="searchOpen = true" />
    <OffCanvasMenu :class="{'visible': menuOpen }" @closeMenu="menuOpen = false" />
    <Search v-if="searchOpen" :class="{'visible': searchOpen }" @closeSearch="searchOpen = false" />
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

<style lang="scss">
.loading {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #3333335b;

    img {
        width: 50px;
    }
}

body {
    margin: 0px;
}
</style>
