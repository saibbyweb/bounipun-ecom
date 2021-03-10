<template>
<div class="update-product">
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add' }} Product </h2>
    <!-- bounipun style id -->
    <InputBox label="Bounipun Style ID" v-model="product.styleId" />
    <!-- product name -->
    <InputBox label="Product Name" v-model="product.name" />
    <!-- slug -->
    <InputBox label="Slug" v-model="product.slug" :placeholder="suggestedSlug" />
    <!-- description -->
    <TextBox v-model="product.description" label="Description" />
    <!-- type of products -->
    <SelectBox :options="productTypes" v-model="selectedProductType" label="Type of Product" />
    <!-- collection -->
    <SelectBox :options="collections" v-model="selectedCollection" label="Collection" />

    <!-- color source -->
    <SelectBox :options="colorSource" v-model="selectedColorSource" label="Color Options" />
    <!-- variations (checkboxes) -->
    <CheckBoxes :options="variations" label="variations" />

    <!-- fabrics (checkboxes) -->
    <CheckBoxes :options="feedFabrics()" :local="true" :label="variation.name" v-for="(variation, index) in selectedVariations" :key="index" />
    <!-- variation options - images, fabric, pricing -->
 
     <!-- status (checkboxes) -->
     <CheckBoxes :options="[{name: 'Publish', value: 'publish'}]" label="Status" />

    <div class="center-col">
        <br>
        <button class="action"> {{ editMode ? "Edit" : "Add" }} Product </button>
    </div>
    <!-- update button -->

</div>
</template>

<script>
import slugify from "slugify";
export default {
    computed: {
        suggestedSlug() {
            return slugify(this.product.name, {
                lower: true
            });
        },
        selectedVariations() {
            return this.variations.filter(variation => variation.checked === true)
        }
    },
    methods: {
        feedFabrics() {
            return JSON.parse(JSON.stringify(this.allFabrics));
        }
    },
    data() {
        return {
            editMode: false,
            product: {
                styleId: '',
                name: "",
                slug: "",
                description: "",
                collection: "",
                status: false
            },
            variations: [{
                name: 'Shawl',
                value: 'shawl',
                checked: false
            }, {
                name: 'Stole',
                value: 'stole',
                checked: false
            }, {
                name: 'Square',
                value: 'square',
                checked: false
            }],
            collections: [{
                    name: 'Select Collection',
                    value: 'false',
                    checked: false
                },
                {
                    name: 'Autograph',
                    value: 'autograph'
                },
                {
                    name: 'Escape',
                    value: 'escape'
                },
                {
                    name: 'Karakul',
                    value: 'karakul'
                }
            ],
            allFabrics: [{
                    name: 'Feather Weight',
                    value: '1',
                    checked: false
                }, {
                    name: 'Light Weight',
                    value: '2',
                    checked: false
                }, {
                    name: 'Warm Fabric',
                    value: '3',
                    checked: false
                },
                {
                    name: 'Luxe Weight',
                    value: '4',
                    checked: false
                },
                {
                    name: 'Wool 70%',
                    value: '5',
                    checked: false
                }
            ],
            selectedCollection: 'false',
            productTypes: [{
                    name: 'Select Product Type',
                    value: 'select'
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
            selectedProductType: 'select',
            colorSource: [{
                    name: 'Select Color Source',
                    value: 'select'
                },
                {
                    name: 'Bounipun Color Catalogue',
                    value: 'bck'
                },
                {
                    name: 'Custom',
                    value: 'custom'
                }
            ],
            selectedColorSource: 'select'
        }
    }
}
</script>

<style lang="scss" scoped>
.heading {
    text-transform: uppercase;
    text-align: center;
}
</style>
