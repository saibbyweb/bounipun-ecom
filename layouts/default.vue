<template>
  <div :class="{ blockScroll: searchOpen }">
    <CookieNotice
      v-if="
        !$store.state.customer.cookieConsent &&
        fakeLoaded &&
        $route.path !== '/privacy-policy'
      "
    />

    <div class="loading center" v-if="$store.state.customer.loading">
      <img src="/loading.gif" />
    </div>

    <!-- ticker -->
    <Ticker />

    <!-- bounipun header -->
    <BounipunHeader
      @showMenu="menuOpen = true"
      @showSearch="searchOpen = true"
    />

    <!-- bounipun desktop menu -->
    <DesktopMenu />

    <OffCanvasMenu
      :class="{ visible: menuOpen }"
      @closeMenu="menuOpen = false"
    />
    <Search
      v-if="searchOpen"
      :class="{ visible: searchOpen }"
      @closeSearch="searchOpen = false"
    />
    <Nuxt />
    <BounipunFooter />

    <!--     <Popup
      v-for="popup in eligiblePopups"
      :key="popup._id"
      :_id="popup._id"
      :image="popup.image"
      :text="popup.text"
      :persist="popup.persist"
      :actionURL="popup.actionURL"
      :delayInMinutes="popup.delay"
    /> -->

    <PopupModals v-if="!startedFromPopup && !dontShowPopups" />

    <AdminViewBanner />
  </div>
</template>

<script>
import AdminViewBanner from '~/components/AdminViewBanner.vue'

export default {
  components: {
    AdminViewBanner
  },
  computed: {
    dontShowPopups() {
      const allowedRoutes = [
        "/my-account/orders",
        "/my-account",
        "/my-account/address-book",
        "/my-account/profile-details",
        "/payment-link",
        "/login",
        "/registration",
        "/faq",
        "/lab",
        "/contact-us",
        "/terms",
        "/about-us",
        "/our-story",
        "/press",
        "/privacy-policy",
        "/cart",
        "/delivery-address",
        "/order-placed-successfully",
        "/Checkout",
        "/",
      ];
      return allowedRoutes.includes(this.$route.path);
    },
  },
  watch: {
    $route: {
      handler(to, from) {
        console.log(to, "► route changed");
        this.$axios.$post("/lastSeen");
      },
      immediate: true,
    },
  },
  mounted() {
    this.$ga.page(this.$router);
    if (this.$route.query.referrer) this.startedFromPopup = true;
    // this.$ga.page('/');
    // console.log(this.$ga,'---google analytic');

    /* load persisted state */
    this.$store.commit("customer/loadPersistedState");
    /* listen for all mutations */
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (
        mutation.type === "customer/setLoading" ||
        mutation.type === "customer/setGiftMessage" ||
        mutation.type === "customer/setLocalPopped"
      )
        return;

      // console.log(mutation);
      /* save state in local storage */
      window.localStorage.setItem(
        "persistedState",
        JSON.stringify(state.customer)
      );
    });

    setTimeout(async () => {
      this.$store.dispatch("customer/fetchCart");
      this.$store.dispatch("customer/fetchProfile");
      await this.$store.dispatch("customerV2/fetchActiveCurrencies");
      await this.$store.dispatch("customerV2/fetchStoreLocation");
      this.$store.dispatch("customer/fetchPopups");
      this.$store.dispatch("customer/fetchStoreLocation");
      this.$store.dispatch("customer/fetchGlobalConfig");
      this.$store.dispatch("customer/fetchCollections");
      this.$store.dispatch("customer/fetchWishlist");
    }, 100);

    setTimeout(() => {
      this.fakeLoaded = true;
    }, 5000);
  },
  data() {
    return {
      searchOpen: false,
      menuOpen: false,
      unsubscribe: null,
      fakeLoaded: false,
      startedFromPopup: false,
    };
  },
  methods: {
    doThis() {
      console.log("yo bro");
    },
    async fetchProfile() {
      const { response, resolved } = await this.$post("/fetchProfile");
      if (resolved === false) return;

      this.$store.commit("customer/setUser", response);
    },
  },
};
</script>

<style lang="scss">
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: #3333335b;

  img {
    width: 50px;
  }
}
.blockScroll {
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
}
body {
  margin: 0px;
}
</style>
