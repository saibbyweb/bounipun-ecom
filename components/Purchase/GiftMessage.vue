<template>
  <div class="gift-message">
    <input class="text-box" type="text" :value="gift.to" />
    <input class="text-box" type="text" :value="gift.from" />
    <input class="text-box" type="text" :value="gift.message" />
  </div>
</template>

<script>
export default {
  props: {
    gift: {
      type: Object,
      default: () => ({ status: false, to: "", from: "", message: "" }),
    },
  },
};
</script>
