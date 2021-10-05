import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      reviews: [],
      isLoading: true,
      loadingStatus: false,
      activeCategory: 'all',
      catButtons: [
        {
          value: 'all',
          title: 'Все отзывы',
        },
        {
          value: 'consultation',
          title: 'Консультации',
        },
        {
          value: 'target-setup',
          title: 'Настройка рекламы',
        },
        {
          value: 'telegram-chat',
          title: 'Telegram чат',
        },
        {
          value: 'free-products',
          title: 'Бесплатные продукты',
        },
      ],
    }
  },
  getters: {
    reviews(state) {
      return state.activeCategory === 'all'
        ? state.reviews
        : state.reviews.filter((r) => r.category === state.activeCategory)
    },
    isLoading(state) {
      return state.isLoading
    },
    loadingStatus(state) {
      return state.loadingStatus
    },
    activeCategory(state) {
      return state.activeCategory
    },
    catButtons(state) {
      return state.catButtons
    },
  },
  actions: {
    async load({ commit, dispatch }, options) {
      if (!options) {
        return
      }
      // const category = options.category ? `category=${options.category}&` : ''
      const limit = options.limit ? `limit=${options.limit}&` : ''
      const ordered = 'ordered=1'
      dispatch('updateLoading', true)
      try {
        const response = await axios.get(
          `${SERVER_PATH}/api/reviews/?${limit}${ordered}`
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
    updateActiveCategory({ commit }, val) {
      const availableCategories = [
        'target-setup',
        'consultation',
        'education',
        'telegram-chat',
        'free-products',
      ]
      if (availableCategories.includes(val)) {
        commit('updateActiveCategory', val)
      } else {
        commit('updateActiveCategory', 'all')
      }
    },
    reset({ commit }) {
      commit('updateReviews', [])
      commit('updateLoading', true)
      commit('updateStatus', false)
    },
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
    },
    updateActiveCategory(state, val) {
      state.activeCategory = val
    },
  },
}
