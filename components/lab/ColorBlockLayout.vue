<template>
  <div class="lab-block flex center" :class="{ reverse: index % 2 !== 0 }">
    <!-- main image -->
    <div class="main-image" :style="setBg(blockDetail.mainImage)">
      <div class="color-image" :style="setBg(blockDetail.colorImage)"></div>
    </div>

    <!-- name & paragraph -->
    <div class="name-and-para flex center col">
      <h2 class="name">{{ blockDetail.name }}</h2>
      <div class="hr" />
      <p class="para">{{ blockDetail.paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    blockDetail: {
      name: String,
      mainImage: String,
      paragraph: String,
      colorImage: String,
      category: String,
    },
    setBg: Function,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.lab-block {
      gap: 15%;
  .main-image {
    width: 30%;
    aspect-ratio: 1/1.2;
    position: relative;

    .color-image {
        position: absolute;
        bottom: -15%;
        right: -7%;
        width: 13vw;
        height: 15vw;
        background-size: cover;
        background-repeat: no-repeat;
    }
  }

  .name-and-para {
    width: 25%;
  }
}
</style>
