<template>
  <div
    class="flex col page -wh"
    :style="
      collectionLockedAndUserAuthorized ? { backgroundColor: '#111' } : {}
    "
  >
    <!-- collection header -->
    <div
      v-if="collectionImageProvided && !collectionLocked"
      class="c-header center"
      :class="{ isEscape, collectionLocked }"
      :style="{
        backgroundImage: `url(${getCollectionImage(collectionImage)})`,
      }"
    >
      <h2 v-if="collection.image === ''" class="heading">
        {{ collection.name }}
      </h2>
    </div>

    <!-- locked images slideshow [DESKTOP] -->
    <div v-if="collectionLocked" class="locked-image-slideshow center">
      <!-- slideshow (DESKTOP) -->
      <slideshow
        size="cover"
        :images="fetchSlideshow(collection.lockedImages)"
        mSlideHeight="120vw"
        dSlideHeight="90vh"
        :dSlideWidth="100"
        :autoplay="true"
        :main="true"
      />
    </div>

    <!-- main text block -->
    <div
      v-if="
        collection.mainTextBlock !== undefined &&
        collection.mainTextBlock.visible
      "
      class="main-text-block center-col pad"
    >
      <h2
        class="text-1"
        :style="collectionLockedAndUserAuthorized ? { color: 'white' } : {}"
      >
        {{ collection.mainTextBlock.text1 }}
      </h2>
      <p
        class="text-2"
        :style="collectionLockedAndUserAuthorized ? { color: 'white' } : {}"
      >
        {{ collection.mainTextBlock.text2 }}
      </p>
      <p
        v-if="!collectionLocked"
        class="text-3"
        :style="collectionLockedAndUserAuthorized ? { color: 'white' } : {}"
      >
        {{ collection.mainTextBlock.text3 }}
      </p>
      <p
        v-else
        class="text-2"
        :style="collectionLockedAndUserAuthorized ? { color: 'white' } : {}"
      >
        {{ collection.lockedText }}
      </p>
    </div>

    <!-- filter sort toggles -->
    <FilterSortToggles
      v-if="!collectionLocked"
      @openFilters="
        filtersOpen = true;
        sortOpen = false;
      "
      @openSort="
        sortOpen = true;
        filtersOpen = false;
      "
      :collectionView="true"
      @viewChanged="gridView = $event"
    />

    <!-- offcanvas filters -->
    <FilterProducts
      ref="filters"
      :filtersOpen="filtersOpen"
      :collectionView="true"
      :isEscape="isEscape"
      @close="filtersOpen = false"
      @updated="filtersUpdated"
      @dataFetched="filterDataFetched = true"
    />

    <!-- offcanvas sort -->
    <SortProducts
      :sortOpen="sortOpen"
      @close="sortOpen = false"
      @updated="sortUpdated"
    />

    <!-- if collections is not escape -->
    <div
      v-if="
        (!collectionLocked &&
          isEscape &&
          !noFilterOrSortApplied &&
          collectionSoftLockAccess) ||
        (!collectionLocked && !isEscape && collectionSoftLockAccess)
      "
      class="collection-items"
    >
      <product-card
        v-for="(product, index) in products"
        :key="index"
        :product="product.color"
        :searchView="true"
        :activeColor="product.actualIndex"
        :gridView="gridView"
      />

      <!-- if no products found -->
      <h3
        v-if="
          products.length === 0 &&
          !$store.state.customer.loading &&
          initialLoadComplete
        "
      >
        No products matched for {{ collection.name }}
      </h3>
    </div>

    <!-- if colllection is escape -->
    <div
      v-if="
        !collectionLocked &&
        isEscape &&
        noFilterOrSortApplied &&
        collectionSoftLockAccess
      "
    >
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
              :gridView="gridView"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- if collection locked -->
    <div class="flex center">
      <div v-if="collectionLockedAndUserAuthorized" class="locked">
        <!-- <h2 class="heading" v-if="collectionLocked">
        🔒 This collection is locked
      </h2> -->
        <!-- unlock content -->
        <UnlockContent />
      </div>
    </div>
    <!-- ask for login -->
    <div
      v-if="
        (collectionLocked || collectionSoftLocked) &&
        !$store.state.customer.authorized
      "
      class="flex center col login"
    >
      <p class="text">Please login first to unlock this collection</p>
      <button class="action" @click="$router.push('/login')">
        Access Bounipun Account
      </button>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.collection?.name} | Bounipun Kashmir`,
    };
  },
  data() {
    return {
      gridView: true,
      /* rawCriterion */
      rawCriterion: {
        search: {
          key: "name",
          term: "",
        },
        filters: {},
        sortBy: { order: 1 },
        limit: 50,
        cursor: 1,
      },
      products: [],
      collection: {
        name: "fetching...",
      },
      filterData: [],
      sortData: {},
      filtersOpen: false,
      sortOpen: false,
      filterDataFetched: false,
      colorCategories: [],
      escapeProduct: [],
      loading: false,
      initialLoadComplete: false
    };
  },
  watch: {
    $route(to, from) {
      this.products = [];
      this.escapeProduct = [];
      this.colorCategories = [];
      this.collection = { name: "fetching... " };
      // if (this.isEscape) {
      //   this.fetchCollectionProducts(this.$route.query.slug);
      //   return;
      // }
      this.fetchResults(to.query.slug);
    },
  },
  computed: {
    collectionImageProvided() {
      return this.collectionImage !== "";
    },
    collectionImage() {
      return this.collectionLocked
        ? this.collection.lockedImage
        : this.collection.image;
    },
    collectionText() {
      const { collection } = this;
      return this.collectionLocked ? collection.lockedText : mainTextBlock;
    },
    collectionLocked() {
      /* if collection is locked */
      if (this.collection.lock === true) {
        const customer = this.$store.state.customer;
        switch (customer.authorized) {
          case true:
            return !(customer.user.contentUnlock.status === true);
          case false:
            return true;
        }
      }

      return false;
    },
    collectionSoftLocked() {
      if (this.collection.softLock === undefined) return false;
      return this.collection.softLock;
    },
    collectionSoftLockAccess() {
      if (!this.collectionSoftLocked) return true;

      return this.$store.state.customer.authorized;
    },
    collectionLockedAndUserAuthorized() {
      const customer = this.$store.state.customer;
      return this.collectionLocked && customer.authorized === true;
    },
    isEscape() {
      return this.$route.query.slug.toUpperCase() === "ESCAPE";
    },
    noFiltersApplied() {
      if (Object.keys(this.rawCriterion.filters).length === 0) return true;

      return (
        this.rawCriterion.colors.length === 0 &&
        this.rawCriterion.filters.availabilityType.length === 0 &&
        this.rawCriterion.filters["variants._id"].length === 0
      );
    },
    noFilterOrSortApplied() {
      return (
        this.noFiltersApplied &&
        this.rawCriterion.sortBy["priceRange.startsAt"] === undefined
      );
    },
  },
  async mounted() {
    // if (this.isEscape) this.fetchCollectionProducts(this.$route.query.slug);
  },
  methods: {
    fetchSlideshow(slides) {
      return slides.map((slide) => this.$getOriginalPath(slide.path));
    },
    filtersUpdated(filterData) {
      this.filterData = filterData;
      // TODO: MAKE SURE the collection id is always present (filterData.collections)

      // can do that in fetch results method as well
      this.fetchResults();
    },
    sortUpdated(sortData) {
      this.sortData = sortData;
      this.fetchResults();
    },
    getCheckedOnes(options) {
      let checkedOptions = [];
      let allOptions = {
        ...options,
      };

      const keys = Object.keys(allOptions);

      /* omit unused filters */
      keys.forEach((key) => {
        if (allOptions[key].checked === true)
          checkedOptions.push(allOptions[key].value);
      });

      return checkedOptions;
    },
    async fetchResults() {
      this.escapeProduct = [];
      this.products = [];
      /* if fitlet data was not fetched, stop execution */
      if (this.filterDataFetched === false) return;

      /* reset cursor */
      this.rawCriterion.cursor = 1;

      /* keep only the checked ones from (type, variants, collection) */
      let filters = {};
      filters.availabilityType = this.getCheckedOnes(
        this.filterData.availabilityTypes
      );

      /* get bounipun collection id */
      const bounipunCollection = this.filterData.collections.find(
        (col) => col.slug.toUpperCase() == this.$route.query.slug.toUpperCase()
      );

      // TODO: added as expirement SET COLLECTION
      this.collection = bounipunCollection;

      /* set bounipun collection for filters */
      filters.bounipun_collection = [bounipunCollection._id];

      /* set selected variants (all variants on mounted) */
      filters["variants._id"] = this.getCheckedOnes(this.filterData.variants);

      /* send base colors once (all colors on mounted) */
      this.rawCriterion.colors = this.getCheckedOnes(
        this.filterData.baseColors
      );

      /* append filters to raw criterion */
      this.rawCriterion.filters = filters;
      /* append selected price range to filters */
      this.rawCriterion.selectedPriceRange = this.filterData.selectedPriceRange;

      if (
        this.sortData.priceRange !== undefined &&
        this.sortData.priceRange !== ""
      ) {
        this.rawCriterion.sortBy = {
          "priceRange.startsAt": parseInt(this.sortData.priceRange),
        };
      } else this.rawCriterion.sortBy = { order: 1 };

      /* if escape, no filter applied but sort applied, reset sort */
      if (
        this.isEscape &&
        this.noFiltersApplied &&
        this.rawCriterion.sortBy["priceRange.startsAt"] !== undefined
      ) {
        this.rawCriterion.sortBy = { order: 1 };
      }

      /* TODO: should add lock check flag post raw criterion to the server */
      this.$store.commit("customer/setLoading", true);
      const fetchPaginatedResults = this.$axios.$post("/searchProducts", {
        rawCriterion: this.rawCriterion,
        lockCheck: this.collection.lock,
      });

      /* wait for request to resolve */
      const { response, error } = await this.$task(fetchPaginatedResults);
      this.$store.commit("customer/setLoading", false);

      /* if error occurred */
      if (error) {
        console.log("Could not fetch documents");
        return;
      }

      /* scroll to top */
      try {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      } catch (err) {
        // console.log("Oops, `window` is not defined");
      }

      /* initial load complete */
      this.initialLoadComplete = true;

      /* if no matches found, return */
      if (response.docs.length === 0) {
        console.log("No matches found");
        this.products = [];
        return;
      }

      /* attach collection name */
      response.docs.forEach((product) => {
        product.bounipun_collection = this.collection.name;

        /* attach variant data to rts and under bounipun products */
        if (
          product.availabilityType === "ready-to-ship" &&
          product.type !== "third-party" &&
          product.rtsDirectVariant !== undefined
        ) {
          const foundVariant = this.filterData.variants.find(
            (variant) => variant.value === product.rtsDirectVariant
          );
          if (foundVariant !== undefined)
            product.rtsDirectVariant = foundVariant.name;
        }
      });

      /* sort products if collection is escape */
      if (this.isEscape && this.noFilterOrSortApplied) {
        this.products = response.docs;
        this.sortEscape(response.docs);
        return;
      }

      /* process color segregation */
      this.processColorSegregation(response.docs);
    },
    processColorSegregation(matchedProducts) {
      /* figure out (guess) the number of color matches in the product */
      let segregated = [];

      matchedProducts.forEach((product) => {
        const matchedColors = this.findMatchedColors(product);
        segregated = [...segregated, ...matchedColors];
      });

      console.log(segregated, segregated.length, "-- WATCH");

      this.products = segregated;

      // this.totalMatches = segregated.length;
      /* figure out the color index of matched colors */
      /* generate new array where each matched color is treated as a product */
      /* send back the new product array */
      /* update total matches */
    },
    findMatchedColors(product) {
      console.log(product, "matched");

      // return [{ color: product, actualIndex: -1 }];
      /* product name or base colors matches the color filter (if provided) */
      // const product = {...bounipunProduct};

      let matchedColors = [];

      /* filter out colors which are inactive */
      product.colors = product.colors.filter((color) => color.status === true);

      /* what are the color filter */
      product.colors.forEach((color, index) => {
        /* color.baseColor is $in [colorFilters] */
        const baseColorFilterMatch = this.rawCriterion.colors.findIndex(
          (col) => col === color.baseColor
        );
        /* color.additionalColor1 is $in [colorFilters] */
        const additionalColor1FilterMatch = this.rawCriterion.colors.findIndex(
          (col) => col === color.additionalColor1
        );
        /* color.additionalColor2 is $in [colorFilters] */
        const additionalColor2FilterMatch = this.rawCriterion.colors.findIndex(
          (col) => col === color.additionalColor2
        );

        /* overall filter match */
        const filterMatch =
          baseColorFilterMatch !== -1 ||
          additionalColor1FilterMatch !== -1 ||
          additionalColor2FilterMatch !== -1;

        /* make sure the color is active */
        if (filterMatch && color.status === true) {
          const colorProduct = {
            ...product,
          };
          console.log("COLOR MATCHED", color.name, product.bounipun_collection);
          /* TODO: escape collection id should be global */
          if (product.bounipun_collection.toUpperCase() === "ESCAPE") {
            console.log("ESCAPE COLOR FOUND");
            colorProduct.name = color.name;
          }

          matchedColors.push({
            color: colorProduct,
            actualIndex: index,
          });
        }

        /* which ever color matches this criteria, capture the index and treat it as individual product */
        /* also if collection is escape, replace product name with color name */
      });

      /* if no color matched, return as it is */
      if (matchedColors.length === 0) {
        matchedColors = [
          {
            color: product,
            actualIndex: -1,
          },
        ];
      }

      return matchedColors;
    },
    adjustProduct(product, cIndex) {
      console.log(product, "-- adjust product");
      let adjustedProduct = {
        ...product,
      };

      // if(adjustedProduct.colors[cIndex] !== undefined) {
      //     return;
      // }

      adjustedProduct.name = adjustedProduct.colors[cIndex].name;
      return {
        ...adjustedProduct,
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
        status: true,
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
          status: true,
        },
        true
      );

      if (!products.fetched) {
        return;
      }

      /* filter out inactive colors */
      products.docs.forEach((product) => {
        product.colors = product.colors.filter(
          (color) => color.status === true
        );
        product.variants.sort((a, b) => a._id.order - b._id.order);
      });

      /* filter out products with no active colors */
      products.docs = products.docs.filter(
        (product) => product.colors.length > 0
      );

      /* set rts direct variant */
      products.docs.forEach((product) => {
        if (
          product.availabilityType === "ready-to-ship" &&
          product.type !== "third-party" &&
          product.rtsDirectVariant !== undefined
        ) {
          product.rtsDirectVariant = product.rtsDirectVariant.name;
        }
      });

      this.products = products.docs;

      /* sort products if collection is escape */
      if (this.collection.name === "Escape") {
        this.sortEscape(this.products);
      }
    },
    async sortEscape(products) {
      /* fetch color categories, if collection is escape */
      await this.fetchColorCategories();

      let product = products[0];
      let groupedData = [];

      /* map color data to product colors */
      for (let i = 0; i < product.colors.length; i++)
        product.colors[i]._id = product.colorData[i];

      this.colorCategories.forEach((category) => {
        /* remove inactive colors */
        product.colors = product.colors.filter(
          (color) => color.status === true
        );
        /* find all colors under this category */
        const colors = product.colors.filter((color) => {
          /* attach actual index */
          color.actualIndex = product.colors.findIndex(
            (col) => col._id === color._id
          );
          return color._id.category === category._id;
        });
        /* save colors */
        groupedData.push({
          name: category.name,
          description: category.description,
          colors,
        });
      });

      console.log("sort escape called", product, groupedData);

      this.escapeProduct = groupedData;
    },
    getCollectionImage(image) {
      // if (image === undefined) return "/default-image.png";
      if (image === undefined) return "";

      return this.$getOriginalPath(image);
    }
  },
};
</script>

<style lang="scss" scoped>
.c-header {
  height: 40vw;
  margin-top: 5vh;
  background-size: cover;
  width: 100%;

  &.collectionLocked {
    margin-top: 0;
  }

  &.isEscape {
    /* margin-top: 0vh; */
  }

  .heading {
    color: $primary_dark;
    text-transform: uppercase;
    font-family: $font_1_bold;
    font-size: 10vw;
  }
}

.main-text-block {
  padding: 5% 5% 2% 5%;

  .text-1 {
    font-family: $font_3_bold;
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
    text-align: center;
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
  justify-content: center;
}

.locked {
  padding: 1% 10%;
  width: 60%;
  .heading {
    font-family: $font_2_bold;
    text-transform: uppercase;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
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

.login {
  // border: 1px solid #d0d0d0e8;
  padding: 2% 8%;
  .text {
    font-family: $font_2;
    padding-bottom: 10px;
  }
}
</style>
