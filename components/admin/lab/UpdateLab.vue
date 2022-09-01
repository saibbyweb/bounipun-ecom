<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">
      {{ editMode ? "Update" : "Add New" }} Bounipun Lab Layout
    </h2>

    <div class="flex">
      <!-- FAQ ID -->
      <InputBox
        v-if="editMode"
        label="Lab Layout ID"
        v-model="doc._id"
        disabled
        :internal="true"
      />
      <!-- Layout name -->
      <InputBox :internal="true" label="Layout Name" v-model="doc.name" />
      <!-- Page title -->
      <InputBox label="Page Title" v-model="doc.title" />
    </div>
    <!-- Page tagline -->
    <InputBox label="Page Tagline" v-model="doc.tagline" />

    <div class="flex section">
      <!-- set hero image (desktop) -->
      <UploadImageV2
        :multipleUpload="false"
        label="Set Hero Image (Desktop) - V2"
        v-model="doc.heroImage"
      />

      <!-- set hero image (mobile) -->
      <UploadImageV2
        :multipleUpload="false"
        label="Set Hero Image (Mobile) - V2"
        v-model="doc.heroImageMobile"
      />
    </div>

    <!-- loop through all blocks -->
    <div class="blocks section">
      <p class="title">Hero Blocks:</p>
      <br />
      <br />

      <!-- draggable list -->
      <Draggable
        v-model="doc.heroBlocks"
        ghost-class="ghost"
        :sort="true"
        class="items"
      >
        <transition-group type="transition" name="flip-list">
          <Accordion
            v-for="(heroBlock, index) in doc.heroBlocks"
            :key="heroBlock.key"
            :heading="`#${index + 1} - ${heroBlock.name}`"
          >
            <div class="block section">
              <img
                class="delete"
                src="/icons/dark/remove-cart-item.png"
                @click="removeBlock('heroBlocks', index)"
              />

              <div class="flex">
                <!-- hero block name -->
                <InputBox
                  label="Hero Block Name"
                  v-model="heroBlock.name"
                  @input="setAlias($event, heroBlock)"
                />
                <!-- hero name alias -->
                <InputBox
                  label="Alias"
                  v-model="heroBlock.alias"
                  :disabled="true"
                />

                <!-- visibility toggle -->
                <Toggle v-model="heroBlock.visible" label="Visibility" />
              </div>

              <!-- hero block paragraph -->
              <TextBox
                slim
                label="Hero Block Paragraph"
                v-model="heroBlock.paragraph"
              />
            </div>
          </Accordion>
        </transition-group>
      </Draggable>

      <!-- add new hero block wrapper -->
      <div class="flex center">
        <button class="action" @click="addNewBlock('heroBlocks')">
          + Add New Hero Block
        </button>
      </div>
    </div>

    <!-- loop through all heroBlocks (details) -->
    <!-- TODO: variants will have a variant detail block (one image, one text title and one paragraph) -->
    <!-- TODO: colors will have a section with available colour categories, a colour selector, for each colour i need to attach an image and paragraph -->
    <!-- TODO: fabrics: for each  -->

    <div
      class="hero-block-details block section"
      v-if="Object.keys(doc.heroBlockDetails).length > 0"
    >
      <p class="title">Hero Blocks Details:</p>
      <br />
      <br />

      <Accordion
        :ref="heroBlock.key"
        v-for="heroBlock in doc.heroBlocks"
        :key="heroBlock.key"
        :heading="`Details for: ${heroBlock.name}`"
      >
        <!-- decide which component to render depending on alias -->
        <DecideLabBlockDetail
          @input="setValues($event, doc.heroBlockDetails[heroBlock.key])"
          :alias="heroBlock.alias"
          :remover="removeDetailBlock"
          :blockKey="heroBlock.key"
          :blockDetails="doc.heroBlockDetails[heroBlock.key]"
          :colorCategories="colorCategories"
        />
        <br />
        <!-- add new hero block wrapper -->
        <div class="flex center">
          <button
            class="action"
            @click="addNewDetailBlock(heroBlock.key, heroBlock.alias)"
          >
            + Add New {{ heroBlock.name }} Block
          </button>
        </div>
      </Accordion>
    </div>

    <!-- Description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />

    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />
    <!-- update button -->
    <div class="center-space" style="width: 70%">
      <!-- loading bar -->
      <img v-if="loading" class="loading" src="/loading.gif" />
      <!-- action complete gif -->
      <img v-if="updated" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument" class="action" :disabled="loading">
        {{ editMode ? "Apply Changes" : "Add New Layout" }}
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
import slugify from "slugify";

/* base doc */
const baseDoc = () => {
  const key = uuidv4();

  return {
    _id: "",
    name: "",
    title: "",
    tagline: "",
    heroImage: "",
    heroImageMobile: "",
    heroBlocks: [],
    heroBlockDetails: {},
    description: "",
    status: false,
  };
};

/* base variant block detail */
const baseVariantBlock = (length) => {
  const key = uuidv4();
  return {
    name: "Variant -" + length,
    mainImage: "",
    paragraph: "",
    key,
  };
};

