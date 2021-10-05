import Cookies from 'js-cookie'
import camelToDashFilter from '@/filters/camelToDash.filter'

const prefix = 'target_lead_'

export default {
  namespaced: true,
  state() {
    return {
      lead: {
        name: Cookies.get(`${prefix}name`) || '',
        phone: Cookies.get(`${prefix}phone`) || '',
        contactType: Cookies.get(`${prefix}contact_type`) || '',
      },
    }
  },
  getters: {
    lead(state) {
      return state.lead
    },
    isLeadSaved(state) {
      return state.lead.name.length && state.lead.phone.length && state.lead.contactType.length
    },
  },
  actions: {
    setLead({ commit }, data) {
      if (Array.isArray(data)) {
        commit('updateLeadData', data)
      }
    },
  },
  mutations: {
    updateLeadData(state, data) {
      data.forEach((r) => {
        if (Object.keys(state.lead).includes(r.name) && r.val) {
          state.lead[r.name] = r.val
          Cookies.set(prefix + camelToDashFilter(r.name), r.val, { expires: 30 })
        }
      })
    },
  },
}
