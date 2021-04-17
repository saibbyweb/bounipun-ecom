<template>
<div @click="$router.push('/products?_id='+product._id)" class="featured-product-card">
    <!-- main image container -->
    <div class="main-image-container center">
        <img class="main-image" :src="imagePath" />
    </div>

    <!-- text details -->
    <div class="text-details center">
        <!-- product name -->
        <div class="product-name center-col">
            <span class="name"> {{ details.name }} </span>
            <span class="collection"> Bounipun {{ details.collection }} </span>
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
            type: Object,
            default: { notProvided: true }
        }
    },
    computed: {
        imagePath() { 
            if(this.product.notProvided || this.product.colors.length === 0)
                return '/default-image.png';
            

            const images = this.product.colors[0].images;
            /* fetch main image */
            const mainImage = images.find(image => image.mainImage === true);

            const thumbnail = mainImage !== undefined ? mainImage.path : images[0].path

            // return 'abc';
            return process.env.baseAWSURL + thumbnail;
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
            font-family: $font_1_bold;
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
