import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      reviews: [],
      isLoading: true,
      loadingStatus: false
    }
  },
  getters: {
    reviews(state) {
      return state.reviews
    },
    isLoading(state) {
      return state.isLoading
    },
    loadingStatus(state) {
      return state.loadingStatus
    }
  },
  actions: {
    async load({ commit, dispatch }, options) {
      if (!options) {
        return
      }
      const category = options.category ? `category=${options.category}&` : ''
      const limit = options.limit ? `limit=${options.limit}&` : ''
      const ordered = 'ordered=1'
      dispatch('updateLoading', true)
      try {
        const response = await axios.get(
          `${SERVER_PATH}/api/reviews/?${category}${limit}${ordered}`
        )
        commit('updateReviews', response.data)
        dispatch('updateStatus', true)
      } catch (err) {
        // console.log(err);
        dispatch('updateStatus', false)
      } finally {
        dispatch('updateLoading', false)
      }
    },
    updateLoading({ commit }, val) {
      commit('updateLoading', !!val)
    },
    updateStatus({ commit }, val) {
      commit('updateStatus', !!val)
    },
    reset({ commit }) {
      commit('updateReviews', [])
      commit('updateLoading', true)
      commit('updateStatus', false)
    }
  },
  mutations: {
    updateReviews(state, val) {
      state.reviews = val
    },
    updateLoading(state, val) {
      state.isLoading = val
    },
    updateStatus(state, val) {
      state.loadingStatus = val
    }
  },
}
