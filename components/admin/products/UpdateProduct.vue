<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Product </h2>
    
    <div class="center">
    <a v-if="editMode" :href="`/products/${doc._id}`" target="_blank"> 
    <span style="background:#333; text-align:center; color:white; font-size: 12px; padding:2px 4px; border-radius:2px;"> Preview Product ➚
    </span>
    </a>
    </div>
    <!-- product id -->
    <InputBox v-if="editMode" label="Product ID" v-model="doc._id" disabled />
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

    <!-- add colors -->
    <div v-show="doc.colorSource !== ''" class="colors" style="width:100%; position:relative;">

        <div style="position:relative;" v-for="(color, index) in doc.colors" :key="index">
            <!-- color selector (if color source is bounipun) -->
            <!-- color name -->
            <InputBox v-if="doc.colorSource === 'custom'" label="New Color Name" v-model="color.name" />
            <!-- color images -->
            <UploadImage ref="imageUploader" label="Upload Images" @updated="imageListUpdated($event, index)" />
            <!-- remove color -->
            <button class="action delete" style="font-size:9px; position: absolute; bottom:0; right:0;" @click="removeColor(index)"> Remove Color </button>

            <!-- disclaimer box -->
            <InputBox v-if="doc.colorSource === 'custom'" label="Disclaimer" v-model="color.disclaimer" />

            <hr width="100%" style="opacity: 0.3" />
        </div>

        <button class="action" style="font-size:9px; position: absolute; bottom: -30px;  right:10px;" @click="addNewColor"> Add Color </button>
    </div>

    <!-- variations (checkboxes) -->
    <c-boxes :options="variants" label="Variants" />

    <!-- fabric selector -->
    <fabric-selector :ref="'fabricSelector'+variant._id" :label="variant.name" v-for="(variant, index) in selectedVariantsWithFabricOptions" :key="index" :variant="variant" @fabricSelectionUpdated="fabricSelectionUpdated" />

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
    watch: {
        selectedVariantsWithFabricOptions(newVal) {
            console.log('changed', newVal);
        }
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
                colors: [],
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
        /* populateVariant */
        populateVariants(variants) {
            console.log(variants);
            variants.forEach(variant => {
                let match = this.variants.find(({
                    _id
                }) => _id === variant._id);
                match.checked = true;
            })
        },
        /* image list updated */
        imageListUpdated(list, index) {
            console.log(list, index);
            this.doc.colors[index].images = list;
        },
        /* add new color */
        addNewColor() {
            this.doc.colors.push({
                _id: null,
                name: "",
                images: [],
                disclaimer: ""
            });
        },
        /* remove color */
        removeColor(key) {
            if (this.doc.colors.length === 1)
                return;
            this.doc.colors.splice(key, 1);
        },
        /* fabric selection */
        fabricSelectionUpdated(variant) {
            let details = {
                _id: variant._id,
                fabrics: variant.fabrics
            };

            /* check if variant already exists in the array */
            let foundIndex = this.doc.variants.findIndex(element => element._id === variant._id);

            /* if not found  */
            if (foundIndex === -1)
                this.doc.variants.push(details);
            else
                this.doc.variants[foundIndex] = details;

            this.doc.variants = this.doc.variants.filter(variant => variant.fabrics.length !== 0)

            console.log(this.doc.variants);
        },
        async updateDocument() {
            console.log(this.doc);
            // return;
            // return;

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
                colorSource,
                variants,
                colors,
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
                colorSource,
                variants,
                colors,
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
                colorSource: "",
                variants: [],
                colors: [],
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>
