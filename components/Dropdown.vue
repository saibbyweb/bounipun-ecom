<template>
  <div class="dropdown-selector" style="position: absolute; z-index: 2;">
    <autocomplete
      inputClass="small"
      ref="autocomplete"
      :source="source"
      @enter="selected"
      @selected="selected"
    >
    </autocomplete>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  props: {
      source: {
        type: Array,
        default: []
      }
  },
  methods: {
    selected(payload) {
      console.log(payload)
    },
  },
};
</script>
