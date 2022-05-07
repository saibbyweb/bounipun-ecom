<template>
  <div class="flex col link-item" style="padding-bottom: 10px">
    <!-- item header -->
    <div class="header flex" style="height: 40px; background-color: #efefef">
      <!-- index indicator -->
      <span> Item #{{ index + 1 }} </span>
      <!-- product selector -->
      <Dropdown
        :source="allProducts"
        @selected="handleProductSelection($event, index)"
        @clearSelection="clearProductSelection()"
        :css="{ width: '30%', zIndex: 13 }"
      />
      <!-- remove item -->
      <img
        @click="$emit('remove', index)"
        src="/icons/light/trash.png"
        style="height: 25px; width: 25px"
      />
    </div>

    <div class="flex items">
      <InputBox
        v-model="item.styleId"
        label="StyleID"
        :disabled="productSelected"
        :slim="true"
        :css="{ width: '90px' }"
      />
      <InputBox
        v-model="item.name"
        label="Product Name"
        :disabled="productSelected"
        :slim="true"
        :css="{ width: '250px' }"
      />

      <!-- color selection -->
      <InputBox
        v-if="!productSelected"
        v-model="item.colorName"
        label="Color"
        :slim="true"
        :css="{ width: '130px' }"
      />
      <SelectBox
        v-else
        label="Color:"
        v-model="item.colorName"
        :options="product.colors"
        :slim="true"
      />

      <!-- variant name -->
      <InputBox
        v-if="!productSelected || product.readyToShip"
        v-model="item.variantName"
        label="Variant"
        :slim="true"
        :css="{ width: '100px' }"
      />
      <SelectBox
        v-else
        label="Variant:"
        v-model="item.variantName"
        :options="product.variants"
        @input="variantSelected"
        :slim="true"
      />

      <!-- fabric name -->
      <InputBox
        v-if="!productSelected || product.readyToShip"
        v-model="item.fabricName"
        label="Fabric"
        :slim="true"
        :css="{ width: '180px' }"
      />
      <SelectBox
        v-else
        label="Fabric:"
        v-model="item.fabricName"
        :options="product.fabrics"
        @input="fabricSelected"
        :slim="true"
      />

      <InputBox
        v-model="item.collectionName"
        :disabled="productSelected"
        label="Collection"
        :slim="true"
        :css="{ width: '120px' }"
      />
      <InputBox
        v-model="item.hsnCode"
        label="HSN"
        :slim="true"
        :css="{ width: '100px' }"
      />
      <InputBox
        v-model.number="item.quantity"
        label="Quantity"
        type="number"
        :slim="true"
        :css="{ width: '80px' }"
      />
      <InputBox
        v-model.number="item.rate"
        :label="`Rate - (${currency})`"
        :slim="true"
        :css="{ width: '100px' }"
      />
      <InputBox
        :value="itemTotal"
        :label="`Total - (${currency})`"
        :disabled="true"
        :slim="true"
        :css="{ width: '100px' }"
      />
    </div>
  </div>
</template>

<script>
/* base item */
const baseItem = () => ({
  styleId: "",
  name: "",
  variantName: "",
  collectionName: "",
  colorName: "",
  hsnCode: "",
  fabricName: "",
  quantity: 0,
  rate: 0,
  total: 0,
});

