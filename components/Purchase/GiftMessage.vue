<template>
<div class="gift-message-wrapper flex center col">
  <div class="gift-message">
    <div class="flex center">
      <label> To: </label>
      <input class="text-box" type="text" :value="value.to" placeholder="To" @input="$emit('input', {...value, to: $event.target.value})" />
    </div>

    <div class="flex center">
      <label> From </label>
      <input
        class="text-box"
        type="text"
        :value="value.from"
        placeholder="From"
        @input="$emit('input', {...value, from: $event.target.value})"
      />
    </div>
    <div class="flex center">
      <label> Note: </label>
      <textarea
        class="text-box"
        :value="value.message"
        maxlength="50"
        placeholder="Personal Message within 50 characters"
        @input="$emit('input', {...value, message: $event.target.value})"
      />
    </div>
  </div>
   <p class="msg error" v-if="error.status"> {{ error.msg }} </p>
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
    },
    error: {
      type: Object,
      default: { status: false, msg: "" }
    }
  },
  data() {
    return {
      error: { status: false, msg: ''}
    }
  }
};
</script>

<style lang="scss" scoped>
.gift-message {
  position: relative;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background-color: #5b6467;
  background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);
  border-radius: 5px;

  .flex {
    margin: 3px 0;
  }
  label {
    width: 20%;
    font-size: 15px;
    font-family: $font_2;
  }

  .text-box {
    width: 80%;
    resize: none;
    border: 1px solid #efefef;
  }
}
</style>
