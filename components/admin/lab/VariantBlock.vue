<template>
  <div class="variant-block flex col">
    <div class="flex">
      <div class="flex col" style="width: 100%">
        <!-- image 1 -->
        <UploadImageV2
          :multipleUpload="true"
          label="Variant Image"
          v-model="image"
        />

        <!-- title -->
        <InputBox :label="`Title for [${variantName}]`" v-model="title" />
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
</template>

<script>
export default {
  props: {
    blockDetail: Object,
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
