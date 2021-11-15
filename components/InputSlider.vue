<template>
  <div class="range-slider">
    <label class="label"> {{ label }} </label>
    <div class="pad-10 flex center col">
      <input
        ref="rangeSlider"
        type="range"
        :min="min"
        :max="max"
        :value="value"
        :step="step"
        class="slider"
        id="myRange"
        @input="$emit('input', $event.target.value)"
        :style="getStyles(percentage)"
      />
      <div class="flex">
        <input
        class="alternate-input shadow"
          type="number"
          @input="$emit('input', $event.target.value)"
          :value="value"
        />{{ unit }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: Number,
    unit: { type: String, default: "%" },
    step: { type: Number, default: 1 },
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
.range-slider {
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

.alternate-input {
    width: 80px;
    border:none;
    padding:2px 5px;
    font-size:16px;
    color:#0c8357; 
    margin-right:10px;
    font-family: $font_2_bold;
    text-align:center;

    
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
