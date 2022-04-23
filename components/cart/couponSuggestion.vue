<template>
  <div class="suggestion" @click="$emit('selection')">
    <label class="flex start">
      <input class="selection coupon-select" type="radio" name="suggestion" />
      <div class="flex start col text-details">
        <span class="code"> {{ code}} </span>
        <span class="text"> {{text }} </span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    code: { type: String, default: "BOUNIPUN121" },
    text: {
      type: String,
      default:
        " Get flat 5 % off on your order. Offer valid from 9 December, 2021 - 12 December, 2021. Hurry!",
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.suggestion {
  width: 100%;
  label {
    cursor: pointer;
    gap: 4px;

    .selection {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background-color: #efefef;
      border: 1px solid rgb(224, 224, 224);
      appearance: none;

      &:checked {
        background-color: #333;
      }
    }

    .text-details {
      width: 95%;
      .code {
        font-family: "Poppins Bold";
        font-size: 13px;
      }

      .text {
        font-size: 12px;
      }
    }

    .bold {
      font-family: "SF-Pro Bold";
      font-weight: 900;
    }
  }
}
</style>
