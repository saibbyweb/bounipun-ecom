<template>
  <div class="page">
      <!-- hero -->
    <div class="hero">
        <!-- title -->
        <h1> {{ layout.title }} </h1>
        <!-- tagline -->
        <p> {{ layout.tagline }} </p>

        <!-- hero blocks -->
        <div class="hero-blocks">
            <div class="hero-block" v-for="(heroBlock, index) in layout.heroBlocks" :key="index">
                <h3> {{ heroBlock.name }} </h3>
                <p> {{ heroBlock.paragraph }} </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: {},
    };
  },
  mounted() {
    this.fetchLabLayout();
  },
  methods: {
    async fetchLabLayout() {
      const layout = await this.$fetchData("lab", {
        status: true,
      });
      if (!layout.fetched) {
        console.log("Layout not fetched");
        return;
      }
      this.layout = layout.doc;
    },
  },
};
</script>
