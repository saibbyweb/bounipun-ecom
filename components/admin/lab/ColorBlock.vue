<template>
  <!-- <Accordion :heading="`Color - ${index+1} `"> -->
  <div class="color-block flex col">
    <p class="title">Varaint {{ index + 1 }}</p>
    <img
      @click="remover(blockKey, index)"
      class="delete"
      src="/icons/dark/remove-cart-item.png"
    />

    <div class="flex">
      <div class="flex col" style="width: 100%">
        <div class="flex">
          <!-- name -->
          <InputBox label="Color Name" v-model="localColor.name" />
          <!-- category -->
          <InputBox label="Color Category" v-model="localColor.category" />
        </div>

        <div class="flex">
          <!-- image 1 -->
          <UploadImageV2
            :multipleUpload="false"
            label="Main Image"
            v-model="localColor.mainImage"
          />

          <!-- color image -->
          <UploadImageV2
            :multipleUpload="false"
            label="Color Image"
            v-model="localColor.colorImage"
          />
        </div>
      </div>

      <!-- paragraph -->
      <TextBox
        long
        slim
        :label="`Paragraph for [${localColor.name}]`"
        v-model="localColor.paragraph"
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
    localColor: {
      handler(newValue) {
        // Object.keys(newValue).forEach((key) => {
        //   this.localBlock[key] = newValue[key];
        // });
      },
      deep: true,
    },
    localColor: {
      handler(newValue) {
        //    alert('well')
        this.$emit("input", newValue);
      },
      deep: true,
    },
  },
  mounted() {
    Object.keys(this.blockDetail).forEach((key) => {
      this.localColor[key] = this.blockDetail[key];
    });
  },
  data() {
    return {
      localColor: {
        key: "",
        name: "",
        mainImage: "",
        paragraph: "",
        colorImage: "",
        category: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.color-block {
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
