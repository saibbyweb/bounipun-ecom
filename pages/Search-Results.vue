<template>
  <div
    class="page -broad center-col search-results-page"
    style="padding-top:3%;"
  >
    <!-- offcanvas filters -->
    <div class="offcanvas-filters shadow" :class="{ visible: filtersOpen }">
      <div style="position: relative;">
        <br />
        <br />
        <div
          style="display:flex; align-items:center; justify-content: space-between;"
        >
          <h3>Filters</h3>
          <span
            style="font-size:12px; cursor:pointer;"
            @click="clearAllFilters"
          >
            Clear Selection
          </span>
        </div>
        <br />
        <!-- product type options -->
        <!-- <Accordion heading="Product Type" :expanded="true">
                <div class="option" v-for="(type, index) in filterData.types" :key="index">
                    <label class="label">
                        <input type="checkbox" name="type" :value="type.value" v-model="type.checked" />
                        {{ type.name }}</label>
                </div>

            </Accordion> -->
        <!-- variant options -->
        <Accordion heading="Variants" :expanded="true">
          <div
            class="option"
            v-for="(variant, index) in filterData.variants"
            :key="index"
          >
            <label class="label">
              <input
                type="checkbox"
                name="variants"
                :value="variant.value"
                v-model="variant.checked"
              />
              {{ variant.name }}</label
            >
          </div>
        </Accordion>
        <!-- collection options -->
        <Accordion heading="Collection" :expanded="true">
          <div
            class="option"
            v-for="(collection, index) in filterData.collections"
            :key="index"
          >
            <label class="label">
              <input
                type="checkbox"
                name="collection"
                :value="collection.value"
                v-model="collection.checked"
              />
              {{ collection.name }}</label
            >
          </div>
        </Accordion>

        <!-- base color options -->
        <Accordion heading="Base Color" :expanded="true">
          <div class="flex wrap colors">
            <div
              class="option flex col center"
              v-for="(color, index) in filterData.baseColors"
              :key="index"
            >
              <div class="color-box shadow" :style="`background: ${color.hex}`"></div>

              <label class="label flex start center">
     

                {{ color.name }}
              </label>
                         <input
                  class="color-check"
                  type="checkbox"
                  name="baseColor"
                  :value="color.value"
                  v-model="color.checked"
                />

            </div>
          </div>
        </Accordion>

        <!-- TODO: re-enable after verifying USD specific results price range options -->
        <Accordion heading="Price Range" :expanded="true" v-if="false">
          <div
            class="option"
            v-for="(range, index) in filterData.priceRanges"
            :key="index"
          >
            <label class="label">
              <input
                type="radio"
                name="priceRange"
                :value="range.value"
                v-model="filterData.selectedPriceRange"
              />
              {{ range.name }}
            </label>
          </div>
        </Accordion>

        <img
          @click="filtersOpen = false"
          class="close"
          src="/icons/dark/close.png"
        />
      </div>
    </div>

    <!-- offcanvas sort -->
    <div class="offcanvas-sort shadow" :class="{ visible: sortOpen }">
      <div style="position: relative;">
        <br />
        <br />
        <div
          style="display:flex; align-items:center; justify-content: space-between;"
        >
          <h3>Sort</h3>
          <span style="font-size:12px;" @click="clearSort"> Clear Sort </span>
        </div>
        <br />
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
        <!-- close sort layout -->
        <img
          @click="sortOpen = false"
          class="close"
          src="/icons/dark/close.png"
        />
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
    }
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
    /* re-fetch results if raw criterion changed */
    filterData: {
      handler() {
        this.rawCriterion.cursor = 1;
        this.fetchResults();
      },
      deep: true
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
      filterData: {
        types: [
          {
            name: "Under Bounipun",
            value: "under-bounipun",
            checked: false
          },
          {
            name: "Third Party",
            value: "third-party",
            checked: false
          }
        ],
        priceRanges: [
          {
            name: "Under ₹ 9999",
            value: "<9999"
          },
          {
            name: "Under ₹ 14999",
            value: "<14999"
          },
          {
            name: "Under ₹ 19999",
            value: "<19999"
          },
          {
            name: "Under ₹ 24999",
            value: "<24999"
          },
          {
            name: "Under ₹ 29999",
            value: "<29999"
          },
          {
            name: "Under ₹ 34999",
            value: "<34999"
          }
        ],
        selectedPriceRange: "",
        collections: [],
        variants: [],
        baseColors: []
      },
      sortData: {
        priceRange: ""
      },
      sortOpen: false,
      products: [],
      /* pagination config */
      //     cursor: 1,
      totalMatches: 0,
      baseColors: []
      // limit: 10
    };
  },
  mounted() {
    this.fetchFilterData();
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
    /* clear all filters */
    clearAllFilters() {
      /* uncheck all filters */
      const filterKeys = ["types", "collections", "variants", "baseColors"];
      filterKeys.forEach(filterKey => {
        this.filterData[filterKey].forEach(option => (option.checked = false));
      });
      /* reset selected price range */
      this.filterData.selectedPriceRange = "";
      this.clearSort();
    },
    clearSort() {
      this.sortData.priceRange = "";
    },
    async fetchResults() {
      /* keep only the checked ones from (type, variants, collection) */
      let filters = {};
      filters.type = this.getCheckedOnes(this.filterData.types);
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

      console.log(segregated, segregated.length);

      this.products = segregated;
      this.totalMatches = segregated.length;
      /* figure out the color index of matched colors */
      /* generate new array where each matched color is treated as a product */
      /* send back the new product array */
      /* update total matches */
    },
    findMatchedColors(product) {
      console.log(product, "matched");
      /* product name or base colors matches the color filter (if provided) */
      // const product = {...bounipunProduct};

      let matchedColors = [];

      product.colors = product.colors.filter(color => color.status === true);

      /* what are the color filter */
      product.colors.forEach((color, index) => {
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
      console.log(product.name, matchedColors.length);
      if (matchedColors.length === 0)
        matchedColors = [{ color: product, actualIndex: -1 }];

      return matchedColors;
    },
    resultsFetched(result) {
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
    },
    async fetchFilterData() {
      /* fetch type of products */
      /* fetch collections */
      /* fetch variants */
      /* fetch base colors */
      const filtersFetch = this.$axios.$get("/getSearchFilters");
      /* wait for request to complete */
      const { response, error } = await this.$task(filtersFetch);
      /* if error occurred */
      if (error || response.fetched === false) {
        console.log("could not fetch search filters");
        return;
      }

      this.filterData.collections = response.collections.map(collection => ({
        ...collection,
        value: collection._id,
        checked: false
      }));

      /* set base colors (for product cards)*/
      this.baseColors = response.baseColors;

      this.filterData.baseColors = response.baseColors.map(color => ({
        ...color,
        value: color.name,
        checked: false
      }));
      this.filterData.variants = response.variants.map(variant => ({
        ...variant,
        value: variant._id,
        checked: false
      }));
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
    margin:5px;
    .color-box {
      height: 50px;
      width: 50px;
      margin-left: 5px;
    }
    .label {
      margin-top:10px;
    }

    @media(max-width: 768px) {
      width: 25%;
      .color-box {
        height:30px;
        width: 30px;
        margin: 10px;
      }

      .label {
        font-size:10px;
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

.offcanvas-filters {
  position: fixed;
  padding: 5%;
  top: 0;
  left: 0;
  background: #fffffff2;
  width: 60vw;
  height: 100vh;
  margin-left: -60vw;
  transition: all 0.4s ease-in-out;
  z-index: 3;
  overflow-y: scroll;

  &.visible {
    margin-left: 0vw;
  }

  .label {
    font-family: $font_2;
    text-transform: capitalize;
    font-size: 12px;
    cursor: pointer;
  }

  .close {
    position: absolute;
    top: 0;
    right: 3%;
    width: 3%;

    @media (max-width: 768px) {
      width: 7%;
    }
  }
}

.offcanvas-sort {
  position: fixed;
  top: 0;
  right: 0;
  padding: 5%;
  background: #fffffff2;
  width: 60vw;
  height: 100vh;
  margin-right: -60vw;
  transition: all 0.4s ease-in-out;
  z-index: 3;

  &.visible {
    margin-right: 0vw;
  }

  .label {
    font-family: $font_2;
    font-size: 12px;
    cursor: pointer;
  }

  .close {
    position: absolute;
    top: 0;
    right: 3%;
    width: 7%;
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
