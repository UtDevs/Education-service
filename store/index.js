export const state = () => ({
  showBar: false
});

export const mutations = {
  flipBarAppearance(state) {
    state.showBar = !state.showBar;
  }
};

export const getters = {
  isAuthenticated(state) {
    return state.showBar;
  }
};

