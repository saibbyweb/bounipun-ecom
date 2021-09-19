<template>
   <!-- filter and sort -->
    <div class="fs-wrapper flex center col">
      <p>
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
            type: String,
            defauly: "--"
        }
    }
}
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
}
</style>