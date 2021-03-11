<template>
<div class="products crud">
    <!-- filters -->
    <div class="filters center">
        <input class="search shadow" type="text" placeholder="Search for products" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>

    <!-- list of products -->
    <div class="list">
        <List class="product-list" :headings="headings" :list="products" custom_css="25% 20% 20% 15% 10% 10%" />
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
                    status: 'Live'
                }, {
                    name: 'Khatamband Cashmere',
                    slug: 'khatamband-cashmere',
                    collection: 'Adore',
                    variations: 'Shawl/Stole',
                    price: '12999',
                    status: 'Not Live'
                },
                {
                    name: 'Pashmina',
                    slug: 'pashmina',
                    collection: 'Autograph',
                    variations: 'Stole',
                    price: '8999',
                    status: 'Live'
                }
            ],
            headings: ['Product Name', 'Slug', 'Variations', 'Collection', 'Price', 'Status']
        }
    },
    computed: {
        productsValuesOptimized() {
            return this.products.map(product => {
                const status = product.status;
                delete product.status;
                return {
                    ...product,
                    Status: status ? 'Live' : 'Not Live'
                }
            })
        }
    }
}
</script>

<style lang="scss">
.products {
    /* style status boxes */
    .status {
        color: white;

        &.live {
            background-color: rgb(98, 176, 98);
        }

        &.not-live {
            background-color: rgb(193, 72, 12);
        }
    }
}
</style>
