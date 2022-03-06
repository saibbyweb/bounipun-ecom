<template>
<div class="gift-message-wrapper flex center col">
  <div class="gift-message shadow">
    <div class="header">
      <span> Message Contents: </span>
    </div>
    <div class="flex center">
      <!-- <label> To: </label> -->
      <input class="text-box" type="text" :value="value.to" placeholder="To" @input="$emit('input', {...value, to: $event.target.value})" :disabled="disabled" />
    </div>

    <div class="flex center">
      <!-- <label> From </label> -->
      <input
        class="text-box"
        type="text"
        :value="value.from"
        placeholder="From"
        @input="$emit('input', {...value, from: $event.target.value})"
        :disabled="disabled" 
      />
    </div>
    <div class="flex center">
      <!-- <label> Note: </label> -->
      <textarea
        class="text-box"
        :value="value.message"
        maxlength="150"
        placeholder="Personal Message within 150 characters"
        @input="$emit('input', {...value, message: $event.target.value})"
        :disabled="disabled" 
      />
    </div>
     <!-- <div class="header"></div> -->
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
    },
    disabled: {
      type: Boolean,
      default: false
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
  padding-bottom:4px;
  // padding: 10px;
  // background-color: #5b6467;
  // background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);
  // box-shadow: 1px 1px 15px rgba(0,0,0,0.16);
  // border-radius: 5px;

  .header {
    background-color: $brown;
    background-color: #333;
    height:25px; width:100%;
    margin-bottom:7px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0;

    span {
      color:white;
      font-size:12px;
    }
  }

  .flex {
    margin: 3px 0;
  }
  label {
    width: 20%;
    font-size: 15px;
    font-family: $font_2;
  }

  .text-box {
    width: 97%;
    resize: none;
    border: 1px solid #efefef;
    padding:3px;
    margin:2px 6px;

    &:read-only {
      background-color:white;
    }
  }
}
</style>
