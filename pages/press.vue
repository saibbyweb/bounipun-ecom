<template>
  <div class="press">
    <div class="press-box flex center">
    <slideshow
      ref="slideshow"
      :images="pressImageList"
      :slideshowOptions="{ thumbnails: true }"
      dSlideHeight="70vh"
      mSlideHeight="60vh"
      :dSlideWidth="35"
      size="contain"
      @slideChanged="slideChanged"
    />
    <!-- main text block -->
    <div v-if="captionsList.length !== 0" class="main-text-block center-col">


      <h2 class="text-1">{{ captionsList[activeCaptionIndex].heading }}</h2>
      <p class="text-2"></p>
      <p class="text-3">{{ captionsList[activeCaptionIndex].paragraph }}</p>


    </div>
    </div>
    <!-- <div class="flex center">
    <h1 class="title"> Bounipun in Press </h1>
    </div> -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Press | Bounipun Kashmir"
    };
  },
  mounted() {
    this.fetchPressImages();
  },
  data() {
    return {
      pressImageList: [],
      captionsList: [],
      activeCaptionIndex: 0
    };
  },
  methods: {
    slideChanged(index) {
      if(index <= this.captionsList.length -1)
      this.activeCaptionIndex = index;
    },
    async fetchPressImages() {
      /* fetch active homepage layout */
      const layout = await this.$fetchData("homepages", {
        status: true
      });

      if (!layout.fetched) {
        console.log("Layout not fetched");
        return;
      }
      console.log(layout.doc.press.imageList);
      this.pressImageList = layout.doc.press.imageList.map(image =>
        // this.$getImagePath(image.path)
        this.$getOriginalPath(image.path)
      );

      this.captionsList = layout.doc.press.captions;
    }
  }
};
</script>

<style lang="scss" scoped>
.press-box {
  margin-top: 10vh;
  @media(max-width: 768px) {
      flex-direction: column;
  }
}

.title {
  font-family: $font_2_bold;
  text-transform: uppercase;
  margin:40px 0;
  font-size: 35px;
}

.main-text-block {
  padding: 30px 5%;
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
}
</style>
