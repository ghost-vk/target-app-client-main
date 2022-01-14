import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      banners: [],
      isFetched: false
    }
  },
  getters: {
    banners(state) {
      return state.banners
    }
  },
  actions: {
    async fetchActiveBanners({ commit, state }) {
      try {
        if (state.isFetched) {
          return
        }
        commit('setFetched', true)

        const response = await axios.get(`${SERVER_PATH}/api/banners?options=active`)

        if (!Array.isArray(response.data)) {
          commit('setBanners', [])
          return
        }

        if (response.data.length > 1) {
          response.data.sort((a, b) => -(a.priority - b.priority))
        }

        commit('setBanners', response.data)
      } catch (e) {
        commit('setBanners', [])
      }
    }
  },
  mutations: {
    setBanners(state, banners) {
      if (!banners) {
        state.banners = []
        return
      }
      state.banners = banners
    },
    setFetched(state, value) {
      state.isFetched = value
    }
  }
}