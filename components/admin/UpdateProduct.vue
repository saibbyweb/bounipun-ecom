<template>
<div class="update-product">
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add' }} Product </h2>
    <!-- product name -->
    <InputBox label="Product Name" v-model="product.name" />
    <!-- slug -->
    <InputBox label="Slug" v-model="product.slug" :placeholder="suggestedSlug" />
    <!-- description -->
    <TextBox v-model="product.description" label="Description" />
    <!-- variations (checkboxes) -->
    <CheckBoxes :options="variations" label="variations" />
    <!-- collection -->
    <SelectBox :options="collections" v-model="selectedCollection" label="Collection" />
    <!-- price/weight/stock -->

    <!-- fabrics (checkboxes) -->
    <CheckBoxes :options="feedFabrics()" :local="true" :label="'Select Fabrics for: '+variation.name" v-for="(variation, index) in selectedVariations" :key="index" />
    <!-- variation options - images, fabric, pricing -->

    <!-- publish toggle -->
    <toggle-button v-model="product.status" :width="120" :font-size="13" :labels="{checked: 'Live', unchecked: 'Unpublished'}" />
    <!-- update button -->
    <br>
    <button class="action"> {{ editMode ? "Edit" : "Add" }} Product </button>
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
            selectedCollection: 'false'
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
