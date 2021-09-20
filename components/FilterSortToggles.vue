<template>
  <!-- filter and sort -->
  <div class="fs-wrapper flex center col">
    <p v-if="!collectionView">
      Showing {{ totalMatches }} results for
      <i> "{{ searchTerm }}" </i>
    </p>

    <div class="filters-and-sort">
      <!-- filter -->
      <button class="action" @click="$emit('openFilters')">
        Filters
        <img class="arrow-bottom" src="/icons/arrow_bottom.png" />
      </button>

      <!-- center pipe -->
      <span class="pipe"> | </span>

      <!-- sort -->
      <button class="action" @click="$emit('openSort')">
        Sort
        <img class="arrow-bottom" src="/icons/arrow_bottom.png" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchTerm: {
      type: String,
      default: ""
    },
    totalMatches: {
      type: Number,
      defauly: 0
    },
    collectionView: {
        type: Boolean,
        default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.fs-wrapper {
  padding-top: 10px;
  position: fixed;
  top: 10vh;
  left: 0;
  z-index: 2;
  width: 100%;
  background-color: white;
  box-shadow: 20px 0px 15px rgba(0, 0, 0, 0.16);

  .filters-and-sort {
    // margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 95%;
    background-color: white;

    .action {
      width: 50%;
      font-size: 13px;
      color: $dark_gray;
      background-color: white;
      // background-color: #f4f5f7;

      // background-color: #bfbfbf80;
      color: rgb(123, 123, 123);
      // border: 1px solid #a8a8a8;
      display: flex;
      justify-content: center;
      align-items: center;

      .arrow-bottom {
        width: 5%;
        margin-left: 5px;
        opacity: 0.8;
      }

      &:hover {
      }

      &:first-child {
        border-right: none;
      }

      font-family: $font_2_bold;
    }

    .pipe {
      color: rgb(123, 123, 123);
    }

    @media (max-width: 768px) {
      .action {
        .arrow-bottom {
          width: 15%;
        }
      }
    }
  }
}
</style>
