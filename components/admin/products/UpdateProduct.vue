<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Product </h2>
    <!-- product id -->
    <InputBox v-if="editMode" label="Product ID" v-model="doc._id" />
    <!-- bounipun style id -->
    <InputBox label="Bounipun Style ID" v-model="doc.styleId" />
    <!-- product name -->
    <InputBox label="Product Name" v-model="doc.name" />
    <!-- slug -->
    <InputBox label="Product Name" v-model="doc.slug" />
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" />
    <!-- type of product -->
    <SelectBox :options="types" v-model="doc.type" label="Select Collection" />
    <!-- collections -->
    <SelectBox :options="collections" v-model="doc.bounipun_collection" label="Select Collection" />

    <!-- set color image -->
    <!-- <UploadImage ref="imageUploader" :multipleUpload="false" label="Set Color Image" @updated="imageListUpdated" /> -->
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
                styleId: "",
                name: "",
                slug: "",
                description: "",
                type: "",
                bounipun_collection: "",
                status: false
            },
            types: [
                { name: 'Select Type', value: ''},
                { name: 'Made to Order', value: 'made-to-order'},
                { name: 'Ready to Ship', value: 'ready-to-ship'}
            ],
            loading: false,
            updated: false
        }
    },
    methods: {
        imageListUpdated(list) {
            this.doc.image = list.length > 0 ? list[0].path : "";
        },
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
                image,
                category,
                description,
                status
            } = details;
            this.doc = {
                _id,
                code,
                name,
                image,
                category,
                description,
                status
            };
            this.editMode = true;
            // this.$refs.imageUploader.assignImages();
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
                image: "",
                category: "",
                description: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>
