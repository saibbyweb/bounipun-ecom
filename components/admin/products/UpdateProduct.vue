<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} Product</h2>

    <!-- preview link -->
    <div class="center">
      <a v-if="editMode" :href="`/products?_id=${doc._id}`" target="_blank">
        <span
          style="
            background: #333;
            text-align: center;
            color: white;
            font-size: 12px;
            padding: 2px 4px;
            border-radius: 2px;
          "
        >
          Preview Product ➚
        </span>
      </a>
    </div>

    <!-- product id -->
    <InputBox
      v-if="editMode"
      label="Product ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />
    <!-- type of product -->
    <SelectBox
      :options="types"
      v-model="doc.type"
      label="Select Product Type"
      :internal="true"
    />
    <!-- gender -->
    <SelectBox
      :options="genders"
      v-model="doc.gender"
      label="Select Preferred Gender"
    />
    <!-- availability type -->
    <SelectBox
      :options="availabilityTypes"
      v-model="doc.availabilityType"
      label="Select Availablity Type"
      :internal="true"
    />
    <!-- collections -->
    <SelectBox
      v-if="!thirdPartyProduct"
      :options="collections"
      v-model="doc.bounipun_collection"
      label="Select Collection"
    />
    <!-- bounipun style id -->
    <InputBox label="Bounipun Style ID" v-model="doc.styleId" />
    <!-- bounipun print number -->
    <InputBox
      v-if="underAutograph"
      label="Bounipun Print No."
      v-model="doc.printNo"
      :internal="true"
    />
    <!-- product name -->
    <InputBox label="Product Name" v-model="doc.name" />
    <!-- alias -->
    <InputBox label="Alias" v-model="doc.alias" />
    <!-- description -->
    <TextBox v-model="doc.description" label="Design Description" />

    <!-- rts variant and fabric -->
    <div v-if="rtsAndUnderBounipun" class="rts-variant-and-fabric">
      <!-- select direct variant for rts -->
      <SelectBox
        :options="variants"
        v-model="doc.rtsDirectVariant"
        label="Select Variant:"
      />
      <!-- select fabric for rts -->
      <SelectBox
        :options="getRTSFabrics(doc.rtsDirectVariant)"
        v-model="doc.rtsDirectFabric"
        label="Select Fabric:"
      />
    </div>

    <!-- color source -->
    <!-- <SelectBox v-if="!thirdPartyProduct" :options="colorSources" v-model="doc.colorSource" label="Select Color Source" /> -->

    <!-- alias -->
    <InputBox
      v-if="!thirdPartyProduct"
      label="Color Source"
      v-model="doc.colorSource"
      :disabled="true"
    />

    <!-- bounipun color picker -->
    <ColorPicker
      ref="colorPicker"
      v-show="doc.colorSource === 'bounipun-colors'"
      @colorAdded="addNewColor"
      @colorRemoved="colorDeselected"
    />
    <!-- add colors -->
    <div
      v-if="doc.colorSource !== ''"
      class="colors"
      style="width: 100%; position: relative"
    >
      <div
        class="color-box"
        :class="{ 'main-color': color.mainColor }"
        v-for="(color, index) in doc.colors"
        :key="color.key"
      >
        <!-- color selector (if color source is bounipun) -->
        <div class="color-details-1">
          <!-- color name -->
          <InputBox
            label="Color Name"
            v-model="color.name"
            :disabled="bounipunColors"
            class="name"
          />
          <!-- color name -->
          <InputBox
            label="Code"
            v-model="color.code"
            :disabled="bounipunColors"
            class="code"
          />

          <div class="center color-bases">
            <!-- select base color -->
            <SelectBox
              :options="baseColors"
              v-model="color.baseColor"
              label="Base Color"
              :disabled="bounipunColors"
              class="base-color"
              :slim="true"
            />
            <!-- select additional color 1 -->
            <SelectBox
              :options="baseColors"
              v-model="color.additionalColor1"
              label="CLR #1"
              :disabled="bounipunColors"
              class="base-color"
              :slim="true"
            />
            <!-- select additional color 2 -->
            <SelectBox
              :options="baseColors"
              v-model="color.additionalColor2"
              label="ClR #2"
              :disabled="bounipunColors"
              class="base-color"
              :slim="true"
            />
          </div>
        </div>

        <!-- color images -->
        <UploadImage
          ref="imageUploader"
          label="Upload Images"
          uploadType="product"
          @updated="imageListUpdated($event, index)"
        />
        <!-- remove color -->
        <button
          class="action delete"
          style="font-size: 9px; position: absolute; top: 0; right: 0"
          @click="removeColor(index, true)"
        >
          Remove Color
        </button>

        <!-- check box -->
        <div class="set-main">
          <img
            @click="setMainColor(index)"
            :class="{ 'active-color': isActiveColor(index) }"
            src="/icons/green_check.png"
          />
          <span> Main Color </span>
        </div>

        <div class="center-col" style="align-items: flex-end; width: 100%">
          <!-- disclaimer box -->
          <InputBox label="Disclaimer" v-model="color.disclaimer" />

          <div
            style="
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <!-- publish toggle for color -->
            <Toggle
              v-model="color.status"
              label="Status"
              activeText="Live"
              inactiveText="Hidden"
              width="100px"
              :disabled="isActiveColor(index)"
            />
            <!-- mark as ready to ship -->
            <button
              v-if="doc.availabilityType === 'made-to-order'"
              class="action"
              style="font-size: 10px; width: 70%; background-color: orange"
              @click="toggleRTSPanel(color)"
            >
              {{ color.showRTSPanel ? "Hide" : "Show" }} RTS PANEL
            </button>
          </div>
          <!-- ready to ship picker -->
          <div
            v-if="color.showRTSPanel"
            class="ready-to-ship-marker"
            style="width: 100%; border: 1px dashed orange"
          >
            <!-- select variant -->
            <SelectBox
              :options="variants"
              v-model="color.rtsVariant"
              label="Select Variant:"
            />
            <!-- select fabric -->
            <SelectBox
              :options="getRTSFabrics(color.rtsVariant)"
              v-model="color.rtsFabric"
              label="Select Fabric:"
            />
            <div class="flex center">
              <!-- stock -->
              <InputBox label="Stock:" v-model="color.rtsStock" />
              <!-- direct price -->
              <!-- <InputBox label="Direct Price:" v-model="color.rtsDirectPrice" /> -->

              <!-- RTS PANEL PRICING -->
              <div class="rts-pricing flex col" style="width: 100%; margin:10px 0;">
                <button
                  @click="
                    setSuggestedPrices(color.directPricing, color.directPrice)
                  "
                >
                  Set Suggested Prices
                </button>
                <!-- direct price (INR) -->
                <div class="currency-box">
                  <span class="code flex center"> INR </span>
                  <input
                    class="price shadow"
                    type="text"
                    v-model="color.directPrice"
                    placeholder="Price (INR)"
                  />
                </div>

                <!-- direct pricing (non INR currencies) -->
                <div
                  v-for="{ code } in currencies"
                  :key="code"
                  class="currency-box"
                >
                  <span class="code flex center">
                    {{ code }}
                  </span>

                  <input
                    class="price shadow"
                    type="text"
                    v-model="color.directPricing[code]"
                    :placeholder="`Price (${code})`"
                  />
                </div>
              </div>
            </div>
            <!-- add new RTS entry -->
            <div class="center">
              <button
                @click="addNewRTSEntry(color)"
                class="action"
                style="font-size: 12px; margin: 10px 0px"
              >
                Add New RTS Entry
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        v-if="doc.colorSource !== 'bounipun-colors'"
        class="action"
        style="font-size: 9px; position: absolute; bottom: -30px; right: 10px"
        @click="addNewColor({ _id: null, name: '', code: '' })"
      >
        Add Color
      </button>
    </div>

    <!-- variations (checkboxes) -->
    <c-boxes
      v-if="!thirdPartyProduct && !readyToShip"
      :options="variants"
      label="Variants"
    />

    <!-- fabric selector -->
    <div v-if="!thirdPartyProduct && !readyToShip">
      <fabric-selector
        :ref="'fabricSelector' + variant._id"
        :label="variant.name"
        v-for="variant in selectedVariantsWithFabricOptions"
        :key="variant._id"
        :variant="variant"
        :currencies="currencies"
        :inflationPercentage="collectionInflationPercentage"
        :setNonINRPrices="setNonINRPrices"
        @fabricSelectionUpdated="fabricSelectionUpdated"
      />
    </div>

    <!-- direct pricing -->
    <div v-if="thirdPartyProduct || readyToShip">
      <button @click="setSuggestedPrices(doc.directPricing, doc.directPrice)">
        Set Suggested Prices
      </button>

      <!-- direct price (INR) -->
      <div class="currency-box">
        <span class="code flex center"> Direct Price (INR) </span>
        <input
          class="price shadow"
          type="text"
          v-model="doc.directPrice"
          placeholder="Price (INR)"
        />
      </div>

      <!-- direct pricing (non INR currencies) -->
      <div
        v-for="code in Object.keys(doc.directPricing)"
        :key="code"
        class="currency-box"
      >
        <span class="code flex center">
          {{ code }}
        </span>

        <input
          class="price shadow"
          type="text"
          v-model="doc.directPricing[code]"
          :placeholder="`Price (${code})`"
        />
      </div>
    </div>

    <!-- stock -->
    <InputBox
      v-if="thirdPartyProduct || readyToShip"
      label="Stock"
      v-model="doc.stock"
    />

    <!-- estimated delivery time -->
    <!-- <InputBox label="Estimated Delivery Time (in weeks)" v-model="doc.etd" type="number" /> -->

    <!-- lock status -->
    <Toggle
      v-model="doc.lock"
      label="Lock Status"
      :disabled="false"
      
      activeText="🔒 Locked"
      inactiveText="Unlocked"
    />

    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />

    <!-- update button -->
    <div class="center-space">
      <!-- loading bar -->
      <img v-if="loading" class="loading" src="/loading.gif" />
      <!-- action complete gif -->
      <img v-if="updated" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument" class="action" :disabled="loading">
        {{ editMode ? "Apply Changes" : "Add Product" }}
      </button>

      <!-- delete document -->
      <button
        v-if="editMode"
        @click="deleteDocument"
        class="action delete"
        :disabled="loading"
      >
        Delete
      </button>

      <!-- error toast -->
      <Toast
        v-if="errorToast.status"
        :msg="errorToast.msg"
        :show="errorToast.status"
        :error="true"
      />
    </div>
    <br />
    <div class="center">
      <p v-if="error.status" class="error">{{ error.msg }}</p>
    </div>
  </div>
