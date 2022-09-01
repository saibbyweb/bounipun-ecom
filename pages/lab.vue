<template>
  <div class="page -wh">
    <!-- hero -->
    <div v-if="layoutFetched" class="hero flex center" :style="setHeroImage()">
      <!-- hero content -->
      <div class="content flex center col">
        <!-- title -->
        <h1 class="title">{{ layout.title }}</h1>
        <!-- tagline -->
        <p class="tagline">{{ layout.tagline }}</p>

        <!-- hero blocks -->
        <div class="hero-blocks flex">
          <div
            class="hero-block flex col center"
            v-for="(heroBlock, index) in layout.heroBlocks"
            :key="index"
          >
            <h3 class="name">{{ heroBlock.name }}</h3>
            <p class="para">{{ heroBlock.paragraph }}</p>
            <button class="action outline">Explore</button>
          </div>
        </div>
      </div>
      <!-- hero content ** ends here -->
    </div>

    <!-- hero block details -->
    <div
      class="hero-block-details"
      v-for="(heroBlock, index) in layout.heroBlocks"
      :key="index"
    >
 
      <DecideLabBlockLayout
        :name="heroBlock.name"
        :paragraph="heroBlock.paragraph"
        :alias="heroBlock.alias"
        :blockDetails="layout.heroBlockDetails[heroBlock.key]"
        :colorCategories="colorCategories"
      />
    </div>
    <!-- colors -->
    <!-- fabrics -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: {},
      colorCategories: [],
      colorCategoriesFetched: false,
      layoutFetched: false,
    };
  },
  mounted() {
    this.fetchLabLayout();
    this.fetchColorCategories();
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    },
  },
  methods: {
    async fetchLabLayout() {
      const layout = await this.$fetchData("lab", {
        status: true,
      });
      if (!layout.fetched) {
        console.log("Layout not fetched");
        return;
      }
      this.layout = layout.doc;
      this.layoutFetched = true;
    },
    async fetchColorCategories() {
      const result = await this.$fetchCollection("color_categories");
      this.colorCategories = result.docs.map(({ name }) => {
        return name;
      });
      this.colorCategoriesFetched = true;
    },
    setHeroImage() {
      const heroImage = this.isMobile
        ? this.layout.heroImageMobile
        : this.layout.heroImage;

      return {
        backgroundImage: `url(${this.$getOriginalPath(heroImage)})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
}
.hero {
  min-height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;

  .content {
    background-color: rgba(255, 255, 255, 0.881);
    height: 70vh;
    width: 88%;
    gap: 5px;

    .title {
      font-family: $font_1_bold;
      font-size: 3.8vw;
      letter-spacing: 1px;
      line-height: 4.9vw;
    }
    .tagline {
      font-family: $font_3;
      font-size: 1.45vw;
      color: rgb(42, 42, 42);
    }
    .hero-blocks {
      width: 90%;

      /* background-color: brown; */
      .hero-block {
        gap: 15px;
        margin-top: 4%;
        padding: 0% 4%;
        &:nth-child(1) {
          border-right: 1px solid rgb(189, 189, 192);
        }
        &:nth-child(3) {
          border-left: 1px solid rgb(208, 208, 210);
        }

        .name {
          text-align: center;
          text-transform: uppercase;
          font-family: $font_1;
          letter-spacing: 1px;
          font-size: 1.8vw;
        }
        .para {
          font-size: 1.25vw;
          color: rgb(42, 42, 42);
          font-family: $font_3;
          line-height: 1.7vw;
          text-align: center;
        }
        .outline {
          margin-top: 15px;
          font-size: 11px;
          padding: 1% 7%;
          background-color: white;
          border: 1.5px solid gray;
          color: black;
          font-family: $font_1;
        }
      }
    }
  }

  @media (max-width: 768px) {
    min-height: fit-content;
    .content {
      height: fit-content;
      margin: 15vw 8vw;
      padding: 6% 10%;

      .title {
        font-size: 7.8vw;
        line-height: 7.9vw;
      }
      .tagline {
        font-size: 3.45vw;
      }

      .hero-blocks {
        flex-wrap: wrap;
        width: 90%;
        margin-top: 10px;

        .hero-block {
          padding: 14% 0%;
          &:nth-child(1) {
            border-right: none;
            border-bottom: 1px solid rgb(189, 189, 192);
            /* border-bottom: 1px solid rgb(189, 189, 192); */
          }
          &:nth-child(2) {
            border-left: none;
            border-bottom: 1px solid rgb(189, 189, 192);
          }

          &:nth-child(3) {
            border-left: none;
          }
          .name {
            letter-spacing: 1px;
            font-size: 4.8vw;
          }
          .para {
            font-size: 3.65vw;
            line-height: 3.8vw;
          }
          .outline {
            margin-top: 15px;
            font-size: 2.5vw;
            width: fit-content;
            border: 1px solid gray;
            color: gray;
          }
        }
      }
    }
  }
}
</style>
