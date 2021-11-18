import { getCountry } from "../helpers/countryCodes";
import currencyFormatter from "currency-formatter";

export const state = () => ({
  activeCurrencies: ["INR"],
  currency: "INR",
  preferredCurrency: "",
  persistedStateLoaded: false,
});

export const mutations = {
  setActiveCurrencies(state, currencies) {
    state.activeCurrencies = currencies;
  },
  setStoreCurrency(state, currency) {
    state.currency = currency;
  },
};

/* getters */
export const getters = {
  formatCurrency: (state) => (price) => {
    return currencyFormatter.format(price, { code: state.currency })
  },
};

export const actions = {
  async fetchActiveCurrencies({ commit }) {
    /* fetch active currencies */
    const request = await this.$post("/findDocuments", {
      model: "currency",
      filters: {
        clientEnabled: true,
      },
    });

    /* if request failed, set INR as the only active currency else set currencies received*/
    let currencyList = ["INR"];
    commit(
      "setActiveCurrencies",
      request.resolved === false
        ? currencyList
        : [...currencyList, ...request.response.map((c) => c.code)]
    );
  },
  async fetchStoreLocation({ state, commit, rootState }) {
    const { customer } = rootState;
    const { preferredCurrency } = customer;
    const { activeCurrencies } = state;
    /* fetch store location (ip lookup or account lookup) */
    const ipLookup = await this.$post("/ipLookup");
    /* if lookup failed, return (default country = India) */
    if (ipLookup.resolved === false) return;
    /* extract country iso code */
    const { countryCode } = ipLookup.response;

    console.log(countryCode, "-- API RESPONSE COUNTRY ISO CODE");
    console.log(preferredCurrency, "-- PREFERRED CURRENCY");
    /*  if fetched location is INDIA, set currency as INR */
    if (countryCode === "IN") {
      commit("setStoreCurrency", "INR");
      // commit("setActiveCurrencies", activeCurrencies.filter(c => c === "INR"));
      console.log("INR SET AS CURRENCY");
      return;
    }

    /* remove INR from active currencies */
    commit(
      "setActiveCurrencies",
      activeCurrencies.filter((c) => c !== "INR")
    );

    // if fetch location is not INDIA, check whether persisted state has any preferred currency
    // if yes, check if that currency is available in active currencies
    // if yes, set that as main currency
    const currencyIndex = activeCurrencies.findIndex(
      (c) => c === preferredCurrency
    );
    if (currencyIndex !== -1) {
      const currency = activeCurrencies[currencyIndex];
      console.log("PREFERRED MATCH FOUND CURRENCY", currency);
      commit("setStoreCurrency", currency);
      return;
    }

    // if fetched location is not INDIA, check whether location currency exists in active currencies
    // if yes, set location currency as main currency
    const countryMatch = getCountry(countryCode);
    if (countryMatch !== false) {
      console.log("COUNTRY MATCH FOUND", countryMatch, activeCurrencies);

      const currencyIndex = activeCurrencies.findIndex(
        (c) => c === countryMatch.currency
      );
      if (currencyIndex !== -1) {
        const currency = activeCurrencies[currencyIndex];
        commit("setStoreCurrency", currency);
        return;
      }
    }
    console.log("NO MATCH FOUND AT ALL - CURRENCIES");
    // if not, set USD as main currency
    commit("setStoreCurrency", "USD");
  },
};
