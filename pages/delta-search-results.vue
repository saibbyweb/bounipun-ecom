<template>
  <div
    class="page -broad center-col search-results-page"
    style="padding-top:3%;"
  >
    <!-- offcanvas filters -->
    <FilterProducts :filtersOpen="filtersOpen" @closeFilter="filtersOpen = false" @updated="fetchResults"/>

    <!-- offcanvas sort -->
    <div class="offcanvas-sort shadow" :class="{ visible: sortOpen }">
      <div style="position: relative;">
        <br />
        <br />
        <!-- header -->
        <div class="header shadow">
          <h3>Sort</h3>
          <span style="font-size:12px; cursor:pointer;" @click="clearSort">
            Clear Sort
          </span>

          <!-- close sort layout -->
          <img
            @click="sortOpen = false"
            class="close"
            src="/icons/dark/close.png"
          />
        </div>
        <br />
        <!-- all options -->
        <div class="all-options">
          <!-- price (high to low) -->
          <div>
            <label class="label">
              <input
                type="radio"
                name="priceSort"
                value="-1"
                v-model="sortData.priceRange"
              />
              Price (High - Low)
            </label>
          </div>

          <!-- price (low to high) -->
          <div>
            <label class="label">
              <input
                type="radio"
                name="priceSort"
                value="1"
                v-model="sortData.priceRange"
              />
              Price (Low - High)
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- filter and sort -->
    <div class="fs-wrapper flex center col">
      <p>
        Showing {{ totalMatches }} results for
        <i> "{{ $route.query.searchTerm }}" </i>
      </p>

      <div class="filters-and-sort">
        <!-- filter -->
        <button class="action" @click="filtersOpen = true">
          Filters
          <img class="arrow-bottom" src="/icons/arrow_bottom.png" />
        </button>

        <!-- center pipe -->
        <span class="pipe"> | </span>

        <!-- sort -->
        <button class="action" @click="sortOpen = true">
          Sort
          <img class="arrow-bottom" src="/icons/arrow_bottom.png" />
        </button>
      </div>
    </div>

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
      this.rawCriterion.cursor = 1;
      this.clearAllFilters();
      this.fetchResults();
    },
    sortData: {
      handler() {
        this.rawCriterion.cursor = 1;
        this.fetchResults();
      },
      deep: true
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
      sortData: {
        priceRange: ""
      },
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
  mounted() {

  },
  methods: {
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
    clearSort() {
      this.sortData.priceRange = "";
    },
    async fetchResults(filterData) {
      this.rawCriterion.cursor = 1;
      this.filterData = filterData;
      
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
      if (this.sortData.priceRange !== "") {
        this.rawCriterion.sortBy = {
          "priceRange.startsAt": parseInt(this.sortData.priceRange)
        };
      } else this.rawCriterion.sortBy = {};

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
      window.scroll({ top: 0, behavior: "smooth" });

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
          );
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

.fs-wrapper {
  padding-top: 10px;
  position: fixed;
  top: 10vh;
  left: 0;
  z-index: 2;
  width: 100%;
  background-color: white;
  box-shadow: 20px 0px 15px rgba(0, 0, 0, 0.16);
}

.colors {
  .option {
    margin: 5px;
    .color-box {
      height: 50px;
      width: 50px;
      margin-left: 5px;
    }
    .label {
      margin-top: 10px;
    }

    @media (max-width: 768px) {
      width: 25%;
      .color-box {
        height: 30px;
        width: 30px;
        margin: 10px;
      }

      .label {
        font-size: 10px;
      }
    }
  }
}

.filters-and-sort {
  // margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  background-color: white;

  .action {
    width: 50%;
    font-size: 13px;
    color: $dark_gray;
    background-color: white;
    // background-color: #f4f5f7;

    // background-color: #bfbfbf80;
    color: rgb(123, 123, 123);
    // border: 1px solid #a8a8a8;
    display: flex;
    justify-content: center;
    align-items: center;

    .arrow-bottom {
      width: 5%;
      margin-left: 5px;
      opacity: 0.8;
    }

    &:hover {
    }

    &:first-child {
      border-right: none;
    }

    font-family: $font_2_bold;
  }

  .pipe {
    color: rgb(123, 123, 123);
  }

  @media (max-width: 768px) {
    .action {
      .arrow-bottom {
        width: 15%;
      }
    }
  }
}
/* common all options */
.all-options {
  padding: 5% 5% 0 5%;
}

/* common close */
.close {
  width: 3%;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: rotate(70deg);
  }

  @media (max-width: 768px) {
    width: 6%;
  }
}

.offcanvas-sort {
  position: fixed;
  top: 0;
  right: 0;
  // padding: 5%;
  background: #fffffff2;
  width: 40vw;
  height: 100vh;
  margin-right: -60vw;
  transition: all 0.4s ease-in-out;
  z-index: 3;

  @media (max-width: 768px) {
    width: 60vw;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    padding: 2% 3%;
  }

  &.visible {
    margin-right: 0vw;
  }

  .label {
    font-family: $font_2;
    font-size: 12px;
    cursor: pointer;
  }
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
