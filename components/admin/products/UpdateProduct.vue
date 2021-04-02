<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Product </h2>

    <div class="center">
        <a v-if="editMode" :href="`/products?_id=${doc._id}`" target="_blank">
            <span style="background:#333; text-align:center; color:white; font-size: 12px; padding:2px 4px; border-radius:2px;"> Preview Product ➚
            </span>
        </a>
    </div>
    <!-- product id -->
    <InputBox v-if="editMode" label="Product ID" v-model="doc._id" disabled :internal="true" />
    <!-- bounipun style id -->
    <InputBox label="Bounipun Style ID" v-model="doc.styleId" />
    <!-- bounipun print number -->
    <InputBox label="Bounipun Print No." v-model="doc.printNo" :internal="true" />
    <!-- product name -->
    <InputBox label="Product Name" v-model="doc.name" />
    <!-- alias -->
    <InputBox label="Alias" v-model="doc.alias" />
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" />
    <!-- type of product -->
    <SelectBox :options="types" v-model="doc.type" label="Select Product Type" :internal="true" />
    <!-- collections -->
    <SelectBox v-if="!thirdPartyProduct" :options="collections" v-model="doc.bounipun_collection" label="Select Collection" />
    <!-- color source -->
    <SelectBox v-if="!thirdPartyProduct" :options="colorSourceTypes" v-model="doc.colorSource" label="Select Color Source" />
    <!-- bounipun color picker -->
    <ColorPicker ref="colorPicker" v-show="doc.colorSource === 'bounipun-colors'" @colorAdded="addNewColor" @colorRemoved="colorDeselected" />
    <!-- add colors -->
    <div v-if="doc.colorSource !== ''" class="colors" style="width:100%; position:relative;">
        <div class="color-box" v-for="(color, index) in doc.colors" :key="color.key">
            <!-- color selector (if color source is bounipun) -->
            <div style="display:flex;">
                <!-- color name -->
                <InputBox label="Color Name" v-model="color.name" :disabled="bounipunColors" />
                <!-- color name -->
                <InputBox label="Color Code" v-model="color.code" :disabled="bounipunColors" />
            </div>

            <!-- color images -->
            <UploadImage ref="imageUploader" label="Upload Images" @updated="imageListUpdated($event, index)" />
            <!-- remove color -->
            <button class="action delete" style="font-size:9px; position: absolute; bottom:0; right:0;" @click="removeColor(index, true)"> Remove Color </button>
            <!-- disclaimer box -->
            <InputBox v-if="doc.colorSource === 'custom'" label="Disclaimer" v-model="color.disclaimer" />
            <!-- <hr width="100%" style="opacity: 0.3" /> -->
        </div>
        <button v-if="doc.colorSource !== 'bounipun-colors'" class="action" style="font-size:9px; position: absolute; bottom: -30px;  right:10px;" @click="addNewColor({_id: null, name:'', code: ''})"> Add Color </button>
    </div>

    <!-- variations (checkboxes) -->
    <c-boxes v-if="!thirdPartyProduct" :options="variants" label="Variants" />

    <!-- fabric selector -->
    <div v-if="!thirdPartyProduct">
        <fabric-selector :ref="'fabricSelector'+variant._id" :label="variant.name" v-for="(variant) in selectedVariantsWithFabricOptions" :key="variant._id" :variant="variant" @fabricSelectionUpdated="fabricSelectionUpdated" />
    </div>

    <!-- direct price -->
    <InputBox v-if="thirdPartyProduct" label="Direct Price" v-model="doc.directPrice" />

    <!-- estimated delivery time -->
    <InputBox label="Estimated Delivery Time" v-model="doc.etd" />

    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />

    <!-- update button -->
    <div class="center-space">
        <!-- loading bar -->
        <img v-if="loading" class="loading" src="/loading.gif" />
        <!-- action complete gif -->
        <img v-if="updated" class="action-complete" src="/complete.gif" />
        <!-- update document -->
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Apply Changes" : "Add Product" }} </button>
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
        collections: Array,
        variants: Array,
        fabrics: Array
    },
    watch: {
        selectedVariantsWithFabricOptions(newVal) {
            // console.log('changed', newVal);
        },
        doc: {
            handler(newVal) {
                if(newVal.type === 'third-party') {
                    this.doc.colorSource = 'custom';
                }
            },
            deep: true
        }
    },
    computed: {
        bounipunColors() {
            return this.doc.colorSource === 'bounipun-colors';
        },
        selectedVariants() {
            return this.variants.filter(variant => variant.checked)
        },
        selectedVariantsWithFabricOptions() {
            return this.selectedVariants.map(variant => {
                return {
                    _id: variant._id,
                    name: variant.name,
                    code: variant.code,
                    fabrics: this.fabrics.filter(fabric => fabric.code.startsWith(variant.code)),
                    // key: uuidv4()
                    // fabrics: this.fabrics
                }
            })
        },
        thirdPartyProduct() {
            return this.doc.type === 'third-party'
        }
    },
    data() {
        return {
            editMode: false,
            doc: {
                _id: "",
                styleId: "",
                printNo: "",
                name: "",
                alias: "",
                slug: "",
                description: "",
                type: "",
                bounipun_collection: null,
                /* new types */
                colorSource: "",
                variants: [],
                colors: [],
                directPrice: "",
                etd: "",
                status: false,
            },
            types: [{
                    name: 'Select Type',
                    value: null
                },
                {
                    name: 'Made to Order',
                    value: 'made-to-order'
                },
                {
                    name: 'Ready to Ship',
                    value: 'ready-to-ship'
                },
                {
                    name: 'Third-Party',
                    value: 'third-party'
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
            // console.log(variants);

            variants.forEach(variant => {
                let match = this.variants.find(({
                    _id
                }) => _id === variant._id);
                match.checked = true;
            })
        },
        /* image list updated */
        imageListUpdated(list, index) {
            // console.log(list, index);
            this.doc.colors[index].images = list;
        },
        /* add new color */
        addNewColor(color) {
            // console.log(color);
            this.doc.colors.push({
                _id: color._id,
                name: color.name,
                code: color.code,
                images: [],
                disclaimer: "",
                key: uuidv4()
            });
        },
        colorDeselected(color) {
            /* find key of the deselected color */
            const foundIndex = this.doc.colors.findIndex(col => col._id === color._id);
            console.log(color, foundIndex, 'DESELECTED');
            /* remove color */
            this.removeColor(foundIndex);
        },
        /* remove color */
        removeColor(key, direct = false) {
            // if (this.doc.colors.length === 1)
            //     return;
            const tobeRemoved = this.doc.colors[key];
            this.doc.colors.splice(key, 1);
            if (this.bounipunColors && direct)
                this.$refs.colorPicker.deselectColor(tobeRemoved);
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

            // console.log(this.doc.variants);
        },
        async updateDocument() {
            console.log('PRODUCT TO BE UPDATED!:');
            console.log(this.doc);
            // return;
            // return;

            this.loading = true;
            const result = await this.$updateDocument(this.model, this.doc, this.editMode);
            this.loading = false;

            if (!result.updated)
                return;

            this.$emit('updated');
            // this.populateForm(result.doc);
            this.doc._id = result.doc._id;
            this.editMode = true;
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
                printNo,
                name,
                alias,
                slug,
                description,
                type,
                bounipun_collection,
                colorSource,
                variants,
                colors,
                directPrice,
                etd,
                status
            } = details;
            this.doc = {
                _id,
                styleId,
                printNo,
                name,
                alias,
                slug,
                description,
                type,
                bounipun_collection,
                colorSource,
                variants,
                colors,
                directPrice,
                etd,
                status
            };
            this.editMode = true;
        },
        closeForm() {
            this.resetForm();
            this.$emit('resetVariants');
            this.$emit('close');
        },
        resetForm() {
            this.populateForm({
                _id: "",
                styleId: "",
                printNo: "",
                name: "",
                alias: "",
                slug: "",
                description: "",
                type: "",
                bounipun_collection: null,
                colorSource: "",
                variants: [],
                colors: [],
                directPrice: "",
                etd: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.colors {
    .color-box {
        position: relative;
        margin: 14px 0px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: 1px 1px 15px #e6e6e6;
        overflow: hidden;
    }
}
</style>
