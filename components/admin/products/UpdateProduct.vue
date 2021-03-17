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
    <InputBox label="Slug" v-model="doc.slug" />
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" />
    <!-- type of product -->
    <SelectBox :options="types" v-model="doc.type" label="Select Collection" />
    <!-- collections -->
    <SelectBox :options="collections" v-model="doc.bounipun_collection" label="Select Collection" />

    <!-- color source -->
    <SelectBox :options="colorSourceTypes" v-model="doc.colorSource" label="Select Color Source" />

    <!-- variations (checkboxes) -->
    <c-boxes :options="variants" label="Variants" />

    <!-- <fabric-selector :label="variation.name" v-for="(variation, index) in selectedVariants" :key="index" :options="fabricOptions" /> -->

    <!-- <fabric-selector :fabrics="fabrics" /> -->

    <fabric-selector :label="variant.name" v-for="(variant, index) in selectedVariantsWithFabricOptions" :key="index" :variant="variant" @fabricSelectionUpdated="fabricSelectionUpdated" />

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
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Product </button>
        <!-- delete document -->
        <button v-if="editMode" @click="deleteDocument" class="action delete" :disabled="loading"> Delete </button>
    </div>

</div>
</template>

<script>
export default {
    props: {
        model: String,
        collections: Array,
        variants: Array,
        fabrics: Array
    },
    computed: {
        selectedVariants() {
            return this.variants.filter(variant => variant.checked)
        },
        selectedVariantsWithFabricOptions() {
            return this.selectedVariants.map(variant => {
                return {
                    _id: variant._id,
                    name: variant.name,
                    fabrics: this.fabrics
                }
            })
        }
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
                /* new types */
                colorSource: "",
                variants: [],
                status: false
            },
            types: [{
                    name: 'Select Type',
                    value: ''
                },
                {
                    name: 'Made to Order',
                    value: 'made-to-order'
                },
                {
                    name: 'Ready to Ship',
                    value: 'ready-to-ship'
                }
            ],
            colorSourceTypes: [{
                    name: 'Select Source',
                    value: ''
                },
                {
                    name: 'Bounipun Colors',
                    value: 'bounipun-colors'
                },
                {
                    name: 'Custom',
                    value: 'custom'
                },
            ],
            loading: false,
            updated: false
        }
    },
    methods: {
        /* fabric selection */
        fabricSelectionUpdated(variant) {
            let details = {
                _id: variant._id,
                fabrics: variant.fabrics
            };

            /* check if variant already exists in the array */
            let foundIndex = this.doc.variants.findIndex(element => element._id === variant._id);
            
            /* if not found  */
            if(foundIndex === -1)
                this.doc.variants.push(details);
            else
                this.doc.variants[foundIndex] = details;
            
            this.doc.variants = this.doc.variants.filter(variant => variant.fabrics.length !== 0)

            console.log(this.doc.variants);
        },
        imageListUpdated(list) {
            this.doc.image = list.length > 0 ? list[0].path : "";
        },
        async updateDocument() {
            console.log(this.doc);
            // return;
            return;

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
                styleId,
                name,
                slug,
                description,
                type,
                bounipun_collection,
                status
            } = details;
            this.doc = {
                _id,
                styleId,
                name,
                slug,
                description,
                type,
                bounipun_collection,
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
                styleId: "",
                name: "",
                slug: "",
                description: "",
                type: "",
                bounipun_collection: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>
