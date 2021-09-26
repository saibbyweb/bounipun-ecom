<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} FAQ </h2>
    <!-- FAQ ID -->
    <InputBox v-if="editMode" label="FAQ ID" v-model="doc._id" disabled :internal="true" />
    <!-- FAQ name -->
    <InputBox label="FAQ Name" v-model="doc.name" />
    <!-- Description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />
    
    <!-- questions -->
    <div class="questions">
        <label class="label"> Questions: </label>
        <div class="question" v-for="(question,index) in doc.questions" :key="question.key">
               <label class="label que"> Question #{{ index }} </label>
               <InputBox label="Title" v-model="question.title" />
               <TextBox label="Answer" v-model="question.answer" />
               <!-- delete icon -->
               <img class="delete" src="/icons/dark/remove-cart-item.png" @click="removeQuestion(index)" />
        </div>
    </div>

    <!-- add new question wrapper -->
    <div class="add-new-question flex center">
        <button class="action" @click="addNewQuestion"> Add New Question </button>
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
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} FAQ </button>
        <!-- delete document -->
        <button v-if="editMode" @click="deleteDocument" class="action delete" :disabled="loading"> Delete </button>
    </div>
</div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
    props: {
        model: String,
    },
    data() {
        return {
            editMode: false,
            doc: {
                _id: "",
                name: "",
                description: "",
                questions: [{
                    title: '',
                    answer: ''
                }],
                status: false
            },
            allProductLists: [],
            loading: false,
            updated: false
        }
    },
    mounted() {
    
    },
    methods: {
        addNewQuestion() {
            this.doc.questions.push({
                title: '',
                answer: '',
                key: uuidv4()
            })
        },
        removeQuestion(index) {
            this.doc.questions.splice(index,1);
        },
        async updateDocument() {

            this.loading = true;
            const result = await this.$updateDocument(this.model, this.doc, this.editMode);
            this.loading = false;

            if (!result.updated)
                return;

            this.$emit('updated');
            this.populateForm(result.doc);
            this.$flash(this);
        },
        async deleteDocument() {
            this.loading = true;
            const result = await this.$deleteDocument(this.model, this.doc._id);
            this.loading = false;

            if (!result.deleted)
                return;

            this.$emit('updated');
            this.resetForm();
            this.$flash(this);
        },
        populateForm(details) {
            const {
                _id,
                name,
                list,
                discountPercentage,
                description,
                status
            } = details;
            this.doc = {
                _id,
                name,
                list,
                discountPercentage: discountPercentage.toString(),
                description,
                status
            };
            this.editMode = true;
        },
        closeForm() {
            this.resetForm();
            this.$emit('close');
        },
        resetForm() {
            this.populateForm({
                _id: "",
                name: "",
                list: "",
                discountPercentage: "",
                description: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.section {
    position: relative;
    ;
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
            top:3px;
            right:3px;
            width: 25px;
        }
    }
    margin-bottom: 10px;
}

.add-new-question {
    padding-bottom: 10px;
}

</style>
