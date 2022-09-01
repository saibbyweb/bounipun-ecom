<template>
  <div class="decide-lab-block-layout">
    <LabBlockHeading :name="name" :paragraph="paragraph" />
    <component
      v-for="(blockDetail, index) in blockDetails"
      :key="blockDetail.key"
      :is="blocks[alias]"
      :blockDetail="blockDetail"
      :setBg="setBg"
      :index="index"
    />
  </div>
</template>

<script>
import FabricBlockLayout from "./FabricBlockLayout.vue";
import ColorBlockLayout from "./ColorBlockLayout.vue";
import VariantBlockLayout from "./VariantBlockLayout.vue";


export default {
  props: {
    name: String,
    paragraph: String,
    alias: String,
    blockDetails: Array,
  },
  data() {
    return {
      blocks: {
        variant: VariantBlockLayout,
        color: ColorBlockLayout,
        fabric: FabricBlockLayout,
      },
    };
  },
  methods: {
    setBg(image) {
      return {
        backgroundImage: `url(${this.$getOriginalPath(image)})`,
      };
    },
  },
};
</script>

<style lang="scss">
.decide-lab-block-layout {
  padding-bottom: 0px;
}
.lab-block {
  width: 100%;
  margin: 50px 0;
  gap: 5%;
  align-items: center;
  justify-content: center;

  &.reverse {
    flex-direction: row-reverse;
  }

  .main-image {
    width: 35%;
    aspect-ratio: 1;
    padding: 2%;
    /* height: 70vh; */
    background-size: cover;
    background-repeat: no-repeat;
  }
  .name-and-para {
    width: 40%;
    gap: 15px;
    align-items: center;
    justify-content: center;

    .name {
      text-align: center;
      text-transform: uppercase;
      font-family: $font_1;
      font-size: 3vw;
      line-height: 2.4vw;
      width: 100%;
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

  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;

    .name-and-para {
      margin-top: 30px;
      align-items: flex-start;
      justify-content: flex-start;
      margin-left: 15%;

      .name {
        text-align: left;
        font-size: 6vw;
        line-height: 6.4vw;
      }

      .hr {
        height: 2px;
        width: 8%;
      }

      .para {
        text-align: left;
        font-size: 3.6vw;
      }
    }

    &.reverse {
      flex-direction: column;
      align-items: flex-end;

      .name-and-para {
        margin-right: 15%;
        align-items: flex-end;
        .name {
          text-align: right;
        }
        .hr {
          height: 2px;
          width: 8%;
          text-align: right;
        }

        .para {
          text-align: right;
        }
      }
    }
  }
}
</style>
