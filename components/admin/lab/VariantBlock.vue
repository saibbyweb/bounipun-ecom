<template>
<!-- <Accordion :heading="`Variant - ${index+1} `"> -->
  <div class="variant-block flex col">
      <p> Varaint {{ index + 1 }} </p>
          <img
           @click="remover(blockKey, index)"
            class="delete"
            src="/icons/dark/remove-cart-item.png"
          />

    <div class="flex">
      <div class="flex col" style="width: 100%">
        <!-- title -->
        <InputBox :label="`Title for [${variantName}]`" v-model="title" />
          <!-- image 1 -->
        <UploadImageV2
          :multipleUpload="true"
          label="Variant Image"
          v-model="image"
        />
      </div>

      <!-- paragraph -->
      <TextBox
        long
        slim
        :label="`Paragraph for [${variantName}]`"
        v-model="paragraph"
      />
    </div>
  </div>
<!-- </Accordion> -->
</template>

<script>
export default {
  props: {
    blockKey: String,
    index: Number,
    remover: Function
  },
  data() {
    return {
      variantName: "",
      image: "",
      title: "",
      paragraph: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.variant-block {
    padding: 7px 4px;
    margin-top: 15px;
    border: 2px dotted #efefef;
        position: relative;

        .delete {
      position: absolute;
      right: 5px;
      top: 5px;
      width: 3%;
      z-index: 1;
    }
}
</style>
