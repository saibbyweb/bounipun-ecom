<template>
<div :class="[{ 'dark-mode': darkMode }, 'header']">
    <!-- menu -->
    <div class="menu center" @click="$emit('showMenu')">
        <img class="action-icon" :src="getIconPath('menu.png')" />
    </div>

    <!-- logo -->
    <div class="logo center" @click="$router.push('/')">
        <img src="/icons/light/logo.png" @click="darkMode = !darkMode" />
    </div>

    <!-- links -->
    <div class="shop-actions">
        <img class="action-icon" :src="getIconPath('search.png')" @click="$router.push('/search')" />
        <img class="action-icon" :src="getIconPath('heart.png')" @click="$router.push('/wishlist')" />
        <img class="action-icon bag" :src="getIconPath('bag.png')" @click="$router.push('/cart')" />
    </div>
</div>
</template>

<script>
export default {
    created() {
        if (process.client) {
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    destroyed() {
        if (process.client) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    },
    data() {
        return {
            darkMode: this.$route.name === 'products-collection' ? true : false
        }
    },
    methods: {
        handleScroll() {
            if(this.$route.name === 'products-collection') {
                this.darkMode = true;
                return;
            }

            if(window.scrollY > 200)
                this.darkMode = true;
            else
                this.darkMode = false;
        },
        getIconPath(icon) {
            // const directory = this.scrolled ? '/icons/light/' : '/icons/dark/';
            const directory = '/icons/light/';
            return directory + icon;
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 10vh;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 25% 50% 25%;
    background-color: transparent;
    transition: all 0.5s ease-in-out;

    &.dark-mode {
        background-color: $primary_dark;
    }

    .menu {
        justify-self: flex-start;
        padding-left: 10%;

        @media (max-width: $breakpoint-tablet) {
            padding-left: 25%;
        }
    }

    .logo {
        height: inherit;

        img {
            height: 50%;
            filter: grayscale(100%);

            @media (max-width: $breakpoint-tablet) {
                height: 45%;
            }
        }
    }

    .shop-actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10%;

        @media (max-width: $breakpoint-tablet) {
            padding-right: 15%;
        }
    }

    .action-icon {
        width: 1.7vw;
        margin: 4%;

        @media (max-width: $breakpoint-tablet) {
            width: 4vw;
            margin: 6%;
        }
    }
}
</style>
