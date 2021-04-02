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
    
    <!-- product sections -->
    <div class="product-sections">
        <label class="label"> Set Product Sections: </label>
        <!-- loop through product sections -->
        <div class="section shadow" v-for="(section, index) in doc.productSections" :key="index">
            <!-- heading -->
            <InputBox label="Heading" v-model="section.heading" />
            <!-- tagline -->
            <InputBox label="Tagline" v-model="section.tagline" />
            <!-- product list -->
            <SelectBox :options="allProductLists" v-model="section.list" label="Select Product List" />
            <!-- remove product section -->
            <button class="action delete" style="font-size:9px; position: absolute; bottom:0; right:0;" @click="removeProductSection(index)"> Remove Product Section </button>
        </div>
        <!-- add product section button -->
        <div class="center">
            <button class="shadow add-section" @click="addNewProductSection"> + Add Product Section </button>
        </div>
    </div>

    <!-- alternate sections -->
    <div class="alternate-sections">
         <label class="label"> Set Alternate Sections: </label>
         <!-- loop through alternate sections -->
         <div class="section shadow" v-for="(section, index) in doc.alternateSections" :key="section.key">
             <!-- heading -->
             <InputBox label="Heading" v-model="section.heading" />
             <!-- paragraph -->
             <TextBox label="paragraph" v-model="section.paragraph" />
             <!-- section image -->
            <UploadImage ref="alternateImageUploader" :multipleUpload="false" label="Set Background Image" @updated="alternateImageListUpdated($event, index)" />

             <!-- remove product section -->
            <button class="action delete" style="font-size:9px; position: absolute; bottom:0; right:0;" @click="removeAlternateSection(index)"> Remove Alternate Section </button>

         </div>

        <!-- add alternate section button -->
        <div class="center">
            <button class="shadow add-section" @click="addNewAlternateSection"> + Add Alternate Section </button>
        </div>
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
import {
    v4 as uuidv4
} from "uuid";

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
                productSections: [],
                alternateSections: [],
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
        alternateImageListUpdated(list, index) {
            this.doc.alternateSections[index].image = list.length > 0 ? list[0].path : ""
        },
        removeProductSection(key) {
            this.doc.productSections.splice(key, 1);
        },
        addNewProductSection() {
            this.doc.productSections.push({
                heading: "",
                tagline: "",
                list: null
            })
        },
        addNewAlternateSection() {
            this.doc.alternateSections.push({
                heading: "",
                paragraph: "",
                image: "",
                key: uuidv4()
            })
        },
        removeAlternateSection(key) {
            this.doc.alternateSections.splice(key, 1);
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
                value: null
            });
        },
        slideshowListUpdated(list) {
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
                slideshow,
                productSections,
                alternateSections,
                description,
                status
            } = details;
            this.doc = {
                _id,
                name,
                slideshow,
                productSections,
                alternateSections,
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
                slideshow: [],
                productSections: [],
                alternateSections: [],
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
}

.add-section {
    background-color: rgb(132, 178, 132);
    color: white;
    font-size: 11px;
}
</style>
