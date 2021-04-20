<template>
<div class="center-col page -wh">

    <div class="c-header center" :style="{ backgroundImage: `url(${getCollectionImage(collection.image)})`}">
        <h2 v-if="collection.image === ''" class="heading"> {{ collection.name }} </h2>
    </div>

    <div v-if="!collectionLocked" class="collection-items">
        <product-card v-for="(product, index) in products" :key="index" :product="product" />
        <h3 v-if="products.length === 0"> No Products found for {{ collection.name }} </h3>

        
    </div>
    
    <!-- if collection locked -->
    <div v-if="collectionLocked" class="locked">
        <h2 class="heading" v-if="collectionLocked"> 🔒 This collection is locked </h2>
        <br>
        <button class="action"> Request Access </button>
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
    computed: {
        collectionLocked() {
            return this.collection.lock === undefined ? false : this.collection.lock
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
                bounipun_collection: collection.doc._id,
                type: 'under-bounipun'
            }, true);

            if (!products.fetched) {
                return;
            }
            
            this.products = products.docs;
            console.log(this.products);
        },
        getCollectionImage(image) {
            if(image === undefined) return "/default-image.png";
            return this.$getImagePath(image);
        }
    }
}
</script>

<style lang="scss" scoped>
.c-header {
    height: 40vw;
    // background: url("/demo_images/collection-header.png");
    background-size: cover;
    width: 100%;

    .heading {
        color: $primary_dark;
        text-transform: uppercase;
        font-family: $font_1_bold;
        font-size: 10vw;
    }
}

.collection-items {
    display: flex;
    flex-wrap: wrap;
    margin-top:10vw;
}
.locked {
    padding:10%;

    .heading {
        font-family: $font_2_bold;
        text-transform: uppercase;
        text-align: center;
    }
}
</style>
