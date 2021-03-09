<template>
<div class="products">
    <!-- filters -->
    <div class="filters center">
        <input class="search shadow" type="text" placeholder="Search for products" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>
    <!-- list of products -->
    <div class="list">
        <ProductList :products="products"/>
    </div>
    <!-- update product form -->
    <div class="update">
        <UpdateProduct />
    </div>
</div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            filters: [{
                name: 'All Products',
                value: 'all'
            }, {
                name: "Karakul",
                value: 'karakul'
            }, {
                name: 'Autograph',
                value: 'autograph'
            }, {
                name: 'Escape',
                value: 'escape'
            }],
            selectedFilter: 'all',
            products: [{
                    name: 'Kani',
                    slug: 'kani',
                    collection: 'Escape',
                    variations: 'Shawl/Square/Stole',
                    price: '5999',
                    status: true
                }, {
                    name: 'Khatamband Cashmere',
                    slug: 'khatamband-cashmere',
                    collection: 'Adore',
                    variations: 'Shawl/Stole',
                    price: '12999',
                    status: true
                },
                {
                    name: 'Pashmina',
                    slug: 'pashmina',
                    collection: 'Autograph',
                    variations: 'Stole',
                    price: '8999',
                    status: false
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.products {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: auto auto;

    .filters {
        grid-area: 1 / 1 / 2 / 3;
        padding: 10px;

        .search {
            width: 40%;
            padding: 10px 15px;
            border: none;
            margin-right: 10px;
        }
    }

    .list {
        grid-area: 2 / 1 / 2 / 2;
        padding:10px;
    }

    .update {
        grid-area: 2 / 2 / 2 / 3;
        padding:10px;
    }
}
</style>
