<template>
    <div class="decide-block">
       <component :is="blocks[alias]" />
    </div>
</template>

<script>
import ColorBlock from './ColorBlock.vue';
import VariantBlock from "./VariantBlock.vue";
import FabricBlock from "./FabricBlock.vue";

export default {
    props: {
        alias: String,
        heroBlockDetails: Object
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