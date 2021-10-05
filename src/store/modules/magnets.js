import axios from 'axios'
import preparePostContent from '@/use/preparePostContent'

export default {
  namespaced: true,
  state() {
    return {
      linkToRedirect: null,
      magnets: [],
      currentID: null,
      status: {
        loadingMagnets: false,
        isMagnetsLoaded: false
      },
    }
  },
  getters: {
    linkToRedirect(state) {
      return state.linkToRedirect
    },
    magnets(state) {
      return state.magnets
    },
    status(state) {
      return state.status
    },
  },
  actions: {
    async loadAll({ dispatch }) {
      dispatch('updateStatus', { name: 'loadingMagnets', val: true })
      try {
        const { data } = await axios.get(`${SERVER_PATH}/api/magnets`)
        Array.isArray(data)
          ? data.map((m) => {
              m.link = ''
              m.image = m.image ? SERVER_PATH + m.image : ''
              m.description = m.description ? preparePostContent(m.description) : ''
              return m
            })
          : data
        dispatch('updateMagnets', data)
        dispatch('updateStatus', { name: 'isMagnetsLoaded', val: true })
      } catch (err) {
        dispatch('updateStatus', { name: 'isMagnetsLoaded', val: false })
      } finally {
        dispatch('updateStatus', { name: 'loadingMagnets', val: false })
      }
    },
    setID({ commit }, id) {
      return new Promise((resolve, reject) => {
        const _id = Number(id)
        if (!_id) {
          reject('ID is not Number type')
          return
        }
        commit('updateCurrentID', _id)
        resolve('ID set successful')
      })
    },
    fetchMagnetLink({ commit, state }) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.get(`${SERVER_PATH}/api/magnets/${state.currentID}/?link=1`)
          commit('updateRedirectLink', data.link)
          resolve()
        } catch (err) {
          console.log(err)
          reject()
        }
      })
    },
    onGettingMagnet({ dispatch, state }) {
      return new Promise(async (resolve, reject) => {
        try {
          await dispatch('fetchMagnetLink')
          setTimeout(() => {
            if (state.linkToRedirect) {
              window.open(state.linkToRedirect, '_blank')
            }
            resolve()
          }, 1500)
        } catch (err) {
          console.log(err)
          reject()
        }
      })
    },
    reset({ commit }) {
      commit('updateCurrentID', null)
      commit('updateRedirectLink', null)
    },
    updateStatus({ commit, state }, options) {
      if (Object.keys(state.status).includes(options.name)) {
        commit('updateStatus', { name: options.name, val: !!options.val })
      }
    },
    updateMagnets({ commit }, magnets) {
      const newMagnets = Array.isArray(magnets) ? magnets : []
      commit('updateMagnets', newMagnets)
    },
  },
  mutations: {
    updateMagnets(state, magnets) {
      state.magnets = magnets
    },
    updateCurrentID(state, id) {
      state.currentID = id
    },
    updateRedirectLink(state, link) {
      state.linkToRedirect = link
    },
    updateStatus(state, options) {
      state.status[options.name] = options.val
    },
  },
}
