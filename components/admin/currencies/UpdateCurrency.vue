<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} Currency</h2>
    <!-- fabric id -->
    <InputBox
      v-if="editMode"
      label="Currency ID"
      v-model="doc._id"
      disbaled
      :internal="true"
    />
    <!-- currency name -->
    <InputBox label="Currency Name" v-model="doc.name" />
    <!-- code -->
    <InputBox label="Code" v-model="doc.code" />
    <!-- exchange rate -->
    <!-- <InputBox label="Exchange Rate (INR)" v-model="doc.exchangeRateINR" /> -->
    <InputSlider v-model="doc.exchangeRateINR" label="DExchange Rate (INR)" unit="INR" :min="0" :max="250" />
    <!-- zero decimal toggle -->
    <Toggle v-model="doc.zeroDecimal" label="Zero Decimal:" />
    <!-- admin enabled toggle -->
    <Toggle v-model="doc.adminEnabled" label="Admin Enabled:" />
    <!-- client enabled toggle -->
    <Toggle v-model="doc.clientEnabled" label="Client Enabled:" />
    <!-- default inflation percentage -->
    <InputSlider v-model="doc.defaultInflationPercentage" label="Default Inflation Percentage (for outside India)" />
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" />
    <!-- status toggle -->
    <Toggle v-model="doc.status" label="Status:" />
    <!-- update button -->
    <div class="center-space">
      <!-- loading bar -->
      <img v-if="loading" class="loading" src="/loading.gif" />
      <!-- action complete gif -->
      <img v-if="updated" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument" class="action" :disabled="loading">
        {{ editMode ? "Edit" : "Add" }} Currency
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
/* base doc */
const baseDoc = () => ({
    _id: "",
    name: "",
    code: "",
    exchangeRateINR: 0,
    zeroDecimal: false,
    adminEnabled: false,
    clientEnabled: false,
    defaultInflationPercentage: 20,
    description: "",
    status: false
})

export default {
  props: {
    model: String,
  },
  data() {
    return {
      editMode: false,
      doc: baseDoc(),
      loading: false,
      updated: false,
    };
  },
  methods: {
    async updateDocument() {
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
        name,
        code,
        exchangeRateINR,
        zeroDecimal,
        adminEnabled,
        clientEnabled,
        defaultInflationPercentage,
        description,
        status
      } = details;

      this.doc = {
        _id,
        name,
        code,
        exchangeRateINR,
        zeroDecimal,
        adminEnabled,
        clientEnabled,
        defaultInflationPercentage,
        description,
        status
      };

      if(typeof defaultInflationPercentage === 'String') {
        this.doc.defaultInflationPercentage = parseInt(defaultInflationPercentage)
      }

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
