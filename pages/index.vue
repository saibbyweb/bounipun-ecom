<template>
  <div class="homepage" v-if="layout !== null">
    <!-- coming soon -->
    <!-- <div v-if="inProduction && locked" class="coming-soon flex center"> -->
    <div v-if="false" class="coming-soon flex center">
      <div class="banner"></div>

      <!-- close button -->
      <div class="close" @click="locked = false"></div>
    </div>

    <!-- slidehshow (MOBILE)-->
    <slideshow
      v-if="layout.mainSlideshow.visible && isMobile"
      size="cover"
      :images="fetchSlideshow(layout.mainSlideshow.slides)"
      :links="fetchLinks(layout.mainSlideshow.slides)"
      mSlideHeight="120vw"
      dSlideHeight="90vh"
      :autoplay="true"
      :dSlideWidth="100"
    />

    <!-- slideshow (DESKTOP) -->
    <slideshow
      v-if="layout.desktopMainSlideshow.visible && !isMobile"
      size="cover"
      :images="fetchSlideshow(layout.desktopMainSlideshow.slides)"
      :links="fetchLinks(layout.desktopMainSlideshow.slides)"
      mSlideHeight="120vw"
      dSlideHeight="90vh"
      :dSlideWidth="100"
      :autoplay="true"
      :main="true"
    />

    <!-- main text block -->
    <div
      v-if="layout.mainTextBlock.visible"
      class="main-text-block flex center-col pad"
    >
      <h2 class="text-1">{{ layout.mainTextBlock.text1 }}</h2>
      <p class="text-2">{{ layout.mainTextBlock.text2 }}</p>
      <p class="text-3">{{ layout.mainTextBlock.text3 }}</p>
      <p class="author">{{ layout.mainTextBlock.author }}</p>
    </div>

    <!-- collection blocks -->
    <div class="collection-blocks blocks section flex wrap">
      <div
        class="block flex col"
        v-for="(block, index) in layout.collectionBlocks"
        :key="index"
        style="cursor: pointer"
        @click="navigateToCollection(block.bounipun_collection)"
      >
        <!-- cover image and CTA  -->
        <div v-if="block.visible" class="cover">
          <slideshow
            size="cover"
            :images="fetchSlideshow(block.slideshow)"
            mSlideHeight="154vw"
            dSlideHeight="70vh"
            :dSlideWidth="27"
            :dots="true"
          />
          <div class="cta center">
            <button
              class="action"
              @click="navigateToCollection(block.bounipun_collection)"
            >
              {{ block.buttonText }}
            </button>
          </div>
        </div>
        <!-- text block width heading and description -->
        <div v-if="block.visible" class="pad flex col text">
          <h2 class="text-1">{{ block.text1 }}</h2>
          <p class="text-2">{{ block.text2 }}</p>
          <p class="text-3">{{ block.text3 }}</p>
        </div>
      </div>
    </div>

    <!-- product list block -->
    <div class="product-list-blocks flex wrap col section">
      <div
        class="p-block flex"
        v-for="(block, index) in layout.productListBlocks"
        :key="index"
      >
        <!-- product list block cover image -->
        <div class="cover" v-if="block.visible">
          <slideshow
            size="cover"
            :images="fetchSlideshow(block.imageList)"
            mSlideHeight="154vw"
            dSlideHeight="70vh"
            :dSlideWidth="27"
            :dots="true"
          />

          <div class="cta center">
            <button
              class="action"
              @click="$router.push(`/lists/${block.productList.slug}`)"
            >
              {{ block.buttonText }}
            </button>
          </div>
        </div>

        <!-- mood image -->
        <div
          class="mood"
          v-if="block.visible"
          :style="`background-image: url(${$getOriginalPath(block.moodImage)})`"
        ></div>

        <div class="pad center-col text" v-if="block.visible">
          <h2 class="text-1">{{ block.text1 }}</h2>
          <p class="text-2">{{ block.text2 }}</p>
        </div>
      </div>
    </div>
    <!-- bounipun lab -->
    <div class="bounipun-lab col" v-if="layout.bounipunLab.visible">
      <div
        class="cover"
        :style="`background-image: url(${$getOriginalPath(
          layout.bounipunLab.image
        )})`"
      >
        <div class="cta center">
          <button class="action">{{ layout.bounipunLab.buttonText }}</button>
        </div>
      </div>
      <div class="center-col text">
        <h2 class="head text-1">{{ layout.bounipunLab.heading }}</h2>
        <p class="paragraph text-2">{{ layout.bounipunLab.paragraph }}</p>
      </div>
    </div>

    <InstagramFeed />

    <div class="press-and-quote flex col">
      <!-- quote -->
      <div class="quote" v-if="layout.quote.visible">
        <!-- logo -->
        <div
          class="logo"
          :style="`background-image: url(${$getOriginalPath(
            layout.quote.logo
          )})`"
        ></div>
        <div class="text pad">
          <h2 class="head text-1">{{ layout.quote.heading }}</h2>
          <p class="paragraph text-2">{{ layout.quote.paragraph }}</p>
        </div>
      </div>

      <!-- press -->
      <div
        class="press"
        v-if="layout.press.visible"
        @click="$router.push('/press')"
      >
        <!-- logo -->
        <div
          class="logo"
          :style="`background-image: url(${$getOriginalPath(
            layout.press.logo
          )})`"
        ></div>

        <div class="scrollable-list">
          <div class="list">
            <!-- image list -->
            <div class="image-list">
              <!--            <div
                class="image-box"
                v-for="(image, index) in pressImages"
                :key="index"
                :style="`background-image: url(${$getOriginalPath(image.path)})`"
              ></div> -->

              <div
                class="image-box"
                v-for="(image, index) in pressImages"
                :key="index"
                :style="`background-image: url(${$getImage(
                  image.path,
                  'thumb'
                )})`"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Bounipun Kashmir | Luxury Store | Shawls, Stoles and Squares",
    };
  },
  data() {
    return {
      layout: null,
      mainSlideshowImages: [],
      sections: [],
      locked: true,
    };
  },
  mounted() {
    this.fetchHomepageLayout();
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    },
    inProduction() {
      return process.env.NODE_ENV === "production";
    },
    pressImages() {
      let finalImages = [];

      if (this.layout && this.layout.press && this.layout.press.imageList)
        finalImages = this.layout.press.imageList.reverse();

      /* check for main image */
      const mainImageIndex = finalImages.findIndex((i) => i.mainImage === true);

      /* shift main image to the beginning */
      if (mainImageIndex !== -1) {
        const mainImage = { ...finalImages[mainImageIndex] };
        finalImages.splice(mainImageIndex, 1);
        finalImages.unshift(mainImage);
      }

      return finalImages;
    },
  },
  methods: {
    getImagePath(image) {
      return this.$getOriginalPath(image);
    },
    async toggleLock() {
      this.locked = !this.locked;
    },
    async fetchHomepageLayout() {
      const layout = await this.$fetchData("homepages", {
        status: true,
      });
      if (!layout.fetched) {
        console.log("Layout not fetched");
        return;
      }
      this.layout = layout.doc;
      // console.log(this.layout);
      this.setSlideshow(this.layout.mainSlideshow.slides);
      const totalCollectionBlocks = this.layout.collectionBlocks.length;
      const totalProductListBlocks = this.layout.productListBlocks.length;
      let i = 0;
      let sections = [];
      const maxSections =
        totalCollectionBlocks > totalProductListBlocks
          ? totalCollectionBlocks
          : totalProductListBlocks;
      for (i = 0; i < maxSections; i++) {
        let section = {};
        section.collectionBlock =
          this.layout.collectionBlocks[i] !== undefined
            ? this.layout.collectionBlocks[i]
            : false;
        section.productListBlock =
          this.layout.productListBlocks[i] !== undefined
            ? this.layout.productListBlocks[i]
            : false;
        sections.push(section);
      }
      this.sections = sections;
      // console.log(sections);
    },
    navigateToCollection(bounipun_collection) {
      this.$router.push("/collections?slug=" + bounipun_collection.slug);
    },
    setSlideshow(images) {
      this.mainSlideshowImages = images.map((image) =>
        this.$getOriginalPath(image.path)
      );
    },
    fetchSlideshow(slides) {

      const finalImages = [...slides];

      /* could be a breaking change  */

      /* check for main image */
      const mainImageIndex = finalImages.findIndex((i) => i.mainImage === true);

      /* shift main image to the beginning */
      if (mainImageIndex !== -1) {
        const mainImage = { ...finalImages[mainImageIndex] };
        finalImages.splice(mainImageIndex, 1);
        finalImages.unshift(mainImage);
      }

      return finalImages.map((slide) => this.$getOriginalPath(slide.path));
    },
    fetchLinks(slides) {
      return slides.map((slide) => slide.link);
    },
    collectionLinks() {
      return;
    },
  },
};
</script>

<style lang="scss">
.homepage {
  // margin-top: $pageMarginTop;
  @include marginTop;
  position: relative;

  .coming-soon {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: white;
    z-index: 4;

    .banner {
      width: 300px;
      height: 533px;
      background-image: url("/launch-image.jpeg");
      background-repeat: no-repeat;
      background-size: cover;
    }

    .close {
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 100px;
    }
  }

  /* mainly collection blocks */
  .blocks {
    padding: 0 1%;
    justify-content: space-evenly;
    .block {
      width: 27%;
      margin: 5px;
      margin-bottom: 20px;
      overflow: hidden;
      justify-content: flex-start;

      .text {
        // background-color: red;
        // height: 40vh;
        align-items: center;
        width: 100%;
      }
    }
    @media (max-width: 768px) {
      padding: 0%;
      .block {
        flex-direction: column;
        height: auto;
        margin: 0;
        width: 100%;
        .text {
          width: 100%;
        }
      }
    }
  }
  /* cover */
  .cover {
    height: 70vh;
    width: 100%;
    position: relative;
    // background-color:blue;
    .cta {
      position: absolute;
      bottom: 5%;
      width: 100%;
      .action {
        width: 48%;
        padding: 2% 5%;
        // filter: blur(1px);
        background-color: #ffffff00;
        border: 2px solid #ffffff;
        color: #fff;
      }

      @media (max-width: 768px) {
        bottom: 4%;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 154vw;
    }
  }

  .product-list-blocks {
    .p-block {
      padding: 0 1%;
      width: 100%;
      justify-content: space-evenly;
      margin-bottom: 10px;
      .cover {
        width: 27%;
        margin: 5px;
      }
      .mood {
        width: 27%;
        height: 70vh;
        background-size: cover;
        background-position: center;
        margin: 5px;
      }
      .text {
        width: 27%;
        margin: 5px;
      }
    }

    @media (max-width: 768px) {
      .p-block {
        flex-direction: column;
        justify-content: center;
        padding: 0%;
        .cover {
          width: 100%;
          margin: 0px;
        }
        .mood {
          display: none;
        }
        .text {
          width: 100%;
        }
      }
    }
  }

  .pad {
    padding: 5%;
  }

  .press-and-quote {
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .quote {
    display: flex;
    width: 100%;
    height: 15vw;
    justify-content: center;
    padding: 5px;
    // background-color: blue;

    .logo {
      width: 20%;
      // height: 40vw;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .text {
      // width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .text-2 {
        font-family: $font_4;
        line-height: 30px;
        font-size: 25px;
      }
      .head {
        text-align: center;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 40vw;
      .logo {
        width: 40vw;
        height: 40vw;
      }
      .text {
        width: 60vw;
        .text-2 {
          font-size: 18px;
        }
      }
    }
  }
  /* press */
  .press {
    display: flex;
    width: 100%;
    height: 20vw;
    position: relative;

    .logo {
      width: 20%;
      height: 20vw;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    .scrollable-list {
      justify-content: flex-start;
      width: 80%;
    }

    .image-list {
      // width: 70%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      .image-box {
        width: 20vw;
        height: 100%;
        background-size: cover;
        background-position: center;
        cursor: pointer;
        background-repeat: no-repeat;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 40vw;

      .logo {
        width: 40vw;
        height: 40vw;
        background-size: cover;
      }

      .scrollable-list {
        width: 60vw;
      }
    }
  }
  .text-1 {
    font-family: $font_3_bold;
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
  }
  .text-2 {
    font-size: 14px;
    text-align: justify;
    margin-bottom: 5px;
    font-family: $font_1;
  }
  .text-3 {
    font-family: $font_4;
    font-size: 19px;
  }
  /* main text block */
  .main-text-block {
    text-align: center;
    .author {
      font-family: $font_2;
      font-size: 13px;
    }
  }
  /* bounipun lab */
  .bounipun-lab {
    width: 100%;

    .cta {
      .action {
        width: auto;
        padding: 1% 2.5%;
      }
    }

    .cover {
      width: 100%;
      height: 70vh;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .text {
      width: 100%;
      padding: 1% 5%;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      .cover {
        width: 100vw;
        height: 50vw;
      }
      .text {
        width: 100%;
        padding: 5%;
      }
    }
  }
}
</style>
