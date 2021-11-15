<template>
  <div class="contents">
    <!-- abort update process -->
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add" }} Collection</h2>

    <!-- preview link -->
    <div class="center">
      <a
        v-if="editMode"
        :href="`/Collections?slug=${doc.slug}`"
        target="_blank"
      >
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
          Preview Collection ➚
        </span>
      </a>
    </div>

    <!-- collection id -->
    <InputBox
      v-if="editMode"
      label="Collection ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />
    <!-- collection name -->
    <InputBox v-model="doc.name" label="Collection Name" />
    <!-- slug -->
    <InputBox v-model="doc.slug" label="Slug" />
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" />
    <!-- description -->
    <TextBox v-model="doc.variantNote" label="Variant Note" />

    <!-- active order limit -->
    <InputBox
      v-model.number="doc.activeOrderLimit"
      label="Active Order Limit"
      type="number"
      :internal="true"
    />
    <!-- edt -->
    <InputBox
      v-model="doc.edt"
      label="Estimated Time of Delivery (IN WEEKS)"
      type="number"
      :internal="true"
    />
    <!-- set collection header -->
    <UploadImage
      ref="imageUploader"
      :multipleUpload="false"
      label="Set Collection Header Image"
      @updated="imageListUpdated($event, 'image')"
    />
    <!-- main text block -->
    <div class="main-text-block section">
      <label class="label"> Main Text Block </label>
      <!-- text 1 -->
      <InputBox v-model="doc.mainTextBlock.text1" label="Main Text 1" />
      <!-- text 2 -->
      <TextBox v-model="doc.mainTextBlock.text2" label="Main Text 2" />
      <!-- text 3 -->
      <InputBox v-model="doc.mainTextBlock.text3" label="Main Text 3" />

      <!-- visiblity toggle -->
      <Toggle
        v-model="doc.mainTextBlock.visible"
        label="Text Block Visiblity"
        activeText="Show"
        inactiveText="Hidden"
        width="90px"
      />
    </div>

    <!-- inflation slider -->
    <InputSlider v-model="doc.inflationPercentage" label="Inflation Percentage (for outside India)" />

    <!-- lock -->
    <div class="section">
      <label class="label"> Collection Lock </label>
      <!-- locked image -->
      <UploadImage
        ref="lockedImageUploader"
        :multipleUpload="false"
        label="Set Locked Header Image"
        @updated="imageListUpdated($event, 'lockedImage')"
      />

      <!-- locked text -->
      <TextBox v-model="doc.lockedText" label="Locked Text" />
      <!-- lock toggle -->
      <Toggle
        v-model="doc.lock"
        label="🔒 Lock"
        width="90px"
        activeText="Enabled"
        inactiveText="Unlocked"
      />
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
        {{ editMode ? "Edit" : "Add" }} Collection
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
/* base text block */
const baseTextBlock = () => ({
  text1: "",
  text2: "",
  text3: "",
  visible: false,
});

/* base doc */
const baseDoc = () => ({
  id: "",
  name: "",
  slug: "",
  description: "",
  variantNote: "",
  activeOrderLimit: "",
  edt: "",
  image: "",
  inflationPercentage:0,
  lockedImage: "",
  lockedText: "",
  mainTextBlock: baseTextBlock(),
  lock: false,
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
      val: 20,
    };
  },
  methods: {
    imageListUpdated(list, type) {
      switch (type) {
        case "image":
          this.doc.image = list.length > 0 ? list[0].path : "";
          break;
        case "lockedImage":
          this.doc.lockedImage = list.length > 0 ? list[0].path : "";
          break;
      }
    },
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
        name,
        slug,
        description,
        variantNote,
        edt,
        activeOrderLimit,
        image,
        inflationPercentage,
        lockedImage,
        lockedText,
        mainTextBlock,
        lock,
        status,
      } = details;

      this.doc = {
        _id,
        name,
        slug,
        description,
        variantNote,
        activeOrderLimit,
        edt: edt !== null ? edt.toString() : "",
        image,
        inflationPercentage: inflationPercentage == undefined ? 0 : inflationPercentage,
        lockedImage,
        lockedText,
        mainTextBlock:
          mainTextBlock === undefined ? baseTextBlock() : mainTextBlock,
        lock,
        status,
      };
      this.editMode = true;
    },
    closeForm() {
      this.resetForm();
      this.$emit("close");
    },
    resetForm() {
      this.$refs.imageUploader.clearFileSelection();
      this.$refs.lockedImageUploader.clearFileSelection();
      this.populateForm(baseDoc());
      this.editMode = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  margin-top: 10px;
  padding-top: 10px;
  border: 3px dotted #efefef;

  .label {
    color: #333333;
    font-size: 12px;
    padding-top: 10px;
  }
}
</style>
