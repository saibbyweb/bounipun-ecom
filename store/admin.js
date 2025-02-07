import cookies from "js-cookie";

export const state = () => ({
  loading: false,
  localAuthorized: false,
  persistedStateLoaded: false,
  authorized: false,
  admin: {},
});

export const mutations = {
  /* load state from local storage */
  loadPersistedState(state) {
    let persistedState = window.localStorage.getItem("admin_persistedState");

    if (persistedState) {
      /* clear global cart */
      persistedState = JSON.parse(persistedState);
      Object.assign(state, persistedState);
    }

    /* check for session cookie */
    state.authorized = persistedState.authorized || false;

    // state.authorized = true;
    state.persistedStateLoaded = true;
  },
  /* authorize user (admin) */
  setAuthorization(state, value) {
    state.authorized = value;
  },
  /* unauthorize */
  unauthorize(state) {
    cookies.remove("swecom_bounipun_admin");
    state.authorized = false;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  /* TODO: remove this mutation */
  setLocalAuthorized(state, value) {
    state.localAuthorized = value;
  },
  setAdmin(state, admin) {
    state.admin = admin;
  }
};

export const actions = {
  async fetchProfile({ state, commit }) {
    const { response, resolved } = await this.$post("/fetchAdminProfile");
    if (resolved == false) return;
    commit("setAdmin", response);
  },
};
