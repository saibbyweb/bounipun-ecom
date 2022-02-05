<template>
  <div class="contents">
    <!-- cancel update -->
    <CancelUpdate @close="closeForm" />
    <!-- heading text -->
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} Homepage</h2>
    <!-- homepage id -->
    <InputBox
      v-if="editMode"
      label="Homepage ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />
    <!-- homepage name -->
    <InputBox label="Homepage Name" v-model="doc.name" />

    <!-- main slideshow (Desktop) -->
    <div class="main-slideshow section">
      <label class="head"> Main Slideshow (Desktop) </label>
      <!-- desktop slideshow images -->
      <UploadImage
        ref="desktopMainSlideshow"
        :multipleUpload="true"
        label="Set Desktop Slideshow Images:"
        @updated="imageListUpdated($event, 'desktopMainSlideshow')"
      />

      <!--  desktop slide link -->
      <InputBox v-for="(slide,index) in doc.desktopMainSlideshow.slides" :key="slide._id" :label="`Link for Slide #${index+1}`" v-model="slide.link" :options="{indicator: true}" />

      <!-- visiblity toggle -->
      <Toggle
        v-model="doc.desktopMainSlideshow.visible"
        label="Visiblity"
        activeText="Live"
        inactiveText="Hidden"
        width="100px"
      />
    </div>

    <!-- main slideshow (MOBILE) -->
    <div class="main-slideshow section">
      <label class="head"> Main Slideshow (MOBILE) </label>
      <!-- mobile slideshow images -->
      <UploadImage
        ref="mainSlideshow"
        :multipleUpload="true"
        label="Set Slideshow Images:"
        @updated="imageListUpdated($event, 'mainSlideshow')"
      />

          <!--  mobile slide link -->
      <InputBox v-for="(slide,index) in doc.mainSlideshow.slides" :key="slide._id" :label="`Link for Slide #${index+1}`" v-model="slide.link" :options="{indicator: true}" />


      <!-- visiblity toggle -->
      <Toggle
        v-model="doc.mainSlideshow.visible"
        label="Visiblity"
        activeText="Live"
        inactiveText="Hidden"
        width="100px"
      />
    </div>

    <!-- main text block -->
    <div class="main-text-block section">
      <label class="head"> Main Text Block </label>
      <!-- text 1 -->
      <InputBox v-model="doc.mainTextBlock.text1" label="Main Text 1" />
      <!-- text 2 -->
      <TextBox v-model="doc.mainTextBlock.text2" label="Main Text 2" />
      <!-- text 3 -->
      <InputBox v-model="doc.mainTextBlock.text3" label="Main Text 3" />
      <!-- author -->
      <InputBox v-model="doc.mainTextBlock.author" label="Author" />
      <!-- visiblity toggle -->
      <Toggle
        v-model="doc.mainTextBlock.visible"
        label="Visiblity"
        activeText="Live"
        inactiveText="Hidden"
        width="100px"
      />
    </div>
    <!-- collections block -->
    <div class="collection-blocks section">
      <label class="head"> Collection Blocks: </label>

      <!-- loop through all blocks-->
      <div
        class="block"
        v-for="(block, index) in doc.collectionBlocks"
        :key="block.key"
      >
        <!-- block heading -->
        <div class="block-heading">
          <span> Collection Block #{{ index + 1 }} </span>
          <!-- remove collection block -->
          <button
            class="action delete"
            style="font-size: 9px"
            @click="removeBlock('collectionBlocks', index)"
          >
            Delete
          </button>
        </div>
        <!-- select bounipun collection -->
        <SelectBox
          :options="allCollections"
          v-model="block.bounipun_collection"
          label="Select Bounipun Collection"
        />
        <!-- collection slideshow images -->
        <UploadImage
          ref="imageUploader_collection"
          :multipleUpload="true"
          label="Set Collection Images"
          @updated="imageListUpdated($event, 'collectionBlock', index)"
        />
        <!-- text 1 -->
        <InputBox label="Text 1" v-model="block.text1" />
        <!-- text 2 -->
        <TextBox v-model="block.text2" label="Text 2" />
        <!-- text 3 -->
        <InputBox label="Text 3" v-model="block.text3" />
        <!-- button text + visibility toggle-->
        <div class="center">
          <!-- button text -->
          <InputBox label="Button Text" v-model="block.buttonText" />
          <!-- visiblity toggle -->
          <Toggle
            v-model="block.visible"
            label="Visiblity"
            activeText="Live"
            inactiveText="Hidden"
            width="100px"
          />
        </div>
      </div>

      <!-- add collection block -->
      <div class="center">
        <button class="add-block" @click="addCollectionBlock">
          + New Collection Section
        </button>
      </div>
    </div>

    <!-- product list block -->
    <div class="product-list-blocks section">
      <label class="head"> Product List Blocks: </label>

      <!-- loop through all blocks-->
      <div
        class="block"
        v-for="(block, index) in doc.productListBlocks"
        :key="block.key"
      >
        <!-- block heading -->
        <div class="block-heading">
          <span> Product List Block #{{ index + 1 }} </span>
          <!-- remove product list block -->
          <button
            class="action delete"
            style="font-size: 9px"
            @click="removeBlock('productListBlocks', index)"
          >
            Delete
          </button>
        </div>

        <!-- select product list -->
        <SelectBox
          :options="allProductLists"
          v-model="block.productList"
          label="Select Product List"
        />
        <!-- set product list image -->
        <UploadImage
          ref="imageUploader_productList"
          label="Set Product List Images"
          @updated="imageListUpdated($event, 'productListBlock', index)"
        />

        <!-- set product list mood image -->
        <UploadImage
          :multiple="false"
          ref="imageUploader_productListMood"
          label="Set Product List Mood Image"
          @updated="imageListUpdated($event, 'productListBlockMood', index)"
        />

        <!-- text 1 -->
        <InputBox label="Text 1" v-model="block.text1" />
        <!-- text 2 -->
        <TextBox v-model="block.text2" label="Text 2" />
        <!-- button text + visibility toggle -->
        <div class="center">
          <!-- button text -->
          <InputBox label="Button Text" v-model="block.buttonText" />
          <!-- visiblity toggle -->
          <Toggle
            v-model="block.visible"
            label="Visiblity"
            activeText="Live"
            inactiveText="Hidden"
            width="100px"
          />
        </div>
      </div>
      <!-- add product list block -->
      <div class="center">
        <button class="add-block" @click="addProductListBlock">
          + New Product List Block
        </button>
      </div>
    </div>
    <!-- bounipun lab -->
    <div class="bounipun-lab section">
      <label class="head"> Bounipun Lab: </label>
      <!-- heading -->
      <InputBox label="Heading" v-model="doc.bounipunLab.heading" />
      <!-- paragraph -->
      <TextBox label="Paragraph" v-model="doc.bounipunLab.paragraph" />
      <!-- button text -->
      <InputBox label="Button Text" v-model="doc.bounipunLab.buttonText" />
      <!-- bounipun lab image -->
      <UploadImage
        ref="imageUploader_bounipunLab"
        :multipleUpload="false"
        label="Set Bounipun Lab Image"
        @updated="imageListUpdated($event, 'bounipunLab')"
      />
      <!-- visiblity toggle -->
      <Toggle
        v-model="doc.bounipunLab.visible"
        label="Visiblity"
        activeText="Live"
        inactiveText="Hidden"
        width="100px"
      />
    </div>
    <!-- quote -->
    <div class="quote section">
      <label class="head"> Quote: </label>
      <UploadImage
        ref="imageUploader_quote"
        :multipleUpload="false"
        label="Set Quote Logo Image"
        @updated="imageListUpdated($event, 'quote')"
      />

      <!-- heading -->
      <InputBox label="Heading" v-model="doc.quote.heading" />
      <!-- paragraph -->
      <InputBox label="Paragraph" v-model="doc.quote.paragraph" />
      <!-- author -->
      <InputBox label="Author" v-model="doc.quote.author" />
      <!-- visiblity toggle -->
      <Toggle
        v-model="doc.quote.visible"
        label="Visiblity"
        activeText="Live"
        inactiveText="Hidden"
        width="100px"
      />
    </div>
    <!-- press -->
    <div class="press section">
      <label class="head"> Press: </label>
      <!-- press logo -->
      <UploadImage
        ref="imageUploader_pressLogo"
        :multipleUpload="false"
        label="Set Logo"
        @updated="imageListUpdated($event, 'pressLogo')"
      />
      <!-- image list -->
      <UploadImage
        ref="imageUploader_pressImageList"
        :multipleUpload="true"
        label="Set Press Image List"
        @updated="imageListUpdated($event, 'press')"
      />
      <!-- caption box -->
      <div class="captions">
        <div
          class="caption-box flex center"
          v-for="(caption, index) in doc.press.captions"
          :key="caption.key"
        >
          <!-- heading -->
          <InputBox label="Caption Heading" v-model="caption.heading" />
          <!-- paragraph -->
          <InputBox label="Caption Paragraph" v-model="caption.paragraph" />

          <img
            class="close"
            src="/icons/dark/close.png"
            @click="removeCaption(index)"
          />
        </div>
        <!-- add caption box -->
        <div class="add-new-caption flex center">
          <button class="action" @click="addNewCaptionBox">
            + Add New Caption
          </button>
        </div>
      </div>
      <!-- visiblity toggle -->
      <Toggle
        v-model="doc.press.visible"
        label="Visiblity"
        activeText="Live"
        inactiveText="Hidden"
        width="100px"
      />
    </div>
    <!-- instagram -->
    <div class="instagram section">
      <label class="head"> Instagram: </label>
      <!-- visiblity toggle -->
      <Toggle
        v-model="doc.instagram.visible"
        label="Visiblity"
        activeText="Live"
        inactiveText="Hidden"
        width="100px"
      />
    </div>
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
        {{ editMode ? "Edit" : "Add" }} Homepage
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
import { v4 as uuidv4 } from "uuid";

