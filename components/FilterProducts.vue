<template>
  <!-- offcanvas filters -->
  <div class="offcanvas-filters shadow" :class="{ visible: filtersOpen }">
    <div style="position: relative;">
      <br />
      <br />
      <!-- header -->
      <div class="header shadow">
        <h3>Filters</h3>

        <!-- clear all applied filters -->
        <span style="font-size:12px; cursor:pointer;" @click="clearAllFilters"
          >Clear Selection</span
        >

        <img
          @click="filtersOpen = false"
          class="close"
          src="/icons/dark/close.png"
        />
      </div>

      <br />
      <div
        class="all-options"
        style="height:80vh; overflow-y:scroll; margin-top:2vh;"
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
        <Accordion heading="Availability" :expanded="true">
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
              <div
                class="color-box shadow"
                :style="`background: ${color.hex}`"
              ></div>

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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filtersOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
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
        availabilityTypes: [
          {
            name: "Ready To Ship",
            value: "ready-to-ship",
            checkd: false
          }
          // {
          //   name: "Made to Order",
          //   value: "made-to-order",
          //   checkd: false
          // }
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
      }
    };
  },
  watch: {
    filterData: {
      handler(newValue) {
        this.$emit('updated', newValue);
      },
      deep: true
    }
  }
};
</script>
