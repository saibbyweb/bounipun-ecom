<template>
  <div class="input-credential" :class="{fullWidth}">
    <label class="label"> {{ label }} </label>
    <div class="input-box">
      <!-- country code -->
      <div v-if="isMobileNumber" class="country-code">
        {{ countryDialCode }}
      </div>
      <!-- checked -->
      <div v-if="checked" class="checked flex center">
        <img src="/icons/simple_green_check.png" />
      </div>

      <input
        class="field"
        :type="type"
        :value="value"
        @input="emitInput"
        :disabled="disabled"
        :class="{ isMobileNumber, uppercase, textarea, isUnlocker, fullWidth }"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    type: { type: String, default: "text" },
    disabled: { type: Boolean, default: false },
    clearError: { type: Boolean, default: true },
    uppercase: { type: Boolean, default: false },
    checked: { type: Boolean, default: false },
    isMobileNumber: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    isUnlocker: {
      type: Boolean,
      default: false,
    },
    placeholder: { type: String, default: "" },
    textarea: { type: Boolean, default: false },
    countryDialCode: String,
    error: {
      status: Boolean,
      msg: String,
    },
  },
  data() {
    return {
      // value: ""
    };
  },
  methods: {
    emitInput($event) {
      this.$emit("input", $event.target.value);
      if (this.clearError && this.$parent.error !== undefined)
        this.$parent.error.status = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-credential {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: 2% 0;



  @media (max-width: 768px) {
    padding: 5% 0;
  }

    &.fullWidth {
    padding: 2% 0;
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

  .input-box {
    position: relative;
    width: 100%;

    .country-code {
      position: absolute;
      width: 15%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: $font_2;
      border: 1px solid $gray;
      background-color: $dark_gray;
      color: white;
      font-size: 13px;
    }

    .checked {
      position: absolute;
      width: 15%;
      height: 100%;
      right: 0;
      top: 0;

      img {
        height: 20px;
        width: 20px;
      }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .field {
      width: 100%;
      padding: 10px 15px;
      border: none;
      -webkit-appearance: none;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);
      color: $gray;
      font-family: $font_2_semibold;
      letter-spacing: 1px;
      

      &.fullWidth {
        box-sizing: border-box;
      }

      &.uppercase {
        text-transform: uppercase;
      }

      &.isMobileNumber {
        text-indent: 16%;
      }

      &.isUnlocker {
        font-size: 50px;
        box-shadow: none;
        border-bottom: 1px solid #efefef;
        text-align: center;
        box-sizing: content-box;

        &::placeholder {
          font-size: 1.7vw;
          color: #9d9d9d;
        }
    
        padding: 10px 0px;
        height: 50px;
        line-height: 50px;
        @media (max-width: 768px) {
          font-size: 27px;
          height:27px;
          line-height: 27px;
       

          &::placeholder {
            font-size: 27px;
            line-height: 3.4vw;
          }
        }

      }

      &.textarea {
        height: 200px;
      }
    }
  }
}
</style>
