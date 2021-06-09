import cookies from "js-cookie";

export const state = () => ({
  persistedStateLoaded: false,
  loading: false,
  authorized: false,
  cart: [],
  globalRemoteCart: [],
  user: {}
});

/* find cartItem helper  */
const findCartItem = (cart, cartItem) => {
  /* if cart empty */
  if (cart.length === 0) return false;

  let foundIndex = cart.findIndex(item => {
    /* common params to match */
    let paramsToBeMatched = item.product === cartItem.product && item.colorCode === cartItem.colorCode;
    
    /* TODO: (inventory can change) if variant and fabrics are present, match them as well */
    if(cartItem.variant !== null && cartItem.fabric !== null) {
        paramsToBeMatched = paramsToBeMatched && item.variant === cartItem.variant && item.fabric === cartItem.fabric;
    }
    return paramsToBeMatched;
  });
  
  return foundIndex !== -1 ? { foundCartItem : cart[foundIndex], foundIndex }: false

};



export const mutations = {
    /* load state from local storage */
  loadPersistedState(state) {
      const persistedState = window.localStorage.getItem('persistedState');
      if(persistedState) {
          Object.assign(state, JSON.parse(persistedState))
      }

      /* check for session cookie */
      state.authorized = cookies.get('swecom_bounipun') !== undefined;
      state.persistedStateLoaded = true;
  },
  setLoading(state, value) {
    state.loading = value;
  },
  /* authorize user (customer) */
  setAuthorization(state, value) {
    state.authorized = value;
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
    }
    /* else just add it to the cart array */
    else state.cart.push(cartItem);
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
  clearCart(state) {
    /* clear cart array directly */
    state.cart = []
  },
  setGlobalRemoteCart(state, cart) {
      state.globalRemoteCart = cart;
  }
};

export const getters = {
    alreadyInCart: (state) => (cartItem) => {
        return findCartItem(state.cart, cartItem) !== false;
    },
    cartCount: (state) => () => {
      return state.globalRemoteCart.length;
    },
    getCartProductIds(state) {
        if(state.cart.length === 0)
            return false;
        return [...new Set(state.cart.map(product => product._id))]
    }
}
