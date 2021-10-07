<template>
  <div>
    <div class="loading center" v-if="$store.state.admin.loading">
      <img src="/loading.gif" />
    </div>

    <AdminHeader />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pin: "",
      unsubscribe: null,
    };
  },
  watch: {
    $route(to, from) {
      if (this.$store.state.admin.authorized === false)
        this.$router.push("/admin-panel/login");
    },
  },
  mounted() {
    /* load persisted state */
    this.$store.commit("admin/loadPersistedState");

    if (this.$store.state.admin.authorized === false)
      this.$router.push("/admin-panel/login");

    /* listen for all mutations */
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "admin/setLoading") return;

      console.log(mutation);
      console.log(state.admin);
      /* save state in local storage */
      window.localStorage.setItem(
        "admin_persistedState",
        JSON.stringify(state.admin)
      );
    });

    setTimeout(() => {
      this.$store.dispatch("admin/fetchProfile");
    }, 100);
  },
  methods: {
    authorizeLocal() {
      if (this.pin === "7711")
        this.$store.commit("admin/setLocalAuthorized", true);
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
  z-index: 2;
  background-color: #3333335b;

  img {
    width: 50px;
  }
}

.local-login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $dark_gray;
  z-index: 2;
  .logo {
    width: 30vw;
  }
  .box {
    width: 50%;
    height: 50%;
  }
}

.crud {
  display: grid;
  grid-template-columns: 65% 35%;
  // grid-template-columns: auto;
  grid-template-rows: 10% 90%;
  align-content: baseline;
  height: 90vh;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
  }

  .filters {
    grid-area: 1 / 1 / 2 / 3;
    transition: all 0.3s ease-in-out;

    &.updating {
      opacity: 0.5;
      pointer-events: none;
    }

    @media (max-width: 768px) {
      grid-area: 1 / 1 / 2 / 1;
    }

    padding: 10px;

    .search {
      width: 25%;
      padding: 10px 15px;
      border: none;
      margin-right: 10px;
    }
  }

  .list {
    grid-area: 2 / 1 / 2 / 2;
    transition: all 0.3s ease-in-out;
    overflow-y: scroll;
    position: relative;

    &.updating {
      opacity: 0.5;
      pointer-events: none;
    }

    /* sw pagination bar */
    .sw-pagination {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: white;
      box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);

      .pagination-bar {
        justify-content: flex-start;
        padding-left: 3%;
        width: 100%;
        background-color: $dark_gray;
        // opacity: 0.5;
        // display:none;
      }

      .total-matches {
        font-family: $font_2;
        // text-transform: uppercase;
        font-size: 15px;
        margin-right: 10%;
        padding: 10px;
        color: white;
      }
    }

    @media (max-width: 768px) {
      grid-area: 2 / 1 / 3 / 2;
    }

    padding: 10px;
    padding-bottom: 20px;
  }

  .update {
    grid-area: 2 / 2 / 2 / 3;
    transition: all 0.3s ease-in-out;
    position: relative;
    height: 100%;
    overflow-y: scroll;
    padding: 10px;
    padding-bottom: 40px;

    &.updating {
      box-shadow: -1px 0 15px rgba(0, 0, 0, 0.16);
    }

    @media (max-width: 768px) {
      grid-area: 3 / 1 / 4 / 2;
    }

    .contents {
      position: relative;
      padding-bottom: 25px;
      .center-space {
        position: fixed;
        bottom: 0;
        right: 0;
        background-color: $dark_gray;
        box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
        width: 35%;
        padding: 1%;
        z-index: 2;

        .action {
          background-color: rgb(35, 142, 90);
          color: white;

          &.delete {
            background-color: rgb(178, 33, 33);
          }
        }
      }
    }

    .heading {
      text-transform: uppercase;
      text-align: center;
      background-color: $dark_gray;
      color: white;
    }

    .label {
      font-family: $font_2_bold;
      color: $gray;
      text-transform: uppercase;
      font-size: 10px;
      padding: 2%;
      margin-left: 5px;
      font-weight: 900;
    }

    .loading {
      width: 50px;
      height: 50px;
    }

    .actions {
      width: 100%;
    }

    .cancel-update {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 10%;
    }
  }
}
</style>
