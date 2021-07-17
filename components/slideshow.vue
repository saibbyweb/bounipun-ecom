<template>
  <div class="slideshow-container" :style="{ width: slideWidth + 'vw' }">
    <div class="till-dots">
      <div class="slideshow">
        <!-- slideshow images -->
        <div
          v-hammer:swipe="onSwipe"
          class="slides-container"
          :style="'margin-left: ' + slideMargin + 'vw'"
        >
          <div
            class="product-image"
            :key="index"
            v-for="(image, index) in images"
            :style="getBackgroundImage(image)"
          ></div>
        </div>
      </div>

      <!-- indicator dots -->
      <div
        v-if="dots && !singleImage"
        class="dots"
        :style="{ width: slideWidth }"
      >
        <div
          :class="[{ active: isActive(index) }, 'dot']"
          :key="index"
          v-for="(image, index) in images"
        ></div>
      </div>
    </div>

    <!-- custom text -->
    <div v-if="customText !== ''" class="center">
      <span class="custom-text"> {{ customText }} </span>
    </div>

    <!-- thumbnails -->
    <div
      v-if="slideshowOptions.thumbnails"
      ref="thumbnails"
      id="thumbnails-container"
      class="scrollable-list"
    >
      <div class="list">
        <div class="thumbnails">
          <div
            @click="setActiveImage(index)"
            :class="[{ active: isActive(index) }, 'thumbnail']"
            :key="index"
            v-for="(image, index) in images"
            :style="getThumbBackground(image)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import InnerImageZoom from "vue-inner-image-zoom";

import { TweenLite } from "gsap";
export default {
  components: {
    "inner-image-zoom": InnerImageZoom
  },
  props: {
    slideshowOptions: {
      type: Object,
      default: () => {
        return {
          thumbnails: false
        };
      }
    },
    images: {
      type: Array,
      default: () => ["/demo_images/slider/desk1.png"]
    },
    size: {
      type: String,
      default: "contain"
    },
    customText: {
      type: String,
      default: ""
    },
    extraClass: {
      type: String,
      default: ""
    },
    dots: {
      type: Boolean,
      default: true
    },
    mSlideWidth: {
      type: Number,
      default: 100
    },
    dSlideWidth: {
      type: Number,
      default: 100
    },
    mSlideHeight: {
      type: String,
      default: "100vw"
    },
    dSlideHeight: {
      type: String,
      default: "100vw"
    }
  },
  data() {
    return {
      slideMargin: 0,
      activeIndex: 0,
      thumbnailsMargin: 0
    };
  },
  computed: {
    singleImage() {
      return this.images.length === 1;
    },
    slideHeight() {
      return this.windowWidth > 768 ? this.dSlideHeight : this.mSlideHeight;
    },
    slideWidth() {
      return this.windowWidth > 768 ? this.dSlideWidth : this.mSlideWidth;
    }
  },
  methods: {
    setActiveImage(index) {
      this.activeIndex = index;
      this.slideMargin = index * this.slideWidth * -1;
      TweenLite.to(this.$refs.thumbnails, 0.3, {
        scrollLeft: index * 40
      });
    },
    getBackgroundImage(image, size) {
      return {
        backgroundImage: `url('${image}')`,
        backgroundSize: this.size,
        width: this.slideWidth + "vw",
        height: this.slideHeight,
        backgroundPosition: "top center"
      };
    },
    getThumbBackground(image) {
      return {
        backgroundImage: `url('${image}')`,
        backgroundSize: "contain"
      };
    },
    isActive(index) {
      return this.activeIndex === index;
    },
    handleThumbnail(event) {
      console.log(this.$refs.thumbnails.scrollLeft);
    },
    onSwipe(data) {
      const threshold = this.images.length - 1;
      switch (data.direction) {
        /* swiped left */
        case 2:
          console.log("swiped left");

          /* stop at the last slide */
          if (this.slideMargin === threshold * (-1 * this.slideWidth)) return;

          this.slideMargin -= this.slideWidth;
          this.activeIndex += 1;
          break;
        /* swiped right */
        case 4:
          console.log("swiped right");
          /* stop at the first slide */
          if (this.slideMargin === 0) return;

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
};
</script>

<style lang="scss" scoped>
.slideshow-container {
  overflow: hidden;

  .slideshow {
    display: flex;
    overflow-x: auto;
    justify-content: flex-start;

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
    padding: 7px 15px;
    color: $gray;
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
      width: 5vw;
      height: 5vw;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      overflow: hidden;
      margin: 0 10px;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.16);
      transform: scale(1);
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &.active {
        transform: scale(1.1);
      }
      @media (max-width: 768px) {
        width: 19vw;
        height: 19vw;
      }
    }
  }

  .till-dots {
    position: relative;
  }

  /* indicator dots */
  .dots {
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: absolute;
    bottom: 7px;
    left: 0;
    width: 100%;
    margin: -1%;

    @media (max-width: 768px) {
      bottom: 0;
    }

    .dot {
      height: 2px;
      width: 19px;
      background-color: #ffffffba;
      margin: 0 0 5px;
      transition: all 0.3s ease-in-out;

      &.active {
        background-color: #7d7d7d;
      }
    }
  }
}
</style>
