<template>
  <div class="offcanvas-sort shadow" :class="{ visible: sortOpen }">
    <div style="position: relative;">
      <br />
      <br />
      <!-- header -->
      <div class="header shadow">
        <h3>Sort</h3>
        <span style="font-size:12px; cursor:pointer;" @click="clearSort">
          Clear Sort
        </span>

        <!-- close sort layout -->
        <img
          @click="$emit('close')"
          class="close"
          src="/icons/dark/close.png"
        />
      </div>
      <br />
      <!-- all options -->
      <div class="all-options" style="margin-top:4vh">
        <!-- price (high to low) -->
        <div>
          <label class="label">
            <input
              type="radio"
              name="priceSort"
              value="-1"
              v-model="sortData.priceRange"
            />
            Price (High - Low)
          </label>
        </div>

        <!-- price (low to high) -->
        <div>
          <label class="label">
            <input
              type="radio"
              name="priceSort"
              value="1"
              v-model="sortData.priceRange"
            />
            Price (Low - High)
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sortOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sortData: {
        priceRange: ""
      }
    };
  },
  watch: {
    sortData: {
      handler(newValue) {
        this.$emit('updated', newValue);
      },
      deep: true,
      immediate: true
    },
    $route() {
      this.clearSort();
    }
  },
  methods: {
    clearSort() {
      this.sortData.priceRange = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.offcanvas-sort {
  position: fixed;
  top: 0;
  right: 0;
  // padding: 5%;
  background: #fffffff2;
  width: 40vw;
  height: 100vh;
  margin-right: -60vw;
  transition: all 0.4s ease-in-out;
  z-index: 3;

  @media (max-width: 768px) {
    width: 60vw;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: $pageMarginTop;
    padding: 2% 3%;
  }

  &.visible {
    margin-right: 0vw;
  }

   .all-options {
    padding: 5% 5% 0 5%;
   }

  .label {
    font-family: $font_2;
    font-size: 12px;
    cursor: pointer;
  }

  /* common close */
  .close {
    width: 3%;
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: rotate(70deg);
    }

    @media (max-width: 768px) {
      width: 7%;
    }
  }
}
</style>
