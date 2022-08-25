<template>
  <div class="variant-block flex center col">
    <p>variant block</p>
    <!-- image 1 -->
    <UploadImageV2
      :multipleUpload="true"
      label="Variant Image"
      v-model="image"
    />

    <!-- title -->
    <InputBox :label="`Title for [${variantName}]`" v-model="title" />
    <!-- paragraph -->
    <TextBox :label="`Paragraph for [${variantName}]`" v-model="paragraph" />
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
