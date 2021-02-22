<template>
<div @click="$router.push('/products/'+product)" class="product-card">
    <!-- main image container -->
    <div class="main-image-container center">
        <img class="main-image" :src="imagePath" />
    </div>

    <!-- text details -->
    <div class="text-details center">
        <!-- product name -->
        <div class="product-name center-col">
            <span class="name"> {{ details.name }} </span>
            <span class="collection"> {{ details.collection }} </span>
            <span class="price"> {{ details.price }} </span>
        </div>
    </div>

    <!-- variants available -->
    <div class="variants-available center">
        <div v-if="variants.shawl !== undefined" class="variant"> Shawl </div>
        <div v-if="variants.stole !== undefined" class="variant"> Stole </div>
        <div v-if="variants.square !== undefined" class="variant"> Square </div>
    </div>

    <!-- shop now button -->
    <div class="center actions">
        <button class="clear shop-now">Shop Now</button>
    </div>
</div>
</template>

<script>
export default {
    props: {
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
        product: {
            type: String,
            default: 'auto_1'
        },
        image: {
            type: String,
            default: 'product1.png'
        }
    },
    computed: {
        imagePath() {
            // return `/demo_images/${this.image}`
            const param = this.product;
            const prod = param.split("_");
            const collection = prod[0];
            const prodId = prod[1];
            return `/demo_images/products/${collection}/${collection}_prod${prodId}_1.png`;
        }
    }
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
