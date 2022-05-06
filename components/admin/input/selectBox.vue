<template>
  <div class="select-box" :class="{ slim }" :style="slim ? {flexDirection: 'column'} : {} ">
    <div style="display: flex; align-items: center; width: 50%" >
      <div v-if="internal" class="internal"></div>
        <label v-if="label !== undefined" class="label"> {{ label }} </label>
    </div>
    <select
      :class="{ slim }"
      class="select shadow"
      :value="value"
      @change="$emit('input', $event.target.value)"
      :disabled="disabled"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: String,
    options: Array,
    disabled: {
      type: Boolean,
      default: false,
    },
    internal: {
      type: Boolean,
      default: false,
    },
    slim: {
      type: Boolean,
      default: false,
    },
    css: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2%;
  width: 100%;
}

.select-box {
  display: flex;
  justify-content: space-between;
  align-items: center;

     &.slim {
    // height:33px;
      margin-top:6px;

    }

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

  select {
    background: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    margin: 3px;
    font-size: 11px;
    color: $dark_gray;

    &.slim {
      padding: 8px 10px;
   
    }
  }
}
</style>
