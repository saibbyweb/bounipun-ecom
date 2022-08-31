<template>
  <div class="lab-block flex center" :class="{ reverse: index % 2 !== 0 }">
    <!-- main image -->
    <div class="main-image" :style="setBg(blockDetail.mainImage)"></div>
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
    },
    setBg: Function,
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.lab-block {
  .main-image {
    width: 35%;
    aspect-ratio: 1;
    border: 12px solid rgb(255, 255, 255);
    box-shadow: 0 0 0 1.5px rgb(71, 71, 71);
  }

  .name-and-para {
    width: 40%;
  }

  @media(max-width: 768px) {
      flex-direction: column;
  }
}
</style>
