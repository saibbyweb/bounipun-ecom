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
          <PaymentLinkItem
            v-for="(item, index) in doc.items"
            :initialValue="item"
            :currency="doc.currency"
            :key="item.key"
            :index="index"
            :allProducts="allProducts"
            @update="updateItems"
            @remove="removeItem"
          />
        </transition-group>
      </Draggable>
      <!-- add new item -->
      <div class="flex center">
        <button @click="addNewItem()" class="action">Add New Item</button>
      </div>
    </div>

    <!-- total amount -->

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
      items: [],
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
    updateItems(payload) {
        this.items[payload.index] = payload.value;
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
      this.currencies.unshift({ name: "Indian Rupee", value: "INR" });
    },
    addNewItem() {
      this.doc.items.push(baseItem());
    },
    removeItem(index) {
      this.doc.items.splice(index, 1);
      this.items.splice(index, 1);
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
</style>
