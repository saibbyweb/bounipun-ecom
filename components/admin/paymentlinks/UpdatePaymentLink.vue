<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">
      {{ editMode ? "Update" : "Create New" }} Payment Link
    </h2>

    <!-- preview link -->
    <div class="center" style="gap: 3px">
      <a v-if="editMode" href="#">
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
          Preview Payment Link ➚
        </span>
      </a>
    </div>

    <div class="flex center" style="gap: 5%; margin-top: 20px">
      <div class="flex col" style="width: 40%">
        <!-- payment link ID -->
        <InputBox
          v-if="editMode"
          label="Pop ID"
          v-model="doc._id"
          disabled
          :internal="true"
        />

        <!-- link name -->
        <InputBox label="Link Name" v-model="doc.name" :internal="true" />

        <!-- payee name -->
        <InputBox label="Payee Name" v-model="doc.payeeName" />

        <!-- currency type -->
        <SelectBox
          :options="currencies"
          v-model="doc.currency"
          label="Select Currency"
          @input="currencyChanged"
        />
      </div>

      <!-- validity range -->
      <div class="validity-range flex col">
        <label class="label"> Validity Range: </label>
        <client-only>
          <v-datepicker
            color="blue"
            is-range
            v-model="doc.validityRange"
            :from-date="doc.validityRange.start"
          />
        </client-only>
      </div>
    </div>

    <!-- items -->
    <div class="flex col" style="gap: 10px">
      <label class="label"> Items: </label>
      <Draggable
        v-model="doc.items"
        ghost-class="ghost"
        :sort="true"
        class="items"
      >
        <transition-group type="transition" name="flip-list">
          <div
            class="flex col link-item"
            v-for="(item, index) in doc.items"
            :key="item.key"
            style="padding-bottom: 10px"
          >
            <!-- item header -->
            <div
              class="header flex"
              style="height: 40px; background-color: #efefef"
            >
              <!-- index indicator -->
              <span> Item #{{ index + 1 }} </span>
              <!-- product selector -->
              <!-- <div style="width:20vw; position: relative; overflow: scroll;"> -->
              <Dropdown
                :source="allProducts"
                @selected="productSelected($event, index)"
                @clearSelection="clearProductSelection(index)"
                :css="{ width: '30%', zIndex: 13 }"
              />
              <!-- </div> -->
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
                :disabled="item._productSelected"
                :slim="true"
                :css="{ width: '90px' }"
              />
              <InputBox
                v-model="item.name"
                label="Product Name"
                :disabled="item._productSelected"
                :slim="true"
                :css="{ width: '250px' }"
              />

              <!-- color selection -->
              <InputBox
                v-if="!item._productSelected"
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
                v-if="!item._productSelected || item._readyToShip"
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
                v-if="!item._productSelected || item._readyToShip"
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

              <!-- </div> -->

              <!-- <div class="flex items"> -->
              <InputBox
                v-model="item.collectionName"
                :disabled="item._productSelected"
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
                @input="$forceUpdate()"
                :css="{ width: '80px' }"
              />
              <InputBox
                v-model="item.rate"
                :label="`Rate - (${doc.currency})`"
                :slim="true"
                @input="$forceUpdate()"
                :css="{ width: '100px' }"
              />
              <InputBox
                :value="item.quantity * item.rate"
                :label="`Total - (${doc.currency})`"
                :disabled="true"
                :slim="true"
                :css="{ width: '100px' }"
              />
            </div>
          </div>
        </transition-group>
      </Draggable>
      <!-- add new item -->
      <div class="flex center">
        <button @click="addNewItem()" class="action">Add New Item</button>
      </div>
    </div>

    <!-- total amount -->
    <h1> {{ totalAmount }} </h1>

    <!-- description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />

    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />
    <!-- update button -->
    <div class="center-space" style="width: 70%">
      <!-- loading bar -->
      <img v-if="loading" class="loading" src="/loading.gif" />
      <!-- action complete gif -->
      <img v-if="updated" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument" class="action" :disabled="loading">
        {{ editMode ? "Apply Changes" : "Create Payment Link" }}
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
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
/* additional item props */
const additionalItemProps = {
  _productSelected: false,
  _colors: [],
  _variants: [],
  _variantWithFabrics: [],
  _fabrics: [],
  _fabricWithDetails: [],
  _selectedFabricIndex: 0,
  _thirdPartyProduct: false,
  _multiPrice: false,
  _readyToShip: false,
  _directPrice: 0,
  _directPricing: {},
};

