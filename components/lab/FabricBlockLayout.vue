<template>
  <div class="lab-block flex wrap" :class="{ reverse: index % 2 !== 0 }">
    <!-- main image -->
    <div class="main-image" :style="setBg(blockDetail.mainImage)"></div>

    <!-- name & paragraph -->
    <div class="name-and-para flex col">
      <h2 class="name">{{ blockDetail.name }}</h2>
      <div class="hr" />
      <p class="para">{{ blockDetail.paragraph }}</p>
    </div>

    <!-- sub text and images -->
    <div
      class="flex sub-texts-and-images"
      :class="{ reverse: index % 2 !== 0 }"
    >
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
      <div class="sub-images flex center">
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
  padding-bottom: 40px;
  .main-image {
    width: 34%;
    aspect-ratio: 1;
    position: relative;
  }

  .name-and-para {
    width: 45%;

    .name {
      line-height: 2.9vw;
      font-size: 2.7vw;
    }

    .hr {
      width: 14%;
      /* margin-left: 1%; */
      /* align-self: flex-start; */
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
      flex-direction: column;
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

    &.reverse {
      flex-direction: row-reverse;

      .sub-texts {
        margin-left: 0;
        /* margin-top: 11%; */
        margin-right: 5.5%;
      }

      .sub-images {
        left: 0;
        /* top: 0%; */
        right: auto;
      }
    }
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    .main-image {
      width: 70%;
      margin-left: 10%;
    }

    .name-and-para {
      align-items: flex-start;
      justify-content: flex-start;
      width: 65%;
      margin-left: 10%;

      .name {
        line-height: 4.2vw;
        font-size: 4.3vw;
      }
    }

    .sub-texts-and-images {
      flex-direction: column-reverse;

      .sub-texts {
        width: 80%;
        padding-left: 4%;
        margin-left: 10%;

        .sub-text {
          h5 {
            font-size: 3vw;
          }

          p {
            font-size: 2.9vw;
          }
        }
      }

      .sub-images {
        margin-top: 7%;
        width: 90%;
        position: relative;
        flex-direction: row;

        .sub-image {
          width: 30vw;
        }
      }
    }

    &.reverse {
      flex-direction: column;
      align-items: flex-end;
      .main-image {
        margin-right: 10%;
      }

      .name-and-para {
        margin-right: 10%;
        align-items: flex-end;

        .hr {
          align-self: flex-end;
        }
      }

      .sub-texts-and-images {
        flex-direction: column-reverse;
        align-items: flex-end;
        .sub-texts {
          margin-left: 0;
          margin-right: 10%;
          padding-left: 2%;
          padding-right: 4%;
          border-left: none;
          border-right: 1px solid rgba(128, 128, 128, 0.322);
          text-align: right;
        }
      }
    }
  }
}
</style>
