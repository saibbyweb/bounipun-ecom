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
import ColorBlockLayout from "./ColorBlockLayout.vue";
import VariantBlockLayout from "./VariantBlockLayout.vue";
import FabricBlockLayout from "./FabricBlockLayout.vue";

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
.lab-block {
  width: 100%;
  margin: 50px 0;
  gap: 5%;

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
