<template>
  <div>
    <ServicePageHero
      @open-lid-form="
        (source) => {
          showDialog({ source, shouldCallback: true })
        }
      "
    />
    <ServicePageFeatures />
    <ServicePageAbout />
    <ServicePageConsultationTitle
      @open-lid-form="
        (source) => {
          showDialog({ source, shouldCallback: true })
        }
      "
    />
    <ServicePageWorkSteps />
    <ServicePageBrief />
    <ServicePageCards />
    <AppReviewsSection v-intersection="setServiceCategory" />
    <ServicePageFAQ />
    <ModalLidForm />
    <ModalLidFormCallbackNotification />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ServicePageHero from '@/pages/ServicePage/ServicePageHero.vue'
import ServicePageFeatures from '@/pages/ServicePage/ServicePageFeatures.vue'
import ServicePageAbout from '@/pages/ServicePage/ServicePageAbout.vue'
import ServicePageConsultationTitle from '@/pages/ServicePage/ServicePageConsultationTitle.vue'
import ServicePageWorkSteps from '@/pages/ServicePage/ServicePageWorkSteps.vue'
import ServicePageBrief from '@/pages/ServicePage/ServicePageBrief.vue'
import ServicePageCards from '@/pages/ServicePage/ServicePageCards.vue'
import ServicePageReviews from '@/pages/ServicePage/ServicePageReviews.vue'
import ServicePageFAQ from '@/pages/ServicePage/ServicePageFAQ.vue'
import ModalLidForm from '@/components/ModalLidForm.vue'
import ModalLidFormCallbackNotification from '@/components/ModalLidFormCallbackNotification.vue'
import AppReviewsSection from '@/components/AppReviewsSection.vue'

export default {
  methods: mapActions({
    showDialog: 'lidForm/showDialog',
    loadReviews: 'reviews/load',
    onReviewsIntersect() {
      if (!this.reviews.length) {
        this.loadReviews({
          category: 'target-setup',
          limit: '10',
          ordered: 1,
        })
      }
    },
    updateActiveCategory: 'reviews/updateActiveCategory',
    setServiceCategory() {
      if (!this.isCatSet) {
        this.isCatSet = true
        this.updateActiveCategory('target-setup')
      }
    },
  }),
  computed: {
    ...mapGetters({
      reviews: 'reviews/reviews',
      loadingStatus: 'reviews/loadingStatus',
      isLoading: 'reviews/isLoading',
    }),
  },
  mounted() {
    this.$gtag.event('page_view', { page_title: 'Cтраница услуг' })
  },
  data() {
    return {
      isCatSet: false,
    }
  },
  components: {
    AppReviewsSection,
    ModalLidForm,
    ServicePageReviews,
    ServicePageFeatures,
    ServicePageHero,
    ServicePageAbout,
    ServicePageConsultationTitle,
    ServicePageWorkSteps,
    ServicePageBrief,
    ServicePageCards,
    ServicePageFAQ,
    ModalLidFormCallbackNotification,
  },
}
</script>
