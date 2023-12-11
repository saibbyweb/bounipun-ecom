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
      :contentOverflow="true"
      v-for="(variant, index) in variantsInfo"
      :key="variant.code"
      :heading="variant.code"
    >
      <div class="section" style="position: relative">
        <img
          class="close"
          src="/icons/dark/close.png"
          @click="removeVariantMeta(index)"
        />
        <!-- variant code  -->
        <InputBox
          :disabled="true"
          label="Variant Code"
          v-model="variant.code"
        />

        <!-- variant info #1  -->
        <InputBox label="Info 1" v-model="variant.info1" />
        <!-- variant info #2  -->
        <InputBox label="Info 2" v-model="variant.info2" />
        <!-- description -->
        <!-- <InputBox label="Description" v-model="variant.description" /> -->
        <TextBox v-model="variant.description" label="Description" />
        <UploadImageV2
          label="Variant Image"
          :multipleUpload="false"
          v-model="variant.image"
          location="variants-meta"
        />
        <!-- variant hex color  -->
        <div class="center" style="position: relative">
          <verte
            model="hex"
            @input="(val) => (variant.hex = val)"
            style="position: absolute; right: 5%; top: 50%; z-index: 5"
            menuPosition="right"
            :value="variant.hex"
          />
          <!-- fabric name -->
          <InputBox label="HEX Color" v-model="variant.hex" />
        </div>
      </div>
    </Accordion>
  </div>
</template>

<script>
const addVariantInfo = (code = "") => {
  return {
    code,
    image: "",
    info1: "",
    info2: "",
    hex: "",
    description: "",
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
    selectedCollection: String,
  },
  data() {
    return {
      selectedVariant: "default",
    };
  },
  computed: {
    variantOptions() {
      let allVariants = [];
      console.log(this.variants)
      if (
        this.selectedCollection === "wall-art" ||
        this.selectedCollection === "connoisseur-wall-art"
      ) {
        allVariants = [...this.variants.filter((v) => v.category === "Decor")];
      } else {
        allVariants = [ ...this.variants.filter((v) => v.category === "Scarfs")];
      }
      return [
        ...allVariants.map((variant) => ({
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
      const selectedVariantObject = this.variants.find(
        (v) => v.code === this.selectedVariant
      );
      const alreadyThere =
        this.variantsInfo.findIndex((v) => v.code === this.selectedVariant) !==
        -1;

      if (alreadyThere) {
        alert("Already added");
        return;
      }

      this.updateVariantsInfo({
        type: "push",
        // payload: addVariantInfo(this.selectedVariant),
        payload: {
          code: selectedVariantObject.code,
          image: "",
          info1: selectedVariantObject.info1,
          info2: selectedVariantObject.info2,
          hex: selectedVariantObject.hex,
          description: selectedVariantObject.description,
        },
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
  padding: 10px 15px;
  border: 1px solid #efefef;
}
.close {
  position: absolute;
  right: -2%;
  top: -2%;
  width: 25px;
  height: 25px;
  background-color: rgb(212, 204, 204);
  padding: 5px;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
}
</style>
