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
    <CheckBoxes :options="allFabrics" label="Fabrics" />
    
    <!-- variation options - images, fabric, pricing -->
        <!-- publish toggle -->
        <toggle-button v-model="product.status" width="120" font-size="13" :labels="{checked: 'Live', unchecked: 'Unpublished'}"/>
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
                value: 'shawl'
            }, {
                name: 'Stole',
                value: 'stole'
            }, {
                name: 'Square',
                value: 'square'
            }],
            collections: [{
                    name: 'Select Collection',
                    value: false
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
                    value: '1'
                }, {
                    name: 'Light Weight',
                    value: '2'
                }, {
                    name: 'Warm Fabric',
                    value: '3'
                },
                {
                    name: 'Luxe Weight',
                    value: '4'
                },
                {
                    name: 'Wool 70% / Silk 30%',
                    value: '5'
                }
            ],
            selectedCollection: false
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
