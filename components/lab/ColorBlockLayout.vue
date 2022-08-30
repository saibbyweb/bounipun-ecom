<template>
  <div class="color-block flex center" :class="{reverse: index%2!==0}">
    <!-- main image -->
    <div class="main-image" :style="setBg(blockDetail.mainImage)">

        <div class="color-image"></div>
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
    },
    setBg: Function,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.color-block {
  width: 100%;
  margin: 50px 0;
  gap: 5%;

  &.reverse {
    flex-direction: row-reverse;
  }
  .main-image {
    width: 30%;
    aspect-ratio: 1/1.2;
    padding: 2%;
    /* height: 70vh; */
    background-size: cover;
    background-repeat: no-repeat;
    border: 12px solid rgb(255, 255, 255);
    box-shadow: 0 0 0 1.5px rgb(71, 71, 71);
  }
  .name-and-para {
    width: 30%;
    gap: 15px;
    .name {
      text-align: center;
      text-transform: uppercase;
      font-family: $font_1;
      font-size: 3vw;
      line-height: 2.4vw;
    }

    .hr {
      height: 2px;
      width: 8%;
      background-color: rgb(35, 35, 35);
    }

    .para {
      font-family: $font_3;
      text-align: center;
      font-size: 1.4vw;
    }
  }
}
</style>