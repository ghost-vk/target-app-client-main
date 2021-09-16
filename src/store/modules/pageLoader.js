export default {
  state() {
    return {
      isLoadingPage: false
    }
  },
  getters: {
    isLoadingPage(state) {
      return state.isLoadingPage
    }
  },
  actions: {
    updateLoadingPage({ commit }, val) {
      commit('updateLoadingPage', !!val)
    }
  },
  mutations: {
    updateLoadingPage(state, val) {
      state.isLoadingPage = val
    }
  }
}