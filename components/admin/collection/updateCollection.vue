<template>
<div class="update-collection">
    <!-- abort update process -->
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add' }} Collection </h2>
    <!-- collection id -->
    <InputBox v-if="editMode" label="Collection ID" v-model="collection._id" />
    <!-- collection name -->
    <InputBox v-model="collection.name" label="Collection Name" />
    <!-- slug -->
    <InputBox v-model="collection.slug" label="Slug" />
    <!-- description -->
    <TextBox v-model="collection.description" label="Description" />
    <!-- publish toggle -->
    <Toggle v-model="collection.status" label="Status" />
    <!-- update button -->
    <div class="center-space">
        <!-- loading bar -->
        <img v-if="loading" class="loading" src="/loading.gif" />
        <!-- action complete gif -->
        <img v-if="updated" class="action-complete" src="/complete.gif" />
        <!-- update document -->
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Collection </button>
        <!-- delete document -->
        <button v-if="editMode" @click="deleteDocument" class="action delete" :disabled="loading"> Delete </button>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            model: 'collections',
            editMode: false,
            collection: {
                id: "",
                name: "",
                slug: "",
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
            const result = await this.$updateDocument(this.model, this.collection, this.editMode);
            this.loading = false;

            if (!result.updated)
                return;

            this.$emit('updated');
            this.populateForm(result.doc);
            this.$flash(this);

        },
        async deleteDocument() {
            this.loading = true;
            const result = await this.$deleteDocument(this.model, this.collection._id);
            this.loading = false;

            if(!result.deleted)
                return;
            
            this.$emit('updated');
            this.resetForm();
            this.$flash(this);
        },
        populateForm(details) {
            const {
                _id,
                name,
                slug,
                description,
                status
            } = details;

            this.collection = {
                _id,
                name,
                slug,
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
                slug: "",
                description: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>
