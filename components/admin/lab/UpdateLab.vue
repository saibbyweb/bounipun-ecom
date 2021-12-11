<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">
      {{ editMode ? "Update" : "Add New" }} Bounipun Lab Layout
    </h2>
    <!-- FAQ ID -->
    <InputBox
      v-if="editMode"
      label="Lab Layout ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />
    <!-- Layout name -->
    <InputBox label="Layout Name" v-model="doc.name" />
    <!-- Page title -->
    <InputBox label="Page Title" v-model="doc.title" />
    <!-- Page tagline -->
    <InputBox label="Page Tagline" v-model="doc.tagline" />
    <!-- set hero image -->
    <UploadImage
      :multiple="false"
      ref="imageUploader_heroImage"
      label="Set Hero Image"
      @updated="imageListUpdated($event, 'heroImage')"
    />

    <!-- loop through all collection blocks -->
    <div class="blocks">
      <label class="label"> Hero Blocks: </label>
      <br />
      <br />
      <Accordion
        v-for="(heroBlock, index) in doc.heroBlocks"
        :key="heroBlock.key"
        :heading="`#${index + 1} - ${heroBlock.name}`"
      >
        <div class="block">
          <img
            class="delete"
            src="/icons/dark/remove-cart-item.png"
            @click="removeBlock('heroBlocks', index)"
          />
          <!-- hero block name -->
          <InputBox label="Hero Block Name" v-model="heroBlock.name" />
          <!-- hero block paragraph -->
          <TextBox label="Hero Block Paragraph" v-model="heroBlock.paragraph" />
          <!-- visibility toggle -->
          <Toggle v-model="heroBlock.visible" label="Visibility" />
        </div>
      </Accordion>
      <!-- add new hero block wrapper -->
      <div class="flex center">
        <button class="action" @click="addNewBlock('heroBlocks')">
          Add New Hero Block
        </button>
      </div>
    </div>

    <!-- Description -->
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

/* base doc */
const baseDoc = () => ({
  _id: "",
  name: "",
  title: "",
  tagline: "",
  heroImage:"",
  heroBlocks: [
    {
      name: "",
      paragraph: "",
      visible: false,
      key: uuidv4(),
    },
  ],
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
      dragEnabled: false,
      loading: false,
      updated: false,
    };
  },
  methods: {
    onDragEnd(event) {},
    imageListUpdated(list, property) {
      switch(property) {
        case 'heroImage':
          this.doc.heroImage = list.length > 0 ? list[0].path : "";
          break;
      }
    },
    addNewBlock(type) {
      switch (type) {
        case "heroBlocks":
          this.doc.heroBlocks.push({
            name: "",
            paragraph: "",
            status: false,
            key: uuidv4(),
          });
          break;
      }
    },
    removeBlock(property, index) {
      if (this.doc[property].length <= 1) return;
      this.doc[property].splice(index, 1);
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
      result.doc.heroBlocks = result.doc.heroBlocks.map((block) => ({
        ...block,
        key: uuidv4(),
      }));
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
      this.editMode = false;
    },
  },
};
</script>

<style lang="scss" scoped>
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
      width: 6%;
    }
  }

  .label {
    font-family: $font_2_bold;
    font-size: 14px;
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
