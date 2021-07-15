<template>
  <div class="homepage" v-if="layout !== null">
    <!-- slidehshow (MOBILE)-->
    <slideshow
      v-if="layout.mainSlideshow.visible && isMobile"
      size="cover"
      :images="fetchSlideshow(layout.mainSlideshow.slides)"
      mSlideHeight="120vw"
      dSlideHeight="90vh"
      :dSlideWidth="100"
    />

    <!-- slideshow (DESKTOP) -->
    <slideshow
      v-if="layout.desktopMainSlideshow.visible && !isMobile"
      size="cover"
      :images="fetchSlideshow(layout.desktopMainSlideshow.slides)"
      mSlideHeight="120vw"
      dSlideHeight="90vh"
      :dSlideWidth="100"
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
      >
        <!-- cover image and CTA  -->
        <div v-if="block.visible" class="cover">
          <slideshow
            size="cover"
            :images="fetchSlideshow(block.slideshow)"
            mslideHeight="120vw"
            dSlideHeight="60vh"
            :dSlideWidth="30"
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
        class="p-block flex center"
        v-for="(block, index) in layout.productListBlocks"
        :key="index"
      >
        <!-- product list block cover image -->
        <div class="cover" v-if="block.visible">
          <slideshow
            size="cover"
            :images="fetchSlideshow(block.imageList)"
            mSlideHeight="120vw"
            dSlideHeight="30vw"
            :dSlideWidth="30"
            :dots="true"
          />

          <div class="cta center">
            <button class="action">{{ block.buttonText }}</button>
          </div>
        </div>

        <!-- mood image -->
        <div
          class="mood"
          v-if="block.visible"
          :style="`background-image: url(${$getImagePath(block.moodImage)})`"
        ></div>

        <div class="pad center-col text" v-if="block.visible">
          <h2 class="text-1">{{ block.text1 }}</h2>
          <p class="text-2">{{ block.text2 }}</p>
        </div>
      </div>
    </div>
    <!-- bounipun lab -->
    <div class="bounipun-lab center" v-if="layout.bounipunLab.visible">
      <div
        class="cover"
        :style="
          `background-image: url(${$getImagePath(layout.bounipunLab.image)})`
        "
      >
        <div class="cta center">
          <button class="action">{{ layout.bounipunLab.buttonText }}</button>
        </div>
      </div>
      <div class="pad center-col text">
        <h2 class="head text-1">{{ layout.bounipunLab.heading }}</h2>
        <p class="paragraph text-2">{{ layout.bounipunLab.paragraph }}</p>
      </div>
    </div>

    <div class="press-and-quote flex col">
      <!-- quote -->
      <div class="quote" v-if="layout.quote.visible">
        <!-- logo -->
        <div
          class="logo"
          :style="`background-image: url(${$getImagePath(layout.quote.logo)})`"
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
          :style="`background-image: url(${$getImagePath(layout.press.logo)})`"
        ></div>

        <div class="scrollable-list">
          <div class="list">
            <!-- image list -->
            <div class="image-list">
              <div
                class="image-box"
                v-for="(image, index) in layout.press.imageList"
                :key="index"
                :style="`background-image: url(${$getImagePath(image.path)})`"
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
  data() {
    return {
      layout: null,
      mainSlideshowImages: [],
      sections: []
    };
  },
  mounted() {
    this.fetchHomepageLayout();
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    }
  },
  methods: {
    async fetchHomepageLayout() {
      const layout = await this.$fetchData("homepages", {
        status: true
      });
      if (!layout.fetched) {
        console.log("Layout not fetched");
        return;
      }
      this.layout = layout.doc;
      console.log(this.layout);
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
      console.log(sections);
    },
    navigateToCollection(bounipun_collection) {
      this.$router.push("/Collections?slug=" + bounipun_collection.slug);
    },
    setSlideshow(images) {
      this.mainSlideshowImages = images.map(
        image => process.env.baseAWSURL + image.path
      );
    },
    fetchSlideshow(images) {
      return images.map(image => process.env.baseAWSURL + image.path);
    }
  }
};
</script>

<style lang="scss">
.homepage {
  // margin-top: 10vh;
  /* mainly collection blocks */
  .blocks {
    padding: 0 1%;
    justify-content: center;
    .block {
      width: 30%;
      margin: 5px;
      margin-bottom: 20px;
      overflow: hidden;
      justify-content: flex-start;

      .text {
        // background-color: red;
        // height: 40vh;
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
    height: 60vh;
    width: 100%;
    position: relative;
    // background-color:blue;
    .cta {
      position: absolute;
      bottom: 10%;
      width: 100%;
      .action {
        width: 38%;
        padding: 2% 5%;
        // filter: blur(1px);
        background-color: #ffffff00;
        border: 2px solid #ffffff;
        color: #fff;
      }

      @media (max-width: 768px) {
        bottom: 2%;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }

  .product-list-blocks {
    .p-block {
      width: 100%;

      .cover {
        background: red;
        width: 30%;
        margin: 5px;
      }
      .mood {
        width: 30%;
        height: 30vw;
        background-size: cover;
        background-position: center;
        margin: 5px;
      }
      .text {
        width: 30%;
        margin: 5px;
      }
    }

    @media (max-width: 768px) {
      
      .p-block {
        flex-direction: column;
        .cover {
          width: 100%;
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
    height: 20vw;
    justify-content: center;
    padding: 5px;
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
      .logo {
        width: 40vw;
        height: 40vw;
      }
      .text {
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

  .bounipun-lab {
    width: 100%;

    .cover {
      width: 50%;
      height: 50vh;
      background-size: cover;
      background-position: center;
    }
    .text {
      width: 50%;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      .cover {
        width: 100vw;
        height: 50vw;
      }
      .text {
        width: 100%;
      }
    }
  }
}
</style>
