<template>
<div @click="$router.push('/products/'+product)" class="featured-product-card">
    <!-- main image container -->
    <div class="main-image-container center">
        <img class="main-image" :src="imagePath" />
    </div>

    <!-- text details -->
    <div class="text-details center">
        <!-- product name -->
        <div class="product-name center-col">
            <span class="name"> {{ details.name }} </span>
            <span class="collection"> Bounipun / Adore </span>
        </div>
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
        details: Object,
        image: {
            type: String,
            default: 'product1.png'
        },
        product: {
            type: String,
            default: 'auto_1'
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
.featured-product-card {
    width: 29vw;
    height: 36vw;
    overflow: hidden;
    padding: 1vw;

    @media (max-width: $breakpoint-tablet) {
        width: 60vw;
        height: 110vw;
    }

    /* main image container */
    .main-image-container {
        width: 100%;
        height: 85%;
        overflow: hidden;

        .main-image {
            height: 100%;
        }
    }

    /* text-details */
    .text-details {
        margin-top: 5px;
        width: 100%;
        height: 10%;
        padding-bottom: 2px;

        .product-name {
            font-size: 10px;
            text-transform: uppercase;
            font-weight: 900;
            letter-spacing: 1px;
            font-family: $font_2_bold
        }

        .collection {
            font-family: $font_1;
            color: $gray;
            font-size: 9px;
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
