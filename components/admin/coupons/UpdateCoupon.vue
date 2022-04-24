<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} Coupon</h2>
    <!-- coupon ID -->
    <InputBox
      v-if="editMode"
      label="Coupon ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />
    <!-- coupon code -->
    <InputBox label="Coupon Code" v-model="doc.code" />
    <!-- coupon type -->
    <SelectBox
      :options="couponTypes"
      v-model="doc.type"
      label="Select Coupon Type"
    />

    <!-- coupon category -->
    <SelectBox
      :options="categoryTypes"
      v-model="doc.category"
      label="Select Coupon Category"
    />

    <!-- currency type -->
    <SelectBox
      :options="currencies"
      v-model="doc.currency"
      label="Select Currency"
    />
    <!-- coupon type -->
    <InputBox label="Percentage (or Value)" v-model="doc.value" type="number" />
    <!-- coupon validity -->
    <InputBox
      label="Total number of allowed uses)"
      v-model="doc.validity"
      type="number"
    />
    <!-- validity range -->
    <label class="label"> Validity Range </label>
    <client-only>
      <v-datepicker
        color="blue"
        is-range
        v-model="doc.validityRange"
        :from-date="doc.validityRange.start"
      />
    </client-only>

    <!-- promo text for coupon (with auto generate option)-->
    <TextBox
      v-model="doc.text"
      label="Suggestion Text (to be seen at the cart)"
      :internal="false"
    />
    <!-- coupon suggestions text -->
    <div class="flex center">
      <button class="action small" @click="setText()" style="width:40%;"> Set coupon suggestion text </button>
    </div>
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />

    <!-- log -->
    <div class="log">
      <label class="label"> Usage Log </label>
      <div class="flex center col">
        <div
          class="item flex around"
          v-for="(item, index) in doc.log"
          :key="index"
        >
          <span>
            Redeemed on: <br />
            {{ $formatDate(item.usedOn) }}</span
          >
          <span>
            Order Number: <br />
            {{ item.order }}</span
          >
        </div>
      </div>
    </div>

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
        {{ editMode ? "Apply Changes" : "Add Coupon" }}
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
    </div>
  </div>
</template>

<script>
const baseDoc = () => ({
  _id: "",
  code: "",
  type: "",
  value: "",
  currency: "all",
  validity: "",
  validityRange: {
    start: new Date(),
    end: new Date(),
  },
  category: "",
  log: [],
  text: "",
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
      doc: baseDoc(),
      couponTypes: [
        {
          name: "Select Type",
          value: null,
        },
        {
          name: "Percentage",
          value: "percentage",
        },
        {
          name: "Cash Discount",
          value: "direct-discount",
        },
      ],
      categoryTypes: [
        {
          name: "Select Type",
          value: null,
        },
        {
          name: "General",
          value: "general",
        },
        {
          name: "Personal",
          value: "personal",
        },
      ],
      currencies: [
        {
          name: "Select Currency",
          value: null,
        },
      ],
      loading: false,
      updated: false,
    };
  },
  mounted() {
    this.fetchActiveCurrencies();
  },
  methods: {
    setText() {
      this.doc.text = this.getCouponTextTemplate();
    },
    getCouponTextTemplate() {
      const coupon = this.doc;

      /* check if coupon is expired or not */
      if (new Date(coupon.validityRange.end).getTime() < new Date().getTime())
        this.couponExpired = true;

      const unit = coupon.type === "percentage" ? "%" : coupon.currency;
      return `Use coupon code ${coupon.code} and get flat ${
        coupon.value
      } ${unit} off on your order. Offer valid from ${this.$formatDate(
        coupon.validityRange.start,
        true
      )} - ${this.$formatDate(coupon.validityRange.end, true)}. Hurry!`;
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
        { name: "All Currencies", value: "all" },
        { name: "Indian Rupee", value: "INR" }
      );
    },
    async updateDocument() {
      this.doc.code = this.doc.code.toUpperCase();

      this.loading = true;
      const result = await this.$updateDocument(
        this.model,
        this.doc,
        this.editMode
      );
      this.loading = false;

      if (!result.updated) return;

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
        code,
        type,
        value,
        currency,
        validity,
        validityRange,
        log,
        category,
        text,
        description,
        status,
      } = details;
      this.doc = {
        _id,
        code,
        type,
        value: value.toString(),
        currency,
        validity: validity.toString(),
        validityRange,
        log,
        category,
        text,
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
.section {
  position: relative;
  margin: 10px;
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

.log {
  .item {
    border: 1px dashed #efefef;
    width: 100%;
    span {
      font-size: 11px;
      background-color: $dark_gray;
      color: white;
      padding: 2px;
      margin: 5px;
    }
  }
}
</style>
