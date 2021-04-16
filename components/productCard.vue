<template>
<div @click="$router.push('/products?_id='+product._id)" class="product-card">
    <!-- main image container -->
    <div class="main-image-container center">
        <img class="main-image" :src="imagePath" />
    </div>

    <!-- text details -->
    <div class="text-details center">
        <!-- product name -->
        <div class="product-name center-col">
            <span class="name"> {{ product.name }} </span>
            <span class="collection"> {{ collectionName }} </span>
            <span class="price"> INR {{ lowestVariantPrice }} - INR {{ highestVariantPirce }} </span>
        </div>
    </div>

    <!-- variants available -->
    <div v-if="!searchView">
        <div v-if="product.type !== 'third-party'" class="variants-available center">
            <div v-for="(variant, index) in variantsAvailable" :key="index" class="variant"> {{ variant }} </div>
        </div>
    </div>

    <!-- shop now button -->
    <div class="center actions">
        <button class="clear shop-now"> {{ inWishlist ? 'Move to Cart' : 'Shop Now' }} </button>
    </div>
</div>
</template>

<script>
export default {
    props: {
        searchView: {
            type: Boolean,
            default: false
        },
        details: {
            type: Object,
            default: () => {
                return {
                    name: 'Khatamband Search',
                    collection: 'Bounipun Karakul',
                    price: 'INR 20000'
                }
            },
        },
        variants: {
            type: Object,
            default: () => {
                return {
                    shawl: true
                }
            }
        },
        // product: {
        //     type: String,
        //     default: 'auto_1'
        // },
        product: {
            type: Object,
            default: {
                notProvided: true
            }
        },
        image: {
            type: String,
            default: 'product1.png'
        },
        inWishlist: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        imagePath() {
            if (this.product.notProvided || this.product.colors.length === 0)
                return '/default-image.png';

            const images = this.product.colors[0].images;
            /* fetch main image */
            // return 'abc';
            return process.env.baseAWSURL + images[0].path;
        },
        variantsAvailable() {
            return this.product.variants.map(variant => variant._id.name);
        },
        collectionName() {
            return this.product.bounipun_collection.name;
        },
        lowestVariantPricex() {
            if (this.product.type === 'third-party')
                return this.product.directPrice;

            let allPrices = [];
            this.product.variants.forEach(variant => {
                variant.fabrics.forEach(fabric => {
                    // console.log(fabric.price);
                    allPrices.push(fabric.price)
                });
            });

            return Math.min(...allPrices);
        },
        lowestVariantPrice() {
            return this.product.priceRange.startsAt;
        },
        highestVariantPirce() {
            return this.product.priceRange.endsAt;
        }
    },

};
</script>

<style lang="scss" scoped>
.product-card {
    width: 29vw;
    height: 36vw;
    overflow: hidden;
    padding: 1vw;

    @media (max-width: $breakpoint-tablet) {
        width: 43vw;
        height: 100vw;
    }

    /* main image container */
    .main-image-container {
        width: 100%;
        height: 60%;
        overflow: hidden;

        .main-image {
            height: 100%;
        }
    }

    /* text-details */
    .text-details {
        width: 100%;
        height: 20%;
        padding-bottom: 2px;

        .product-name {
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 900;
            text-align: center;
        }

        .collection {
            color: $gray;
            font-size: 10px;

        }

        .price {
            font-size: 13px;
            font-weight: 900;
        }
    }

    .variants-available {
        height: 10%;

        .variant {
            color: $primary_dark;
            border: 1px solid $primary_dark;
            margin: 0 2px;
            padding: 2px 5px;
            font-size: 10px;
        }
    }

    .actions {
        height: 5%;

        .shop-now {
            text-transform: uppercase;
            font-family: $font_1;
        }
    }

}
</style>
