export default {
  methods: {
    // check price validitity
    checkValidPrice(price) {
      if (typeof price === "number") {
        return true;
      }
      if (price === undefined || price === null) return false;

      return price.trim() !== "";
    },

    /* check all prices INR as well as non INR */
    checkAllPrices(INRPrice, NonINRPrices) {
      const INRPriceValid = this.checkValidPrice(INRPrice);
      if (INRPriceValid === false) {
        return false;
      }

      /* check non INR Pricing */
      const currencyCodes = Object.keys(NonINRPrices);
      const nonINRSet = currencyCodes.every((code) =>
        this.checkValidPrice(NonINRPrices[code])
      );

      return nonINRSet;
    },
  },
};
