<template>
    <div class="override-variant-data">
        <Accordion ref="list" heading="Override Variant Data">
            <p v-for="variant in selectedVariants" :key="variant.code"> {{  variant.code }}</p>
        </Accordion>
    </div>
</template>

<script>
export default {
    watch: {
        selectedVariants: {
            handler: function(newVal, oldVal) {
                console.log('Selected variants changed')
                this.$refs.list.toggle();
            },
            deep: true
        }
    },
    props: {
        selectedVariants: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scss="scoped">

</style>