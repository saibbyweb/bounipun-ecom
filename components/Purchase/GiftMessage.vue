<template>
  <div class="gift-message">
    <!-- <img class="close-btn" src="/icons/dark/close.png" @click="$emit('close')" /> -->
    <div class="flex center">
    <label> To: </label>
    <input class="text-box" type="text" :value="gift.to" placeholder="To"/>
    </div>
    
     <div class="flex center">
     <label> From </label>
    <input class="text-box" type="text" :value="gift.from" placeholder="From" />
     </div>
    <div class="flex center">
     <label> Note: </label>
    <textarea class="text-box" :value="gift.message" maxlength="50" placeholder="Personal Message within 50 characters" />
    </div>
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

<style lang="scss" scoped>
.gift-message {
    position: relative;
    width:100%;
    margin-top:10px;
    padding:10px;
background-color: #5b6467;
background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);
border-radius: 5px;

    .flex {
        margin: 3px 0;
    }
    label {
        width:20%;
        font-size: 15px;
        font-family: $font_2;
    }
    
    .text-box {
        width:80%;
        resize: none;
        border: 1px solid #efefef;
    }
}
</style>
