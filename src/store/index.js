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
import user from './modules/user'
import notification from './modules/notification'
import banners from './modules/banners'

export const store = createStore({
  modules: {
    lidForm,
    faq,
    modalCampaignBudgetCalculator,
    globalVars,
    reviews,
    cases,
    post,
    pageLoader,
    magnets,
    user,
    notification,
    banners,
  },
})

export default store