const baseDocument = () => ({
  _id: "",
  name: "",
  desktopMainSlideshow: {
    slides: [
      // {
      // _id: "",
      // mainImage: false,
      // path: ""
      // }
    ],
    visible: false,
  },
  mainSlideshow: {
    slides: [
      // {
      // _id: "",
      // mainImage: false,
      // path: ""
      // }
    ],
    visible: false,
  },
  mainTextBlock: {
    text1: "",
    text2: "",
    text3: "",
    author: "",
    visible: false,
  },
  collectionBlocks: [
    {
      bounipun_collection: "",
      slideshow: [
        // {
        // _id: "",
        // mainImage: false,
        // path: ""
        // }
      ],
      text1: "",
      text2: "",
      text3: "",
      buttonText: "",
      visible: false,
      key: uuidv4(),
    },
  ],
  productListBlocks: [
    {
      productList: "",
      imageList: [
        // {
        // _id: "",
        // mainImage: false,
        // path: ""
        // }
      ],
      moodImage: "",
      text1: "",
      text2: "",
      buttonText: "",
      visible: false,
      key: uuidv4(),
    },
  ],
  bounipunLab: {
    heading: "",
    paragraph: "",
    image: "",
    buttonText: "",
    visible: false,
  },
  quote: {
    logo: "",
    heading: "",
    paragraph: "",
    author: "",
    visible: false,
  },
  press: {
    logo: "",
    imageList: [
      //     {
      //     path: "",
      //     mainImage: false
      // }
    ],
    captions: [
      {
        heading: "",
        paragraph: "",
        key: uuidv4(),
      },
    ],
    visible: false,
  },
  instagram: {
    text: "",
    visible: false,
  },
  description: "",
  status: false,
});

