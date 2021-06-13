import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      item: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
