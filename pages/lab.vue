<template>
  <div class="page -wh">
    <!-- hero -->
    <div v-if="layoutFetched" class="hero flex center" :style="setHeroImage()">
      <!-- content -->
      <div class="content flex center col">
        <!-- title -->
        <h1 class="title">{{ layout.title }}</h1>
        <!-- tagline -->
        <p class="tagline">{{ layout.tagline }}</p>

        <!-- hero blocks -->
        <div class="hero-blocks">
          <div
            class="hero-block"
            v-for="(heroBlock, index) in layout.heroBlocks"
            :key="index"
          >
            <h3>{{ heroBlock.name }}</h3>
            <p>{{ heroBlock.paragraph }}</p>
          </div>
        </div>
      </div>
      <!-- content ** ends here -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: {},
      layoutFetched: false,
    };
  },
  mounted() {
    this.fetchLabLayout();
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
    setHeroImage() {
      return {
        backgroundImage: `url(${this.$getOriginalPath(this.layout.heroImage)})`,
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
    height: 65vh;
    width: 88%;

    .title {
      font-family: $font_1_bold;
      font-size: 42px;
      letter-spacing: 1px;
    }
    .tagline {
      font-family: $font_2;
    }
  }
}
</style>
