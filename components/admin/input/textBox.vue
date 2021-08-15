<template>
  <div class="text-box" :class="{nonAdmin}">
    <div style="display:flex; align-items:center;">
      <div v-if="internal" class="internal"></div>
      <label class="label"> {{ label }} </label>
    </div>
    <textarea
      class="textarea-box"
      @input="$emit('input', $event.target.value)"
      :value="value"
     :disabled="disabled"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    internal: {
      type: Boolean,
      default: false
    },
    nonAdmin: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.text-box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2%;
  width: 100%;


  .internal {
    height: 10px;
    width: 10px;
    background-color: rgb(22, 144, 220);
  }

  .label {
    font-family: $font_2_bold;
    color: $gray;
    text-transform: uppercase;
    font-size: 10px;
    padding: 2%;
    margin-left: 5px;
    font-weight: 900;
  }

  .textarea-box {
    padding: 10px 15px;
    border: none;
    -webkit-appearance: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);
    color: $gray;
    font-family: $font_2;
    letter-spacing: 1px;
    box-sizing: border-box;
    resize: none;
  }
    &.nonAdmin {
      padding: 5%;
      .textarea-box {
          height:150px;
      }
  }

}
</style>
