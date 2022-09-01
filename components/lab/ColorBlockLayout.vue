<template>
  <div class="lab-block flex center" :class="{ reverse: index % 2 !== 0 }">
    <!-- main image -->
    <div class="main-image" :style="setBg(blockDetail.mainImage)">
      <div class="color-image" :style="setBg(blockDetail.colorImage)"></div>
    </div>

    <!-- name & paragraph -->
    <div class="name-and-para flex col">
      <span class="category"> {{ blockDetail.category }} </span>
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

    .category {
      background-color: $primary_dark;
      color: white;
      padding: 1% 3%;
      font-size: 1.1vw;
    }
  }

  &.reverse {
    .main-image {
      .color-image {
        bottom: -15%;
        left: -7%;
        right: auto;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .main-image {
      width: 62%;
      .color-image {
        width: 24vw;
        height: 30vw;
      }
    }

    .name-and-para {
      width: 70%;

      .category {
        font-size: 2vw;
      }
    }

  }
}
</style>
