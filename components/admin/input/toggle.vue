<template>
  <div class="input-box">
    <label class="label"> {{ label }} </label>

    <div
      v-if="!disabled"
      class="switch-box center"
      @click="toggleState"
      :class="{ on: value }"
      :style="{ width, pointerEvents: disabled ? 'none' : '' }"
    >
      <div class="toggle center" :class="{ on: value }">
        <div class="circle"></div>
      </div>
      <span :class="{ on: value }">
        {{ value ? activeText : inactiveText }}
      </span>
    </div>
    <!-- disabled text -->
    <span v-if="disabled" :class="{ on: value }">
      {{ value ? activeText : inactiveText }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: Boolean,
    activeText: {
      type: String,
      default: "Active",
    },
    inactiveText: {
      type: String,
      default: "Inactive",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "120px",
    },
  },
  data() {
    return {
      toggleOn: false,
    };
  },
  methods: {
    toggleState() {
      this.toggleOn = !this.value;
      this.$emit("input", this.toggleOn);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 2%;
  width: 100%;

  .switch-box {
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
    display: flex;
    transition: all 0.3s ease-in-out;
    position: relative;
    background: rgb(190, 79, 79);
    border-radius: 3px;
    // width: 120px;
    cursor: pointer;
    padding: 5px;

    &.on {
      background: rgb(65, 166, 65);
      transform: translateZ(10px);
    }

    .toggle {
      position: absolute;
      top: 0;
      left: 0;
      width: 22%;
      height: 100%;
      transition: all 0.15s ease-in-out;

      .circle {
        background: rgb(255, 255, 255);
        width: 12px;
        height: 12px;
      }

      &.on {
        left: 78%;

        .circle {
          background: white;
          width: 13px;
          height: 13px;
          border-radius: 50%;
        }
      }
    }

    span {
      color: white;
      font-size: 13px;
      user-select: none;
      transition: all 0.15s ease-in-out;

      margin-left: 15px;

      &.on {
        margin-right: 25px;
      }
    }
  }
}
</style>
