import { createStore } from 'vuex'
import lidForm from './modules/lidForm'
import faq from './modules/faq'
import modalCampaignBudgetCalculator from './modules/modalCampaignBudgetCalculator'
import globalVars from './modules/globalVars'
import reviews from './modules/reviews'
import cases from './modules/cases'
import post from './modules/post'
import pageLoader from './modules/pageLoader'
import magnets from './modules/magnets'

const store = createStore({
  modules: {
    lidForm,
    faq,
    modalCampaignBudgetCalculator,
    globalVars,
    reviews,
    cases,
    post,
    pageLoader,
    magnets
  },
})

export default store
