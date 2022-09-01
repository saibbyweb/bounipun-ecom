<template>
  <div class="lab-color-boxes flex center">
    <div class="box" v-for="(color, index) in categories" :key="index">
      {{ color }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array,
  },
};
</script>

<style lang="scss" scoped>
.lab-color-boxes {
  flex-wrap: wrap;
  margin-top: 30px;
  padding: 10px 10px;
  
  .box {
    margin: 5px 10px;
    border: 2px solid #333;
    padding: 1% 2%;
    font-size: 1.1vw;
    font-family: $font_2_bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #333;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
    .box {
      font-size: 2.4vw;
    }
  }
}
</style>
