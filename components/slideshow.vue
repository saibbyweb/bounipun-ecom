<template>
<div class="slideshow-container" :style="{width: slideWidth + 'vw'}">
    <div class="slideshow">
        <!-- slideshow images -->
        <div v-hammer:swipe="onSwipe" class="slides-container" :style="'margin-left: ' + slideMargin + 'vw'">
            <div class="product-image" :key="index" v-for="(image, index) in images" :style="getBackgroundImage(image)"> </div>

        </div>
    </div>

    <!-- custom text -->
    <div v-if="customText !== ''" class="center">
        <span class="custom-text">  {{ customText }} </span>
    </div>

    <!-- indicator dots -->
    <div v-if="dots" class="dots">
        <div :class="[{active: isActive(index)},'dot']" :key="index" v-for="(image, index) in images"> </div>
    </div>

    <!-- thumbnails -->
    <div v-if="slideshowOptions.thumbnails" ref="thumbnails" id="thumbnails-container" class="scrollable-list">
        <div class="list">
            <div class="thumbnails">
                <div @click="setActiveImage(index)" :class="[{active: isActive(index)},'thumbnail']" :key="index" v-for="(image, index) in images" :style="getBackgroundImage(image)"> </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import InnerImageZoom from 'vue-inner-image-zoom';

import {
    TweenLite
} from "gsap"
export default {
    components: {
        'inner-image-zoom': InnerImageZoom
    },
    props: {
        slideshowOptions: {
            type: Object,
            default: () => {
                return {
                    thumbnails: false
                }
            }
        },
        images: {
            type: Array,
            default: () => ['/demo_images/slider/desk1.png', '/hero/1.jpg']
        },
        size: {
            type: String,
            default: 'contain'
        },
        customText: {
            type: String,
            default: ''
        },
        extraClass: {
            type: String,
            default: ''
        },
        dots: {
            type: Boolean, 
            default: true
        },
        slideWidth: {
            type: Number,
            default: 100

        },
        slideHeight: {
            type: Number,
            default: 100
        }
    },
    data() {
        return {
            slideMargin: 0,
            activeIndex: 0,
            thumbnailsMargin: 0
        }
    },
    methods: {
        setActiveImage(index) {
            this.activeIndex = index;
            this.slideMargin = index * -100;
            TweenLite.to(this.$refs.thumbnails, 0.3, {
                scrollLeft: index * 40
            })
        },
        getBackgroundImage(image, size) {
            return {
                backgroundImage: `url('${image}')`,
                backgroundSize: this.size,
                width: this.slideWidth + 'vw',
                height: this.slideHeight + 'vw'
            }
        },
        isActive(index) {
            return this.activeIndex === index;
        },
        handleThumbnail(event) {
            console.log(this.$refs.thumbnails.scrollLeft)
        },
        onSwipe(data) {
            const threshold = this.images.length - 1;
            switch (data.direction) {
                /* swiped left */
                case 2:
                    console.log('swiped left')

                    /* stop at the last slide */
                    if (this.slideMargin === threshold * (-1 * this.slideWidth))
                        return;

                    this.slideMargin -= this.slideWidth;
                    this.activeIndex += 1;
                    break;
                    /* swiped right */
                case 4:
                    console.log('swiped right')
                    /* stop at the first slide */
                    if (this.slideMargin === 0)
                        return;


                    this.slideMargin += this.slideWidth;
                    this.activeIndex -= 1;
                    break;
            }

            /* move thumbnails accordingly */
            TweenLite.to(this.$refs.thumbnails, 0.3, {
                scrollLeft: this.activeIndex * 40
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.slideshow-container {
    overflow: hidden;
    .slideshow {
        display: flex;
        overflow-x: auto;

        @media screen and (min-width: 768px) {
            justify-content: center;
        }

        &::-webkit-scrollbar {
            display: none;
        }

        /* slider container */
        .slides-container {
            touch-action: pan-y !important;
            display: flex;
            width: fit-content;
            margin-left: 0;
            transition: all 0.4s ease-in-out;
            
            .product-image {
                
                // height:120vw;
                // width: 100vw;

                overflow: hidden;
                background-position: center;
                background-repeat: no-repeat;

                @media screen and (min-width: 768px) {
                    height: 90vw;
                }
            }


        }

    }

    /* custom text */
    .custom-text {
        text-align: center;
        font-size: 12px;
        padding:0 15px;
        color: $primary_dark;
        opacity: 0.7;
        font-family: $font_2;
    }

    #thumbnails-container {
        margin-left: 0;
        transition: all 0.2s ease-in-out;
    }

    .thumbnails {
        width: 100%;
        padding: 2px;
        display: flex;

        .thumbnail {
            width: 20vw;
            height: 20vw;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            overflow: hidden;
            margin: 0 10px;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.16);
            transform: scale(1);
            transition: all 0.3s ease-in-out;

            &.active {
                transform: scale(1.1);
            }
        }
    }

    /* indicator dots */
    .dots {
        width: 100vw;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        box-sizing: border-box;
        margin: 15px 0;

        .dot {
            height: 7px;
            width: 7px;
            border-radius: 50%;
            background-color: #969696;
            margin: 0 5px 5px 5px;

            &.active {
                background-color: #2b2b2b;
            }
        }
    }
}
</style>
