<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} Unlock Code</h2>
    <!-- unlock ID -->
    <InputBox
      v-if="editMode"
      label="Unlock ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />
    <!-- unlock code -->
    <InputBox label="Unlock Code" v-model="doc.code" />

    <!-- unlock type -->
    <SelectBox
      :options="unlockTypes"
      v-model="doc.type"
      label="Select Unlock Type"
    />

    <!-- unlock validity -->
    <InputBox
      label="Validity (Total number of allowed uses)"
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
            Used on: <br />
            {{ $formatDate(item.usedOn) }}</span
          >
          <span>
            Customer ID: <br />
            {{ item.user }}</span
          >
        </div>
      </div>
    </div>

    <!-- black list -->
    <div class="black-list">
      <label class="label"> Black List: </label>
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
        {{ editMode ? "Apply Changes" : "Add Unlock Code" }}
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
    <!-- error message -->
    <Toast :msg="error.msg" :show="error.status" :error="true" />
  </div>
</template>

<script>
/* base doc */
const baseDoc = () => ({
  _id: "",
  code: "",
  type: "type1",
  validity: "",
  validityRange: {
    start: new Date(),
    end: new Date(),
  },
  log: [],
  blackList: [],
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
      unlockTypes: [
        {
          name: "Select Type",
          value: null,
        },
        {
          name: "Type 1",
          value: "type1",
        },
        {
          name: "Type 2",
          value: "type2",
        },
      ],
      error: {
        status: false,
        msg: "Document could not be saved",
      },
      loading: false,
      updated: false,
    };
  },
  mounted() {},
  methods: {
    async updateDocument() {
      this.doc.code = this.doc.code.toUpperCase();

      this.loading = true;
      const result = await this.$updateDocument(
        this.model,
        this.doc,
        this.editMode
      );
      this.loading = false;

      console.log(result, "-- FROM UPDATE UNLOCK ");

      if (!result.updated) {
        this.error.msg = result.message;
        this.error.status = true;
        setTimeout(() => {
          this.error.status = false;
        }, 2000);
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
        code,
        type,
        validity,
        validityRange,
        log,
        blackList,
        description,
        status,
      } = details;
      this.doc = {
        _id,
        code,
        type,
        validity: validity.toString(),
        validityRange,
        log,
        blackList,
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
