<template>
  <!-- <Accordion :heading="`Variant - ${index+1} `"> -->
  <div class="variant-block flex col">
    <p class="title">Varaint {{ index + 1 }}</p>
    <img
      @click="remover(blockKey, index)"
      class="delete"
      src="/icons/dark/remove-cart-item.png"
    />

    <div class="flex">
      <div class="flex col" style="width: 100%">
        <!-- name -->
        <InputBox
          label="Variant Name"
          v-model="localVariant.name"
        />
        <!-- image 1 -->
        <UploadImageV2
          :multipleUpload="false"
          label="Variant Image"
          v-model="localVariant.mainImage"
        />
      </div>

      <!-- paragraph -->
      <TextBox
        long
        slim
        :label="`Paragraph for [${localVariant.name}]`"
        v-model="localVariant.paragraph"
      />
    </div>
  </div>
  <!-- </Accordion> -->
</template>

<script>
export default {
  props: {
    blockKey: String,
    blockDetail: Object,
    index: Number,
    remover: Function,
  },
  watch: {
    localVariant: {
      handler(newValue) {
        // Object.keys(newValue).forEach((key) => {
        //   this.localBlock[key] = newValue[key];
        // });
      },
      deep: true,
    },
    localVariant: {
      handler(newValue) {
        //    alert('well')
        this.$emit("input", newValue);
      },
      deep: true,
    },
  },
  mounted() {
    Object.keys(this.blockDetail).forEach((key) => {
      this.localVariant[key] = this.blockDetail[key];
    });
  },
  data() {
    return {
      localVariant: {
        key: "",
        name: "",
        mainImage: "",
        paragraph: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.variant-block {
  padding: 7px 4px;
  margin-top: 20px;
  border: 2px dotted #efefef;
  position: relative;

  .title {
    position: absolute;
    left: 5px;
    top: -10px;
    background-color: rgb(57, 57, 57);
    color: white;
    z-index: 1;
    font-size: 12px;
    padding: 2px 10px;
    border-radius: 4px;
  }

  .delete {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 3%;
    z-index: 1;
  }
}
</style>
