export const state = () => ({
  loading: false,
  authorized: false,
  cart: []
});

/* find product helper  */
const findProduct = (cart, product) => {
  /* if cart empty */
  if (cart.length === 0) return false;

  let foundIndex = cart.findIndex(pro => {
    /* common params to match */
    let paramsMatched = pro._id === product._id && pro.colorCode === product.colorCode;

    /* figure out the type of product */
    const multiPriced = product.type === "third-party" 
    ? false 
    : product.availabilityType === 'made-to-order' ? true : false;
    
    /* add params, if product is multipriced */
    if(multiPriced) {
        paramsMatched = paramsMatched && pro.variantId === product.variantId && pro.fabricId === product.fabricId
    }
    return paramsMatched;
  });

  return foundIndex !== -1 ? { foundProduct: cart[foundIndex], foundIndex } : false;
};

export const mutations = {
    /* load state from local storage */
  loadPersistedState(state) {
      const persistedState = window.localStorage.getItem('persistedState');
      if(persistedState) {
          Object.assign(state, JSON.parse(persistedState))
      }
  },
  setLoading(state, value) {
    state.loading = value;
  },
  /* authorize user (customer) */
  setAuthorization(state, value) {
    state.authorized = value;
  },
  addToCart(state, product) {
    /* if logged in, return */
    if (state.authorized) return;

    /* if cart empty or product doesnt exist in cart array , push item */
    if (state.cart.length === 0) {
      state.cart.push(product);
      return;
    }

    /* check if item already exists in cart */
    let search = findProduct(state.cart, product);

    /* if product found, add qty to existing qty */
    if (search.foundProduct) { 
        search.foundProduct.quantity += product.quantity
    }
    else state.cart.push(product);
  },
  updateQuantity(state, item) {
    /*  check if item is already present or not */
    let search = findProduct(state.cart, item.product);
    /* if yes, directly overwrite the qty */
    if (search.foundProduct) {
        search.foundProduct.quantity = parseInt(item.newQuantity);
        console.log(search.foundProduct);
    }
  },
  removeFromCart(state, cart) {
    /*  check if item is already present or not */
    let search = findProduct(state.cart, product);
    /* if yes, remove product from cart array */
    if (search.foundProduct) {
      /* remove item from the cart */
      state.cart.splice(search.foundIndex, 1);
    }
  },
  clearCart(state) {
    /* clear cart array directly */
    state.cart = []
  }
};

export const getters = {
    alreadyInCart: (state) => (product) => {
        return findProduct(state.cart, product);
    },
    getCartProductIds(state) {
        if(state.cart.length === 0)
            return false;
        return [...new Set(state.cart.map(product => product._id))]
    }
}
