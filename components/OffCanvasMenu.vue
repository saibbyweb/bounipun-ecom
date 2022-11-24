<template>
  <div class="off-canvas-menu">
    <div class="main">
      <!-- header -->
      <div class="header">
        <h4 v-if="$store.state.customer.authorized" class="white">
          <span class="greeting"> {{ greeting }} </span>
          ,
          <span class="name">
            {{
              $store.state.customer.user !== undefined
                ? $store.state.customer.user.firstName
                : ""
            }}
          </span>
        </h4>

        <h4
          v-if="!$store.state.customer.authorized"
          class="white login-reg"
          @click="navigate('/login')"
        >
          Login / Register
        </h4>

        <!-- currency selector -->
        <div class="onlyMobile currency-selector">
          <CurrencySelector />
        </div>
      </div>

      <!-- menu items -->
      <!-- <button class="sub-heading clear item">Collections</button> -->
      <!-- active collection list (scarves) -->
      <p class="item sub-heading"> Scarves </p>
      <button
        @click="navigate(collection, 'collection')"
        class="clear item sub-item acc"
        v-for="(collection, index) in scarves"
        :key="index"
      >
        {{ collection.name }}
      </button>

      <!-- active collection list (decor) -->
       <p class="item sub-heading"> Décor </p>
      <button
        @click="navigate(collection, 'collection')"
        class="clear item sub-item acc"
        v-for="(collection, index) in decor"
        :key="index"
      >
        <!-- {{ collection.lock ? "" : "" }} -->
        {{ collection.name }}
      </button>

      <div v-if="$store.state.customer.authorized" style="margin-bottom: 10px">
        <!-- acc items -->
        <button @click="navigate('/my-account')" class="sub-heading clear item">
          My Account
        </button>
        <button @click="navigate('/my-account/orders')" class="clear item acc">
          My Orders
        </button>
        <!-- address book -->
        <button
          @click="navigate('/my-account/address-book')"
          class="clear item acc"
        >
          My Address Book
        </button>

        <button
          @click="navigate('/my-account/profile-details')"
          class="clear item acc"
        >
          My Profile
        </button>

        <!-- TODO: gift cards pending -->
        <!-- <button
          @click="navigate('/my-account/gift-cards')"
          class="clear item acc"
        >
          Gift Cards
        </button> -->
      </div>
  <!-- <button class="clear link" @click="navigate('/lab')">Bounipun Lab</button> -->
    <!-- <button class="clear link" @click="navigate('/our-story')">Our Story</button> -->
      <!-- links -->
      <button class="clear link" @click="navigate('/faq')">FAQs</button>
      <!-- <button class="clear link">Help</button> -->
      <!-- <button class="clear link">About Us</button> -->
      <button class="clear link" @click="navigate('/terms')">
        Terms of Use
      </button>
      <button class="clear link" @click="navigate('/privacy-policy')">
        Privacy Policy
      </button>
      <!-- logout button -->
      <button
        v-if="$store.state.customer.authorized"
        class="clear link"
        @click="logout()"
      >
        Logout
      </button>

      <br />

      <!-- logout -->
      <!-- <button
        v-if="$store.state.customer.authorized"
        @click="logout()"
        class="clear link logout"
      >
        Logout
      </button> -->
    </div>
    <div class="place-holder" @click="$emit('closeMenu')"></div>
  </div>
</template>

<script>
export default {
  computed: {
    greeting() {
      const time = new Date().getHours();
      let greeting;
      if (time < 12) {
        greeting = "Good morning";
      } else if (time < 17) {
        greeting = "Good Afternoon";
      } else {
        greeting = "Good Evening";
      }

      return greeting;
    },
    collections() {
      return this.$store.state.customer.collections;
    },
    scarves() {
      return this.collections.filter(
        (col) => col.name.toUpperCase() !== "WALL ART"
      );
    },
    decor() {
      return this.collections.filter(
        (col) => this.scarves.findIndex((sc) => sc.name === col.name) === -1
      );
    },
  },
  methods: {
    navigate(route, type) {
      this.$emit("closeMenu");
      if (type === "collection") {
        // const slug = '/collections?slug=' + route.slug
        // this.$router.push(slug, { collectionId: route._id });
        this.$router.push({
          path: "/collections",
          query: {
            slug: route.slug,
          },
          params: {
            collectionId: route._id,
          },
        });
        return;
      }
      this.$router.push(route);
    },
    async logout() {
      const { resolved, response } = await this.$post("/logoutCustomer");

      /* set user as logged off */
      this.$store.commit("customer/unauthorize");
      this.$router.push("/");
      await this.$store.dispatch("customer/fetchCart");
      /* re-set store currency */
      await this.$store.dispatch("customerV2/fetchStoreLocation");
      await this.$store.dispatch("customer/fetchGlobalConfig");
      this.$forceUpdate();
      this.$emit("closeMenu");
    },
  },
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

    @media (min-width: 769px) {
      width: 30%;
    }

    .header {
      background: $primary_dark;
      height: 7vh;
      width: 100%;
      // margin-bottom: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
      position: relative;

      .close {
        height: 25px;
        width: 25px;
        position: absolute;
        top: 3%;
        right: 3%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;

        &:hover {
          transform: rotate(70deg);
        }

        @media (max-width: 768px) {
          display: none;
        }
      }
      .login-reg {
        width: 100%;
        cursor: pointer;
        text-align: center;
        text-transform: uppercase;
      }

      .currency-selector {
        height: 100%;
        position: absolute;
        top: 0;
        right: 5%;
      }

      span {
        color: white;
        &.greeting {
          font-size: 12px;
        }

        &.name {
          font-size: 13px;
        }
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

      &.sub-heading {
        color: black;
      }

      &.acc {
        font-size: 10px;
        padding-left: 5%;
      }

      &.sub-item {
        font-size: 11px;
      }
      @media (min-width: 769px) {
        padding: 10px;
      }
    }

    .link {
      color: $primary_dark;
      font-family: $font_1_bold;
      font-size: 10px;
      width: 100%;
      text-align: left;
      padding: 2%;
      margin-left: 2px;
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
   
  width: 70%;
    background: transparent;
    @media(max-width: 768px) {
      width: 30%;
    }
  }
}
</style>
