<template>
  <div class="sw-checkbox">
    <label class="label flex v-center">
      <div class="check-container flex center">
        <input
          class="checkbox"
          type="checkbox"
          @change="emitChange"
          :value="value"
          :checked="value"
          :disabled="disabled"
        />
        <div class="fake-check-container flex center">
          <div v-show="value" class="fake-check"></div>
        </div>
      </div>
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitChange($event) {
      this.$emit("input", $event.target.checked);
    },
  },
};
</script>
<style lang="scss" scoped>
.sw-checkbox {
  .check-container {
    position: relative;

    .fake-check-container {
      position: absolute;
      top: 0%;
      left: 0%;
      height: 100%;
      width: 100%;

      .fake-check {
        height: 45%;
        width: 45%;
        background-image: url("./icons/black_check.png");
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }

  .checkbox {
    height: 15px;
    width: 15px;
    margin-right: 5px;
    appearance: none;
    outline: 1px solid;
    cursor: pointer;
  }

  .checkbox:checked {
    //background-color: black;
  }
  .label {
    font-family: $font_2;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 768px) {

  .check-container {


    .fake-check-container {
        left: -2%;
      .fake-check {
        height: 40%;
        width: 40%;
        background-image: url("./icons/black_check.png");
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }


    .checkbox {
      height: 15px;
      width: 15px;
    //   margin-right: 10px;
    }
  }
}
</style>
