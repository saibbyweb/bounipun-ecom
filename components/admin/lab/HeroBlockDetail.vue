<template>
  <div class="hero-block-detail">
    <!-- TODO: (add ref) main image -->
    <UploadImage
      :multipleUpload="false"
      :label="`Main Image`"
    />

    <!-- title -->
    <InputBox
      :label="`Title for`"
    />
    <!-- paragraph -->
    <TextBox
      :label="`Paragraph `"
    />
  </div>
</template>

<script>

</script>
