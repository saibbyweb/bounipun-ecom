<template>
  <div class="desktop-menu flex center">
    <div class="menu-items flex center">
      <div
        v-for="group in Object.keys(collectionGroups)"
        :key="group"
        class="menu-item-wrapper"
      >
        <button class="menu-item">
          {{ collectionCategories ? collectionCategories[group] : group }}
        </button>
      </div>

      <div class="collections-dropdown flex">



    
        <div
          v-for="group in Object.keys(collectionGroups)"
          :key="group"
          class="menu-item-wrapper flex"
        >
          <!-- collections -->
          <div class="collections-list flex col">
            <button
              @click="navigate(collection, 'collection')"
              class="menu-item collection-item"
              v-for="collection in collectionGroups[group]"
              :key="collection._id"
            >
              {{ collection.name }}
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collectionCategories: {},
      showCollections: null,
    };
  },
  computed: {
    collections() {
      return this.$store.state.customer.collections;
    },
    collectionGroups() {
      const groupedByCategory = this.collections.reduce((acc, col) => {
        // If the category hasn't been added to the accumulator, add it
        if (!acc[col.category]) {
          acc[col.category] = [];
        }

        // Add the current product to the appropriate category array
        acc[col.category].push(col);

        return acc;
      }, {});

      return groupedByCategory;
    },
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    navigate(route, type) {
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
    async getCategories() {
      const result = await this.$fetchCollection("collection_category");
      result.docs.forEach(({ _id, name }) => {
        // this.collectionCategories[_id] = name;
        this.$set(this.collectionCategories, _id, name);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.desktop-menu {
  position: fixed;
  background: $primary_dark;
  //   border-top: 1px solid rgba(148, 148, 148, 0.336);
  height: 7vh;
  width: 100%;
  top: 13vh;
  left: 0;
  z-index: 3;
  //   margin-top:13vh;

  .menu-items {
    width: 100%;
    .menu-item-wrapper {
      width: 300px;
      position: relative;
      /* border: 1px solid gray; */
      justify-content: center;
      align-items: start;
      display: flex;
      overflow: visible;
    }

    &:hover {
      .collections-dropdown {
        padding-top:2vh;
        padding-bottom:2vh;
        box-sizing:content-box;
        height:150px;
        backdrop-filter: blur(10px);
      }
    }

    .collections-dropdown {
      /* display: none; */
      /* width: 100vw; */
      width: 100%;
      position: absolute;
      bottom: 0%;
      left: 0;
      top: 100%;
      /* height: 10vw; */
      height: 0;
      overflow: hidden;
      transition: all 0.2s ease-in-out;
      z-index: 20;
      /* background-color: white; */
      justify-content: center;
      box-shadow: 1px 1px 15px rgba(0,0,0,0.16);
      /* height: 400px;
      //   background-color: "white"; // Define this color
      // Additional styling for dropdown */

      .collection-item {
        color: black;
        width: 300px;
        height: 50px;
        padding: 10px 0 10px 0;
        /* background: white; */
        /* border-left: 0.2px solid #efefef; */
        transition: all 0.3s ease-in-out;

        &:hover {
          border: 1px solid #efefef;
          background: #33333377;
          color: white;
        }
      }
    }
    .menu-item {
      background-color: transparent;
      padding: 0;
      margin: 0;
      border: none;
      color: white;
      /* width: 15%; */
      text-transform: uppercase;
      font-size: 15px;
      font-family: $font_1;
      letter-spacing: 1px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
