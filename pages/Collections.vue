<template>
<div class="center-col page -wh">

    <div class="c-header center">
        <h2 class="heading"> {{ collection.name }} </h2>
    </div>

    <div class="page collection-items">
        <product-card v-for="(product, index) in products" :key="index" :product="product" />
        <h3 v-if="products.length === 0"> No Products found for {{ collection.name }} </h3>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            collection: {}
        }
    },
    watch: {
        $route(to, from) {
            console.log(to);
            this.fetchCollectionProducts(to.query.slug);
        }
    },
    mounted() {
        console.log(this.$route);
        this.fetchCollectionProducts(this.$route.query.slug);
    },
    methods: {
        async fetchCollectionProducts(collectionSlug) {
            /* fetch collection id */
            const collection = await this.$fetchData('collections', {
                slug: collectionSlug
            });
            if (!collection.fetched)
                return;
            
            this.collection = collection.doc;

            /* fetch product under this collection  */
            const products = await this.$fetchData('products', {
                bounipun_collection: collection.doc._id
            }, true);

            if (!products.fetched) {
                return;
            }
            
            this.products = products.docs;
            console.log(this.products);
        }
    }
}
</script>

<style lang="scss" scoped>
.c-header {
    height: 40vw;
    background: url("/demo_images/collection-header.png");
    width: 100%;

    .heading {
        color: rgba(255, 255, 255, 0.819);
        text-transform: uppercase;
        font-family: $font_1_bold;
        font-size: 10vw;
    }
}

.collection-items {
    display: flex;
    flex-wrap: wrap;
}
</style>
