import { campaignBudgetCalculatorSchema } from '@/utils/yup-config'
import {
  TOGGLE_MODAL,
  UPDATE_ORDER_QUANTITY,
  UPDATE_ITEM_PRICE,
  UPDATE_ERROR_VALUE,
  UPDATE_PROCEEDS_VALUE,
  UPDATE_VISITORS_AMOUNT,
  UPDATE_ORDER_PER_MONTH,
  UPDATE_SUCCESS_ORDER_PER_MONTH,
  UPDATE_CONVERSION_PERCENT,
  UPDATE_CONVERSION_SUCCESS_PERCENT,
  UPDATE_NEED_LID,
  UPDATE_NEED_VISITORS,
  UPDATE_COST_PER_CLICK,
  UPDATE_BUDGET_AMOUNT,
  UPDATE_FINAL_CALC_ERROR,
} from '../mutation-types'
import currencyFilter from '@/filters/currency.filter'
import { useGtag } from 'vue-gtag-next'
const { query } = useGtag()

export default {
  namespaced: true,
  state() {
    return {
      isShown: false,
      values: {
        orderQuantity: '',
        itemPrice: '',
        visitors: '',
        orderPerMonth: '',
        successOrderPerMonth: '',
        costPerClick: '',
      },
      errors: {
        orderQuantity: '',
        itemPrice: '',
        visitors: '',
        orderPerMonth: '',
        successOrderPerMonth: '',
        costPerClick: '',
      },
      finalCalcError: '',
      intermediateValues: {
        proceeds: {
          value: '',
          displayValue: '',
        },
        conversionPercent: {
          value: '',
          displayValue: '',
        },
        conversionSuccessPercent: {
          value: '',
          displayValue: '',
        },
        needLidCount: '',
        needVisitors: '',
        budget: {
          value: '',
          displayValue: '',
        },
      },
    }
  },
  getters: {
    isShown(state) {
      return state.isShown
    },
    values(state) {
      return state.values
    },
    errors(state) {
      return state.errors
    },
    intermediateValues(state) {
      return state.intermediateValues
    },
    hasError(state) {
      for (const [key, val] of Object.entries(state.errors)) {
        if (val) {
          return true
        }
      }
      return false
    },
    calcError(state) {
      return state.finalCalcError
    },
  },
  actions: {
    toggleModal({ commit }, value) {
      if (typeof value === 'boolean') {
        commit(TOGGLE_MODAL, value)
      }
    },
    updateOrderQuantity({ commit, dispatch }, value) {
      value = value.replace(',', '.')
      commit(UPDATE_ORDER_QUANTITY, value)
      dispatch('validate', 'orderQuantity')
    },
    updateItemPrice({ commit, dispatch }, value) {
      value = value.replace(',', '.')
      commit(UPDATE_ITEM_PRICE, value)
      dispatch('validate', 'itemPrice')
    },
    updateVisitors({ commit, dispatch }, value) {
      value = value.replace(',', '.')
      commit(UPDATE_VISITORS_AMOUNT, value)
      dispatch('validate', 'visitors')
    },
    updateOrderPerMonth({ commit, dispatch }, value) {
      value = value.replace(',', '.')
      commit(UPDATE_ORDER_PER_MONTH, value)
      dispatch('validate', 'orderPerMonth')
    },
    updateSuccessOrdersPerMonth({ commit, dispatch }, value) {
      value = value.replace(',', '.')
      commit(UPDATE_SUCCESS_ORDER_PER_MONTH, value)
      dispatch('validate', 'successOrderPerMonth')
    },
    updateCostPerClick({ commit, dispatch }, value) {
      value = value.replace(',', '.')
      commit(UPDATE_COST_PER_CLICK, value)
      dispatch('validate', 'costPerClick')
    },
    async calc({ dispatch, getters, commit }) {
      try {
        await campaignBudgetCalculatorSchema.validate(getters.values, { abortEarly: false })
        for (const [key] of Object.entries(getters.errors)) {
          commit(UPDATE_ERROR_VALUE, { name: key, val: '' })
        }

        if (getters.hasError) {
          return null
        }

        await dispatch('calcProceeds')
        await dispatch('calcConversion')
        await dispatch('calcSuccessConversion')
        await dispatch('calcNeedLid')
        await dispatch('calcNeedVisitors')
        await dispatch('calcBudget')
        dispatch('updateFinalCalcError', '')
      } catch (err) {
        dispatch('updateFinalCalcError', err)
        err?.inner.forEach((error) => {
          commit(UPDATE_ERROR_VALUE, { name: error.path, val: error.message })
        })
      } finally {
        query('event', 'calc_ad_budget', {
          event_label: 'Расчет рекламного бюджета',
          event_category: 'calc',
        })
      }
    },
    calcProceeds({ commit, state }) {
      return new Promise((resolve, reject) => {
        const proceeds = state.values.orderQuantity * state.values.itemPrice
        const displayProceeds = currencyFilter(proceeds)
        if (proceeds > 0) {
          commit(UPDATE_PROCEEDS_VALUE, { value: proceeds, displayValue: displayProceeds })
          resolve()
        } else {
          commit(UPDATE_PROCEEDS_VALUE, { value: proceeds, displayValue: '' })
          reject('Проверьте поле "необходимое количество заявок" и "стоимость продажи"')
        }
      })
    },
    calcConversion({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (+state.values.orderPerMonth > +state.values.visitors) {
          reject('Количество заявок больше количества посетителей')
        }
        const conversion = +((100 * state.values.orderPerMonth) / state.values.visitors).toFixed(2)
        const conversionDisplay = conversion + '%'
        commit(UPDATE_CONVERSION_PERCENT, { value: conversion, displayValue: conversionDisplay })
        resolve()
      })
    },
    calcSuccessConversion({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (+state.values.successOrderPerMonth > +state.values.orderPerMonth) {
          reject('Количество продаж больше количества заявок')
        }
        const conversion = +(
          (100 * state.values.successOrderPerMonth) /
          state.values.orderPerMonth
        ).toFixed(2)
        const conversionDisplay = conversion + '%'
        commit(UPDATE_CONVERSION_SUCCESS_PERCENT, {
          value: conversion,
          displayValue: conversionDisplay,
        })
        resolve()
      })
    },
    calcNeedLid({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (!state.intermediateValues.conversionSuccessPercent.value) {
          reject('Не удалось рассчитать конверсию в продажи')
        }
        commit(
          UPDATE_NEED_LID,
          Math.floor(
            (100 * +state.values.orderQuantity) /
              state.intermediateValues.conversionSuccessPercent.value
          )
        )
        resolve()
      })
    },
    calcNeedVisitors({ commit, state }) {
      return new Promise((resolve, reject) => {
        const needVisitorsFloat =
          (100 * state.intermediateValues.needLidCount) /
          state.intermediateValues.conversionPercent.value
        if (!needVisitorsFloat || needVisitorsFloat === 0) {
          reject('Не удалось рассчитать необходимое количество посетителей')
        }
        commit(UPDATE_NEED_VISITORS, Math.floor(needVisitorsFloat))
        resolve()
      })
    },
    calcBudget({ commit, state }) {
      return new Promise((resolve, reject) => {
        const budget = state.intermediateValues.needVisitors * state.values.costPerClick
        if (!budget || budget <= 0) {
          reject('Не удалось рассчитать бюджет, проверьте правильность заполнения полей')
        }
        const displayBudget = currencyFilter(budget)
        commit(UPDATE_BUDGET_AMOUNT, {
          value: budget,
          displayValue: displayBudget,
        })
        commit(UPDATE_ERROR_VALUE, { name: 'budget', value: '' })
        resolve()
      })
    },
    validate({ commit, state, getters }, field) {
      campaignBudgetCalculatorSchema
        .validateAt(field, getters.values)
        .then(() => {
          commit(UPDATE_ERROR_VALUE, { name: field, val: '' })
        })
        .catch((err) => {
          commit(UPDATE_ERROR_VALUE, { name: field, val: err.errors[0] })
        })
    },
    updateFinalCalcError({ commit }, value) {
      commit(UPDATE_FINAL_CALC_ERROR, value)
    },
  },
  mutations: {
    [TOGGLE_MODAL](state, value) {
      state.isShown = value
    },
    [UPDATE_ORDER_QUANTITY](state, value) {
      state.values.orderQuantity = value
    },
    [UPDATE_ITEM_PRICE](state, value) {
      state.values.itemPrice = value
    },
    [UPDATE_ERROR_VALUE](state, data) {
      state.errors[data.name] = data.val
    },
    [UPDATE_PROCEEDS_VALUE](state, value) {
      state.intermediateValues.proceeds = value
    },
    [UPDATE_VISITORS_AMOUNT](state, value) {
      state.values.visitors = value
    },
    [UPDATE_ORDER_PER_MONTH](state, value) {
      state.values.orderPerMonth = value
    },
    [UPDATE_SUCCESS_ORDER_PER_MONTH](state, value) {
      state.values.successOrderPerMonth = value
    },
    [UPDATE_CONVERSION_PERCENT](state, value) {
      state.intermediateValues.conversionPercent = value
    },
    [UPDATE_CONVERSION_SUCCESS_PERCENT](state, value) {
      state.intermediateValues.conversionSuccessPercent = value
    },
    [UPDATE_NEED_LID](state, value) {
      state.intermediateValues.needLidCount = value
    },
    [UPDATE_NEED_VISITORS](state, value) {
      state.intermediateValues.needVisitors = value
    },
    [UPDATE_COST_PER_CLICK](state, value) {
      state.values.costPerClick = value
    },
    [UPDATE_BUDGET_AMOUNT](state, value) {
      state.intermediateValues.budget = value
    },
    [UPDATE_FINAL_CALC_ERROR](state, value) {
      state.finalCalcError = value
    },
  },
}
