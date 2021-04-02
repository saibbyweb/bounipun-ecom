<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Homepage Layout </h2>
    <!-- fabric id -->
    <InputBox v-if="editMode" label="Homepage Layout ID" v-model="doc._id" disabled :internal="true" />
    <!-- color name -->
    <InputBox label="Layout Name" v-model="doc.name" />
    <!-- slideshow images -->
    <UploadImage ref="imageUploader" :multipleUpload="true" label="Set Slideshow Images" @updated="slideshowListUpdated" />
    <!-- product lists -->
    <div class="product-lists">
        <!-- loop through lists -->
        <div v-for="(list, index) in doc.lists" :key="index">
            <!-- product list heading -->
            <InputBox label="List Heading" v-model="list.heading" />
            <!-- tagline -->
            <InputBox label="Tagline" v-model="list.tagline" />
            <!-- products -->
            <SelectBox :options="allProductLists" v-model="list.list" label="Select Product List" />
        </div>
        <!-- add list button -->
        <button class="action" @click="addNewList"> Add New List </button>
    </div>
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />
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
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Homepage Layout </button>
        <!-- delete document -->
        <button v-if="editMode" @click="deleteDocument" class="action delete" :disabled="loading"> Delete </button>
    </div>

</div>
</template>

<script>
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
                slideshow: [],
                lists: [],
                description: "",
                status: false
            },
            allProductLists: [],
            loading: false,
            updated: false
        }
    },
    mounted() {
        this.fetchAllProductLists();
    },
    methods: {
        addNewList() {
            this.doc.lists.push({
                heading: "",
                tagline: "",
                list: ""
            })
        },
        async fetchAllProductLists() {
            const result = await this.$fetchCollection('product_lists');
            this.allProductLists = result.docs.map(({
                _id,
                name
            }) => {
                return {
                    name,
                    value: _id
                }
            });
            this.allProductLists.unshift({
                name: 'Select Product List',
                value: ""
            });
        },
        slideshowListUpdated(list) {
            // console.log(list, index);
            this.doc.slideshow = list;

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
                name,
                description,
                status
            } = details;
            this.doc = {
                _id,
                name,
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
            // this.$refs.imageUploader.clearFileSelection();
            this.populateForm({
                _id: "",
                name: "",
                description: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>
