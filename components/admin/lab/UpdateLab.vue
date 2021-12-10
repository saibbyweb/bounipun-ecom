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
    <InputBox label="Page Title" v-model="doc.tagline" />
    <!-- loop through all collection blocks -->
    <div class="blocks">
      <div class="block" v-for="heroBlock in doc.heroBlocks" :key="heroBlock.key">
        
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
  taglin: "",
  heroBlocks: [{name: "", paragraph: "", visible: false, key: uuidv4()}],
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
    }
  },
  methods: {
    onDragEnd(event) {},
    addNewHeroBlock() {
      this.doc.heroBlocks.push({
        name: "",
        paragraph: "",
        status: false,
        key: uuidv4(),
      });
    },
    removeBlock(property, index) {
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
      for(const key of keys) {
        if(details[key] !== undefined)
          this.doc[key] = details[key];
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
  font-family: $font_2_bold;
  color: $gray;
  text-transform: uppercase;
  font-size: 10px;
  padding: 2%;
  margin-left: 5px;
  font-weight: 900;
  &.que {
    font-size: 13px;
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
