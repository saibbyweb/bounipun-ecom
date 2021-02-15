<template>
<div class="featured-product-card">
    <!-- main image container -->
    <div class="main-image-container center">
        <img class="main-image" :src="imagePath" />
    </div>

    <!-- text details -->
    <div class="text-details center">
        <!-- product name -->
        <div class="product-name">
            <span class="name"> {{ details.name }} </span>
        </div>
    </div>

    <!-- shop now button -->
    <div class="center actions">
        <button class="action shop-now">Shop Now</button>
    </div>
</div>
</template>

<script>
export default {
    props: {
        details: Object,
        image: { type: String, default: 'product1.png'}
    },
    computed: {
        imagePath() {
            return `/demo_images/${this.image}`
        }
    }
};
</script>

<style lang="scss" scoped>
.featured-product-card {
    width: 29vw;
    height: 36vw;
    // background: gray;
    overflow: hidden;
    padding:1vw;

    @media (max-width: $breakpoint-tablet) {
        width: 50vw;
        height: 50vh;
    }

    /* main image container */
    .main-image-container {
        width: 100%;
        height: 80%;
        overflow: hidden;

        .main-image {
            height: 100%;
        }
    }

    /* text-details */
    .text-details {
        width: 100%;
        height: 10%;

        .product-name {
            font-size:12px;
            text-transform: uppercase;
            font-weight: 900;

        }
    }

    .actions {
        height: 10%;
    }
}
</style>
