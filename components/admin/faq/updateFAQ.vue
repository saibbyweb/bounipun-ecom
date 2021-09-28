<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} FAQ</h2>
    <!-- FAQ ID -->
    <InputBox
      v-if="editMode"
      label="FAQ ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />
    <!-- FAQ name -->
    <InputBox label="FAQ Name" v-model="doc.name" />
    <!-- Description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />

    <!-- questions -->
    <!-- <div class="questions">
        <label class="label"> Questions: </label>
        <div class="question" v-for="(question,index) in doc.questions" :key="question.key">
               <label class="label que"> Question #{{ index + 1 }} </label>
               <InputBox label="Title" v-model="question.title" />
               <TextBox label="Answer" v-model="question.answer" />
               <img class="delete" src="/icons/dark/remove-cart-item.png" @click="removeQuestion(index)" />
        </div>
    </div> -->
    <div class="flex around center" style="width:100%">
   <label class="label"> Questions: </label>
       <!-- drag toggle -->
    <Toggle v-model="dragEnabled" label="Drag" width="90px" activeText="On" inactiveText="Off" />
    </div>
   <br>
    <!-- draggable questions -->
    <Draggable
      v-model="doc.questions"
      ghost-class="ghost"
      @end="onDragEnd"
      :sort="dragEnabled"
      class="questions"
    >
      <transition-group type="transition" name="flip-list">
        <Accordion
          v-for="(question, index) in doc.questions"
          :key="question.key"
          :heading="`#${ index + 1 } - ${question.title}`"
        >
          <div class="question item">
            <!-- <label class="label que"> Question #{{ index + 1 }} </label> -->
            <InputBox label="Title" v-model="question.title" />
            <TextBox label="Answer" v-model="question.answer" />
            <img
              class="delete"
              src="/icons/dark/remove-cart-item.png"
              @click="removeQuestion(index)"
            />
          </div>
        </Accordion>
      </transition-group>
    </Draggable>

    <!-- add new question wrapper -->
    <div class="add-new-question flex center">
      <button class="action" @click="addNewQuestion">Add New Question</button>
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
        {{ editMode ? "Apply Changes" : "Add FAQ" }}
      </button>
      <!-- delete document -->
      <!-- <button
        v-if="editMode"
        @click="deleteDocument"
        class="action delete"
        :disabled="loading"
      >
        Delete -->
      </button>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    model: String
  },
  data() {
    return {
      editMode: false,
      doc: {
        _id: "",
        name: "",
        description: "",
        questions: [
          {
            title: "",
            answer: "",
            key: uuidv4()
          }
        ],
        status: false
      },
      dragEnabled: false,
      loading: false,
      updated: false
    };
  },
  mounted() {},
  methods: {
    onDragEnd(event) {},
    addNewQuestion() {
      this.doc.questions.push({
        title: "",
        answer: "",
        key: uuidv4()
      });
    },
    removeQuestion(index) {
      this.doc.questions.splice(index, 1);
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
      result.doc.questions = result.doc.questions.map(que => ({...que, key : uuidv4()}));
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
      const { _id, name, questions, description, status } = details;
      this.doc = {
        _id,
        name,
        questions,
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
      this.populateForm({
        _id: "",
        name: "",
        questions: [],
        description: "",
        status: false
      });
      this.editMode = false;
    }
  }
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
