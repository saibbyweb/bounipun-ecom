<template>
  <!-- country selection -->
  <div v-if="countryCodes.length !== 0" class="country-select">
    <div
      @click="showCountrySelect = true"
      class="selected-country"
      :class="{ focused: showCountrySelect }"
    >
      <img :src="selectedCountry.flag" />
      <span> {{ selectedCountry.name }} </span>
      <span v-if="selectedCountry !== ''" style="margin-left: 4px;">
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
        <span style="margin-left: 4px;"> ({{ country.dialCode }}) </span>
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
export default {
  data() {
    return {
      countryCodes: countryData,
      selectedCountryIndex: this.$store.state.customer.countryIndex,
      countrySearchTerm: "",
      showCountrySelect: false
    };
  },
  mounted() {
    this.$emit("input", this.selectedCountryCode);
  },
  watch: {
    selectedCountryCode(newVal) {
      this.$emit("input", newVal);
    }
  },
  computed: {
    selectedCountry() {
      if (this.matchedCountries.length === 0) return "";
      return this.matchedCountries[this.selectedCountryIndex];
    },
    selectedCountryCode() {
      if (this.matchedCountries.length === 0) return "";
      return this.matchedCountries[this.selectedCountryIndex].dialCode;
    },
    matchedCountries() {
      if (this.countrySearchTerm === "") return this.countryCodes;

      this.selectedCountryIndex = 0;

      return this.countryCodes.filter(country => {
        return country.name
          .toUpperCase()
          .startsWith(this.countrySearchTerm.toUpperCase());
      });
    }
  },
  methods: {
    selectCountry(index) {
      this.selectedCountryIndex = index;
      this.showCountrySelect = false;
      // this.formData.countryCode.value = this.matchedCountries[this.selectedCountryIndex].dialCode;
    }
  }
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
    // background-color: $dark_gray;
    // border-bottom: 2px solid $dark_gray;
    border-bottom: 2px solid #e7e7e7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2%;
    width: 100%;

    span {
      font-size: 14px;
      font-family: $font_2;
      // color:white;
    }

    &.focused {
      border-bottom: 2px solid $dark_gray;
    }

    img {
      width: 10%;
      margin-right: 10px;
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
