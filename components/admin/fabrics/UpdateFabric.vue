<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Fabric </h2>
    <!-- fabric id -->
    <InputBox v-if="editMode" label="fabric ID" v-model="doc._id" disbaled :internal="true" />
    <!-- code -->
    <InputBox label="Code" v-model="doc.code" :internal="true" />
    <!-- fabric name -->
    <InputBox label="fabric Name" v-model="doc.name" />
    <!-- info name -->
    <InputBox label="Info #1" v-model="doc.info1" />
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" />
    <!-- write up -->
    <TextBox v-model="doc.writeUp" label="Write Up" />
    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />
    <!-- update button -->
    <div class="center-space">
        <!-- loading bar -->
        <img v-if="loading" class="loading" src="/loading.gif" />
        <!-- action complete gif -->
        <img v-if="updated" class="action-complete" src="/complete.gif" />
        <!-- update document -->
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Fabric </button>
        <!-- delete document -->
        <button v-if="editMode" @click="deleteDocument" class="action delete" :disabled="loading"> Delete </button>
    </div>

</div>
</template>

<script>
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
                code: "",
                info1: "",
                description: "",
                writeUp: "",
                status: false
            },
            loading: false,
            updated: false
        }
    },
    methods: {
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
                code,
                info1,
                description,
                writeUp,
                status
            } = details;

            this.doc = {
                _id,
                name,
                code,
                info1,
                description,
                writeUp,
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
                code: "",
                info1: "",
                description: "",
                writeUp: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>
