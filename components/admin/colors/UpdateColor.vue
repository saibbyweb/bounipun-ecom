<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Color </h2>

    <!-- fabric id -->
    <InputBox v-if="editMode" label="Color ID" v-model="doc._id" />
    <!-- bounipun color code -->
    <InputBox label="Bounipun Color Code" v-model="doc.code" />
    <!-- color name -->
    <InputBox label="Color Name" v-model="doc.name" />
    <!-- category -->
    <SelectBox :options="colorCategories" v-model="doc.category" label="Type of Category" />
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" />
    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />

    <!-- update button -->
    <div class="center-space">
        <!-- loading bar -->
        <img v-if="loading" class="loading" src="/loading.gif" />
        <!-- action complete gif -->
        <img v-if="updated" class="action-complete" src="/complete.gif" />
        <!-- update document -->
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Color </button>
        <!-- delete document -->
        <button v-if="editMode" @click="deleteDocument" class="action delete" :disabled="loading"> Delete </button>
    </div>

</div>
</template>

<script>
export default {
    props: {
        model: String,
        colorCategories: Array
    },
    data() {
        return {
            editMode: false,
            doc: {
                _id: "",
                code: "",
                name: "",
                category: "",
                description: "",
                status: false
            },
            loading: false,
            updated: false
        }
    },
    methods: {
        async updateDocument(model, details, editMode) {
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
                code,
                name,
                category,
                description,
                status
            } = details;
            this.doc = {
                _id,
                code,
                name,
                category,
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
                code: "",
                name: "",
                category: "",
                description: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>
