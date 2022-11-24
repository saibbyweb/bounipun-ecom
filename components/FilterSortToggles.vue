<template>
  <!-- filter and sort -->
  <div class="fs-wrapper flex center col">
    <p v-if="!collectionView">
      Showing {{ totalMatches }} results for
      <i> "{{ searchTerm }}" </i>
    </p>

    <div class="relative-wrapper flex center">
      <!-- filters and sort -->
      <div class="filters-and-sort">
        <!-- filter -->
        <button class="action" @click="openFilters">
          Filters
          <img class="arrow-bottom" src="/icons/arrow_bottom.png" />
        </button>

        <!-- center pipe -->
        <span class="pipe"> | </span>

        <!-- sort -->
        <button class="action" @click="openSort">
          Sort
          <img class="arrow-bottom" src="/icons/arrow_bottom.png" />
        </button>

        <!-- view switch -->
        <div class="mobile-view-switcher flex center">
          <!-- <img src="/icons/dark/single-box.png" /> -->
          <img @click="toggleGridView" :src="currentViewImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridView: true
    };
  },
  props: {
    searchTerm: {
      type: String,
      default: "",
    },
    totalMatches: {
      type: Number,
      defauly: 0,
    },
    collectionView: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentViewImage() {
      return this.gridView ? "/icons/dark/grid.png" : "/icons/dark/single-box.png"
    }
  },
  methods: {
    openFilters() {
      this.$emit("openFilters");
    },
    openSort() {
      this.$emit("openSort");
    },
    toggleGridView() {
      this.gridView = !this.gridView;
      this.$emit('viewChanged', this.gridView);
    }
  }
};
</script>

<style lang="scss" scoped>
.fs-wrapper {
  /* padding: 5px; */
  padding-top: 5px;
  position: fixed;
  top: 0;
  @include marginTop;
  left: 0;
  z-index: 2;
  width: 100%;
  background-color: white;
  box-shadow: 20px 0px 15px rgba(0, 0, 0, 0.16);

  @media(max-width: 768px) {
     padding-top:0;
    padding: 5px;
  }

  .relative-wrapper {
    width: 100%;
  }

  .filters-and-sort {
    /* margin-top: 10px; */
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 95%;
    background-color: white;

    .action {
      padding: 4.5px 0;
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

  .mobile-view-switcher {
    position: absolute;
    right: -2%;
    top: 0;
    width: 11%;
    height: 100%;

    img {
      width: 50%;
      // margin:0 5%;
    }

    @media(min-width: 768px) {
      display: none;
    }

  }
}
</style>
