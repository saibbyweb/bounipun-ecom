<template>
<div class="slideshow-container">
    <div class="slideshow">
        <div v-hammer:swipe="onSwipe" class="slides-container" :style="'margin-left: ' + slideMargin + 'vw'">
            <!-- <div class="product-image" :key="index" v-for="(image, index) in images" :style="'background-image: url(/demo_images/slider/'+image+')'"> </div> -->
            <div class="product-image" :key="index" v-for="(image, index) in images" :style="getBackgroundImage(image)"> </div>
        </div>
    </div>
    <!-- thumbnails -->
    <div v-if="slideshowOptions.thumbnails" class="thumbnails">
        <div class="thumbnail" :key="index" v-for="(image, index) in images" :style="getBackgroundImage(image)"> </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        slideshowOptions: {
            type: Object,
            default: () => {
                return { thumbnails: true }
            }
        },
        images: {
            type: Array,
            default: () => ['desk1.png', 'desk2.png']
        }
    },
    data() {
        return {
            slideMargin: 0
        }
    },
    methods: {
        getBackgroundImage(image, size) {
            return {
                backgroundImage: `url('/demo_images/slider/${image}')`
            }
        },
        onSwipe(data) {
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
.slideshow-container {
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

    .thumbnails {
        width: 100%;
        // background: rgb(169, 169, 169);
        padding:10px;
        display:flex;

        .thumbnail {
            width: 20vw;
            height:20vw;
            background-repeat: no-repeat;
            background-size: cover;
            margin: 0 10px;
        }
    }
}
</style>
