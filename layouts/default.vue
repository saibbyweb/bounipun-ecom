<template>
  <div>
    <div class="loading center" v-if="$store.state.customer.loading">
      <img src="/loading.gif" />
    </div>
    <BounipunHeader
      @showMenu="menuOpen = true"
      @showSearch="searchOpen = true"
    />
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
  </div>
</template>

<script>
export default {
  mounted() {
    /* load persisted state */
    this.$store.commit("customer/loadPersistedState");
    /* listen for all mutations */
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "customer/setLoading") return;

      console.log(mutation);
      console.log(state.customer.cart);
      /* save state in local storage */
      window.localStorage.setItem(
        "persistedState",
        JSON.stringify(state.customer)
      );
    });

    setTimeout(() => {
        this.$store.dispatch('customer/fetchCart');
        this.$store.dispatch('customer/fetchProfile');
        this.$store.dispatch('customer/fetchStoreLocation');
        this.$store.dispatch('customer/fetchGlobalConfig');
    }, 400)
  },
  data() {
    return {
      searchOpen: false,
      menuOpen: false,
      unsubscribe: null
    };
  },
  methods: {
    doThis() {
      console.log("yo bro");
    },
    async fetchProfile() {
       const { response, resolved } = await this.$post('/fetchProfile');
       if(resolved === false)
        return;

        this.$store.commit('customer/setUser', response)
    
    }
  }
};
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
