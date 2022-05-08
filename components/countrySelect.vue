<template>
  <!-- country selection -->
  <div
    v-click-outside="hideCountries"
    v-if="countryCodes.length !== 0"
    class="country-select"
    :style="css"
  >
    <div
      @click="showCountrySelectList"
      class="selected-country"
      :class="{ focused: showCountrySelect, adminMode }"
    >
      <img :src="selectedCountry.flag" />
      <span> {{ selectedCountry.name }} </span>
      <span v-if="selectedCountry !== ''" style="margin-left: 4px">
        ({{ selectedCountry.dialCode }})
      </span>
    </div>

    <!-- list of countries -->
    <div v-if="showCountrySelect" class="country-list">
      <!-- search -->
      <div class="search">
        <input
          type="text"
          class="field"
          placeholder="Enter Country Name"
          v-model.trim="countrySearchTerm"
          autocomplete="new-password"
        />
      </div>

      <!-- country list -->
      <div
        class="item"
        v-for="(country, index) in matchedCountries"
        :key="country.isoCode"
        @click="selectCountry(index)"
      >
        <img :src="country.flag" />
        <span> {{ country.name }} </span>
        <span style="margin-left: 4px"> ({{ country.dialCode }}) </span>
      </div>

      <!-- no results found -->
      <div v-if="matchedCountries.length === 0" class="no-results">
        <span> No results found </span>
      </div>
    </div>
  </div>
</template>

<script>
import countryData from "@/helpers/countryCodes.js";
import ClickOutside from "vue-click-outside";

export default {
  directives: {
    ClickOutside,
  },
  props: {
    initialValue: String,
    lock: {
      type: Boolean,
      default: true,
    },
    adminMode: {
      type: Boolean,
      default: false,
    },
    css: Object,
  },
  data() {
    return {
      countryCodes: countryData,
      selectedCountryIndex: this.$store.state.customer.countryIndex,
      countrySearchTerm: "",
      showCountrySelect: false,
    };
  },
  mounted() {
    if (this.adminMode) {
      this.$emit("input", "+91");
      this.$emit("setCountryIsoCode", "IN");
      this.selectedCountryIndex = 90;
      return;
    }

    this.$emit("input", this.selectedCountryCode);
    this.$emit("setCountryIsoCode", this.selectedCountryIsoCode);
  },
  watch: {
    initialValue: {
      handler(newValue) {
        const foundIndex = this.matchedCountries.findIndex(
          (c) => c.dialCode === newValue
        );

        if (foundIndex !== -1) {
          this.selectCountry(foundIndex);
        }
      },
      immediate: true,
    },
    selectedCountryCode(newVal) {
      this.$emit("input", newVal);
      this.$emit("setCountryIsoCode", this.selectedCountryIsoCode);
    },
    customerCountryIndex(newVal) {
      this.selectedCountryIndex = newVal;
    },
  },
  computed: {
    customerCountryIndex() {
      return this.$store.state.customer.countryIndex;
    },
    selectedCountry() {
      if (this.matchedCountries.length === 0) return "";
      return this.matchedCountries[this.selectedCountryIndex];
    },
    selectedCountryCode() {
      if (this.matchedCountries.length === 0) return "";
      return this.matchedCountries[this.selectedCountryIndex].dialCode;
    },
    selectedCountryIsoCode() {
      if (this.matchedCountries.length === 0) return "";
      return this.matchedCountries[this.selectedCountryIndex].isoCode;
    },
    matchedCountries() {
      if (this.countrySearchTerm === "") return this.countryCodes;

      this.selectedCountryIndex = 0;

      return this.countryCodes.filter((country) => {
        return country.name
          .toUpperCase()
          .startsWith(this.countrySearchTerm.toUpperCase());
      });
    },
  },
  methods: {
    showCountrySelectList() {
      if (!this.lock) this.showCountrySelect = true;
    },
    hideCountries() {
      this.showCountrySelect = false;
    },
    selectCountry(index) {
      this.selectedCountryIndex = index;
      this.showCountrySelect = false;
      // this.formData.countryCode.value = this.matchedCountries[this.selectedCountryIndex].dialCode;
    },
  },
};
</script>

<style lang="scss" scoped>
.country-select {
  border: none;
  border-radius: 0;
  width: 90%;
  // padding: 2%;
  background-color: white;
  border-bottom: 2px solid #e7e7e7;
  transition: all 0.2s ease-in-out;
  position: relative;

  .selected-country {
    background-color: #e7e7e7;
    // background-color: white;
    // border-bottom: 2px solid white;
    border-bottom: 2px solid #e7e7e7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2%;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: #efefef;
    }

    &.adminMode {
      background-color: white;
      border-bottom: 2px solid white;
    }

    span {
      font-size: 14px;
      font-family: $font_2;
      cursor: pointer;

      // color:white;
    }

    &.focused {
      border-bottom: 2px solid $dark_gray;
    }

    img {
      width: 4%;
      margin-right: 10px;
    }

    @media (max-width: 768px) {
      img {
        width: 10%;
      }
    }
  }

  .country-list {
    position: absolute;
    top: 100%;
    left: 0;
    min-height: 100px;
    max-height: 300px;
    overflow-y: scroll;
    background-color: #e7e7e7e2;
    z-index: 1;
    border: 2px solid $dark_gray;
    border-top: none;
    width: 100%;

    /* search */
    .search {
      .field {
        width: 100%;
        border: none;
        padding: 10px;
        border-bottom: 1px solid #e7e7e7;
        font-size: 14px;
      }
    }

    .item {
      border-bottom: 2px solid #e7e7e7;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 2%;
      cursor: pointer;
      // background-color: #e7e7e7;

      img {
        width: 7%;
        margin-right: 10px;
      }

      span {
        font-family: $font_2;
      }
    }

    .no-results {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-top: 10px;
        font-size: 14px;
      }
    }
  }
}
</style>
