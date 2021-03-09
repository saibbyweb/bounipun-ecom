<template>
<div class="update-product">
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add' }} Product </h2>
    <!-- product name -->
    <InputBox label="Product Name" v-model="product.name" />
    <!-- slug -->
    <InputBox label="Slug" v-model="product.name" />
    <!-- description -->
    <TextBox v-model="product.description" label="Description" />
    <!-- variations (checkboxes) -->
    <CheckBoxes :options="variations" label="variations" />
    <!-- collection -->
    <SelectBox :options="collections" v-model="selectedCollection" label="Collection" />
    <!-- price/weight/stock -->
    <!-- variation options - images, fabric, pricing -->
    <!-- publish toggle -->
</div>
</template>

<script>
export default {
    data() {
        return {
            editMode: false,
            product: {
                name: "",
                slug: "",
                description: "",
                collection: "",
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
