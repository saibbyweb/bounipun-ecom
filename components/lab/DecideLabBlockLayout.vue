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
