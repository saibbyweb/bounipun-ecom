<template>
  <!-- <Accordion :heading="`Fabric - ${index+1} `"> -->
  <div class="fabric-block flex col">
    <p class="title">Fabric {{ index + 1 }}</p>
    <img
      @click="remover(blockKey, index)"
      class="delete"
      src="/icons/dark/remove-cart-item.png"
    />

    <div class="flex">
      <div class="flex col" style="width: 100%">
        <!-- name -->
        <InputBox label="Fabric Name" v-model="localFabric.name" />
        <!-- image 1 -->
        <UploadImageV2
          :multipleUpload="false"
          label="Fabric Main Image"
          v-model="localFabric.main"
        />
      </div>

      <!-- paragraph -->
      <TextBox
        long
        slim
        :label="`Paragraph for [${localFabric.name}]`"
        v-model="localFabric.paragraph"
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
    localFabric: {
      handler(newValue) {
        // Object.keys(newValue).forEach((key) => {
        //   this.localBlock[key] = newValue[key];
        // });
      },
      deep: true,
    },
    localFabric: {
      handler(newValue) {
        //    alert('well')
        this.$emit("input", newValue);
      },
      deep: true,
    },
  },
  mounted() {
    Object.keys(this.blockDetail).forEach((key) => {
      this.localFabric[key] = this.blockDetail[key];
    });
  },
  data() {
    return {
      localFabric: {
        key: "",
        name: "",
        mainImage: "",
        paragraph: "",
        subImage1: "",
        subImage2: "",
        subHeading1: "",
        subParagraph1: "",
        subHeading2: "",
        subParagraph2: "",
        subHeading3: "",
        subParagraph3: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.fabric-block {
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
