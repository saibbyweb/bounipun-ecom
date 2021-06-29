import cookies from "js-cookie";
import { getCountryIndex } from "../helpers/countryCodes";
import sumBy from "lodash/sumBy";

export const state = () => ({
  persistedStateLoaded: false,
  loading: false,
  authorized: false,
  cart: [],
  globalRemoteCart: [],
  globalConfig: {},
  user: {},
  currency: "USD",
  coupon: {
    applied: false,
    code: ""
    /* more props added after fetching from server */
  },
  countryIndex: 0,
  currencyMultiplier: 1.3
});

/* find cartItem helper  */
const findCartItem = (cart, cartItem) => {
  console.log("find cart item was called", cartItem, cart);
  /* if cart empty */
  if (cart.length === 0) return false;

  let foundIndex = cart.findIndex(item => {
    /* common params to match */
    let paramsToBeMatched =
      item.product === cartItem.product &&
      item.colorCode === cartItem.colorCode;

    /* TODO: (inventory can change) if variant and fabrics are present, match them as well */
    if (cartItem.variant !== null && cartItem.fabric !== null) {
      paramsToBeMatched =
        paramsToBeMatched &&
        item.variant === cartItem.variant &&
        item.fabric === cartItem.fabric;
    }
    return paramsToBeMatched;
  });

  return foundIndex !== -1
    ? { foundCartItem: cart[foundIndex], foundIndex }
    : false;
};

export const mutations = {
  /* load state from local storage */
  loadPersistedState(state) {
    let persistedState = window.localStorage.getItem("persistedState");

    if (persistedState) {
      /* clear global cart */
      persistedState = JSON.parse(persistedState);
      persistedState.globalRemoteCart = [];
      persistedState.currencyMultiplier = 1.3;
      persistedState.currency = "USD";
      persistedState.countryIndex = 0;
      Object.assign(state, persistedState);
    }

    /* check for session cookie */
    state.authorized = cookies.get("swecom_bounipun") !== undefined;
    state.persistedStateLoaded = true;
  },
  setLoading(state, value) {
    state.loading = value;
  },
  /* authorize user (customer) */
  setAuthorization(state, value) {
    state.authorized = value;
  },
  setGlobalConfig(state, value) {
    state.globalConfig = value;
  },
  /* unauthorize */
  unauthorize(state) {
    state.authorized = false;
    state.user = {};
    cookies.remove("swecom_bounipun");
  },
  setUser(state, user) {
    state.user = user;
  },
  addToCart(state, cartItem) {
    /* if logged in, return */
    if (state.authorized) return;

    /* if cart empty or product doesnt exist in cart array , push item */
    if (state.cart.length === 0) {
      state.cart.push(cartItem);
      return;
    }

    /* check if item already exists in cart */
    let search = findCartItem(state.cart, cartItem);

    /* if product found, add qty to existing qty */
    if (search !== false) {
      search.foundCartItem.quantity += cartItem.quantity;
    } else state.cart.push(cartItem);
    /* else just add it to the cart array */
  },
  updateQuantity(state, cartItem) {
    /*  check if item is already present or not */
    let search = findCartItem(state.cart, cartItem);
    /* if yes, directly overwrite the qty */
    if (search !== false) {
      search.foundCartItem.quantity = parseInt(cartItem.quantity);
    }
  },
  removeFromCart(state, cartItem) {
    /*  check if item is already present or not */
    let search = findCartItem(state.cart, cartItem);
    /* if yes, remove product from cart array */
    if (search !== false) {
      /* remove item from the cart */
      state.cart.splice(search.foundIndex, 1);
    }
  },
  setCoupon(state, value) {
    state.coupon = value;
  },
  clearCart(state) {
    /* clear cart array directly */
    state.cart = [];
    console.log("cart emptied");
  },
  setGlobalRemoteCart(state, cart) {
    state.globalRemoteCart = cart;
  },
  switchCurrency(state) {
    state.currency = state.currency === "INR" ? "USD" : "INR";
  },
  setStoreCurrency(state, countryCode) {
    state.currency = countryCode === "IN" ? "INR" : "USD";
  },
  setCountryIndex(state, countryIndex) {
    state.countryIndex = countryIndex;
  }
};

