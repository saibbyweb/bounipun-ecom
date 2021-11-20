export default {
  computed: {
    currency() {
      return this.$store.state.customerV2.currency;
    },
    currencyIsINR() {
      return this.currency === "INR";
    },
  },
  methods: {
    formatCurrency(price, currency = false) {
      price = parseFloat(price);
      return this.$store.getters["customerV2/formatCurrency"](price, currency);
    },
  },
};
