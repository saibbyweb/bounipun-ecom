<template>
  <div class="input-box">
    <div style="display: flex; align-items: center">
      <div v-if="internal" class="internal"></div>
      <label :title="options && options.title ? options.title : ''" class="label"> {{ label }} </label>
    </div>
    <input
      class="input-box"
      :class="{ uppercase }"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :disabled="disabled"
    />
    <span v-if="options && options.indicator" class="indicator" :class="isBounipunUrl(value) ? 'bounipunUrl' : 'externalLink'">
      {{ isBounipunUrl(value) ? '✅ Bounipun URL' : 'External Link'}}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String | Number,
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    internal: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
    },
  },
  methods: {
    isBounipunUrl(s) {
      if(s === undefined || s=== null || s === "")
        return false;
      return s.includes('bounipun.in')
    }
  },
};
</script>

<style lang="scss" scoped>
.input-box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2%;
  width: 100%;
  position: relative;

  .internal {
    height: 10px;
    width: 10px;
    background-color: rgb(22, 144, 220);
  }

  .indicator {
    font-size: 9px; position: absolute; top: 15%; right: 3%; 
    padding:2px 5px;
    &.bounipunUrl {
      // background-color: green;
     
      color:green;
    }
    &.externalLink {
      // background-color: #333333;
  
    }
  }

  .label {
    font-family: $font_2_bold;
    color: $gray;
    text-transform: uppercase;
    font-size: 9px;
    padding: 2%;
    margin-left: 5px;
    font-weight: 900;
  }

  .input-box {
    padding: 10px 10px;
    border: none;
    -webkit-appearance: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);
    color: $gray;
    font-family: $font_2;
    font-size: 11px;
    letter-spacing: 0.5px;

    &.uppercase {
      text-transform: uppercase;
    }

    &::placeholder {
      font-size: 11px;
      opacity: 0.6;
    }
  }
}
</style>
