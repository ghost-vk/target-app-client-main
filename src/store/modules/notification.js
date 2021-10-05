import { v4 } from 'uuid'
import { networkErrorNotification } from '../networkErrorNotification'

export default {
  namespaced: true,
  state() {
    return {
      messages: [],
    }
  },
  getters: {
    messages(state) {
      return state.messages
    },
  },
  actions: {
    deleteMessage({ commit, getters }, id) {
      const newMessages = getters.messages.filter((m) => m.id !== id)
      commit('updateMessages', newMessages)
    },
    createMessage({ commit, getters }, message) {
      const updatedMessages = [{ ...message, id: v4() }, ...getters.messages]
      commit('updateMessages', updatedMessages)
    },
  },
  mutations: {
    updateMessages(state, messages) {
      state.messages = messages
    },
  },
}
