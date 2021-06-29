<template>
<div :class="[{ 'dark-mode': darkMode }, 'header']">
    <!-- menu -->
    <div class="menu center" @click="$emit('showMenu')">
        <img class="action-icon" :src="getIconPath('menu.png')" />
        <img @click.stop="$store.commit('customer/switchCurrency')" v-if="$store.state.customer.authorized" class="action-icon account" :src="getIconPath('account.png')" />
    </div>

    <!-- logo -->
    <div class="logo center" @click="$router.push('/')">
        <img src="/icons/light/logo.png" />
    </div>

    <!-- links -->
    <div class="shop-actions">
        <div class="action-icon">
            <img class="" :src="getIconPath('search.png')" @click="$emit('showSearch')" />
        </div>

        <div class="action-icon">
            <img class="" :src="getIconPath('heart.png')" @click="$router.push('/wishlist')" />
        </div>

        <div class="action-icon">
            <!-- cart count -->
            <span v-if="cartCount !== 0" class="cart-count"> {{ cartCount }} </span>
            <img class="bag" :src="getIconPath('bag.png')" @click="$router.push('/cart')" />
        </div>

    </div>
</div>
</template>

<script>
export default {
    created() {
        // if (process.client) {
        //     window.addEventListener('scroll', this.handleScroll);
        // }
        // if (this.$route.name !== 'index') {
        //     this.darkMode = true;
        //     return;
        // }
    },
    destroyed() {
        // if (process.client) {
        //     window.removeEventListener('scroll', this.handleScroll);
        // }
    },
    data() {
        return {
            // darkMode: this.$route.name === 'products-collection' ? true : false
            darkMode: true
        }
    },
    computed: {
        cartCount() {

            return this.$store.getters['customer/getCartCount'];

            // if(!this.$store.state.customer.authorized) {
            //     return this.$store.state.customer.cart.length
            // }
            // return 0;
        }
    },
    watch: {
        $route(to, from) {
            console.log(to.name)
            // this.darkMode = to.name !== 'index'
        }
    },
    methods: {
        handleScroll() {
            // if (this.$route.name !== 'index') {
            //     this.darkMode = true;
            //     return;
            // }

            // if (window.scrollY > 200)
            //     this.darkMode = true;
            // else
            //     this.darkMode = false;
        },
        getIconPath(icon) {
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

        .account {
            margin-left:10px;
        }

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
        position: relative;

        .cart-count {
            background: #c54343;
            color: white;
            padding: 3px;
            border-radius: 61%;
            font-size: 10px;
            position: absolute;
            right: -60%;
            top: -35%;
            font-family: 'SF-Pro';
        }

        img {
            width: 100%;
        }

        @media (max-width: $breakpoint-tablet) {
            width: 4vw;
            margin: 6%;
        }
    }
}
</style>
