<template>
  <div class="off-canvas-menu">
    <div class="main">
      <!-- header -->
      <div class="header">
        <h4 v-if="$store.state.customer.authorized" class="white">
          Good Afternoon,<br />
          {{
            $store.state.customer.user !== undefined
              ? $store.state.customer.user.firstName
              : ""
          }}
        </h4>
        <!-- <img class="close" src="/icons/light/close.png" @click="$emit('closeMenu')"> -->

        <h4
          v-if="!$store.state.customer.authorized"
          class="white"
          @click="navigate('/login')"
        >
          Login/Register
        </h4>
      </div>

      <!-- menu items -->
      <button class="clear item">Collections</button>
      <!-- active collection list -->
      <button
        @click="navigate(collection, 'collection')"
        class="clear item sub-item"
        v-for="(collection, index) in collections"
        :key="index"
      >
        {{ collection.lock ? "🔒" : "" }}
        {{ collection.name }}
      </button>
      <!-- <button class="clear item"> Categories </button> -->
      <button class="clear item">The Bounipun Lab</button>
      <button class="clear item">Story</button>

      <div v-if="$store.state.customer.authorized">
        <!-- acc items -->
        <button @click="navigate('/my-account')" class="clear item">
          My Account
        </button>
        <button @click="navigate('/my-account/orders')" class="clear item acc">
          Orders
        </button>
        <button
          @click="navigate('/my-account/address-book')"
          class="clear item acc"
        >
          Address Book
        </button>
        <button
          @click="navigate('/my-account/profile-details')"
          class="clear item acc"
        >
          Profile Details
        </button>
        <button
          @click="navigate('/my-account/gift-cards')"
          class="clear item acc"
        >
          Gift Cards
        </button>
      </div>

      <br />
      <!-- links -->
      <button class="clear link" @click="$router.push('/faqs')">FAQs</button>
      <button class="clear link">Help</button>
      <button class="clear link">About Us</button>
      <button class="clear link">Terms of Use</button>
      <button class="clear link">Privacy Policy</button>

      <br />

      <!-- logout -->
      <button @click="logout()" class="clear link logout">Logout</button>
    </div>
    <div class="place-holder" @click="$emit('closeMenu')"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collections: []
    };
  },
  mounted() {
    this.fetchCollections();
  },
  methods: {
    navigate(route, type) {
      this.$emit("closeMenu");
      if (type === "collection") {
        // const slug = '/collections?slug=' + route.slug
        // this.$router.push(slug, { collectionId: route._id });
        this.$router.push({
          name: "Collections",
          query: {
            slug: route.slug
          },
          params: {
            collectionId: route._id
          }
        });
        return;
      }
      this.$router.push(route);
    },
    async fetchCollections() {
      const collections = await this.$fetchData(
        "collections",
        {
          status: true
        },
        true
      );
      /* if collections not fetched */
      if (!collections.fetched) return;

      this.collections = collections.docs;
    },
    async logout() {
      const { resolved, response }  = await this.$post('/logoutCustomer');
      
      /* set user as logged off */
      this.$store.commit("customer/setAuthorization",false);
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
.off-canvas-menu {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-left: -100vw;
  transition: all 0.4s ease-in-out;
  z-index: 3;

  &.visible {
    margin-left: 0vw;
  }

  .main {
    width: 70%;
    background-color: white;
    position: relative;

    .header {
      background: $primary_dark;
      height: 10vh;
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;

      .close {
        height: 5vw;
        width: 5vw;
      }
    }

    .item {
      text-transform: uppercase;
      padding: 3%;
      width: 100%;
      border-bottom: 0.4px solid #c3c3c3;
      text-align: left;
      color: $gray;
      font-size: 14px;
      letter-spacing: 1px;

      &.acc {
        font-size: 10px;
        padding-left: 5%;
      }

      &.sub-item {
        font-size: 11px;
      }
    }

    .link {
      color: $primary_dark;
      font-family: $font_1_bold;
      font-size: 10px;
      width: 100%;
      text-align: left;
      padding: 2%;
      margin-left: 5px;
      opacity: 0.8;
    }

    .logout {
      position: absolute;
      bottom: 10px;
      font-size: 13px;
      width: fit-content;
      background-color: #b56b6b;
      color: white;
      padding: 3px 20px;
      right: 0px;
    }
  }

  .place-holder {
    width: 30%;
    background: transparent;
  }
}
</style>