export const getters = {
  alreadyInCart: state => cartItem => {
    const localCart = state.globalRemoteCart.map(item => item.cartEntry);
    return findCartItem(localCart, cartItem) !== false;
  },
  cartCount: state => () => {
    return state.globalRemoteCart.length;
  },
  getCartProductIds(state) {
    if (state.cart.length === 0) return false;
    return [...new Set(state.cart.map(product => product._id))];
  },
  getCartTotal(state, getters) {
    return sumBy(
      state.globalRemoteCart,
      item => getters.adjustPrice(item.price) * item.quantity
    );
  },
  getTotalCartItems(state) {
    return sumBy(state.globalRemoteCart, item => item.quantity)
  },
  getShippingCharge(state) {
    return state.currency === "INR"
      ? state.globalConfig.domesticShippingCharge
      : state.globalConfig.internationalShippingCharge;
  },
  getTaxPercentage(state) {
    return state.currency === "INR"
    ? state.globalConfig.gstPercentage
    : state.globalConfig.internationalTaxPercentage
  },
  adjustPrice: state => dbPrice => {
    console.log("hey i was called", state.currency);
    /* if currence is INR, return as is */
    if (state.currency === "INR") {
      return dbPrice;
    } else {
      const inflatedPrice = (dbPrice * state.currencyMultiplier) / 72;
      console.log(dbPrice, inflatedPrice, state.currencyMultiplier);
      return inflatedPrice.toFixed(2);
    }
    /* if not then, multiply db price with currency multiplier and return */
  }
};

export const actions = {
  async fetchCart({ state, commit }) {
    const endPoint = state.authorized ? "/fetchCart" : "/fetchLocalCart";

    const cartItems = await this.$post(endPoint, {
      cart: state.cart
    });

    if (cartItems.resolved === false) return;

    commit("setGlobalRemoteCart", cartItems.response);
  },
  /* fetch user profile */
  async fetchProfile({ state, commit }) {
    const { response, resolved } = await this.$post("/fetchProfile");
    if (resolved == false) return;
    commit("setUser", response);
  },
  async fetchStoreLocation({ commit }) {
    /* ask server to do an ip lookup */
    const ipLookup = await this.$post("/ipLookup");
    /* if lookup failed, return (default country = India) */
    if (ipLookup.resolved === false) return;
    /* if match found, set store currency accordingly */
    const countryIsoCode = ipLookup.response.countryCode;
    commit("setStoreCurrency", countryIsoCode);
    /* figure out dial code */
    const countryIndex = getCountryIndex(countryIsoCode);

    if (countryIndex === -1) {
      return;
    }
    /* set country index */
    commit("setCountryIndex", countryIndex);
  },
  /* fetch store global config */
  async fetchGlobalConfig({ state, commit }) {
    /* fetch global config from server */
    const fetchConfigRequest = await this.$post("/fetchGlobalConfig");
    /* if request failed */
    if (fetchConfigRequest.resolved === false) return;
    /* extract global config */
    console.log(fetchConfigRequest.response, "--genius");
    const { globalConfig } = fetchConfigRequest.response;
    console.log(globalConfig, "--again genius");
    /* set config in vuex */
    commit("setGlobalConfig", { ...globalConfig });
  },
  /* fetch coupon */
  async fetchCoupon({ state, commit }, couponCode) {
    const fetchCouponRequest = await this.$post("/fetchCoupon", {
      couponCode,
      currency: state.currency
    });
    /* if request failed */
    if (fetchCouponRequest.resolved == false) {
      return false;
    }
    /* extract details */
    const { couponDetails } = fetchCouponRequest.response;
    /* save coupon details */
    commit("setCoupon", { applied: true, ...couponDetails });
  }
};
