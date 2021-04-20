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
    <!-- type of product -->
    <SelectBox :options="types" v-model="doc.type" label="Select Product Type" :internal="true" />
    <!-- availablity type -->
    <SelectBox :options="availablityTypes" v-model="doc.availablityType" label="Select Availablity Type" :internal="true" />
    <!-- collections -->
    <SelectBox v-if="!thirdPartyProduct" :options="collections" v-model="doc.bounipun_collection" label="Select Collection" />
    <!-- bounipun style id -->
    <InputBox label="Bounipun Style ID" v-model="doc.styleId" />
    <!-- bounipun print number -->
    <InputBox v-if="underAutograph" label="Bounipun Print No." v-model="doc.printNo" :internal="true" />
    <!-- product name -->
    <InputBox label="Product Name" v-model="doc.name" />
    <!-- alias -->
    <InputBox label="Alias" v-model="doc.alias" />
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" />

    <!-- color source -->
    <!-- <SelectBox v-if="!thirdPartyProduct" :options="colorSources" v-model="doc.colorSource" label="Select Color Source" /> -->

    <!-- alias -->
    <InputBox v-if="!thirdPartyProduct" label="Color Source" v-model="doc.colorSource" :disabled="true" />

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
                <!-- select base color -->
                <SelectBox :options="baseColors" v-model="color.baseColor" label="Base Color" :disabled="bounipunColors" />
            </div>

            <!-- color images -->
            <UploadImage ref="imageUploader" label="Upload Images" @updated="imageListUpdated($event, index)" />
            <!-- remove color -->
            <button class="action delete" style="font-size:9px; position: absolute; bottom:0; right:0;" @click="removeColor(index, true)"> Remove Color </button>
            <!-- disclaimer box -->
            <InputBox label="Disclaimer" v-model="color.disclaimer" />
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
    <InputBox label="Estimated Delivery Time (in weeks)" v-model="doc.etd" type="number" />

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
    <br>
    <div class="center">
    <p v-if="error.status" class="error"> {{ error.msg }} </p>
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
                if (newVal.type === 'third-party') {
                    this.doc.colorSource = 'custom';
                }

                /* if not under escape */
                if (!this.underEscape)
                    this.doc.colorSource = 'custom'
            },
            deep: true
        },
        /* update colors array according to collection selection */
        underEscape(newVal, oldVal) {
            // if(!oldVal && !newVal) {
            //     console.log('do nothin');
            //     this.doc.colorSource = 'custom';
            // }
            if (newVal) {
                this.doc.colorSource = 'bounipun-colors';
                // this.doc.colorSource = '';
                // this.doc.colors = []
            } else if (!newVal) {
                this.doc.colorSource = 'custom';
            }
        }
    },
    computed: {
        bounipunColors() {
            return this.doc.colorSource === 'bounipun-colors';
        },
        colorSources() {
            /* show color sources according to collection selection */
            if (!this.underEscape)
                return this.colorSourceTypes.filter(source => source.value !== 'bounipun-colors')
            else return this.colorSourceTypes.filter(source => source.value !== 'custom')
        },
        selectedVariants() {
            const selectedVariants = this.variants.filter(variant => variant.checked);

            /* update doc.variants accordingly */
            console.log(this.doc.variants.length, selectedVariants.length)

            /* if there's any variant which is not in the selected variants,, remove it */
            let deselectedVariantId = null;
            this.doc.variants.forEach(variant => {
                /* check if its in the selected list */
                let foundVariant = selectedVariants.find(sVariant => sVariant._id === variant._id);

                /* if found */
                if(foundVariant === undefined) {
                    deselectedVariantId = variant._id
                    return;
                }
            });

            /*  remove deselected variant from doc.variants */
            if(deselectedVariantId !== null) {
                let foundIndex = this.doc.variants.findIndex(variant => variant._id === deselectedVariantId);

                if(foundIndex !== -1)
                    this.doc.variants.splice(foundIndex, 1);
            }

            return selectedVariants;
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
        },
        underAutograph() {
            /* TODO: should first fetch the _id of the autograph doc in collections and then compare */
            return this.doc.bounipun_collection === '60523a3648d11650a841b82a' && this.doc.type !== "third-party"
        },
        underEscape() {
            return this.doc.bounipun_collection === '60522ab3be493200150ff835' && this.doc.type !== "third-party"
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
                availablityType: "",
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
                    name: 'Under Bounipun',
                    value: 'under-bounipun'
                },
                {
                    name: 'Third Party',
                    value: 'third-party'
                }
            ],
            availablityTypes: [{
                    name: 'Select Availablity Type',
                    value: ''
                },
                {
                    name: 'Made To Order',
                    value: 'made-to-order'
                },
                {
                    name: 'Ready To Ship',
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
            baseColors: [],
            loading: false,
            updated: false,
            error: {
                status: false,
                msg: ""
            }
        }
    },
    mounted() {
        this.fetchBaseColors();
    },
    methods: {
        async fetchBaseColors() {
            const result = await this.$fetchCollection('base_colors');
            if (!result.fetched || result.docs.length === 0) {
                return;
            }

            /* base colors array */
            this.baseColors = result.docs.map(color => {
                return {
                    name: color.name.toUpperCase(),
                    value: color.name
                }
            });

            this.baseColors.unshift({
                name: "Select Base",
                value: ""
            });

        },
        /* populateVariant */
        populateVariants(variants) {
            console.log(this.$refs.collections, 'collections')
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
            console.log(list, 'image list updated');
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

            console.log(details);

            /* check if variant already exists in the array */
            let foundIndex = this.doc.variants.findIndex(element => element._id === variant._id);

            /* if not found  */
            if (foundIndex === -1)
                this.doc.variants.push(details);
            else
                this.doc.variants[foundIndex] = details;
            
            console.log(foundIndex !== -1)

            this.doc.variants = this.doc.variants.filter(variant => variant.fabrics.length !== 0)

            console.log(this.doc.variants);
        },
        async updateDocument() {
            console.log('PRODUCT TO BE UPDATED!:');
            
            // const variantionsCheck = this.doc.variants.length === this.selectedVariants.length;

            // if(!variantionsCheck) {
            //     this.error.msg = "Please re-verify variants and fabric selection";
            //     this.error.status = true;
            //     return;
            // }

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
                availablityType,
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
                availablityType,
                bounipun_collection,
                colorSource,
                variants,
                colors,
                directPrice,
                etd: etd === null ? "" : etd.toString(),
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
                availablityType: "",
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
