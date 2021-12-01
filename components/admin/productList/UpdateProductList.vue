<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} Product List</h2>

    <!-- preview link -->
    <div class="center">
      <a
        v-if="editMode"
        :href="`/lists/${doc.slug}`"
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
          Preview Product List ➚
        </span>
      </a>
    </div>

    <!-- product list id -->
    <InputBox
      v-if="editMode"
      label="Product List ID"
      v-model="doc._id"
      disbaled
      :internal="true"
    />
    <!-- product list name -->
    <InputBox label="Product List Name" v-model="doc.name" />

    <!-- text -->
    <TextBox v-model="doc.text" label="Text (Paragraph):" />

    <!-- list slug -->
    <InputBox label="List Slug" v-model="doc.slug" />

    <!-- set product list header -->
    <UploadImage
      ref="imageUploader"
      :multipleUpload="false"
      label="Set Product List Header Image"
      @updated="imageListUpdated($event, 'image')"
    />

    <br />

    <!-- product autocomplete list -->
    <div class="section">
      <client-only>
        <label class="label"> List of Products: </label>
        <autocomplete
          inputClass="small"
          ref="autocomplete"
          :source="allProductsExceptSelected"
          @enter="addProduct"
          @selected="addProduct"
        >
        </autocomplete>
      </client-only>

      <div class="list">
        <div
          class="selected"
          v-for="(product, index) in doc.list"
          :key="product._id"
        >
          <span> {{ getProductName(product) }} </span>
          <img @click="removeProduct(index)" src="/icons/light/trash.png" />
        </div>
      </div>
    </div>
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />

    <!-- lock -->
    <div class="section">
      <label class="label"> Product List Lock </label>
      <!-- locked image -->
      <UploadImage
        ref="lockedImageUploader"
        :multipleUpload="false"
        label="Set Locked Header Image"
        @updated="imageListUpdated($event, 'lockedImage')"
      />

      <!-- locked text -->
      <TextBox v-model="doc.lockedText" label="Locked Text (Paragraph):" />
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
    <Toggle v-model="doc.status" label="Page Visibility" />
    <!-- update button -->
    <div class="center-space">
      <!-- loading bar -->
      <img v-if="loading" class="loading" src="/loading.gif" />
      <!-- action complete gif -->
      <img v-if="updated" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument" class="action" :disabled="loading">
        {{ editMode ? "Edit" : "Add" }} Product List
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
  slug: "",
  list: [],
  image: "",
  text: "",
  lockedImage: "",
  lockedText: "",
  lock: "",
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
      allProducts: [],
      loading: false,
      updated: false,
      errorToast: {
        status: false,
        msg: "",
      },
    };
  },
  computed: {
    allProductsExceptSelected() {
      if (this.allProducts.length === 0) return [];

      return this.allProducts.filter((product) => {
        /* product is not in the selected array */
        return (
          this.doc.list.findIndex((selected) => selected === product._id) === -1
        );
      });
    },
  },
  mounted() {
    this.fetchAllProducts();
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
    removeProduct(index) {
      this.doc.list.splice(index, 1);
    },
    addProduct(data) {
      console.log("Update product list", data);
      // this.doc.list.push(data.selectedObject)
      this.doc.list.push(data.selectedObject._id);
    },
    getProductName(productId) {
      //   setTimeout(() => {
      const foundIndex = this.allProducts.findIndex(
        ({ _id }) => _id === productId
      );
      if (foundIndex !== -1) return this.allProducts[foundIndex].name;
      else return "Not found";
      //   }, 1000);
    },
    async fetchAllProducts() {
      const result = await this.$fetchCollection("products");
      this.allProducts = result.docs.map(({ _id, styleId, name }) => {
        return {
          _id,
          name: `${styleId} - (${name})`,
        };
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
      /* only update the id */
      // this.doc._id = result.doc._id;
      this.editMode = true;
      this.$flash(this);
    },
    async deleteDocument() {
      this.loading = true;
      const result = await this.$deleteDocument(this.model, this.doc._id);
      this.loading = false;

      if (!result.deleted) {
        console.log(result);
        this.errorToast.status = true;
        this.errorToast.msg =
          result.msg !== undefined ? result.msg : "Something went wrong";
        setTimeout(() => (this.errorToast.status = false), 2200);
        return;
      }

      this.$emit("updated");
      this.resetForm();
      this.$flash(this);
    },
    populateForm(details) {
      const {
        _id,
        name,
        list,
        slug,
        image,
        text,
        lockedImage,
        lockedText,
        lock,
        description,
        status,
      } = details;

      this.doc = {
        _id,
        name,
        list,
        slug: slug === undefined ? "" : slug,
        image,
        text,
        lockedImage,
        lockedText,
        lock,
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
      this.$refs.imageUploader.clearFileSelection();
      this.$refs.lockedImageUploader.clearFileSelection();
      this.populateForm(baseDoc());
      this.editMode = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  .selected {
    background: #d68595;
    color: white;
    border-radius: 20px;
    padding: 7px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    span {
      font-size: 12px;
      color: white;
    }

    img {
      margin-left: 1vw;
      width: 2vw;
      cursor: pointer;
    }
  }
}

.contents {
  .autocomplete__box {
    // /deep/ .autocomplete__box {
    padding: 10px 15px;
    border: none;
    -webkit-appearance: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);
    color: $gray;
    font-family: $font_2_semibold;
    letter-spacing: 1px;
  }

  // /deep/ .small {}

  .autocomplete__results {
    // /deep/ .autocomplete__results {
    border: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);
    .autocomplete__results__item {
      font-size: 11px;
    }
  }
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