</template>

<script>
/* base doc */
const baseDoc = () => ({
  _id: "",
  styleId: "",
  printNo: "",
  gender: "",
  name: "",
  alias: "",
  slug: "",
  description: "",
  type: "",
  availabilityType: "",
  bounipun_collection: null,
  colorSource: "",
  variants: [],
  colors: [],
  directPrice: "",
  directPricing: {},
  rtsDirectVariant: "",
  rtsDirectFabric: "",
  stock: "",
  // etd: "",
  lock: false,
  status: false,
});

import { v4 as uuidv4 } from "uuid";
import updateProductHelper from "./updateProductHelper.js";

export default {
  mixins: [updateProductHelper],
  props: {
    model: String,
    collections: Array,
    variants: Array,
    fabrics: Array,
  },
  watch: {
    selectedVariantsWithFabricOptions(newVal) {
      // console.log('changed', newVal);
    },
    doc: {
      handler(newVal) {
        if (newVal.type === "third-party") {
          this.doc.colorSource = "custom";
        }

        /* if not under escape */
        if (!this.underEscape) this.doc.colorSource = "custom";
      },
      deep: true,
    },
    /* update colors array according to collection selection */
    underEscape(newVal, oldVal) {
      if (newVal) {
        this.doc.colorSource = "bounipun-colors";
        // this.doc.colorSource = '';
        // this.doc.colors = []
      } else if (!newVal) {
        this.doc.colorSource = "custom";
      }
    },
  },
  computed: {
    colorSources() {
      /* show color sources according to collection selection */
      if (!this.underEscape)
        return this.colorSourceTypes.filter(
          (source) => source.value !== "bounipun-colors"
        );
      else
        return this.colorSourceTypes.filter(
          (source) => source.value !== "custom"
        );
    },
    selectedVariants() {
      const selectedVariants = this.variants.filter(
        (variant) => variant.checked
      );

      /* update doc.variants accordingly */
      console.log(this.doc.variants.length, selectedVariants.length);

      /* if there's any variant which is not in the selected variants,, remove it */
      let deselectedVariantId = null;
      this.doc.variants.forEach((variant) => {
        /* check if its in the selected list */
        let foundVariant = selectedVariants.find(
          (sVariant) => sVariant._id === variant._id
        );

        /* if found */
        if (foundVariant === undefined) {
          deselectedVariantId = variant._id;
          return;
        }
      });

      /*  remove deselected variant from doc.variants */
      if (deselectedVariantId !== null) {
        let foundIndex = this.doc.variants.findIndex(
          (variant) => variant._id === deselectedVariantId
        );

        if (foundIndex !== -1) this.doc.variants.splice(foundIndex, 1);
      }

      return selectedVariants;
    },
    selectedVariantsWithFabricOptions() {
      return this.selectedVariants.map((variant) => {
        const fabrics = this.fabrics.filter((fabric) =>
          fabric.code.startsWith(variant.code)
        );

        fabrics.forEach((fabric) => {
          fabric.pricing = {};
          this.currencies.forEach((currency) => {
            fabric.pricing[currency.code] = "";
          });
        });

        return {
          _id: variant._id,
          name: variant.name,
          code: variant.code,
          fabrics: fabrics,
          // key: uuidv4()
          // fabrics: this.fabrics
        };
      });
    },

  },
  data() {
    return {
      editMode: false,
      doc: baseDoc(),
      baseColors: [],
      loading: false,
      updated: false,
      currencies: [],
      errorToast: {
        status: false,
        msg: "Base Price not set",
      },
      error: {
        status: false,
        msg: "",
      },
    };
  },
  mounted() {
    this.fetchBaseColors();
    this.fetchActiveCurrencies();
  },
  methods: {
    async addNewRTSEntry(color) {
      console.log(color);
  

      const selectedVariant = this.variants.find(
        (variant) => variant.value === color.rtsVariant
      );
      if (selectedVariant === undefined) return;
      const selectedFabric = this.fabrics.find(
        (fabric) => fabric.value === color.rtsFabric
      );
      if (selectedFabric === undefined) return;

      /* constructed style id */
      const constructedStyleId =
        this.doc.styleId +
        "/" +
        selectedVariant.code +
        "/" +
        selectedFabric.code;

      /* rts product */
      const rtsProduct = {
        alias: "",
        availabilityType: "ready-to-ship",
        bounipun_collection: this.doc.bounipun_collection,
        /* need to check for escape */
        colorSource: "custom",
        colors: [color],
        description: this.doc.description,
        directPrice: color.directPrice,
        directPricing: color.directPricing,
        rtsDirectVariant: selectedVariant._id,
        rtsDirectFabric: selectedFabric._id,
        stock: color.rtsStock,
        gender: this.doc.gender,
        // name: `${this.doc.name} - ${color.name}`,
        name: this.doc.name,
        printNo: this.doc.printNo,
        slug: "",
        status: true,
        styleId: constructedStyleId,
        type: "under-bounipun",
        variants: [],
        _id: "",
      };

      /* check price validity */
      let allPricesSet = this.checkAllPrices(rtsProduct.directPrice, rtsProduct.directPricing);
      if(allPricesSet === false) {
        return;
      }

      this.loading = true;
      const result = await this.$updateDocument(this.model, rtsProduct, false);
      this.loading = false;

      if (!result.updated) return;

      this.$emit("updated");

      // color.directPrice = "ADDED";
      color.rtsStock = "ADDED";
    },
    getRTSFabrics(variantId) {
      /* fetch variant code */
      const selectedVariant = this.variants.find(
        (variant) => variant.value === variantId
      );
      if (selectedVariant === undefined)
        return [
          {
            name: "Select Variant First",
            value: "",
          },
        ];

      const filteredFabrics = this.fabrics.filter((fabric) => {
        return fabric.code.startsWith(selectedVariant.code);
      });

      return filteredFabrics.map((fab) => {
        fab.name = `${fab.code}`;
        return fab;
      });
    },
    toggleRTSPanel(color) {
      color.showRTSPanel = !color.showRTSPanel;
      this.$forceUpdate();
    },
    /* populateVariant */
    populateVariants(variants) {
      variants.forEach((variant) => {
        let match = this.variants.find(({ _id }) => _id === variant._id);
        match.checked = true;
      });
    },
    /* fabric selection */
    fabricSelectionUpdated(variant) {
      let details = {
        _id: variant._id,
        fabrics: variant.fabrics,
      };

      /* check if variant already exists in the array */
      let foundIndex = this.doc.variants.findIndex(
        (element) => element._id === variant._id
      );

      /* if not found  */
      if (foundIndex === -1) this.doc.variants.push(details);
      else this.doc.variants[foundIndex] = details;

      this.doc.variants = this.doc.variants.filter(
        (variant) => variant.fabrics.length !== 0
      );
    },
    async updateDocument() {
      let details = {
        ...this.doc,
      };
      // ready to ship
      if (
        this.doc.type !== "under-bounipun" ||
        this.doc.availabilityType !== "ready-to-ship"
      ) {
        delete details.rtsDirectVariant;
        delete details.rtsDirectFabric;
      }

      /* all prices not set flag */
      let allPricesSet = false;

      /* if product is under bounipun */
      if (this.doc.availabilityType === "made-to-order") {
        const { variants } = this.doc;
        /* base price set for all variants */
        allPricesSet = variants.every((variant) => {
          const { fabrics } = variant;

          const basePriceSetForAllFabrics = fabrics.every((fabric) => {
            return this.checkAllPrices(fabric.price, fabric.pricing);
          });

          return basePriceSetForAllFabrics;
        });
      } else {
        allPricesSet = this.checkAllPrices(
          this.doc.directPrice,
          this.doc.directPricing
        );
      }

      /* if all prices not set, dont update the product */
      if (allPricesSet == false) {
        this.errorToast.status = true;
        this.errorToast.msg = "Pricing is not set for all currencies.";
        setTimeout(() => (this.errorToast.status = false), 2200);
        return;
      }

      this.loading = true;
      const result = await this.$updateDocument(
        this.model,
        details,
        this.editMode
      );
      this.loading = false;

      if (!result.updated) return;

      this.$emit("updated");
      // this.populateForm(result.doc);
      this.doc._id = result.doc._id;
      this.editMode = true;
      this.$flash(this);
    },
    setSuggestedPrices(nonINRPricing, INRPrice) {
      const inflationPercentage =
        this.doc.type === "under-bounipun"
          ? this.collectionInflationPercentage
          : false;

      this.setNonINRPrices(nonINRPricing, INRPrice, inflationPercentage);
    },
    setNonINRPrices(nonINRPricing, INRPrice, inflationPercentage) {
      /* get all available currencies for fabric */
      const currencyCodes = Object.keys(nonINRPricing);
      /* loop through all available currencies */
      for (const code of currencyCodes) {
        /* get exchange rate */
        const foundIndex = this.currencies.findIndex(
          (cur) => cur.code === code
        );
        /* if currency not found  */
        if (foundIndex === -1) {
          return;
        }

        if (INRPrice === undefined) return;

        const currencyDetails = this.currencies[foundIndex];
        /* if inflation percentage not provide, use default currency inflation */
        if (inflationPercentage === false) {
          inflationPercentage = currencyDetails.defaultInflationPercentage;
          if (typeof inflationPercentage === "String")
            inflationPercentage = parseInt(inflationPercentage);
        }
        /* calculate inflated price */
        const price =
          (INRPrice * (1 + inflationPercentage / 100)) /
          currencyDetails.exchangeRateINR;

        nonINRPricing[code] = price;
        nonINRPricing[code] = currencyDetails.zeroDecimal
          ? parseInt(price)
          : parseFloat(price).toFixed(2);
      }
      this.$forceUpdate();
    },

    populateForm(details) {
      const {
        _id,
        styleId,
        printNo,
        gender,
        name,
        alias,
        slug,
        description,
        type,
        availabilityType,
        bounipun_collection,
        colorSource,
        variants,
        colors,
        directPrice,
        directPricing,
        stock,
        rtsDirectVariant,
        rtsDirectFabric,
        // etd,
        lock,
        status,
      } = details;
      this.doc = {
        _id,
        styleId,
        printNo,
        gender,
        name,
        alias,
        slug,
        description,
        type,
        availabilityType,
        bounipun_collection,
        colorSource,
        variants,
        colors,
        directPrice,
        directPricing: directPricing === undefined ? {} : directPricing,
        rtsDirectVariant,
        rtsDirectFabric,
        stock: stock === undefined ? "" : stock,
        // etd: etd === null ? "" : etd.toString(),
        lock,
        status,
      };

      /* add direct pricing object to every color */
      this.doc.colors.forEach((color) => {
        color.directPricing = {};
        this.currencies.forEach(({ code }) => (color.directPricing[code] = ""));
      });

      /* currency */
      this.currencies.forEach(({ code }) => {
        const dbPrice = this.doc.directPricing[code];
        if (dbPrice !== undefined) return;
        this.doc.directPricing[code] = "";
      });

      this.editMode = true;
    },
      resetForm() {
        this.populateForm(baseDoc());
        this.editMode = false;
      },
  },
};
</script>

