<template>
  <div class="center-col page -wh">
    <!-- collection header -->
    <div
      class="c-header center"
      :style="{
        backgroundImage: `url(${getCollectionImage(collection.image)})`
      }"
    >
      <h2 v-if="collection.image === ''" class="heading">
        {{ collection.name }}
      </h2>
    </div>

    <!-- main text block -->
    <div
      v-if="
        collection.mainTextBlock !== undefined &&
          collection.mainTextBlock.visible
      "
      class="main-text-block center-col pad"
    >
      <h2 class="text-1">{{ collection.mainTextBlock.text1 }}</h2>
      <p class="text-2">{{ collection.mainTextBlock.text2 }}</p>
      <p class="text-3">{{ collection.mainTextBlock.text3 }}</p>
    </div>

    <!-- if collections is not escape -->
    <div
      v-if="!collectionLocked && collection.name !== 'Escape'"
      class="collection-items"
    >
      <product-card
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
      <h3 v-if="products.length === 0">
        fetching products for {{ collection.name }}
      </h3>
    </div>

    <!-- if colllection is escape -->
    <div v-if="!collectionLocked && collection.name === 'Escape'">
      <!-- color categories -->
      <div
        class="color-categories"
        v-for="(value, name, index) in escapeProduct"
        :key="index"
      >
        <div v-if="value.length !== 0">
          <!-- sub color heading -->
          <h5 class="category-heading">{{ value.name }}</h5>

          <!-- color category description -->
          <p class="category-description">{{ value.description }}</p>

          <div class="collection-items">
            <product-card
              v-for="(color, cIndex) in value.colors"
              :key="cIndex"
              :product="adjustProduct(products[0], color.actualIndex)"
              :activeColor="color.actualIndex"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- if collection locked -->
    <div v-if="collectionLocked" class="locked">
      <h2 class="heading" v-if="collectionLocked">
        🔒 This collection is locked
      </h2>
      <br />
      <button class="action">Request Access</button>
    </div>
  </div>
</template>

<script>
import productCard from "../components/productCard.vue";

export default {
  head() {
    return {
      title: `${this.collection.name} | Bounipun Kashmir`
    };
  },
  components: {
    productCard
  },
  data() {
    return {
      products: [],
      collection: {
          name: 'fetching...'
      },
      colorCategories: [],
      escapeProduct: []
    };
  },
  watch: {
    $route(to, from) {
      this.products = [];
      this.escapeProduct = [];
      this.colorCategories = [];
      this.collection = {};
      this.fetchCollectionProducts(to.query.slug);
    }
  },
  computed: {
    collectionLocked() {
      return this.collection.lock === undefined ? false : this.collection.lock;
    }
  },
  mounted() {
    this.fetchCollectionProducts(this.$route.query.slug);
  },
  methods: {
    adjustProduct(product, cIndex) {
      let adjustedProduct = {
        ...product
      };

      // if(adjustedProduct.colors[cIndex] !== undefined) {
      //     return;
      // }

      adjustedProduct.name = adjustedProduct.colors[cIndex].name;
      return {
        ...adjustedProduct
      };
    },
    async fetchColorCategories() {
      const colorCategories = await this.$fetchData(
        "color_categories",
        {},
        true
      );
      /* wait for the request to resolve */
      if (!colorCategories.fetched) {
        console.log("could not fetch color categories");
        return;
      }
      this.colorCategories = colorCategories.docs;
    },
    async fetchCollectionProducts(collectionSlug) {
      /* fetch collection id */
      const collection = await this.$fetchData("collections", {
        slug: collectionSlug,
        status: true
      });
      if (!collection.fetched) return;

      this.collection = collection.doc;

      /* fetch color categories, if collection is escape */
      if (this.collection.name === "Escape") await this.fetchColorCategories();

      /* fetch product under this collection  */
      const products = await this.$fetchData(
        "products",
        {
          bounipun_collection: collection.doc._id,
          type: "under-bounipun",
          status: true
        },
        true
      );

      if (!products.fetched) {
        return;
      }


      /* filter out inactive colors */
      products.docs.forEach(product => {
        product.colors = product.colors.filter(color => color.status === true);
        product.variants.sort((a,b) => a._id.order - b._id.order);
      });

      /* filter out products with no active colors */
      products.docs = products.docs.filter(
        product => product.colors.length > 0
      );
      
      /* set rts direct variant */
      products.docs.forEach(product => {
        if(product.availabilityType === 'ready-to-ship' && product.type !== 'third-party' && product.rtsDirectVariant !== undefined) {
          product.rtsDirectVariant = product.rtsDirectVariant.name;
        }
      })

      this.products = products.docs;

      /* sort products if collection is escape */
      if (this.collection.name === "Escape") {
        this.sortEscape(this.products);
      }
    },
    sortEscape(products) {
      const product = products[0];
      let groupedData = [];
      this.colorCategories.forEach(category => {
        /* remove inactive colors */
        product.colors = product.colors.filter(color => color.status === true);

        /* find all colors under this category */
        const colors = product.colors.filter(color => {
          /* attach actual index */
          color.actualIndex = product.colors.findIndex(
            col => col._id === color._id
          );
          return color._id.category === category._id;
        });
        /* save colors */
        groupedData.push({
          name: category.name,
          description: category.description,
          colors
        });
      });

      this.escapeProduct = groupedData;
    },
    getCollectionImage(image) {
      if (image === undefined) return "/default-image.png";
      return this.$getOriginalPath(image);
    }
  }
}
</script>

<style lang="scss" scoped>
.c-header {
  height: 40vw;
  // background: url("/demo_images/collection-header.png");
  background-size: cover;
  width: 100%;

  .heading {
    color: $primary_dark;
    text-transform: uppercase;
    font-family: $font_1_bold;
    font-size: 10vw;
  }
}

.main-text-block {
  // margin-top:20px;
  padding: 5%;

  .text-1 {
    font-family: $font_3_bold;
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
  }

  .text-2 {
    font-size: 14px;
    text-align: justify;
    margin-bottom: 5px;
    font-family: $font_1;
  }

  .text-3 {
    font-family: $font_4;
    font-size: 19px;
  }
}

.collection-items {
  display: flex;
  flex-wrap: wrap;
  // margin-top: 10vw;
  justify-content: center;
}

.locked {
  padding: 10%;

  .heading {
    font-family: $font_2_bold;
    text-transform: uppercase;
    text-align: center;
  }
}

.color-categories {
  margin-top: 20px;

  .category-heading {
    font-weight: 900;
    font-family: $font_2;
    font-size: 18px;
    color: $dark_gray;
    padding-left: 10%;
    color: $primary_dark;
  }

  .category-description {
    padding-left: 10%;
    font-size: 13px;
    color: $gray;
  }
}
</style>