/* base item */
const baseItem = () => ({
  key: uuidv4(),
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
  ...additionalItemProps,
});

/* base doc */
const baseDoc = () => ({
  _id: "",
  name: "",
  payeeName: "",
  currency: "INR",
  items: [baseItem()],
    validityRange: {
    start: new Date(),
    end: new Date(),
  },
  amount: 0,
  description: "",
  status: false,
});

export default {
  props: {
    model: String,
  },
  data() {
    return {
      editMode: false,
      currencies: [],
      doc: baseDoc(),
      loading: false,
      updated: false,
      errorToast: {
        status: false,
        msg: "",
      },
      allProducts: [],
      currency: "INR",
    };
  },
  mounted() {
    this.fetchActiveCurrencies();
    this.fetchAllProducts();
  },
  watch: {
    doc: {
      handler() {
        this.calculateTotalAmount();
      },
      deep: true
    }
  },
  methods: {
    calculateTotalAmount() {
      let sum = 0;
      this.doc.items.forEach(item => {
        sum = sum + (item.quantity * item.rate)
      });
      this.totalAmount = sum;
      this.$forceUpdate();
    },
    clearProductSelection(index) {
      // this.doc.items[index]._productSelected = false;
      Object.keys(additionalItemProps).forEach(key => {
        this.doc.items[index][key] = additionalItemProps[key];
      });

      this.$forceUpdate();
    },
    productSelected(payload, index) {
      const { product } = payload;
      this.doc.items[index] = {
        ...this.doc.items[index],
        styleId: product.styleId,
        name: product.name,
        collectionName: product.bounipunCollection,
        quantity: 1,
        _productSelected: true,
      };

      /* fetch all details for the product */
      this.fetchProductDetails(payload._id, index);
    },
    async fetchProductDetails(_id, itemIndex) {
      const productFetch = this.$axios.post("/fetchProduct", {
        _id,
        lockCheck: true,
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

      /* set flags and values */
      const item = this.doc.items[itemIndex];
      item._thirdPartyProduct = type === "third-party";
      item._multiPriced =
        type === "third-party" ? false : availabilityType === "made-to-order";
      item._readyToShip = availabilityType === "ready-to-ship";
      item._directPrice = directPrice;
      item._directPricing = directPricing;

      /* set bounipun collection */
      item.collectionName = bounipun_collection
        ? bounipun_collection.name
        : "N/A";

      /* set colors list */
      item._colors = colors.map((color) => ({
        name: color.name,
        value: color.name,
      }));

      /* if item is ready to ship */
      if (item._readyToShip) {
        item.rate =
          this.doc.currency === "INR"
            ? item._directPrice
            : item._directPricing[this.doc.currency];
        item.variantName = rtsDirectVariant.name;
        item.fabricName = rtsDirectFabric.name;
        item.hsnCode = rtsDirectVariant.hsnCode;
        this.$forceUpdate();
        return;
      }

      /* set variants */
      this.doc.items[itemIndex]._variantWithFabrics = variants;
      this.doc.items[itemIndex]._variants = variants.map((variant) => ({
        name: variant._id.name,
        value: variant._id.name,
      }));
      
      this.calculateTotalAmount();
      this.$forceUpdate();
    },
    variantSelected(variantName, itemIndex) {
      const item = this.doc.items[itemIndex];
      const selectedVariantIndex = item._variants.findIndex(
        (variant) => variant.name === variantName
      );
      const selectedVariant = item._variantWithFabrics[selectedVariantIndex];
      item._fabrics = selectedVariant.fabrics.map((fab) => ({
        name: `${fab._id.name} - ${fab._id.info1}`,
        value: `${fab._id.name} - ${fab._id.info1}`,
      }));

      /* set hsn code */
      item.hsnCode = selectedVariant._id.hsnCode;

      /* all fabrics for the variant */
      item._fabricWithDetails = selectedVariant.fabrics;
      item.rate =
        this.doc.currency === "INR"
          ? selectedVariant.fabrics[0].price
          : selectedVariant.fabrics[0].pricing[this.doc.currency];
      this.calculateTotalAmount();

      this.$forceUpdate();
    },
    fabricSelected(fabricName, itemIndex) {
      const item = this.doc.items[itemIndex];
      const selectedFabricIndex = item._fabrics.findIndex(
        (fabric) => fabric.name === fabricName
      );
      item._selectedFabricIndex = selectedFabricIndex;
      const selectedFabric = item._fabricWithDetails[selectedFabricIndex];
      item.rate =
        this.doc.currency === "INR"
          ? selectedFabric.price
          : selectedFabric.pricing[this.doc.currency];
      this.calculateTotalAmount();

      this.$forceUpdate();
    },
    currencyChanged(newCurrency) {
      this.doc.items.forEach((item) => {
        if (item._readyToShip) {
          item.rate =
            this.doc.currency === "INR"
              ? item._directPrice
              : item._directPricing?.[this.doc.currency];
          return;
        }

        const selectedFabric =
          item._fabricWithDetails[item._selectedFabricIndex];

        if (selectedFabric === undefined) {
          return;
        }

        item.rate =
          this.doc.currency === "INR"
            ? selectedFabric.price
            : selectedFabric.pricing[this.doc.currency];
      });
      this.calculateTotalAmount();

      this.$forceUpdate();
    },
    async fetchAllProducts() {
      const result = await this.$fetchCollection("products");
      this.allProducts = result.docs.map((product) => {
        const { _id, styleId, name } = product;
        return {
          _id,
          name: `${styleId} - (${name})`,
          product,
        };
      });
    },
    async fetchActiveCurrencies() {
      const request = await this.$post("/findDocuments", {
        model: "currency",
        filters: {
          adminEnabled: true,
          status: true,
        },
      });

      if (request.resolved == false) {
        return;
      }

      const currencies = request.response;

      this.currencies = currencies.map((c) => ({
        name: c.name,
        value: c.code,
      }));
      this.currencies.unshift(
        // { name: "All Currencies", value: "all" },
        { name: "Indian Rupee", value: "INR" }
      );
      this.calculateTotalAmount();

      this.$forceUpdate();
    },
    addNewItem() {
      this.doc.items.push(baseItem());
    },
    removeItem(index) {
      this.doc.items.splice(index, 1);
    },
    async updateDocument() {
      this.loading = true;
      const result = await this.$updateDocument(
        this.model,
        this.doc,
        this.editMode
      );
      this.loading = false;

      if (!result.updated) {
        this.errorToast.status = true;
        this.errorToast.msg =
          result.msg !== undefined ? result.msg : "Something went wrong";
        setTimeout(() => (this.errorToast.status = false), 2200);
        return;
      }

      this.$emit("updated");
      this.populateForm(result.doc);
      this.$flash(this);
    },
    async deleteDocument() {
      this.loading = true;
      const result = await this.$deleteDocument(this.model, this.doc._id);
      this.loading = false;

      if (!result.deleted) return;

      this.$emit("updated");
      this.resetForm();
      this.$flash(this);
    },
    populateForm(details) {
      const {
        _id,
        name,
        payeeName,
        currency,
        validityRange,
        amount,
        description,
        items,
        status,
      } = details;
      this.doc = {
        _id,
        name,
        payeeName,
        currency,
        validityRange: validityRange ?? { start: new Date(), end: new Date() },
        amount,
        items,
        description,
        status,
      };
      this.editMode = true;
    },
    closeForm() {
      this.resetForm();
      this.$emit("close");
    },
    resetForm() {
      this.populateForm(baseDoc());
      this.editMode = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.contents {
  position: relative;
  overflow: scroll;
}

.section {
  position: relative;
  margin: 10px;
  border: 1px dashed #efefef;
  padding: 5px 5px 30px 5px;
  border-radius: 5px;
  overflow: hidden;
}

.label {
  font-family: $font_2_bold;
  color: $gray;
  text-transform: uppercase;
  font-size: 10px;
  padding: 2%;
  margin-left: 5px;
  font-weight: 900;
}

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
