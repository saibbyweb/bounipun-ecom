<template>
  <div class="header center-col">
    <!-- bounipun logo -->
    <div @click="$router.push('/admin-panel')" class="logo center">
      <img src="/icons/light/logo.png" />
    </div>

    <div class="menu-links flex wrap center">
      <div
        @click="setActive(item, index)"
        class="menu-item"
        :class="{ active: activeIndex === index }"
        v-for="(item, index) in items"
        :key="index"
      >
        <span> {{ item.name }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Products",
          path: "/admin-panel/products",
          desc: "Manage Bounipun inventory"
        },
        {
          name: "Collections",
          path: "/admin-panel/collections",
          desc: "Manage techniques"
        },
        {
          name: "Variant Categories",
          path: "/admin-panel/variantCategories",
          desc: "Manage bounipun colors"
        },
        {
          name: "Variants",
          path: "/admin-panel/variants",
          desc: "Manage bounipun colors"
        },
        {
          name: "Fabrics",
          path: "/admin-panel/fabrics",
          desc: "Manage list and details of various fabrics"
        },
        {
          name: "Base Colors",
          path: "/admin-panel/baseColors",
          desc: "Manage bounipun colors"
        },
        {
          name: "Colors Categories",
          path: "/admin-panel/colorCategories",
          desc: "Manage bounipun colors"
        },
        {
          name: "Colors",
          path: "/admin-panel/colors",
          desc: "Manage bounipun colors"
        },
        {
          name: "Product Lists",
          path: "/admin-panel/productLists",
          desc: "Manage bounipun colors"
        },
        {
          name: "Homepage Layouts",
          path: "/admin-panel/homepageLayouts",
          desc: "Manage Homepage Layouts"
        },
        {
          name: "[NEW] Homepage",
          path: "/admin-panel/homepage",
          desc: "Manage Homepage Layouts"
        },
        {
          name: "Sales",
          path: "/admin-panel/sales",
          desc: "Manage Homepage Layouts"
        },
        {
          name: "Coupons",
          path: "/admin-panel/coupons",
          desc: "Manage Homepage Layouts"
        },
        {
          name: "Orders",
          path: "/admin-panel/orders",
          desc: "Manage Homepage Layouts"
        },
        {
          name: "Configuration",
          path: "/admin-panel/globalConfig",
          desc: "..."
        },
        {
          name: "Messages",
          path: "/admin-panel/messages",
          desc: "..."
        },
         {
          name: "Customers",
          path: "/admin-panel/customers",
          desc: "..."
        },
      ],
      activeIndex: -1
    };
  },
  methods: {
    setActive(item, index) {
      this.activeIndex = index;
      this.$router.push(item.path);
    }
  }
};
</script>

<style lang="scss" scoped>
//
.header {
  // padding: 10px;
  background-color: $dark_gray;
  height: 15vh;
  overflow: hidden;

  .logo {
    width: 12%;

    img {
      width: 80%;
    }
  }

  .menu-links {
    width: 100%;
    // padding-top: 10px;

    .menu-item {
      padding: 1px 8px;
      margin: 0 3px;
      color: $dark_gray;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      span {
        color: rgb(208, 208, 208);
        font-size: 11px;
      }

      &:hover {
        background-color: #c8c8c8ca;
        span {
          color: $dark_gray;
        }
      }

      &.active {
        background-color: rgb(41, 157, 111);
        span {
          color: white;
        }
      }
    }
  }
}
</style>
