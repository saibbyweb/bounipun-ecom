<template>
  <div class="checkboxes-container fabric-selctor">
    <div class="flex around">
      <label class="label"> {{ label }}</label>
      <!-- <button @click="setSuggestedPricing">Set Suggested</button> -->
      <Toggle
        v-model="enableSuggestedPricing"
        activeText="Enabled"
        label="Auto Calculations"
      />
    </div>
    <div class="checkboxes center">
      <div
        class="checkbox center-col"
        v-for="(option, index) in localVariant.fabrics"
        :key="index"
      >
        <!-- fabric selector -->
        <input
          class="check-input"
          type="checkbox"
          :value="option.value"
          v-model="option.checked"
          @input="fabricChecked"
        />
        <label class="label"> {{ option.name }}</label>
        <!-- <span style="margin: 0;font-size: 8px; font-style: italic; text-align:center; color: #333;"> {{ option.info1 }} </span> -->
        <span
          style="
            margin-top: 10px;
            font-size: 8px;
            font-style: italic;
            text-align: center;
            color: #333;
          "
        >
          {{ option.code }}
        </span>
        <!-- fabric price holder -->
        <div class="currency-box">
          <span v-if="option.checked" class="code flex center"> INR </span>
          <input
            class="price shadow"
            v-if="option.checked"
            type="text"
            v-model="option.price"
            placeholderx="Price (INR)"
            @input="inrPriceUpdated"
            :title="getBasePriceTitle(option._id)"
          />
        </div>

        <div
          v-for="currency in localCurrencies"
          :key="currency.code"
          class="currency-box"
        >
          <span v-if="option.checked" class="code flex center">
            {{ currency.code }}
          </span>
          <!-- fabric prices for other currencies -->
          <input
            class="price shadow"
            v-if="option.checked"
            type="text"
            v-model="option.pricing[currency.code]"
            :placeholder="`Price (${currency.code})`"
            :title="getBasePriceTitle(option._id, currency.code)"
          />
        </div>

        <!-- Base Price Section -->
        <div v-if="option.checked" class="base-price-section">
          <div class="base-price-header">Base Prices</div>
          <div class="currency-box">
            <span class="code flex center">Base INR</span>
            <input
              class="price shadow base-price-input"
              type="text"
              :value="getBasePriceValue(option._id, 'price')"
              placeholder="Base Price (INR)"
              @input="baseInrPriceUpdated(option._id, $event.target.value)"
            />
          </div>
          <div
            v-for="currency in localCurrencies"
            :key="'base-' + currency.code"
            class="currency-box"
          >
            <span class="code flex center">Base {{ currency.code }}</span>
            <input
              class="price shadow base-price-input"
              type="text"
              :value="getBasePriceValue(option._id, 'pricing', currency.code)"
              :placeholder="`Base Price (${currency.code})`"
              @input="
                updateBasePrice(
                  option._id,
                  'pricing',
                  $event.target.value,
                  currency.code
                )
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    variant: Object,
    currencies: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
    inflationPercentage: {
      type: Number,
      default: 0,
    },
    allBasePrices: Object,
    setNonINRPrices: Function,
    setNonINRBasePrices: Function,
  },
  watch: {
    selectedFabrics() {
      this.updateSelectionList();
    },
    enableSuggestedPricing(newVal) {
      if (newVal) this.setSuggestedPricing();
    },
  },
  mounted() {},
  computed: {
    selectedFabrics() {
      const selectedFabrics = this.localVariant.fabrics.filter(
        (fabric) => fabric.checked
      );
      return selectedFabrics.map((fabric) => {
        return {
          _id: fabric._id,
          name: fabric.name,
          price: fabric.price,
          pricing: fabric.pricing,
        };
      });
    },
  },
  methods: {
    inrPriceUpdated() {
      if (this.enableSuggestedPricing) this.setSuggestedPricing();
    },
    baseInrPriceUpdated(optionId, value) {
      // First update the INR base price
      this.updateBasePrice(optionId, "price", value);

      // If auto calculations are enabled, update other currency prices
      if (this.enableSuggestedPricing) {
        const keys = Object.keys(this.allBasePrices);
        for (const key of keys) {
          this.setNonINRBasePrices(
            this.allBasePrices[key].pricing,
            this.allBasePrices[key].price,
            this.inflationPercentage
          );
        }
      }
    },
    getBasePriceTitle(optionId, currencyCode = null) {
      if (!this.allBasePrices || !this.allBasePrices[optionId]) {
        return "";
      }
      if (currencyCode) {
        return this.allBasePrices[optionId].pricing?.[currencyCode]
          ? `Base Price: ${this.allBasePrices[optionId].pricing[currencyCode]}`
          : "";
      }
      return this.allBasePrices[optionId].price
        ? `Base Price: ${this.allBasePrices[optionId].price}`
        : "";
    },
    setSuggestedPricing() {
      /* loop through every fabrics */
      this.selectedFabrics.forEach((fabric) => {
        this.setNonINRPrices(
          fabric.pricing,
          fabric.price,
          this.inflationPercentage
        );
      });

      this.updateSelectionList();
    },
    populateFabricSelection(variant) {
      const selectedFabrics = variant.fabrics;

      /* all fabrics */
      const allFabrics = this.localVariant.fabrics;

      allFabrics.forEach((fabric) => {
        fabric.pricing = {};
        this.localCurrencies.forEach((currency) => {
          fabric.pricing[currency.code] = "";
        });
      });

      const preselectList = this.localVariant.fabrics.map((fabric) => {
        let element = fabric;
        /* check if fabric id is in the selected list or not */
        let foundIndex = selectedFabrics.findIndex(
          (fab) => fab._id === fabric._id
        );
        if (foundIndex !== -1) {
          element.checked = true;
          element.price = selectedFabrics[foundIndex].price;
          const dbPricing = selectedFabrics[foundIndex].pricing;
          element.pricing = {};
          //   if (dbPricing !== undefined) element.pricing = dbPricing;
          //   if (dbPricing !== undefined) element.pricing = dbPricing;
          // there can still be active currencies, for which price is not set
          this.localCurrencies.forEach((currency) => {
            if (dbPricing === undefined) {
              element.pricing[currency.code] = "";
              return;
            }
            const price = dbPricing[currency.code];
            element.pricing[currency.code] = price !== undefined ? price : "";
          });
        }
      });
    },
    updateSelectionList() {
      this.$emit("fabricSelectionUpdated", {
        name: this.variant.name,
        _id: this.variant._id,
        fabrics: this.selectedFabrics,
      });
      this.$forceUpdate();
    },
    fabricChecked(event) {
      console.log(event.target.value);
    },
    getBasePriceValue(optionId, type, currencyCode = null) {
      if (!this.allBasePrices || !this.allBasePrices[optionId]) {
        return "";
      }
      if (type === "price") {
        return this.allBasePrices[optionId].price;
      }
      if (type === "pricing" && currencyCode) {
        return this.allBasePrices[optionId].pricing?.[currencyCode] || "";
      }
      return "";
    },
    updateBasePrice(optionId, type, value, currencyCode = null) {
      if (!this.allBasePrices[optionId]) {
        this.$set(this.allBasePrices, optionId, {
          price: "",
          pricing: {},
        });
      }

      if (type === "price") {
        this.$set(this.allBasePrices[optionId], "price", value);
      } else if (type === "pricing" && currencyCode) {
        if (!this.allBasePrices[optionId].pricing) {
          this.$set(this.allBasePrices[optionId], "pricing", {});
        }
        this.$set(this.allBasePrices[optionId].pricing, currencyCode, value);
      }
      this.updateSelectionList();
    },
  },
  data() {
    return {
      localVariant: JSON.parse(JSON.stringify(this.variant)),
      localCurrencies: JSON.parse(JSON.stringify(this.currencies)),
      alreadySetCurrencies: [],
      renderKey: 0,
      enableSuggestedPricing: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.checkboxes-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2%;
  width: 100%;

  .label {
    font-family: $font_2_bold;
    color: $gray;
    text-transform: uppercase;
    font-size: 10px;
    padding: 1%;
    margin-left: 5px;
    font-weight: 900;
  }

  .checkboxes {
    box-sizing: border-box;
    flex-wrap: wrap;
    padding: 1%;
    width: 100%;

    .checkbox {
      padding: 10px 5px;
      // margin: 10px;
      width: 33%;
      //   height: 130px;
      box-sizing: border-box;
      // box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);

      .label {
        font-family: $font_2_bold;
        color: $gray;
        text-transform: uppercase;
        font-size: 8px;
        padding: 1%;
        margin-top: 7px;
        font-weight: 900;
        text-align: center;
      }

      .price {
        width: 100%;
        text-align: right;
        border: none;
        margin-top: 3px;
        padding: 2px 6px;
        box-sizing: border-box;
        font-size: 13px;

        &::placeholder {
          opacity: 0.6;
        }
      }

      .check-input {
        width: 15px;
        height: 15px;
        cursor: pointer;
      }
    }
  }

  .currency-box {
    position: relative;
    .code {
      top: 0;
      left: 0;
      position: absolute;
      font-size: 12px;
      height: 100%;
    }
  }
}

.base-price-section {
  margin-top: 15px;
  padding: 12px;
  background: #f5f1f1;
  border-radius: 6px;
  border: 1px dashed #562828;

  .base-price-header {
    font-family: $font_2_semibold;
    font-size: 11px;
    color: #562828;
    margin-bottom: 10px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .currency-box {
    margin: 6px 0;

    .base-price-input {
      background: white;
      border: 1px solid #e0d5d5;
      border-radius: 3px;

      &::placeholder {
        color: #999;
        font-style: italic;
      }
    }
  }
}
</style>
