<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} Admin</h2>
    <!-- sale ID -->
    <InputBox
      v-if="editMode"
      label="Admin ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />
    <!-- sale name -->
    <InputBox label="Admin Name" v-model="doc.name" />
    <!-- access level -->
    <SelectBox
      :options="allAccessLevels"
      v-model="doc.access_level"
      label="Select Access Level"
    />

    <!-- email -->
    <InputCredential
      label="Admin Phone Number"
      v-model="doc.phoneNumber"
      type="number"
      :isMobileNumber="true"
      :countryDialCode="doc.countryDialCode"
    />
    <!-- email -->
    <InputBox label="Admin Email" v-model="doc.email" type="email" />
    <!-- gender -->
    <SelectBox :options="allGenders" v-model="doc.gender" label="Gender" />
    <!-- gender -->
    <TextBox v-model="doc.address" label="Address" :internal="true" />
    <!-- passcode field -->
    <InputBox 
      label="Admin Passcode" 
      v-model="doc.passcode" 
      type="password"
      placeholder="Enter passcode (optional)"
    />
    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />
    <br/>
    <br/>
    
    <!-- update button -->
    <div class="center-space">
      <!-- loading bar -->
      <img v-if="loading" class="loading" src="/loading.gif" />
      <!-- action complete gif -->
      <img v-if="updated" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument" class="action" :disabled="loading">
        {{ editMode ? "Edit" : "Add" }} Admin
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
        countryDialCode: "+91",
        phoneNumber: "",
        access_level: "3",
        email: "",
        gender: "male",
        address: "",
        status: false,
        passcode: "",
      },
      allAccessLevels: [
        { name: "Super Admin", value: "1" },
        { name: "Manager", value: "2" },
        { name: "Support Member", value: "3" },
      ],
      allGenders: [
        { name: "Female", value: "female" },
        { name: "Male", value: "male" },
      ],
      loading: false,
      updated: false,
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
        countryDialCode,
        phoneNumber,
        access_level,
        email,
        gender,
        address,
        status,
        passcode,
      } = details;
      this.doc = {
        _id,
        name,
        countryDialCode,
        phoneNumber,
        access_level,
        email,
        gender,
        address,
        status,
        passcode,
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
        countryDialCode: "+91",
        phoneNumber: "",
        access_level: "3",
        email: "",
        gender: "male",
        address: "",
        status: false,
        passcode: "",
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
