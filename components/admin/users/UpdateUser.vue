<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} User</h2>
    <!-- message id -->
    <InputBox
      v-if="editMode"
      label="Message ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />
    <!-- first name -->
    <InputBox label="First Name" v-model="doc.firstName" disabled />
    <!-- sur name -->
    <InputBox
      v-model="doc.surName"
      label="Sur Name"
      disabled
    />
    <!-- country iso code -->
    <InputBox v-model="doc.countryIsoCode" label="Country ISO Code" disabled />
    <!-- country dial code -->
    <InputBox
      v-model="doc.countryDialCode"
      label="Country Dial Code"
      disabled
    />
    <!-- phone number -->
    <InputBox v-model="doc.phoneNumber" label="Phone Number" disabled />
    <!-- usergroup -->
    <InputBox v-model="doc.usergroup" label="Usergroup" disabled />
    <!-- status -->
    <Toggle
      v-model="doc.status"
      label="Status:"
   
    />

    <!-- update button -->
    <div class="center-space">
      <!-- loading bar -->
      <img v-if="loading" class="loading" src="/loading.gif" />
      <!-- action complete gif -->
      <img v-if="updated" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument" class="action" :disabled="loading">
        {{ editMode ? "Apply Changes" : "Add" }}
      </button>
      <!-- delete document -->
      <!-- <button
        v-if="editMode"
        @click="deleteDocument"
        class="action delete"
        :disabled="loading"
      >
        Delete
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    model: String
  },
  data() {
    return {
      editMode: false,
      doc: {
        _id: "",
        firstName: "",
        surName: "",
        countryDialCode: "",
        countryIsoCode: "",
        phoneNumber: "",
        usergroup: "",
        status: false
      },
      loading: false,
      updated: false
    };
  },
  methods: {
    async updateDocument(model, details, editMode) {
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
        firstName,
        surName,
        countryDialCode,
        countryIsoCode,
        phoneNumber,
        usergroup,
        status
      } = details;
      this.doc = {
        _id,
        firstName,
        surName,
        countryDialCode,
        countryIsoCode,
        phoneNumber,
        usergroup,
        status
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
        firstName: "",
        surName: "",
        countryDialCode: "",
        countryIsoCode: "",
        phoneNumber: "",
        usergroup: "",
        status: false
      });

      this.editMode = false;
    }
  }
};
</script>
