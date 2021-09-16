<template>
  <div>
    <ServicePageHero @open-lid-form="showDialog" />
    <ServicePageFeatures />
    <ServicePageAbout />
    <ServicePageConsultationTitle @open-lid-form="showDialog" />
    <ServicePageWorkSteps />
    <ServicePageBrief />
    <ServicePageCards />
    <AppReviewsSection
      @intersection="onReviewsIntersect"
      :reviews="reviews"
      :is-loading="isLoading"
      :loading-status="loadingStatus"
    />
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
  }),
  computed: {
    ...mapGetters({
      reviews: 'reviews/reviews',
      loadingStatus: 'reviews/loadingStatus',
      isLoading: 'reviews/isLoading',
    }),
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