/* base color block detail */
const baseColorBlock = (length) => {
  const key = uuidv4();
  return {
    name: "Color -" + length,
    mainImage: "",
    paragraph: "",
    key,
    colorImage: "",
    category: "",
  };
};

/* base fabric block detail */
const baseFabricBlock = (length) => {
  const key = uuidv4();
  return {
    name: "Fabric -" + length,
    mainImage: "",
    paragraph: "",
    key,
    subImage1: "",
    subImage2: "",
    subHeading1: "",
    subParagraph1: "",
    subHeading2: "",
    subParagraph2: "",
    subHeading3: "",
    subParagraph3: "",
  };
};

export default {
  props: {
    model: String,
  },
  data() {
    return {
      editMode: false,
      doc: baseDoc(),
      colorCategories: [],
      dragEnabled: false,
      loading: false,
      updated: false,
    };
  },
  mounted() {
    this.fetchColorCategories();
  },
  methods: {
    setAlias(value, heroBlock) {
      heroBlock.alias = slugify(value.toLowerCase());
    },
    newKey() {
      return uuidv4();
    },
    async fetchColorCategories() {
      const result = await this.$fetchCollection("color_categories");
      this.colorCategories = result.docs.map(({ name }) => {
        return {
          name,
          value: name,
        };
      });
    },
    setValues({ payload, index }, blockDetails) {
      blockDetails[index] = payload;
    },
    addNewBlock(type) {
      switch (type) {
        case "heroBlocks":
          const key = uuidv4();
          this.doc.heroBlocks.push({
            name: "",
            alias: "",
            paragraph: "",
            status: false,
            key,
          });

          /* create an object for block detail */
          // this.doc.heroBlockDetails[key] = [];
          this.$set(this.doc.heroBlockDetails, key, []);
          break;
      }
      this.$forceUpdate();
    },
    addNewDetailBlock(blockKey, alias) {
      // alert(alias)
      let blockDetails = this.doc.heroBlockDetails[blockKey];
      /* if detail block not present */
      if (!blockDetails) blockDetails = this.doc.heroBlockDetails[blockKey];

      // this.$set(this.items, payload.index, payload.value);
      const refreshParentAccordion = () => {
        const parentAccordion = this.$refs[blockKey];

        if (parentAccordion[0]) {
          parentAccordion[0].toggle();
          setTimeout(() => parentAccordion[0].toggle(), 70);
        }
      };

      switch (alias) {
        case "variant":
          blockDetails.push(baseVariantBlock(blockDetails.length));
          break;
        case "color":
          blockDetails.push(baseColorBlock(blockDetails.length));
          break;
        case "fabric":
          blockDetails.push(baseFabricBlock(blockDetails.length));
          break;
      }

      refreshParentAccordion();

      this.$forceUpdate();
    },
    removeDetailBlock(blockKey, index) {
      // alert(blockKey)
      this.doc.heroBlockDetails[blockKey].splice(index, 1);
    },
    removeBlock(property, index) {
      let deletedItems = [];
      if (this.doc[property].length <= 1) return;
      deletedItems = this.doc[property].splice(index, 1);

      const removedBlock = deletedItems[0];
      delete this.doc.heroBlockDetails[removedBlock.key];
      // TODO: remove corresponding heroBlockDetail
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
      console.log(details);
      console.log("details to be populated");

      const keys = Object.keys(details);
      for (const key of keys) {
        if (details[key] !== undefined) this.doc[key] = details[key];
      }
      this.editMode = true;
    },
    closeForm() {
      this.resetForm();
      this.$emit("close");
    },
    resetForm() {
      this.populateForm(baseDoc());
      // this.$refs.imageUploader_heroImage.clearFileSelection();
      // this.$refs.imageUploader_heroImageMobile.clearFileSelection();
      this.editMode = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 22px;
  font-family: $font_1_bold;
  color: rgb(76, 75, 78);
}

.item-drag {
  opacity: 0;
}

.flip-list-move {
  transition: all 0.5s ease-in-out;
}

.ghost {
  opacity: 0;
}

.section {
  border-color: rgba(135, 131, 131, 0.381) !important;
  /* border-style: dotted; */
  position: relative;
  margin: 10px;
  padding: 5px 5px 30px 5px;
  border-radius: 5px;
  overflow: hidden;
}

.label {
  &.que {
    font-size: 13px;
  }
}

.blocks {
  padding: 2%;
  border: 1px solid #efefef;

  .block {
    border: 2px dotted #efefef;
    position: relative;

    .delete {
      position: absolute;
      right: 5px;
      top: 5px;
      width: 3%;
      z-index: 1;
    }
  }

  .label {
    font-family: $font_2_bold;
    font-size: 14px;
  }
}

.hero-block-details {
  padding: 2%;
  border: 1px solid black;
  .hero-block-detail {
    border: 1px dotted #efefef;
    box-sizing: border-box;
  }
}

.questions {
  .question {
    border: 2px dashed #efefef;
    position: relative;

    .delete {
      position: absolute;
      top: 3px;
      right: 3px;
      width: 25px;
      cursor: pointer;
    }
  }

  margin-bottom: 10px;
}

.add-new-question {
  padding-bottom: 10px;
}
</style>
