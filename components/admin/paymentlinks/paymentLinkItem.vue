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
        @click="removeItem(index)"
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
        :options="item._colors"
        :slim="true"
      />

      <!-- variant name -->
      <InputBox
        v-if="!productSelected || item._readyToShip"
        v-model="item.variantName"
        label="Variant"
        :slim="true"
        :css="{ width: '100px' }"
      />
      <SelectBox
        v-else
        label="Variant:"
        v-model="item.variantName"
        :options="item._variants"
        @input="variantSelected($event, index)"
        :slim="true"
      />

      <!-- fabric name -->
      <InputBox
        v-if="!productSelected || item._readyToShip"
        v-model="item.fabricName"
        label="Fabric"
        :slim="true"
        :css="{ width: '180px' }"
      />
      <SelectBox
        v-else
        label="Fabric:"
        v-model="item.fabricName"
        :options="item._fabrics"
        @input="fabricSelected($event, index)"
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
        v-model="item.quantity"
        label="Quantity"
        type="number"
        :slim="true"
        :css="{ width: '80px' }"
      />
      <InputBox
        v-model="item.rate"
        :label="`Rate - (${currency})`"
        :slim="true"
        :css="{ width: '100px' }"
      />
      <InputBox
        :value="item.quantity * item.rate"
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
  quantity: "",
  rate: "",
  total: "",
});

export default {
  props: {
    allProducts: Array,
    index: Number,
    currency: String,
  },
  data() {
    return {
      item: baseItem(),
      productSelected: false
    };
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
      //
    },
    clearProductSelection() {
        const defaultItem = baseItem();
        Object.keys(this.item).forEach(key => {
            this.item[key] = defaultItem[key]
        })
    },
    removeItem(index) {

    }
  },
};
</script>
