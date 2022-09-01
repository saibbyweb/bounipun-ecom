<template>
  <div class="decide-block">
    <!-- <Draggable
      v-model="localBlockDetails"
      ghost-class="ghost"
      :sort="true"
      @end="onDragEnd"
      class="items"
    >
      <transition-group type="transition" name="flip-list"> -->
        <component
          v-for="(blockDetail, index) in blockDetails"
          @input="$emit('input', { payload: $event, index })"
          :key="blockDetail.key"
          :is="blocks[alias]"
          :blockDetail="blockDetail"
          :blockKey="blockKey"
          :remover="remover"
          :colorCategories="colorCategories"
          :index="index"
        />
      <!-- </transition-group>
    </Draggable> -->
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
    colorCategories: Array,
  },
  methods: {
    onDragEnd() {
      // this.$emit('dragEnd', this.localBlockDetails)
    }
  },
  data() {
    return {
      blocks: {
        variant: VariantBlock,
        color: ColorBlock,
        fabric: FabricBlock,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.section {
  border: 1px solid red;
}
</style>
