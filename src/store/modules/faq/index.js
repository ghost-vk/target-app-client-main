import { servicePageQuestions } from './servicePage'
import { educationPageQuestions } from './educationPage'
import { UPDATE_QUESTIONS } from '../../mutation-types'

export default {
  namespaced: true,
  state: () => ({
    servicePageQuestions,
    educationPageQuestions,
  }),
  actions: {
    toggle({ commit, state }, data) {
      if (state[data.name]) {
        commit(UPDATE_QUESTIONS, data)
      }
    },
  },
  getters: {
    servicePageQuestions(state) {
      return state.servicePageQuestions
    },
    educationPageQuestions(state) {
      return state.educationPageQuestions
    },
  },
  mutations: {
    [UPDATE_QUESTIONS](state, data) {
      state[data.name].value.forEach((q) => {
        if (q.id === data.id) {
          q.isOpened = !q.isOpened
        } else {
          q.isOpened = false
        }
      })
    },
  },
}
