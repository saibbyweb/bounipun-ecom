<template>
  <div class="checkboxes-container fabric-selctor">
    <label class="label"> {{ label }} </label>
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
        <label class="label"> {{ option.name }} </label>
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
        <input
          class="price shadow"
          v-if="option.checked"
          type="text"
          v-model="option.price"
          placeholder="Price (INR)"
        />

        <div v-for="currency in localCurrencies" :key="currency.code">
          <!-- fabric price usd -->
          <input
            class="price shadow"
            v-if="option.checked"
            type="text"
            v-model="option.pricing[currency.code]"
            :placeholder="`Price (${currency.code})`"
          />
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
  },
  watch: {
    selectedFabrics() {
      this.updateSelectionList();
    },
  },
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
    populateFabricSelection(variant) {
      const selectedFabrics = variant.fabrics;

      /* all fabrics */
      const allFabrics = this.localVariant.fabrics;

      allFabrics.forEach((fabric) => {
          fabric.pricing = {}
        this.localCurrencies.forEach((currency) => {
          //if enabled currency pricing is not present in saved product pricing, then define fields for the
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
          element.pricing = selectedFabrics[foundIndex].pricing;

          if (element.pricing === undefined) {
            element.pricing = {};
          }

          //   this.alreadySetCurrencies = Object.keys(element.pricing)
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
  },
  data() {
    return {
      localVariant: JSON.parse(JSON.stringify(this.variant)),
      localCurrencies: JSON.parse(JSON.stringify(this.currencies)),
      alreadySetCurrencies: [],
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
      width: 22%;
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
        text-align: center;
        border: none;
        margin-top: 3px;
        padding: 1px;
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
}
</style>