export default {
  /* close form */
  /* slideshow list updated (x6) */
  /* add unique key to every block */
  /* fetch allCollections  */
  props: {
    model: String,
  },
  data() {
    return {
      editMode: false,
      doc: baseDocument(),
      allCollections: [],
      allProductLists: [],
      loading: false,
      updated: false,
    };
  },
  mounted() {
    this.fetchAllCollections();
    this.fetchAllProductLists();
  },
  methods: {
    /* set image list */
    imageListUpdated(list, property, index) {

      switch (property) {
        /* multiple */
        case "desktopMainSlideshow": {
          let { slides } = this.doc.desktopMainSlideshow;
          this.doc.desktopMainSlideshow.slides = list.map(item => ({...item, link: slides.find(s => s._id === item._id)?.link || ""  }));
          break;
        }
        /* multiple */
        case "mainSlideshow":
          let { slides } = this.doc.mainSlideshow;
          this.doc.mainSlideshow.slides = list.map(item => ({...item, link: slides.find(s => s._id === item._id)?.link || ""  }));
          break;
        /* multiple [indexed] */
        case "collectionBlock":
          this.doc.collectionBlocks[index].slideshow = list;
          break;
        /* multiple [indexed] */
        case "productListBlock":
          this.doc.productListBlocks[index].imageList = list;
          break;
        case "productListBlockMood":
          this.doc.productListBlocks[index].moodImage =
            list.length > 0 ? list[0].path : "";
          break;
        /* single */
        case "bounipunLab":
          this.doc.bounipunLab.image = list.length > 0 ? list[0].path : "";
          break;
        /* single */
        case "quote":
          this.doc.quote.logo = list.length > 0 ? list[0].path : "";
          break;
        /* single */
        case "pressLogo":
          this.doc.press.logo = list.length > 0 ? list[0].path : "";
          break;
        /* multiple */
        case "press":
          this.doc.press.imageList = list;
          /* update captions list */
          break;
      }
    },
    /* add caption box */
    addNewCaptionBox() {
      this.doc.press.captions.push({
        heading: "",
        caption: "",
        key: uuidv4(),
      });
      this.$forceUpdate();
    },
    removeCaption(key) {
      if (this.doc.press.captions.length < 2) return;
      this.doc.press.captions.splice(key, 1);
      this.$forceUpdate();
    },
    async fetchAllCollections() {
      const result = await this.$fetchCollection("collections");
      this.allCollections = result.docs.map(({ _id, name }) => {
        return {
          name,
          value: _id,
        };
      });
      this.allCollections.unshift({
        name: "Select Bounipun Collection",
        value: "",
      });
    },
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
        value: "",
      });
    },
    /* add collection block */
    addCollectionBlock() {
      this.doc.collectionBlocks.push({
        bounipun_collection: "",
        slideshow: [
          {
            _id: "",
            mainImage: false,
            path: "",
          },
        ],
        text1: "",
        text2: "",
        text3: "",
        buttonText: "",
        visible: false,
        key: uuidv4(),
      });
    },
    /* add product list block */
    addProductListBlock() {
      this.doc.productListBlocks.push({
        productList: "",
        imageList: [
          {
            _id: "",
            mainImage: false,
            path: "",
          },
        ],
        moodImage: "",
        text1: "",
        text2: "",
        buttonText: "",
        visible: false,
        key: uuidv4(),
      });
    },
    /* remove collection or product list block */
    removeBlock(property, key) {
      if (this.doc[property].length < 2) return;
      this.doc[property].splice(key, 1);
    },
    closeForm() {
      this.resetForm();
      this.$emit("close");
    },
    resetForm() {
      this.$refs.desktopMainSlideshow.clearFileSelection();
      this.$refs.mainSlideshow.clearFileSelection();
      this.doc = baseDocument();
      console.log('doc was cleared');
    },
    async updateDocument() {
      // return;

      this.loading = true;
      const result = await this.$updateDocument(
        this.model,
        this.doc,
        this.editMode
      );
      this.loading = false;

      if (!result.updated) return;

      this.$emit("updated");
      // this.populateForm(result.doc);
      this.$flash(this);
    },
    populateForm(details) {
      const {
        _id,
        name,
        desktopMainSlideshow,
        mainSlideshow,
        mainTextBlock,
        collectionBlocks,
        productListBlocks,
        bounipunLab,
        quote,
        press,
        instagram,
        description,
        status,
      } = details;
      this.doc = {
        _id,
        name,
        desktopMainSlideshow,
        mainSlideshow,
        mainTextBlock,
        collectionBlocks,
        productListBlocks,
        bounipunLab,
        quote,
        press,
        instagram,
        description,
        status,
      };
      this.editMode = true;
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
  },
};
</script>

<style lang="scss" scoped>
.section {
  margin-top: 10px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
  width: 100%;

  .head {
    background-color: $dark_gray;
    color: white;
    width: 100%;
    display: block;
    font-size: 13px;
    padding: 3px;
    text-align: center;
  }

  .block {
    // box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);

    .block-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      background-color: rgb(195, 195, 195);
      border: 1px solid rgb(207, 207, 207);
      color: white;
      font-size: 11px;
      padding: 1%;
      padding-right: 5%;
      margin-bottom: 10px;

      span {
        // background-color: rgb(65, 152, 149);
        color: $dark_gray;
        padding: 1% 3%;
        margin-right: 10px;
        font-size: 12px;
      }
    }
  }

  .add-block {
    background-color: rgb(24, 105, 24);
    color: white;
    margin: 10px 0;
  }

  &.press {
    .captions {
      .caption-box {
        padding: 0 4px;
        .close {
          width: 20px;
          height: 20px;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          &:hover {
            transform: rotate(40deg);
          }
        }
      }
    }
  }
}
</style>
