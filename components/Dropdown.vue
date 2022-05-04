<template>
  <div
    class="dropdown-selector flex center"
    style="position: absolute; z-index: 1;  gap: 10px; height:40px;"
   
  >

    <div class="autocomplete-box" v-if="showAutocomplete"  :style="css">
      <!-- autocomplete -->
      <autocomplete
        inputClass="small"
        ref="autocomplete"
        :source="source"
        @enter="selected"
        @selected="selected"
      >
      </autocomplete>
    </div>
      <!-- toggle button -->
    <button class="action small" :class="showAutocomplete ? 'delete' : 'black'" @click="clearSelection">
      {{ showAutocomplete ? 'Clear Selection' : 'Show Product Selector' }}
      </button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: Array,
      default: [],
    },
    css: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      showAutocomplete: false
    }
  },
  methods: {
    selected(payload) {
      console.log(payload);
      this.$emit('selected', payload.selectedObject)
    },
    clearSelection() {
      this.showAutocomplete = !this.showAutocomplete;
      this.$emit('clearSelection')
    }
  },
};
</script>

<style lang="scss">
.dropdown-selector {
  width: 100%;
}
.autocomplete__results {
  height:150px !important;
}
.autocomplete__results__item {
  font-size: 13px !important;
}
.action.small {
  padding: 3px 7px;
}
</style>
