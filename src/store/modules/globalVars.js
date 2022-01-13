import logo from '@/assets/img/target-logo-3.svg'

export default {
  namespaced: true,
  state() {
    return {
      identica: {
        mainLogo: logo,
      },
      contacts: {
        instagram: 'https://www.instagram.com/anastasi_target/',
        telegram: 'https://t.me/anastasi_target',
        whatsapp: 'https://api.whatsapp.com/send?phone=79309905159',
        telegramChat: 'https://t.me/anastasitarget',
        telegramPaymentBot: 'https://t.me/at_payment_bot'
      },
      colors: {
        main: '#A78BFA'
      },
      briefURL: 'https://forms.gle/RYYJK4oZ4hxcmKMc9',
      shouldHeaderVisible: true
    }
  },
  getters: {
    contacts(state) {
      return state.contacts
    },
    identica(state) {
      return state.identica
    },
    colors(state) {
      return state.colors
    },
    briefURL(state) {
      return state.briefURL
    },
    shouldHeaderVisible(state) {
      return state.shouldHeaderVisible
    }
  },
  actions: {
    handleHeader({ commit }, value) {
      commit('setHeader', !!value)
    }
  },
  mutations: {
    setHeader(state, value) {
      state.shouldHeaderVisible = value
    }
  }
}