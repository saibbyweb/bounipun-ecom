<template>
  <div
    class="page -broad center-col search-results-page"
    style="padding-top:3%;"
  >


    <!-- filter sort toggles -->
    <FilterSortToggles
      :searchTerm="$route.query.searchTerm"
      :totalMatches="totalMatches"
      @openFilters="filtersOpen = true; sortOpen = false"
      @openSort="sortOpen = true; filtersOpen = false"
    />


    <!-- offcanvas filters -->
    <FilterProducts
      ref="filters"
      :filtersOpen="filtersOpen"
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



    <div class="search-results">
      <product-card
        v-for="(product, index) in products"
        :key="index"
        :product="product.color"
        :searchView="true"
        :activeColor="product.actualIndex"
      />
    </div>

    <!-- pagination bar -->
    <div v-if="totalMatches > 0" class="pagination-bar">
      <button
        @click="getPage(n)"
        :class="n == rawCriterion.cursor ? 'current-page page-no' : 'page-no'"
        :key="index"
        v-for="(n, index) in this.totalPages"
      >
        {{ n }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.rawCriterion.search.term} | Search Results | Bounipun Kashmir`
    };
  },
  computed: {
    searchTerm() {
      return this.$route.query.searchTerm;
    },
    totalPages() {
      return Math.ceil(this.totalMatches / this.rawCriterion.limit);
    },
    searchTermRegex() {
      const result = this.rawCriterion.search.term.split(" ");
      let exp = ``;

      let i = 0;
      for (const word of result) {
        exp += word;
        if (i < result.length - 1) exp += "|";
        i++;
      }

      return new RegExp(exp, "i");
    }
  },
  watch: {
    $route(to, from) {
      // console.log(from.params.searchTerm, to.params.searchTerm);
      this.rawCriterion.search.term = to.query.searchTerm;
      this.$refs.filters.clearAllFilters();
      this.fetchResults();
    }
  },
  data() {
    return {
      /* rawCriterion */
      rawCriterion: {
        search: {
          key: "name",
          term: this.$route.query.searchTerm
            ? this.$route.query.searchTerm
            : "rose"
        },
        filters: {},
        sortBy: {},
        limit: 10,
        cursor: 1
      },
      filtersOpen: false,
      filterDataFetched: false,
      sortData: {},
      sortOpen: false,
      products: [],
      filterData: [],
      /* pagination config */
      //     cursor: 1,
      totalMatches: 0,
      baseColors: []
      // limit: 10
    };
  },
  mounted() {},
  methods: {
    filtersUpdated(filterData) {
      this.filterData = filterData;
      this.fetchResults();
    },
    sortUpdated(sortData) {
      this.sortData = sortData;
      this.fetchResults();
    },
    getPage(number) {
      this.rawCriterion.cursor = number;
      this.fetchResults();
    },
    sortToggled(sortBy) {
      console.log(sortBy);
      this.rawCriterion = {
        ...this.rawCriterion,
        sortBy
      };
    },
    getCheckedOnes(options) {
      let checkedOptions = [];
      let allOptions = {
        ...options
      };

      const keys = Object.keys(allOptions);

      /* omit unused filters */
      keys.forEach(key => {
        if (allOptions[key].checked === true)
          checkedOptions.push(allOptions[key].value);
      });

      return checkedOptions;
    },
    async fetchResults() {
      if (this.filterDataFetched === false) return;

      this.rawCriterion.cursor = 1;

      /* keep only the checked ones from (type, variants, collection) */
      let filters = {};
      filters.availabilityType = this.getCheckedOnes(
        this.filterData.availabilityTypes
      );
      filters.bounipun_collection = this.getCheckedOnes(
        this.filterData.collections
      );
      filters["variants._id"] = this.getCheckedOnes(this.filterData.variants);

      /* send base colors once */
      this.rawCriterion.colors = this.getCheckedOnes(
        this.filterData.baseColors
      );

      /* append filters to raw criterion */
      this.rawCriterion.filters = filters;
      /* append selected price range to filters */
      this.rawCriterion.selectedPriceRange = this.filterData.selectedPriceRange;

      /* append sort by data */
      console.log(this.sortData.priceRange, "--before hitting");
      if (
        this.sortData.priceRange !== undefined &&
        this.sortData.priceRange !== ""
      ) {
        this.rawCriterion.sortBy = {
          "priceRange.startsAt": parseInt(this.sortData.priceRange)
        };
      } else this.rawCriterion.sortBy = {};

      console.log(this.rawCriterion.sortBy, this.sortData.priceRange);

      /* post raw criterion to the server */
      this.$store.commit("customer/setLoading", true);
      const fetchPaginatedResults = this.$axios.$post("/searchProducts", {
        rawCriterion: this.rawCriterion
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
        window.scroll({ top: 0, behavior: "smooth" });
      } catch (err) {
        // console.log("Oops, `window` is not defined");
      }

      /* if no matches found, return */
      if (response.docs.length === 0) {
        console.log("No matches found");
        this.products = [];
        this.totalMatches = 0;
        return;
      }

      // this.products = response.docs;

      /* attach collection name */
      response.docs.forEach(product => {
        const foundCollection = this.filterData.collections.find(
          collection => collection.value === product.bounipun_collection
        );
        if (foundCollection !== undefined)
          product.bounipun_collection = foundCollection.name;

        /* attach variant data to rts and under bounipun products */
        if (
          product.availabilityType === "ready-to-ship" &&
          product.type !== "third-party" &&
          product.rtsDirectVariant !== undefined
        ) {
          const foundVariant = this.filterData.variants.find(
            variant => variant.value === product.rtsDirectVariant
          )
          if (foundVariant !== undefined)
            product.rtsDirectVariant = foundVariant.name;
        }
      });

      /* process color segregation */
      this.processColorSegregation(response.docs);

      // this.totalMatches = response.totalMatches;
      //     console.log(response.docs);
      console.log(response.totalMatches, "--matches found");
    },
    processColorSegregation(matchedProducts) {
      /* figure out (guess) the number of color matches in the product */
      let segregated = [];

      matchedProducts.forEach(product => {
        const matchedColors = this.findMatchedColors(product);
        segregated = [...segregated, ...matchedColors];
      });

      console.log(segregated, segregated.length, "-- WATCH");

      this.products = segregated;
      this.totalMatches = segregated.length;
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
      product.colors = product.colors.filter(color => color.status === true);

      /* what are the color filter */
      product.colors.forEach((color, index) => {
        // matchedColors.push({ color: product, actualIndex: index });
        // return;

        // console.log('I AM RUNNING - WATCH')

        // console.log(color.name, index);
        const colorNameMatch = this.searchTermRegex.test(color.name);
        const baseColorMatch = this.searchTermRegex.test(color.baseColor);
        const additionalColor1Match = this.searchTermRegex.test(
          color.additionalColor1
        );
        const additionalColor2Match = this.searchTermRegex.test(
          color.additionalColor2
        );

        /* overall text match */
        const textMatch =
          colorNameMatch ||
          baseColorMatch ||
          additionalColor1Match ||
          additionalColor2Match;

        /* color.baseColor is $in [colorFilters] */
        const baseColorFilterMatch = this.rawCriterion.colors.findIndex(
          col => col === color.baseColor
        );
        /* color.additionalColor1 is $in [colorFilters] */
        const additionalColor1FilterMatch = this.rawCriterion.colors.findIndex(
          col => col === color.additionalColor1
        );
        /* color.additionalColor2 is $in [colorFilters] */
        const additionalColor2FilterMatch = this.rawCriterion.colors.findIndex(
          col => col === color.additionalColor2
        );

        /* overall filter match */
        const filterMatch =
          baseColorFilterMatch !== -1 ||
          additionalColor1FilterMatch !== -1 ||
          additionalColor2FilterMatch !== -1;

        /* make sure the color is active */
        if ((textMatch || filterMatch) && color.status === true) {
          const colorProduct = { ...product };
          console.log("COLOR MATCHED", color.name, product.bounipun_collection);
          /* TODO: escape collection id should be global */
          if (product.bounipun_collection.toUpperCase() === "ESCAPE") {
            console.log("ESCAPE COLOR FOUND");
            colorProduct.name = color.name;
          }

          matchedColors.push({ color: colorProduct, actualIndex: index });
        }

        /* which ever color matches this criteria, capture the index and treat it as individual product */
        /* also if collection is escape, replace product name with color name */
      });

      /* if no color matched, return as it is */
      console.log(product.name, matchedColors.length, "--WATCH");
      if (matchedColors.length === 0) {
        matchedColors = [{ color: product, actualIndex: -1 }];
      }

      return matchedColors;
    },
    resultsFetched(result) {
      console.log("AM I BEING WATCH");
      if (result.docs.length === 0) {
        this.products = [];
        return;
      }

      /* filter out hidden colors */
      // result.docs.forEach(product => {
      //     product.colors = product.colors.filter(color => color.status === true);
      // });

      /* extract list */
      this.products = result.docs;
    }
  }
};
</script>

<style lang="scss" scoped>
.search-results-page {
  // background-color: #f4f5f7;

  position: relative;
}

.search-results {
  display: flex;
  flex-wrap: wrap;
  // margin-top: 5vw;

  margin-top: 10vh;
}

.pagination-bar {
  display: flex;
  flex-wrap: wrap;

  .page-no {
    cursor: pointer;
    border-radius: 4px;
    background: #ebecf0;
    box-shadow: -6px 6px 16px #cfd0d3, 6px -6px 16px #ffffff;
    padding: 20px;
    margin: 4px;
  }

  .current-page {
    background: $primary_dark;
    color: white;
  }
}
</style>
