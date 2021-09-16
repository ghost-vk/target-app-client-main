import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      cases: [],
      status: {
        loaded: false,
        failed: false
      }
    }
  },
  getters: {
    cases(state) {
      return state.cases
    },
    status(state) {
      return state.status
    },
    casesCount(state){
      return state.cases.length
    }
  },
  actions: {
    loadCases({ commit, dispatch, state }) {
      return new Promise (async (resolve, reject) => {
        if (state.status.loaded || state.status.failed) {
          reject(false)
          return
        }
        try {
          const response = await axios.get(`${SERVER_PATH}/api/posts/?category=1&fullmode=0`)
          commit('updateCases', response.data.data)
          resolve(true)
          if (state.status.failed) {
            dispatch('updateStatus', { name: 'failed', val: false })
          }
        } catch (err) {
          console.log(err);
          dispatch('updateStatus', { name: 'failed', val: true })
          reject(false)
        } finally {
          dispatch('updateStatus', { name: 'loaded', val: true })
        }
      })
    },
    updateStatus({ commit }, status) {
      commit('updateStatus', { name: status.name, val: status.val })
    }
  },
  mutations: {
    updateCases(state, val) {
      state.cases = val
    },
    updateStatus(state, status) {
      state.status[status.name] = status.val
    }
  }
}