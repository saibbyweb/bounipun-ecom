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
    <div class="section">
    <InputSlider v-model="doc.inflationPercentage" label="Inflation Percentage (for outside India)" />

    
    <div v-if="inflationChanged" class="flex center">
      <span style="font-size:12px; width:60%; text-align:center; padding-left:1%;"> To update all international prices for products under {{ doc.name}}, click here:  👉</span>
    <button @click="resetProductPrices" class="sub-action"> Update Prices </button> 
    </div>

        </div>
    
    <!-- price reset confirmation -->
    <div v-if="pricesReset" style="position:fixed; z-index:3; bottom:10px; left:0; width:100%;height:20%;">
       <Toast :msg="`${totalProductsReset} Product(s) updated with new price(s).`" :show="pricesReset" />
    </div>

    <!-- soft lock -->
    <div class="section">
      <label class="label"> Soft Lock </label>
      <Toggle
        v-model="doc.softLock"
        label="🔒 Soft Lock (Only logged can view)"
        width="90px"
        activeText="Enabled"
        inactiveText="Unlocked"
      />
    </div>


    <!-- lock -->
    <div class="section">
      <label class="label"> Hard Lock </label>
      <!-- locked image -->
      <!-- <UploadImage
        ref="lockedImageUploader"
        :multipleUpload="false"
        label="Set Locked Header Image"
        @updated="imageListUpdated($event, 'lockedImage')"
      /> -->

      <!-- locked image -->
      <UploadImage
        ref="lockedImagesUploader"
        :multipleUpload="true"
        label="Set Locked Header Image(s)"
        @updated="imageListUpdated($event, 'lockedImages')"
      />

      <!-- locked text -->
      <TextBox v-model="doc.lockedText" label="Locked Text (Paragraph):" />
      <!-- lock toggle -->
      <Toggle
        v-model="doc.lock"
        label="🔒 Hard Lock (Only users with Premium Access Code can view)"
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
  lockedImages: [],
  lockedText: "",
  mainTextBlock: baseTextBlock(),
  lock: false,
  softLock: false,
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
      pricesReset: false,
      totalProductsReset: 0,
      fetchedInflationPercentage: -1
    };
  },
  computed: {
    inflationChanged() {
      return this.fetchedInflationPercentage != this.doc.inflationPercentage;
    }
  },
  methods: {
    async resetProductPrices() {
      const request = await this.$post('/updateNonINRPricing', {
        collectionId: this.doc._id,
        inflationPercentage: this.doc.inflationPercentage,
        type: 'collection'
      });
      
      /* show feed on update */
      if(request.resolved ===  true) {
        /* save document */
        this.updateDocument();
        this.pricesReset = true;
        this.totalProductsReset = request.response.total;
        setTimeout(() => this.pricesReset = false,4500)
      }
    },
    imageListUpdated(list, type) {
      switch (type) {
        case "image":
          this.doc.image = list.length > 0 ? list[0].path : "";
          break;
        case "lockedImage":
          this.doc.lockedImage = list.length > 0 ? list[0].path : "";
          break;
        case "lockedImages":
          console.log('locked image set', list.length);
          this.doc.lockedImages = list;
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
        lockedImages,
        lockedText,
        mainTextBlock,
        lock,
        softLock,
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
        lockedImages: lockedImages || [],
        lockedText,
        mainTextBlock:
          mainTextBlock === undefined ? baseTextBlock() : mainTextBlock,
        lock,
        softLock,
        status,
      };
      /* set initailly fetched percentage */
      this.fetchedInflationPercentage = this.doc.inflationPercentage;
      this.editMode = true;
    },
    closeForm() {
      this.resetForm();
      this.$emit("close");
    },
    resetForm() {
      this.$refs.imageUploader.clearFileSelection();
      // this.$refs.lockedImageUploader.clearFileSelection();
      this.$refs.lockedImagesUploader.clearFileSelection();
      this.populateForm(baseDoc());
      this.editMode = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.sub-action {
  background-color: rgb(194, 71, 62) !important;
  color: white;
}
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
