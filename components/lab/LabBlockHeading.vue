<template>
  <div class="lab-block-heading flex center col">
    <h3 class="name">{{ name }}</h3>
    <p class="para">{{ paragraph }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    paragraph: String,
  },
};
</script>

<style lang="scss" scoped>
.lab-block-heading {
  /* margin-top: 10%; */
  background-color: #615555;
  color: white;
  padding: 4%;
  gap: 12px;

  .name {
    font-size: 3.5vw;
    text-transform: uppercase;
    color: white;
  }
  .para {
    font-size: 1.2vw;
    color: rgba(255, 255, 255, 0.95);
    text-align: center;
    width: 55%;
    line-height: 2vw;
  }

  @media (max-width: 768px) {
    margin-top: 0%;
    padding: 6%;
    .name {
      font-size: 5.5vw;
    }

    .para {
      font-size: 3vw;
      line-height: 3.8vw;
      width: 90%;
    }
  }
}
</style>
