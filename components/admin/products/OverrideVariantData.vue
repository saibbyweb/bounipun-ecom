<template>
  <div class="override-variant-data">
    <Accordion ref="list" heading="Override Variant Data">
      <div class="section" v-for="variant in variantsInfo" :key="variant.code">
        <!-- variant code  -->
        <InputBox
          :disabled="true"
          label="Variant Code"
          v-model="variant.variantCode"
        />

        <!-- variant info #1  -->
        <InputBox label="Info 1" v-model="variant.info1" />

        <!-- variant info #2  -->
        <InputBox label="Info 2" v-model="variant.info2" />
        <!-- variant image  -->
        <InputBox label="Variant Image" v-model="variant.variantImage" />
        <!-- variant hex color  -->
        <InputBox label="Hex Color" v-model="variant.hexColor" />
      </div>
    </Accordion>
  </div>
</template>

<script>
const addVariantInfo = (variantCode) => {
  return {
    variantCode,
    variantImage: "",
    info1: "",
    info2: "",
    hexColor: "",
  };
};

export default {
  watch: {
    selectedVariants: {
      handler: function (newVal, oldVal) {
        this.populateForm();
        this.$refs.list.toggle();
      },
      deep: true,
    },
  },
  props: {
    selectedVariants: {
      type: Array,
      default: () => [],
    },
    setVariantsInfo: Function,
  },
  mounted() {
    //    this.populateForm();
    this.selectedVariants.forEach((v) => {
      this.variantsInfo.push(addVariantInfo(v.code));
    });
  },
  methods: {
    populateForm() {
      /* find matched  */
      const matchedProducts = this.variantsInfo.filter(
        (v) =>
          this.selectedVariants.findIndex((sv) => sv.code == v.variantCode) !==
          -1
      );

      if (this.selectedVariants.length > matchedProducts.length) {
        const newVariants = this.selectedVariants.filter(
          (sv) =>
            this.variantsInfo.findIndex((v) => v.variantCode === sv.code) === -1
        );
        console.log(newVariants);

        this.variantsInfo.push(addVariantInfo(newVariants[0].code));
      } else {
        this.variantsInfo = [];
        matchedProducts.forEach((v) => {
          this.variantsInfo.push(v);
        });
      }

      /* update doc */
      this.setVariantsInfo(this.variantsInfo);
    },
  },
  data() {
    return {
      variantsInfo: [],
    };
  },
};
</script>

<style scss="scoped">
.section {
    border: 3px dotted #efefef;
    margin: 15px 0;
}
</style>
