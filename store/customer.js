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
    /* color, variant, fabric should match */
    return (pro._id === product._id &&
      pro.color === product.colorId &&
      pro.variantId === product.variantId &&
      pro.fabricId === product.fabricId)
  });

  return foundIndex !== -1 ? { foundProduct: cart[foundIndex], foundIndex } : false;
};

export const mutations = {
  loadPersistedState(state) {},
  setLoading(state, value) {
    state.loading = value;
  },
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
  updateQuantity(state, product) {
    /*  check if item is already present or not */
    let search = findProduct(state.cart, product);
    /* if yes, directly overwrite the qty */
    if (search.foundProduct) 
        search.foundProduct = product.newQuantity;
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
