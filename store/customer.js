export const state = () => ({
    loading: false,
    authorized: false
});

export const mutations = {
    setLoading(state, value) {
        state.loading = value;
    },
    setAuthorization(state, value) {
        state.authorized = value;
    },
    addToCart(state, item) {
        if(state.authorized)
            return;
        /* fetch current state of cart */
        /* if cart empty or item doesnt exist in cart array , push item */
        /* if item already exists, update quantity */
    },
    updateQuantity(state, item) {
        /*  check if item is already present or not */
        /* if yes, directly overwrite the qty */
    },
    removeFromCart() {
        /* check if item is already present or not */
        /* if yes, remove from cart array */
    },
    clearCart() {
        /* clear cart array directly */
    }

}