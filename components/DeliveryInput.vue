<template>
  <!-- delivery address field -->
  <div class="delivery-input">
    <p v-if="error.status" class="error-msg"> {{ error.msg }} </p>
    <div class="input-box">
      <div v-if="isMobileNumber" class="country-code">{{ countryCode }}</div>
      <input
        class="field"
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
        autocomplete="new-password"
        :class="{ error: error.status, isMobileNumber }"
      />
    </div>
    <label class="label" :class="{ error: error.status }"> {{ label }} </label>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    isMobileNumber: {
      type: Boolean,
      default: false
    },
    countryCode: String,
    error: {
      status: Boolean,
      msg: String
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.delivery-input {
  display: flex;
  flex-direction: column-reverse;
  width: 90%;
  margin: 2% 0;

  .label {
    font-size: 12px;
    padding-left: 2%;
    transform: translateY(0%);
    color: #183437;
    transition: all 0.2s ease;
    text-transform: uppercase;
    margin-bottom: 3px;
    letter-spacing: 0.2px;

    &.error {
      color: #bf3d3d;
    }
  }

  .error-msg {
    text-align: center;
    font-size: 11px;
    width:100%;
    margin-top:10px;
    color: #a93737;
    background-color: white;
  }

  .input-box {
    position: relative;

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

    .field {
      border: none;
      border-radius: 0;
      // border-bottom: 1px solid $gray;
      width: 100%;
      padding: 2%;
      background-color: #e7e7e7;
      border-bottom: 2px solid #e7e7e7;
      transition: all 0.2s ease-in-out;
      font-family: $font_2;

      &:focus {
        border-bottom: 2px solid $dark_gray;
      }

      &.error {
        border-bottom: 2px solid #bf3d3d;
      }

      &.isMobileNumber {
        text-indent: 16%;
      }
    }

    .field:focus ~ .label {
      color: #593e10;
      font-weight: 900;
      transform: translateY(-23%);
    }
  }
}
</style>
