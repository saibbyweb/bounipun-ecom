export const state = () => ({
    loading: false,
    localAuthorized: false
});

export const mutations = {
    setLoading(state, loading) {
        state.loading = loading;
    },
    setLocalAuthorized(state, value) {
        state.localAuthorized = value;
    }
}