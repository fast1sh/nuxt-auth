import { users } from '~/data/mockData.js';

export const state = () => ({
  isAuthenticated: false,
  user: {},
  isLoading: false,
  error: null,
});

export const mutations = {
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  setError(state, error) {
    state.error = error;
  },
  setIsAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  setUser(state, user) {
    state.user = user;
  },
};

export const actions = {
  async login({ commit }, { username, password }) {
    commit('setIsLoading', true);
    commit('setError', null);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      commit('setIsAuthenticated', true);
      commit('setUser', { username });
      localStorage.setItem('user', JSON.stringify({ username }));
      this.$router.push('/');
    } else {
      commit('setError', 'Пользователь не найден');
    }

    commit('setIsLoading', false);
  },
  async logout({ commit }) {
    commit('setIsLoading', true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    commit('setIsAuthenticated', false);
    commit('setUser', {});
    localStorage.removeItem('user');

    commit('setIsLoading', false);
  },
};
