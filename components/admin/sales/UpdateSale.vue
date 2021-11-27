<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} Sale</h2>
    <!-- sale ID -->
    <InputBox
      v-if="editMode"
      label="Sale ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />
    <!-- sale name -->
    <InputBox label="Sale Name" v-model="doc.name" />
    <!-- product list -->
    <SelectBox
      :options="allProductLists"
      v-model="doc.list"
      label="Select Product List"
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

    <!-- discount percentage -->
    <InputSlider label="Discount Percentage" v-model="doc.discountPercentage" />
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />
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
        {{ editMode ? "Edit" : "Add" }} Sale
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
export default {
  props: {
    model: String,
  },
  data() {
    return {
      editMode: false,
      doc: {
        _id: "",
        name: "",
        list: "",
        discountPercentage: 0,
        validityRange: { start: new Date(), end: new Date() },
        description: "",
        status: false,
      },
      allProductLists: [],
      loading: false,
      updated: false,
      errorToast: {
        status: false,
        msg: "",
      },
    };
  },
  mounted() {
    this.fetchAllProductLists();
  },
  methods: {
    async fetchAllProductLists() {
      const result = await this.$fetchCollection("product_lists");
      this.allProductLists = result.docs.map(({ _id, name }) => {
        return {
          name,
          value: _id,
        };
      });
      this.allProductLists.unshift({
        name: "Select Product List",
        value: null,
      });
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
        list,
        discountPercentage,
        validityRange,
        description,
        status,
      } = details;
      this.doc = {
        _id,
        name,
        list,
        validityRange: validityRange
          ? validityRange
          : { start: new Date(), end: new Date() },
        discountPercentage: discountPercentage.toString(),
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
      this.populateForm({
        _id: "",
        name: "",
        list: "",
        discountPercentage: "",
        validityRange: { start: new Date(), end: new Date() },
        description: "",
        status: false,
      });
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
</style>
