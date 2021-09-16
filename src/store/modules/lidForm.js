import { lidFormSchema } from '@/utils/yup-config'
import { isValidPhoneNumber } from 'libphonenumber-js'
import axios from 'axios'
import strLenFilter from '@/filters/strLen.filter'

import {
  UPDATE_CONTACT_TYPE_BUTTONS,
  UPDATE_CHECK,
  UPDATE_NAME,
  UPDATE_PHONE,
  UPDATE_COUNTRY_CODE,
  UPDATE_ERROR_VALUE,
  UPDATE_LID_SOURCE,
  SHOW_MODAL,
  HIDE_MODAL,
  UPDATE_NOTIFICATION,
  UPDATE_CONTACT_TYPE,
  UPDATE_NEED_OF_COMMUNICATION,
  UPDATE_LOADING,
  UPDATE_CALLBACK
} from '../mutation-types'

export default {
  namespaced: true,
  state: () => ({
    isShown: false,
    values: {
      name: '',
      phone: '',
      check: false, // Privacy
      contactType: '',
      source: '', // From where the form is opened
      countryCode: 'RU',
      shouldCallback: true,
    },
    errors: {
      name: '',
      phone: '',
      check: '',
    },
    contactTypeButtons: [
      {
        title: "What's App",
        value: 'wa',
        selected: true,
      },
      {
        title: 'Telegram',
        value: 'tg',
        selected: false,
      },
      {
        title: 'Viber',
        value: 'vb',
        selected: false,
      },
      {
        title: 'Звонок',
        value: 'cl',
        selected: false,
      },
    ],
    notification: {
      isShown: false,
      sendingFormStatus: true,
    },
    loading: false,
    cb: {
      success: () =>
        new Promise((res) => {
          res('s')
        }),
      failed: () =>
        new Promise((res) => {
          res('f')
        }),
    },
  }),
  getters: {
    isModalShown(state) {
      return state.isShown
    },
    notification(state) {
      return state.notification
    },
    sendingStatus(state) {
      return state.notification.sendingFormStatus
    },
    contactTypeButtons(state) {
      return state.contactTypeButtons
    },
    checkPrivacy(state) {
      return state.checkPrivacy
    },
    fieldValues(state) {
      return state.values
    },
    fieldErrors(state) {
      return state.errors
    },
    contactType(state) {
      return state.values.contactType
    },
    loading(state) {
      return state.loading
    },
    cb(state) {
      return state.cb
    },
  },
  actions: {
    showDialog({ commit, dispatch }, options) {
      commit(SHOW_MODAL)
      if (typeof options === 'string') {
        dispatch('setLidSource', strLenFilter(options, 255))
      } else {
        commit(UPDATE_NEED_OF_COMMUNICATION, !!options.shouldCallback)
        dispatch('setLidSource', strLenFilter(options.source, 255))
      }
    },
    hideModal({ commit }) {
      commit(HIDE_MODAL)
    },
    async onSubmit({ commit, state, getters, dispatch }) {
      try {
        dispatch('updateLoading', true)
        await lidFormSchema.validate(getters.fieldValues, { abortEarly: false })
        for (const [key] of Object.entries(getters.fieldErrors)) {
          commit(UPDATE_ERROR_VALUE, { name: key, val: '' })
        }
        await axios.post(`${SERVER_PATH}/api/lid`, getters.fieldValues)
        if (!state.values.shouldCallback) {
          await dispatch('magnets/onGettingMagnet', null, { root: true })
        }

        dispatch('hideModal')
        dispatch('resetValues')
        dispatch('updateNotification', { isShown: true, sendingFormStatus: true })
      } catch (err) {
        err?.inner?.forEach((error) => {
          commit(UPDATE_ERROR_VALUE, { name: error.path, val: error.message })
        })
      } finally {
        dispatch('updateLoading', false)
      }
    },
    switchContactType({ commit, state }, value) {
      const switchTo = state.contactTypeButtons.filter((i) => i.value === value && !i.selected)
      if (switchTo.length === 1) {
        commit(UPDATE_CONTACT_TYPE_BUTTONS, switchTo[0])
        commit(UPDATE_CONTACT_TYPE, switchTo[0].title)
      }
    },
    toggleCheck({ commit, state, dispatch }) {
      commit(UPDATE_CHECK, !state.values.check)
      dispatch('validate', 'check')
    },
    updateName({ commit, dispatch }, value) {
      commit(UPDATE_NAME, value)
      dispatch('validate', 'name')
    },
    async updatePhone({ commit, dispatch }, value) {
      commit(UPDATE_PHONE, value)
      await dispatch('validate', 'phone') // Basic validation
      if (value?.length > 5) {
        dispatch('validatePhone') // libhonenumber-js validation
      }
    },
    updateCountry({ commit, dispatch }, value) {
      const availableCodes = ['RU', 'UA', 'KZ', 'UZ', 'TJ', 'AZ']
      if (availableCodes.find((code) => code === value)) {
        commit(UPDATE_COUNTRY_CODE, value)
      }
    },
    async validate({ commit, state, getters }, field) {
      try {
        await lidFormSchema.validateAt(field, getters.fieldValues)
        commit(UPDATE_ERROR_VALUE, { name: field, val: '' })
      } catch (err) {
        commit(UPDATE_ERROR_VALUE, { name: field, val: err.errors[0] })
      }
    },
    validatePhone({ commit, getters }) {
      const isValid = isValidPhoneNumber(getters.fieldValues.phone, getters.fieldValues.countryCode)
      if (isValid) {
        commit(UPDATE_ERROR_VALUE, { name: 'phone', val: '' })
      } else {
        commit(UPDATE_ERROR_VALUE, { name: 'phone', val: 'Номер телефона не действителен' })
      }
    },
    setLidSource({ commit }, source) {
      if (typeof source === 'string' && source.length > 0) {
        commit(UPDATE_LID_SOURCE, source)
      }
    },
    resetValues({ commit }) {
      commit(UPDATE_CHECK, false)
      commit(UPDATE_NAME, '')
      commit(UPDATE_PHONE, '')
      commit(UPDATE_LID_SOURCE, '')
      commit(UPDATE_ERROR_VALUE, { name: 'name', val: '' })
      commit(UPDATE_ERROR_VALUE, { name: 'phone', val: '' })
      commit(UPDATE_ERROR_VALUE, { name: 'check', val: '' })
      commit(UPDATE_NEED_OF_COMMUNICATION, true)
    },
    updateNotification({ commit }, data) {
      if (typeof data === 'object') {
        commit(UPDATE_NOTIFICATION, data)
      }
    },
    updateLoading({ commit }, val) {
      commit(UPDATE_LOADING, !!val)
    },
    setCb({ commit }, cb) {
      const success = cb.success
      const failed = cb.failed
      if (typeof success === 'function' && typeof failed === 'function') {
        commit(UPDATE_CALLBACK, cb)
      }
    }
  },
  mutations: {
    [UPDATE_CONTACT_TYPE_BUTTONS](state, btn) {
      state.contactTypeButtons.forEach((item) => {
        item.selected = btn.value === item.value
      })
    },
    [UPDATE_CONTACT_TYPE](state, value) {
      state.values.contactType = value
    },
    [UPDATE_CHECK](state, newVal) {
      state.values.check = newVal
    },
    [UPDATE_NAME](state, val) {
      state.values.name = val
    },
    [UPDATE_PHONE](state, val) {
      state.values.phone = val
    },
    [UPDATE_COUNTRY_CODE](state, val) {
      state.values.countryCode = val
    },
    [UPDATE_ERROR_VALUE](state, data) {
      state.errors[data.name] = data.val
    },
    [UPDATE_LID_SOURCE](state, source) {
      state.values.source = source
    },
    [SHOW_MODAL](state) {
      state.isShown = true
    },
    [HIDE_MODAL](state) {
      state.isShown = false
    },
    [UPDATE_NOTIFICATION](state, value) {
      state.notification = value
    },
    [UPDATE_NEED_OF_COMMUNICATION](state, value) {
      state.values.shouldCallback = value
    },
    [UPDATE_LOADING](state, val) {
      state.loading = val
    },
    [UPDATE_CALLBACK](state, cb) {
      console.log(cb);
      state.cb = cb
    }
  },
}
