import { getCountryIndex } from "../helpers/countryCodes";
import sumBy from "lodash/sumBy";

export const state = () => ({
  activeCurrencies: ["INR"],
  currency: "INR",
  persistedStateLoaded: false,
});

export const mutations = {
  setActiveCurrencies(state, currencies) {
    state.activeCurrencies = currencies;
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
  async fetchStoreLocation({ commit }) {
    // fetch store location
    // if fetched location is INDIA, set currency as INR
    
    // if fetch location is not INDIA, check whether persisted state has any preferred currency
    // if yes, check if that currency is available in active currencies
    // if yes, set that as main currency

    // if fetched location is not INDIA, check whether location currency exists in active currencies
    // if yes, set location currency as main currency
    
    // if not, set USD as main currency
  },
};