<template>
  <div :class="[{ 'dark-mode': darkMode }, 'header']">
    <!-- menu -->
    <div class="menu center">
      <!-- hamburger -->

      <img
        class="action-icon"
        :src="getIconPath('menu.png')"
        @click="$emit('showMenu')"
      />

      <!-- user account -->

      <img
        @click.stop="$router.push('/my-account')"
        v-if="$store.state.customer.authorized"
        class="action-icon account"
        :src="getIconPath('account-new.png')"
      />

      <!-- whatsapp -->
      <div
        style="display: flex; position: relative"
        class="pointer"
        @click="openInNewTab(whatsAppShareLink)"
      >
        <!-- cart count -->
        <div class="whatsapp-count">1</div>
        <img
          class="action-icon whatsapp"
          :src="getIconPath('whatsapp-aa.svg')"
        />
      </div>

      <CurrencySelector class="onlyDesktop" />
    </div>

    <!-- logo -->
    <div class="logo center" @click="$router.push('/')">
      <img src="/icons/light/logo.png" />
    </div>

    <!-- links -->
    <div class="shop-actions">
      <div class="action-icon">
        <img
          class=""
          :src="getIconPath('search.png')"
          @click="$emit('showSearch')"
        />
      </div>

      <div class="action-icon">
        <!-- wishlist count -->
        <span
          v-if="wishlistCount !== 0 && wishlistCount !== undefined"
          class="cart-count"
        >
          {{ wishlistCount }}
        </span>
        <img
          class=""
          :src="getIconPath('heart.png')"
          @click="$router.push('/wishlist')"
        />
      </div>

      <div class="action-icon">
        <!-- cart count -->
        <span
          v-if="cartCount !== 0 && cartCount !== undefined"
          class="cart-count"
        >
          {{ cartCount }}
        </span>
        <img
          class="bag"
          :src="getIconPath('bag.png')"
          @click="$router.push('/cart')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // if (process.client) {
    //   window.addEventListener("scroll", this.handleScroll);
    // }
    // if (this.$route.name !== "index") {
    //   this.darkMode = true;
    //   return;
    // }
  },
  destroyed() {
    // if (process.client) {
    //   window.removeEventListener("scroll", this.handleScroll);
    // }
  },
  data() {
    return {
      // darkMode: this.$route.name === "products-collection" ? true : false
      darkMode: true,
    };
  },
  computed: {
    cartCount() {
      return this.$store.getters["customer/getCartCount"];
    },
    wishlistCount() {
       return this.$store.state.customer?.globalWishlist?.length || 0;
      },
    whatsAppShareLink() {
      const BASE_SHARE_URL = "https://wa.me/919103077655?text=";
      let msg = `Hi! Could you help me with a few queries!`;
      msg = encodeURI(msg);
      return BASE_SHARE_URL + msg;
    },
  },
  watch: {
    $route(to, from) {
      console.log(to.name);
      // this.darkMode = to.name !== "index";
    },
  },
  methods: {
    openInNewTab(link) {
      window.open(link, "_newtab");
    },
    handleScroll() {
      if (this.$route.name !== "index") {
        this.darkMode = true;
        return;
      }
      if (window.scrollY > 200) this.darkMode = true;
      else this.darkMode = false;
    },
    getIconPath(icon) {
      const directory = "/icons/light/";
      return directory + icon;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 10vh;
  position: fixed;
  margin-top: 3vh;
  z-index: 3;
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
      margin-left: 10px;
    }

    @media (max-width: $breakpoint-tablet) {
      padding-left: 25%;
      .account {
        width: 3.8vw;
      }
    }
  }

  .logo {
    height: inherit;
    cursor: pointer;
    margin-top: 1%;

    img {
      height: 70%;
      filter: contrast(3);

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
    margin-left: 10px;
    cursor: pointer;

    .cart-count {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 16px;
      width: 16px;
      background: #c54343;
      color: white;
      padding: 3px;
      border-radius: 50%;
      font-size: 10px;
      position: absolute;
      right: -60%;
      top: -35%;
      font-family: "SF-Pro";
    }

    img {
      width: 100%;
    }

    &.whatsapp {
      width: 2.3vw;
      filter: contrast(7);
    }

    @media (max-width: $breakpoint-tablet) {
      width: 4vw;
      margin: 6%;

      /* whatsapp */
      &.whatsapp {
        width: 5.5vw;
        margin-left: 8px;
        opacity: 1;
      }
    }
  }
  .whatsapp-count {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #c54343;
    color: white;
    padding: 3px;
    border-radius: 50%;
    font-size: 10px;
    position: absolute;
    top: -10%;
    right: -16%;
    height: 16px;
    width: 16px;
    text-align: center;
    z-index: 1;
    font-family: "SF-Pro";
    @media (max-width: $breakpoint-tablet) {
      right: -18%;
      top: -10%;
      height: 13px;
      width: 13px;
    }
  }
}
</style>