<style lang="scss" scoped>
.currency-box {
  position: relative;
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

  .code {
    top: 0;
    left: 0;
    position: absolute;
    font-size: 12px;
    height: 100%;
  }
}
.colors {
  .color-box {
    position: relative;
    margin: 14px 0px;
    padding: 25px 5px 5px 5px;
    border-radius: 3px;
    box-shadow: 1px 1px 15px #e6e6e6;
    transition: all 0.2s ease-in-out;
    // overflow: hidden;

    &.main-color {
      background-color: #2582252e;
    }

    .color-details-1 {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      width: 100%;

      .name {
        width: 44%;
      }

      .code {
        width: 20%;
      }

      .color-bases {
        padding: 10px 0px;
      }
    }

    .set-main {
      display: flex;
      align-items: center;
      font-size: 10px;
      padding: 5px;
      position: absolute;
      top: -5%;
      left: -5%;
      width: 35%;
      cursor: pointer;

      opacity: 0.7;

      img {
        transition: all 0.2s ease-in-out;
        width: 25%;
        filter: grayscale(100%);

        &.active-color {
          filter: grayscale(0%);
          width: 30%;
        }
      }

      span {
        font-size: 12px;
        background-color: #2582252e;
        padding: 3px 6px;
        border-radius: 4px;
      }
    }
  }
}
</style>
