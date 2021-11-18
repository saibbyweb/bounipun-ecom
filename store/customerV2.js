import { getCountryIndex } from "../helpers/countryCodes";
import sumBy from "lodash/sumBy";

export const state = () => ({
    activeCurrencies: ["INR"],
    currency: "INR",
    persistedStateLoaded: false
});

export const mutations = {
}
export const actions = {
    async fetchStoreLocation({ commit }) {
        // fetch store location along with currency
        // if fetched location is INDIA, set currency as INR
        // if fetched location is not INDIA, check whether location currency exists in active currencies
        // if yes, set location currency as main currency
        // if not, check if user has already selected some other currency as main currency
        // if not, set USD as main currency
    }
}