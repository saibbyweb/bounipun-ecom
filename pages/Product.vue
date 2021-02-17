<template>
<div class="product-page">
    <!-- product image slideshow container  -->
    <!--     <agile :options="slideshowOptions">
        <div class="slide" :key="index" v-for="(image, index) in images">
            <img class="product-image" :src="'/demo_images/slider/' +image" />
        </div>
    </agile> -->
    <!-- <client-only> -->
    <div class="slideshow">
        <div class="slides-container">
            <img class="product-image" v-hammer:swipe.left="onSwipe" src="/demo_images/slider/desk1.png" />
        </div>
    </div>
    <!-- </client-only> -->
    <!-- slideshow -->
    <!-- absolute elements like wishlist heart, collection text, share icon -->
    <!-- thumbnails -->
    <!-- product text details (product name, collection, base price -->
    <!-- colors -->
    <!-- variants available -->
    <!-- fabric -->
    <!-- product description -->
    <!-- collection description -->
    <!-- shipping and returns -->
</div>
</template>

<script>
export default {
    data() {
        return {
            slideshowOptions: {
                dots: true,
                navButtons: true,
                centerMode: true,
                autoplay: false
            },
            images: ['desk1.png', 'desk2.png']
        }
    },
    methods: {
        onSwipe(data) {
            console.log(data);
        }
    }
}
</script>

<style lang="scss" scoped>
.slideshow {
    height:30vh;
    overflow:hidden;

    .slidescontainer {
        height:inherit;
        .product-image {
            height: 100%;
        }
    }
}
</style>