export default {
  props: {
    initialValue: Object,
    allProducts: Array,
    index: Number,
    currency: String,
  },
  computed: {
    currencyIsINR() {
      return this.currency === "INR";
    },
    itemTotal() {
        return this.item.rate * this.item.quantity;
    }
  },
  data() {
    return {
      item: baseItem(),
      productSelected: false,
      product: {
        readyToShip: false,
        thirdPartyProduct: false,
        multiPriced: false,
        colors: [],
        variants: [],
        variantData: [],
        farbicData: [],
        fabrics: [],
        directPrice: 0,
        directPricing: {},
      },
      selectedFabricName: "",
    };
  },
  watch: {
    itemTotal(newValue) {
        this.item.total = newValue;
    },
    index: {
        handler(newValue) {
            this.$emit('update', {index: newValue, value: this.item})
        },
        immediate: true
    },
    item: {
        handler(newValue) {
            this.$emit('update', {index: this.index, value: newValue})
        },
        deep: true,
        immediate: true
    },
    initialValue: {
      handler() {
        Object.keys(initialValue).forEach((key) => {
          this.item[key] = initialValue[key];
        });
      },
      deep: true,
    },
    currency(newCurrency) {
      if (this.productSelected && !this.product.readyToShip) {
      }
      if (this.productSelected) {
        switch (this.product.readyToShip) {
          case true:
            this.item.rate = this.getPriceForRTS();
            break;
          case false:
            this.fabricSelected(this.selectedFabricName);
            break;
        }
      }
    },
  },
  methods: {
    handleProductSelection(payload) {
      const { product } = payload;
      /* update item fields */
      this.item.styleId = product.styleId;
      this.item.name = product.name;
      this.item.quantity = 1;

      this.productSelected = true;

      /* fetch all details for the product */
      this.fetchProductDetails(product._id);
    },
    async fetchProductDetails(_id) {
      const productFetch = this.$axios.post("/fetchProduct", {
        _id,
        lockCheck: false,
      });
      const { response, error } = await this.$task(productFetch);

      if (error) {
        alert("Couldnt fetch product.");
        return;
      }

      const {
        colors,
        variants,
        bounipun_collection,
        type,
        availabilityType,
        directPrice,
        directPricing,
        rtsDirectVariant,
        rtsDirectFabric,
      } = response.data;

      /* update item and product */
      const { item, product, currency } = this;

      /* set bounipun collection */
      item.collectionName = bounipun_collection
        ? bounipun_collection.name
        : "N/A";

      /* set colors list */
      product.colors = colors.map((color) => ({
        name: color.name,
        value: color.name,
      }));
      /* set first color as selected */
      setTimeout(() => (item.colorName = product.colors[0]?.value), 400);

      /* set product flags and values */
      product.thirdPartyProduct = type === "third-party";
      product.multiPriced =
        type === "third-party" ? false : availabilityType === "made-to-order";
      product.readyToShip = availabilityType === "ready-to-ship";

      product.directPrice = directPrice;
      product.directPricing = directPricing;

      /* if item is ready to ship, set price, variant and fabric name */
      if (product.readyToShip) {
        item.rate = this.getPriceForRTS();
        item.variantName = rtsDirectVariant.name;
        item.fabricName = rtsDirectFabric.name;
        item.hsnCode = rtsDirectVariant.hsnCode;
        return;
      }

      /* if item is made to order, set variants */
      product.variantData = variants;
      product.variants = variants.map((variant) => ({
        name: variant._id.name,
        value: variant._id.name,
      }));

      /* set first variant as selected one */
      this.variantSelected(product.variants[0].value);
    },
    variantSelected(variantName) {
      const { item, product } = this;
      const foundIndex = product.variants.findIndex(
        (variant) => variant.name === variantName
      );
      /* if variant not found */
      if (foundIndex === -1) return;

      /* set variant name */
      item.variantName = product.variants[foundIndex].value;

      const selectedVariant = product.variantData[foundIndex];

      /* save fabric data */
      product.fabricData = selectedVariant.fabrics;
      product.fabrics = selectedVariant.fabrics.map((fab) => ({
        name: `${fab._id.name} - ${fab._id.info1}`,
        value: `${fab._id.name} - ${fab._id.info1}`,
      }));

      /* set hsn code */
      item.hsnCode = selectedVariant._id.hsnCode;

      /* set first fabric as selected one */
      setTimeout(() => this.fabricSelected(product.fabrics[0].value), 150);
    },
    fabricSelected(fabricName) {
      const { item, product } = this;
      const foundIndex = product.fabrics.findIndex(
        (fabric) => fabric.name === fabricName
      );
      /* if fabric not found */
      if (foundIndex === -1) return;

      /* set fabric name */
      item.fabricName = product.fabrics[foundIndex].value;
      this.selectedFabricName = item.fabricName;
      const selectedFabric = product.fabricData[foundIndex];

      /* update item rate */
      item.rate = this.getPriceFromFabric(selectedFabric);
    },
    getPriceFromFabric(fabric) {
      return this.currencyIsINR ? fabric.price : fabric.pricing[this.currency];
    },
    getPriceForRTS() {
      return this.currencyIsINR
        ? this.product.directPrice
        : this.product.directPricing[this.currency];
    },
    clearProductSelection() {
      /* set default values for each item */
      const defaultItem = baseItem();
      Object.keys(this.item).forEach((key) => {
        this.item[key] = defaultItem[key];
      });
      this.productSelected = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.link-item {
  border: 2px dotted #ababab;
  margin: 10px 0;
  .header {
    overflow: hidden;
    span {
      font-size: 13px;
      padding: 10px;
      background-color: #333;
      color: white;
    }
    img {
      position: absolute;
      right: 0;
      background-color: rgb(192, 28, 28);
      opacity: 0.8;
      height: 40px;
      width: 40px;
      z-index: 4;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }

  .items {
    flex-wrap: wrap;
    column-gap: 10px;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
