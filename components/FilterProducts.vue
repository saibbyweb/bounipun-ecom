<template>
  <!-- offcanvas filters -->
  <div class="offcanvas-filters shadow" :class="{ visible: filtersOpen }">
    <div style="position: relative">
      <br />
      <br />
      <!-- header -->
      <div class="header shadow">
        <h3>Filters</h3>

        <!-- clear all applied filters -->
        <span style="font-size: 12px; cursor: pointer" @click="clearAllFilters"
          >Clear Selection</span
        >

        <img
          @click="$emit('close')"
          class="close"
          src="/icons/dark/close.png"
        />
      </div>

      <br />
      <div
        class="all-options"
        style="height: 80vh; overflow-y: scroll; margin-top: 4vh"
      >
        <!-- product type options -->
        <!-- <Accordion heading="Product Type" :expanded="true">
                <div class="option" v-for="(type, index) in filterData.types" :key="index">
                    <label class="label">
                        <input type="checkbox" name="type" :value="type.value" v-model="type.checked" />
                        {{ type.name }}</label>
                </div>

            </Accordion> -->

        <!-- availability type options -->
        <Accordion
          v-if="!isEscape && showAccordions"
          heading="Availability"
          :expanded="accordionStates.availability"
        >
          <div
            class="option"
            v-for="(type, index) in filterData.availabilityTypes"
            :key="index"
          >
            <label class="label">
              <input
                type="checkbox"
                name="type"
                :value="type.value"
                v-model="type.checked"
              />
              {{ type.name }}</label
            >
          </div>
        </Accordion>

        <!-- variant options -->
        <Accordion
          v-if="!isEscape && showAccordions"
          heading="Variants"
          :expanded="accordionStates.variants"
        >
          <div
            v-for="(categoryGroup, categoryName) in groupedVariants"
            :key="categoryName"
            class="variant-category"
          >
            <div class="category-header">
              <input
                type="checkbox"
                :checked="isCategoryChecked(categoryName)"
                @change="toggleCategory(categoryName)"
                class="category-checkbox"
              />
              <h4 class="category-heading">{{ categoryName }}</h4>
            </div>
            <div
              class="option"
              v-for="variant in categoryGroup"
              :key="variant._id"
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
          </div>
        </Accordion>
        <!-- collection options -->
        <Accordion
          heading="Collection"
          :expanded="accordionStates.collection"
          v-if="!collectionView && showAccordions"
        >
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
              {{ collection.lock ? "" : "" }}
              {{ collection.name.toLowerCase() }}</label
            >
          </div>
        </Accordion>

        <!-- base color options -->
        <Accordion 
          v-if="showAccordions"
          heading="Base Color" 
          :expanded="accordionStates.baseColor"
        >
          <div class="flex wrap colors">
            <div
              class="option flex col center"
              v-for="(color, index) in filterData.baseColors"
              :key="index"
            >
              <div
                class="color-box shadow"
                :style="`background: ${color.hex}`"
              ></div>

              <label class="label flex start center">
                {{ color.name.toLowerCase() }}
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
        <Accordion
          v-if="showAccordions && false"
          heading="Price Range"
          :expanded="accordionStates.priceRange"
        >
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filtersOpen: {
      type: Boolean,
      default: false,
    },
    collectionView: {
      type: Boolean,
      default: false,
    },
    isEscape: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showAccordions: true,
      filterData: {
        types: [
          {
            name: "Under Bounipun",
            value: "under-bounipun",
            checked: false,
          },
          {
            name: "Third Party",
            value: "third-party",
            checked: false,
          },
        ],
        availabilityTypes: [
          {
            name: "Ready To Ship",
            value: "ready-to-ship",
            checkd: false,
          },
          // {
          //   name: "Made to Order",
          //   value: "made-to-order",
          //   checkd: false
          // }
        ],
        priceRanges: [
          {
            name: "Under ₹ 9999",
            value: "<9999",
          },
          {
            name: "Under ₹ 14999",
            value: "<14999",
          },
          {
            name: "Under ₹ 19999",
            value: "<19999",
          },
          {
            name: "Under ₹ 24999",
            value: "<24999",
          },
          {
            name: "Under ₹ 29999",
            value: "<29999",
          },
          {
            name: "Under ₹ 34999",
            value: "<34999",
          },
        ],
        selectedPriceRange: "",
        collections: [],
        variants: [],
        baseColors: [],
      },
      accordionStates: {
        availability: true,
        variants: true,
        collection: true,
        baseColor: true,
        priceRange: true,
      },
    };
  },
  mounted() {
    this.fetchFilterData();
  },
  watch: {
    filterData: {
      handler(newValue) {
        this.$emit("updated", newValue);
      },
      deep: true,
      immediate: true,
    },
    $route() {
      this.clearAllFilters();
    },
    filtersOpen(newVal) {
      if (newVal) {
        // Remove all accordions
        this.showAccordions = false;

        // Re-render all accordions after 500ms
        setTimeout(() => {
          this.showAccordions = true;
        }, 300);
      }
    },
  },
  methods: {
    /* clear all filters */
    clearAllFilters() {
      /* uncheck all filters */
      const filterKeys = [
        "availabilityTypes",
        "collections",
        "variants",
        "baseColors",
      ];
      filterKeys.forEach((filterKey) => {
        this.filterData[filterKey].forEach(
          (option) => (option.checked = false)
        );
      });
      /* reset selected price range */
      this.filterData.selectedPriceRange = "";
      this.$emit("clearSort");
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

      this.filterData.collections = response.collections.map((collection) => ({
        ...collection,
        value: collection._id,
        checked: false,
      }));

      /* set base colors (for product cards)*/
      this.baseColors = response.baseColors;

      this.filterData.baseColors = response.baseColors.map((color) => ({
        ...color,
        value: color.name,
        checked: false,
      }));
      this.filterData.variants = response.variants.map((variant) => ({
        ...variant,
        value: variant._id,
        checked: false,
      }));

      console.log(JSON.stringify(this.filterData.variants), "-VARIANTS-");

      /* TODO: temporary fix: filter out decor variants */
      // this.filterData.variants = this.filterData.variants.filter(variant => ['SQUARE', 'SHAWL', 'STOLE'].includes(variant.name.toUpperCase()) );

      // this.filterData.variants.forEach(f => {
      //   const name = f.name.toUpperCase();
      //   console.log(name,'-VARIANTS-')
      //   if(name === "BASIC" || name==="CLASSIC" || name === "PREMIUM") {
      //    f.name = `${f.name} - Décor`
      //   }
      //   return f
      // })

      this.$emit("dataFetched");
    },
    groupedVariants() {
      const grouped = {};
      this.filterData.variants.forEach((variant) => {
        const categoryName = variant.category?.name || "Other";
        if (!grouped[categoryName]) {
          grouped[categoryName] = [];
        }
        grouped[categoryName].push(variant);
      });

      // Sort variants within each category by name
      Object.keys(grouped).forEach((category) => {
        grouped[category].sort((a, b) => a.name.localeCompare(b.name));
      });

      return grouped;
    },
    isCategoryChecked(categoryName) {
      const categoryGroup = this.groupedVariants[categoryName];
      return (
        categoryGroup &&
        categoryGroup.length > 0 &&
        categoryGroup.every((variant) => variant.checked)
      );
    },
    toggleCategory(categoryName) {
      const categoryGroup = this.groupedVariants[categoryName];
      const newState = !this.isCategoryChecked(categoryName);
      if (categoryGroup) {
        categoryGroup.forEach((variant) => {
          variant.checked = newState;
        });
      }
    },
  },
  computed: {
    groupedVariants() {
      const grouped = {};
      this.filterData.variants.forEach((variant) => {
        const categoryName = variant.category?.name || "Other";
        if (!grouped[categoryName]) {
          grouped[categoryName] = [];
        }
        grouped[categoryName].push(variant);
      });

      // Sort variants within each category by name
      Object.keys(grouped).forEach((category) => {
        grouped[category].sort((a, b) => a.name.localeCompare(b.name));
      });

      return grouped;
    },
  },
};
</script>

<style lang="scss" scoped>
.offcanvas-filters {
  position: fixed;
  top: 0;
  left: 0;
  background: #fffffff2;
  width: 40vw;
  height: 100vh;
  margin-left: -60vw;
  transition: all 0.4s ease-in-out;
  z-index: 3;
  overflow-y: scroll;

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
    height: $pageMarginTop;
    padding: 2% 4%;
  }

  &.visible {
    margin-left: 0vw;
  }

  .label {
    font-family: $font_2;
    text-transform: capitalize;
    font-size: 12px;
    cursor: pointer;
  }

  /* common all options */
  .all-options {
    padding: 15% 5% 0 5%;

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
            text-transform: capitalize;
          }
        }
      }
    }
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
}

.variant-category {
  margin-bottom: 15px;

  .category-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 10px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;

    .category-checkbox {
      width: 14px;
      height: 14px;
      cursor: pointer;
    }
  }

  .category-heading {
    font-family: $font_2_bold;
    color: #333333;
    font-size: 11px;
    text-transform: uppercase;
    margin: 0;
  }

  .option {
    padding-left: 22px; // This matches the width of checkbox (14px) + gap (8px)
    margin-top: 8px;

    .label {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
}
</style>
