<template>
  <div class="slidecontainer">
    <label class="label"> {{ label }} </label>
    <div class="pad-10 flex center col">
      <input
        ref="rangeSlider"
        type="range"
        :min="min"
        :max="max"
        :value="value"
        class="slider"
        id="myRange"
        @input="$emit('input', $event.target.value)"
        :style="getStyles(percentage)"
      />
      {{ value }} %
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: Number,
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
  },
  computed: {
    percentage() {
      const percentage =
        ((this.value - this.min) / (this.max - this.min)) * 100;
      return percentage;
    },
  },
  methods: {
    getStyles(percentage) {
      return {
        backgroundImage: `linear-gradient(90deg, #4CAF50 ${percentage}%, transparent ${percentage}%)`,
      };
    },
  },
};
</script>

<style lang="scss">
.slidecontainer {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 6px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 15px; /* Set a specific slider handle width */
  height: 15px; /* Slider handle height */
  background: #0c8357; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 10px;
}
</style>
