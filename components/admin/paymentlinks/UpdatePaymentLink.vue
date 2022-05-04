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
        <InputBox label="Payee Name" v-model="doc.name" />

        <!-- currency type -->
        <SelectBox
          :options="currencies"
          v-model="doc.currency"
          label="Select Currency"
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
            <div class="header">
              <!-- index indicator -->
              <span> Item #{{ index + 1 }} </span>
              <!-- product selector -->
              <Dropdown :source="allProducts" />
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
                :slim="true"
                :css="{ width: '90px' }"
              />
              <InputBox
                v-model="item.name"
                label="Product Name"
                :slim="true"
                :css="{ width: '250px' }"
              />
              <InputBox
                v-model="item.variantName"
                label="Variant"
                :slim="true"
                :css="{ width: '100px' }"
              />
              <InputBox
                v-model="item.fabricName"
                label="Fabric"
                :slim="true"
                :css="{ width: '140px' }"
              />
              <InputBox
                v-model="item.colorName"
                label="Color"
                :slim="true"
                :css="{ width: '130px' }"
              />
              <!-- </div> -->

              <!-- <div class="flex items"> -->
              <InputBox
                v-model="item.collectionName"
                label="Collection"
                :slim="true"
                :css="{ width: '100px' }"
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
                :label="`Rate - (${doc.currency})`"
                :slim="true"
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
});

/* base doc */
const baseDoc = () => ({
  _id: "",
  name: "",
  payeeName: "",
  validityRange: {
    start: new Date(),
    end: new Date(),
  },
  items: [baseItem()],
  currency: "INR",
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
  methods: {
    async fetchAllProducts() {
      const result = await this.$fetchCollection("products");
      this.allProducts = result.docs.map(({ _id, styleId, name }) => {
        return {
          _id,
          name: `${styleId} - (${name})`,
         // rest
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
        validityRange,
        description,
        items,
        status,
      } = details;
      this.doc = {
        _id,
        name,
        payeeName,
        validityRange: validityRange ?? {start: new Date(), end: new Date()},
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
  // padding-bottom: 25px;
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
      padding: 3%;
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
