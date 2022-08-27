<template>
  <div class="decide-block">

      <component 
      v-for="(blockDetail, index) in blockDetails"
      @input="$emit('input', {payload: $event, index })"
      :key="blockDetail.key"
      :is="blocks[alias]" 
      :blockDetail="blockDetail" 
      :blockKey="blockKey" 
      :remover="remover" 
      :colorCategories="colorCategories"
      :index="index" />

  </div>
</template>

<script>
import ColorBlock from "./ColorBlock.vue";
import VariantBlock from "./VariantBlock.vue";
import FabricBlock from "./FabricBlock.vue";

export default {
  props: {
    alias: String,
    blockDetails: Array,
    blockKey: String,
    remover: Function,
    colorCategories: Array
  },
  data() {
    return {
      blocks: {
        variant: VariantBlock,
        color: ColorBlock,
        fabric: FabricBlock,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.section {
  border: 1px solid red;
}
</style>
