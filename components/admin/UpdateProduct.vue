<template>
<div class="update-product">
    <!-- product name -->
    <InputBox label="Product Name" v-model="product.name" />
    <!-- tagline -->
    <!-- slug -->
    <!-- description -->
    <!-- variations (checkboxes) -->
    <!-- collection -->
    <!-- price/weight/stock -->
    <!-- variation options - images, fabric, pricing -->
    <!-- publish toggle -->
</div>
</template>

<script>
export default {
    data() {
        return {
            product: {
                name: "",
                slug: "",
                description: "",
                collection: "",
            }
        }
    }
}
</script>
