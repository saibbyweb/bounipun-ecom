<template>
  <div class="variant-block flex center col">
    <p>variant block</p>
    <!-- image 1 -->
    <!-- <UploadImageV2
        :multipleUpload="true"
        label="Variant Image"
        v-model="doc.desktopMainSlideshow.slides"
      /> -->

    <!-- title -->
    <!-- <InputBox
            :label="`Title for [${heroBlock.name}]`"
            v-model="doc.heroBlockDetails[heroBlock.key].title"
          /> -->
    <!-- paragraph -->
    <!-- <TextBox
            :label="`Paragraph for [${heroBlock.name}]`"
            v-model="doc.heroBlockDetails[heroBlock.key].paragraph"
          /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "",
      title: "",
      paragraph: "",
    };
  },
};
</script>
