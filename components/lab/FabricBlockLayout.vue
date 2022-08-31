<template>
  <div class="lab-block flex center wrap" :class="{ reverse: index % 2 !== 0 }">
    <!-- main image -->
    <div class="main-image" :style="setBg(blockDetail.mainImage)"></div>

    <!-- name & paragraph -->
    <div class="name-and-para flex center col">
      <h2 class="name">{{ blockDetail.name }}</h2>
      <div class="hr" />
      <p class="para">{{ blockDetail.paragraph }}</p>
    </div>

    <!-- sub text and images -->
    <div class="flex sub-texts-and-images">
      <!-- sub texts -->
      <div class="sub-texts flex col">
        <div class="sub-text">
          <h5>{{ blockDetail.subHeading1 }}</h5>
          <p>{{ blockDetail.subParagraph1 }}</p>
        </div>
        <div class="sub-text">
          <h5>{{ blockDetail.subHeading2 }}</h5>
          <p>{{ blockDetail.subParagraph2 }}</p>
        </div>
        <div class="sub-text">
          <h5>{{ blockDetail.subHeading3 }}</h5>
          <p>{{ blockDetail.subParagraph3 }}</p>
        </div>
      </div>

      <!-- sub images -->
      <div class="sub-images flex center col">
        <div class="sub-image" :style="setBg(blockDetail.subImage1)"></div>
        <div class="sub-image" :style="setBg(blockDetail.subImage2)"></div>
      </div>
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
      subImage1: String,
      subImage2: String,
      subHeading1: String,
      subParagraph1: String,
      subHeading2: String,
      subParagraph2: String,
      subHeading3: String,
      subParagraph3: String,
    },
    setBg: Function,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.lab-block {
  gap: 10%;
  padding-bottom: 120px;
  .main-image {
    width: 34%;
    aspect-ratio: 1;
    position: relative;
  }

  .name-and-para {
    width: 45%;

    .name {
      line-height: 2.9vw;
    }

    .hr {
      width: 14%;
      margin-left: 1%;
      align-self: flex-start;
    }
  }

  .sub-texts-and-images {
    width: 100%;
    position: relative;
    .sub-texts {
      width: 40%;
      margin-top: 40px;
      margin-left: 15.5%;
      border-left: 1px solid rgba(128, 128, 128, 0.322);
      padding: 2%;
      gap: 6vw;

      .sub-text {
        h5 {
          font-family: $font_1;
          font-weight: 900;
          font-size: 1.4vw;
        }

        p {
          font-family: $font_3;
          font-size: 1.25vw;
          color: rgb(49, 49, 49);
        }
      }
    }

    .sub-images {
      width: 50%;
      gap: 30px;
      position: absolute;
      top: -20%;
      right: 0;
      .sub-image {
        width: 23vw;
        aspect-ratio: 1;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
