<template>
  <div class="slideshow-container" :style="{ width: slideWidth + 'vw' }">
    <div class="till-dots">
      <div class="slideshow">
        <!-- lens -->
        <div v-show="activeHover" class="lens" ref="lens"></div>

        <!-- slideshow images -->
        <div
          @mousemove="trackMouse"
          @mouseleave="activeHover = false"
          ref="slideshowContainer"
          v-hammer:swipe="onSwipe"
          class="slides-container"
          :style="'margin-left: ' + slideMargin + 'vw'"
        >
          <div
            class="product-image"
            :key="index"
            v-for="(image, index) in onDemandImages"
            :style="getBackgroundImage(image)"
          ></div>
        </div>
      </div>

      <!-- indicator dots -->
      <div
        v-if="dots && !singleImage"
        class="dots"
        :class="{ main }"
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
    autoplay: {
      type: Boolean,
      default: false
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
    },
    main: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      slideMargin: 0,
      activeIndex: 0,
      thumbnailsMargin: 0,
      autoplayInterval: {},
      interacted: false,
      activeHover: false,
      lensPosition: {
        x: 0,
        y: 0
      }
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
    },
    onDemandImages() {
      // return this.images;
      if (this.interacted) return this.images;

      if (this.images.length > 2) {
        /* replace al images after second image a default bounipun image (a static asset) */
        return this.images.map((image, index) => {
          return index < 1 ? image : "/loading.gif";
        });
      }

      return this.images;
    }
  },
  destroyed() {
    // alert('UNMOUNTED')
    this.clearAutoplayRoutine();
  },
  mounted() {
    if (this.autoplay) this.setAutoplayRoutine();
    // setTimeout(() => this.imageZoom('slides-container','zoomed-in-image'),2000);
  },
  watch: {
    activeIndex: {
      handler(newVal) {
        this.$emit("slideChanged", newVal);
      },
      immediate: true
    },
    images() {}
  },
  methods: {
    setActiveImage(index) {
      this.interacted = true;
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
      this.interacted = true;

      if (data.autoMode === undefined) {
        this.clearAutoplayRoutine();
      }

      const threshold = this.images.length - 1;
      switch (data.direction) {
        /* swiped left */
        case 2:
          console.log("swiped left");

          /* stop at the last slide */
          if (this.slideMargin === threshold * (-1 * this.slideWidth)) {
            this.slideMargin = 0;
            this.activeIndex = 0;
            return;
          }

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
    },
    setAutoplayRoutine() {
      this.autoplayInterval = setInterval(
        () => this.onSwipe({ direction: 2, autoMode: true }),
        3000
      );
    },
    clearAutoplayRoutine() {
      clearInterval(this.autoplayInterval);
    },
    trackMouse(e) {
      e.preventDefault();
      let pos = { x: 0, y: 0 },x=0,y=0;
      this.activeHover = true;
      pos = this.getCursorPosition(e);
      /* Calculate the position of the lens: */
      x = pos.x - this.$refs.lens.offsetWidth / 2;
      y = pos.y - this.$refs.lens.offsetHeight / 2;

      /* Prevent the lens from being positioned outside the image: */

      x = x < 0 ? 0 : x;
      y = y < 0 ? 0 : y;
      // if (x > img.width - lens.offsetWidth) {
      //   x = img.width - lens.offsetWidth;
      // }

      // if (y > img.height - lens.offsetHeight) {
      //   y = img.height - lens.offsetHeight;
      // }


      this.$refs.lens.style.left = x + "px";
      this.$refs.lens.style.top = y + "px";
    },
    getCursorPosition(e) {
      let x = 0,
        y = 0;
      let a = this.$refs.slideshowContainer.getBoundingClientRect();

      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x, y };
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
    position: relative;

    .zoomed-in-image {
      width: 300px;
      height: 300px;
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
        overflow: hidden;
        background-position: center;
        background-repeat: no-repeat;

        @media screen and (min-width: 768px) {
          height: 90vw;
        }
      }
    }

    .lens {
      position: absolute;
      border: 1px solid #d4d4d4;
      pointer-events: none;
      /*set the size of the lens:*/
      width: 50px;
      height: 50px;
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
    bottom: 1px;
    left: 0;
    width: 100%;
    margin: -1%;

    &.main {
      bottom: 7px;
    }

    @media (max-width: 768px) {
      bottom: 0;

      &.main {
        bottom: 0;
      }
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
