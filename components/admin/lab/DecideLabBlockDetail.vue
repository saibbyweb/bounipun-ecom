<template>
    <div class="decide-block">
       <component :is="blocks[alias]" v-for="(blockDetail, index) in blockDetails" :key="index" />
    </div>
</template>

<script>
import ColorBlock from './ColorBlock.vue';
import VariantBlock from "./VariantBlock.vue";
import FabricBlock from "./FabricBlock.vue";

export default {
    props: {
        alias: String,
        blockDetails: Array
    },
    data() {
        return {
            blocks: {
                variant: VariantBlock,
                color: ColorBlock,
                fabric: FabricBlock
            }
        }
    }
}
</script>

<style lang="scss">
.section {
    border: 1px solid red;
}
</style>