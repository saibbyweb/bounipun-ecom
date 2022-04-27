<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Create New" }} Payment Link</h2>

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

    <!-- payment link ID -->
    <InputBox
      v-if="editMode"
      label="Pop ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />

    <!-- link name -->
    <InputBox label="Payment Link Name" v-model="doc.name" :internal="true" />

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
/* base doc */
const baseDoc = () => ({
  _id: "",
  name: "",
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
      loading: false,
      updated: false,
      errorToast: {
        status: false,
        msg: "",
      }
    }
  },
  mounted() {
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
        description,
        status
      } = details;
      this.doc = {
        _id,
        name,
        description,
        status
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
  .demo-popup {
    position: fixed;
    top: 15vh;
    left: 2vw;
    background: red;
    z-index: 10;
  }
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
