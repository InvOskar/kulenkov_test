import { createStore } from 'vuex'

export default createStore({
  state: {
    category: 'all',
  },
  getters: {
    getCategory: state => state.category,
  },
  mutations: {
    setCategory(state, category) {
      state.category = category;
    }
  },
  actions: {
    setCategory({ commit }, category) {
      commit('setCategory', category);
    }
  },
  modules: {
  }
})
