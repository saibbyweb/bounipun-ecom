<template>
<div class="center-col page -wh">

    <div class="c-header center" :style="{ backgroundImage: `url(${getCollectionImage(collection.image)})`}">
        <h2 v-if="collection.image === ''" class="heading"> {{ collection.name }} </h2>
    </div>
    <!-- if collections is not escape -->
    <div v-if="!collectionLocked && collection.name !== 'Escape'" class="collection-items">
        <product-card v-for="(product, index) in products" :key="index" :product="product" />
        <h3 v-if="products.length === 0"> No Products found for {{ collection.name }} </h3>
    </div>

    <!-- if colllection is escape -->
    <div v-if="!collectionLocked && collection.name === 'Escape'">

        <!-- color categories -->
        <div class="color-categories" v-for="(value, name, index) in escapeProduct" :key="index">
            <div v-if="value.length !== 0">
                <!-- sub color heading -->
                <h5 class="category-heading"> {{ value.name }} </h5>

                <!-- color category description -->
                <p class="category-description"> {{ value.description }} </p>

                <div class="collection-items">

                    <product-card v-for="(color, cIndex) in value.colors" :key="cIndex" :product="adjustProduct(products[0], color.actualIndex)" :activeColor="color.actualIndex" />

                </div>
            </div>

        </div>

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
import {
    Document
} from 'mongoose';
import productCard from "../components/productCard.vue"

export default {
    components: {
        productCard
    },
    data() {
        return {
            products: [],
            collection: {},
            colorCategories: [],
            escapeProduct: []
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
        adjustProduct(product, cIndex) {
            let adjustedProduct = {
                ...product
            };
            adjustedProduct.name = adjustedProduct.colors[cIndex].name;
            return {
                ...adjustedProduct
            };
        },
        async fetchColorCategories() {
            const colorCategories = await this.$fetchData('color_categories', {}, true);
            /* wait for the request to resolve */
            if (!colorCategories.fetched) {
                console.log('could not fetch color categories');
                return;
            }
            this.colorCategories = colorCategories.docs;

        },
        async fetchCollectionProducts(collectionSlug) {
            /* fetch collection id */
            const collection = await this.$fetchData('collections', {
                slug: collectionSlug,
                status: true
            });
            if (!collection.fetched)
                return;

            this.collection = collection.doc;

            /* fetch color categories, if collection is escape */
            if (this.collection.name === 'Escape')
                await this.fetchColorCategories();

            /* fetch product under this collection  */
            const products = await this.$fetchData('products', {
                bounipun_collection: collection.doc._id,
                type: 'under-bounipun'
            }, true);

            if (!products.fetched) {
                return;
            }

            this.products = products.docs;

            /* sort products if collection is escape */
            if (this.collection.name === 'Escape') {
                this.sortEscape(this.products);
            }
        },
        sortEscape(products) {

            const product = products[0];
            let groupedData = [];
            this.colorCategories.forEach(category => {
                /* find all colors under this category */
                const colors = product.colors.filter(color => {
                    /* attach actual index */
                    color.actualIndex = product.colors.findIndex(col => col._id === color._id);
                    return color._id.category === category._id
                });
                /* save colors */
                groupedData.push({name: category.name, description: category.description, colors })
            });

            this.escapeProduct = groupedData;
        },
        getCollectionImage(image) {
            if (image === undefined) return "/default-image.png";
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
    margin-top: 10vw;
    justify-content: center;
}

.locked {
    padding: 10%;

    .heading {
        font-family: $font_2_bold;
        text-transform: uppercase;
        text-align: center;
    }
}

.color-categories {
    margin-top: 20px;

    .category-heading {

        font-weight: 900;
        font-family: $font_2;
        font-size: 25px;
        padding-left: 10%;
        color: $primary_dark;
    }

    .category-description {
        padding-left: 10%;
    }

}
</style>
