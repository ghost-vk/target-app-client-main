import axios from 'axios'
import preparePostContent from '@/use/preparePostContent'
import router from '@/router'

export default {
  namespaced: true,
  state() {
    return {
      displayValues: {},
      status: {
        loaded: false,
        failed: false,
        notExist: false,
      },
    }
  },
  getters: {
    displayValues(state) {
      return state.displayValues
    },
    status(state) {
      return state.status
    },
  },
  actions: {
    loadPost({ commit, dispatch }, id) {
      return new Promise(async (resolve, reject) => {
        if (!Number(id)) {
          commit('updateStatus', { name: 'notExist', val: true })
          reject()
          return
        }
        dispatch('updateLoadingPage', true, { root: true })
        try {
          let { data } = await axios.get(`${SERVER_PATH}/api/posts/${id}`)
          data.thumbnail = data.thumbnail ? SERVER_PATH + data.thumbnail : ''
          data.case_stats = data.case_stats ? JSON.parse(data.case_stats) : null
          if (data.case_stats && window.innerWidth <= 400 && data.case_stats.length > 2) {
            data.case_stats.splice(1, data.case_stats.length - 2)
          }
          data.content = preparePostContent(data.content)
          commit('updateDisplayValues', data)
        } catch (err) {
          commit('updateStatus', { name: 'failed', val: true })
          router.push('/page-not-found')
          reject()
        } finally {
          commit('updateStatus', { name: 'loaded', val: true })
          dispatch('updateLoadingPage', false, { root: true })
          resolve()
        }
      })
    },
  },
  mutations: {
    updateDisplayValues(state, data) {
      state.displayValues = data
    },
    updateStatus(state, data) {
      state.status[data.name] = data.val
    },
  },
}
