<template>
<div class="product-page">
    <!-- product image slideshow container  -->
    <!--     <agile :options="slideshowOptions">
            <div class="slide" :key="index" v-for="(image, index) in images">
                <img class="product-image" :src="'/demo_images/slider/' +image" />
            </div>
        </agile> -->
    <!-- <client-only> -->
    <!-- <div class="slideshow">
            <div v-hammer:swipe.left="onSwipe" class="slides-container">
                <div class="product-image" style="background-image: url('/demo_images/slider/hero-1.jpg')"> </div>
                <div class="product-image" style="background-image: url('/demo_images/slider/desk1.png')"> </div>
            </div>
        </div> -->

    <div class="slideshow">
        <div v-hammer:swipe="onSwipe" class="slides-container" :style="'margin-left: ' + slideMargin + 'vw'">
            <div class="product-image" style="background-image: url('/demo_images/slider/hero-1.jpg')"> </div>
            <div class="product-image" style="background-image: url('/demo_images/slider/desk1.png')"> </div>
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
            images: ['desk1.png', 'desk2.png'],
            slideMargin: 0
        }
    },
    methods: {
        onSwipe(data) {
            console.log(this.slideMargin);
            const threshold = this.images.length - 1;
            switch (data.direction) {
                /* swiped left */
                case 2:
                    console.log('swiped left')

                    if (this.slideMargin === threshold * -100)
                        return;
                    this.slideMargin -= 100;
                    break;
                    /* swiped right */
                case 4:
                    console.log('swiped right')
                    if (this.slideMargin === 0)
                        return;
                    this.slideMargin += 100;
                    break;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.slideshow {
    display: flex;
    overflow-x: auto;


    @media screen and (min-width: 768px) {
        justify-content: center;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    .slides-container {
        display: flex;
        width: fit-content;
        margin-left: 0;
        transition: all 0.4s ease-in-out;

        .product-image {
            height: 30vh;
            width: 100vw;
            overflow: hidden;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            @media screen and (min-width: 768px) {
                height: 90vw;
            }
        }
    }
}
</style>
