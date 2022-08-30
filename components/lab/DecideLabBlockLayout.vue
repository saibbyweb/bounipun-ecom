<template>
  <div class="decide-lab-block-layout">
    <component
      v-for="(blockDetail, index) in blockDetails"
      :key="blockDetail.key"
      :is="blocks[alias]"
      :blockDetail="blockDetail"
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
};
</script>
