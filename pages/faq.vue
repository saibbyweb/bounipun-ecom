<template>
  <div class="page">
    <div class="page-header center">
      <h1>Frequently Asked Questions</h1>
    </div>
    <br /><br />
    <Accordion
      v-for="(question, index) in faqs"
      :key="index"
      :heading="question.title"
    >
      <p>{{ question.answer }}</p>
    </Accordion>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: []
    };
  },
  mounted() {
    this.fetchFAQs();
  },
  methods: {
    async fetchFAQs() {
      const faqs = await this.$fetchData("faq", {
        status: true
      });

      if (!faqs.fetched) {
        return;
      }

      this.faqs = faqs.doc.questions;
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
@media (max-width: 768px) {
  h1 {
    margin-top: 20px;
    font-size: 25px;
  }
}
p {
  font-family: $font_2;
  font-size: 13px;
  padding: 5px;
  color: #6a6a6a;
  .bold {
    font-weight: 900;
    color: black;
  }
}
</style>
