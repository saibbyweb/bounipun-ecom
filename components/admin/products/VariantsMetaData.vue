<template>
  <div class="variants-meta-data">
    <label class="label"> Variant Meta Data : </label>
    <br />
    <br />
    <!-- add new button -->
    <div class="add-new flex center" style="gap: 10px">
      <SelectBox v-model="selectedVariant" :options="variantOptions">
      </SelectBox>
      <button class="action small" @click="addNewVariantMeta">+ Add New</button>
    </div>
    <br />
    <!-- list -->
    <Accordion
      v-for="(variant, index) in variantsInfo"
      :key="variant.variantCode"
      :heading="variant.variantCode"
    >
      <div class="section">
        <img
          class="close"
          src="/icons/dark/close.png"
          @click="removeVariantMeta(index)"
        />
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
        <!-- <InputBox label="Variant Image" v-model="variant.variantImage" /> -->

        <UploadImageV2 label="Variant Image" :multipleUpload="false" v-model="variant.variantImage" location="variants-meta" />
        <!-- variant hex color  -->
        <InputBox label="Hex Color" v-model="variant.hexColor" />
      </div>
    </Accordion>
  </div>
</template>

<script>
const addVariantInfo = (variantCode = "") => {
  return {
    variantCode,
    variantImage: "",
    info1: "",
    info2: "",
    hexColor: "",
  };
};

export default {
  props: {
    variants: {
      type: Array,
      default: () => [],
    },
    variantsInfo: {
      type: Array,
      default: () => [],
    },
    updateVariantsInfo: Function,
  },
  data() {
    return {
      selectedVariant: "default",
    };
  },
  computed: {
    variantOptions() {
      return [
        ...this.variants.map((variant) => ({
          name: `${variant.name} | ${variant.code}`,
          value: variant.code,
        })),
        { name: "Select Variant", value: "default" },
      ];
    },
  },
  methods: {
    /* add caption box */
    addNewVariantMeta() {
      const alreadyThere =
        this.variantsInfo.findIndex(
          (v) => v.variantCode === this.selectedVariant
        ) !== -1;

      if (alreadyThere) {
        alert("Already added");
        return;
      }

      this.updateVariantsInfo({
        type: "push",
        payload: addVariantInfo(this.selectedVariant),
      });
      this.$forceUpdate();
    },
    removeVariantMeta(key) {
      this.updateVariantsInfo({
        type: "remove",
        key,
      });
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="scss" scoped>
.variants-meta-data {
  padding: 10px 5px;
  border: 1px solid #efefef;
}
</style>
