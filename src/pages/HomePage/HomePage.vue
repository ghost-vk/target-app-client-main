<template>
  <div>
    <SectionHero>
      <SectionHeroMainTitle class="mb-8">
        Анастасия Черепахина - сертифицированный специалист и наставник по рекламе в Instagram
      </SectionHeroMainTitle>
      <div class="flex flex-col sm:flex-row">
        <RouterLink to="/service" v-slot="{ navigate }" class="block">
          <SectionHeroButton @click="navigate" title="Услуги" class="mb-5 sm:mb-0 sm:mr-4" />
        </RouterLink>
        <RouterLink to="/education" v-slot="{ navigate }">
          <SectionHeroButton @click="navigate" title="Обучение" color="purple" />
        </RouterLink>
      </div>
    </SectionHero>
    <HomePageBanners />
    <HomePageAboutCompany />
    <HomePageServices />
    <div class="container mb-8 sm:mb-16 sm:test-lg md:text-xl">
      Я предоставляю качественные услуги по настройке таргета. Я всегда в курсе последних обновлений Facebook /
      Instagram. Со мной можно быть уверенным в том, что ваш рекламный кабинет не будет заблокирован, а реклама будет
      настроена оптимально для вашего бизнеса и бюджета.
    </div>
    <div class="container mb-14 sm:mb-56">
      <AppTitleWithButton
        :is-router="true"
        title="Ознакомиться с моими услугами"
        link-title="Подробнее"
        url="/service"
      />
    </div>
    <HomePageEducation />
    <div class="container">
      <AppTitleWithButton
        :is-router="true"
        title="Ознакомиться с обучающими программами"
        link-title="Подробнее"
        url="/education"
      />
    </div>
    <HomePageSectionPosts />
    <AppReviewsSection />
    <ModalLidForm />
    <ModalLidFormCallbackNotification />
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionHeroMainTitle from '@/components/SectionHeroMainTitle.vue'
import SectionHeroButton from '@/components/SectionHeroButton.vue'
import HomePageServices from '@/pages/HomePage/HomePageServices.vue'
import SectionTitleWithButton from '@/components/ui/AppTitleWithButton.vue'
import HomePageEducation from '@/pages/HomePage/HomePageEducation.vue'
import HomePageSectionPosts from '@/pages/HomePage/HomePageSectionPosts.vue'
import HomePageAboutCompany from '@/pages/HomePage/HomePageAboutCompany.vue'
import AppReviewsSection from '@/components/AppReviewsSection.vue'
import ModalLidForm from '@/components/ModalLidForm.vue'
import ModalLidFormCallbackNotification from '@/components/ModalLidFormCallbackNotification.vue'
import { mapActions } from 'vuex'
import HomePageBanners from '@/pages/HomePage/HomePageBanners.vue'

export default {
  components: {
    HomePageBanners,
    HomePageAboutCompany,
    SectionHero,
    SectionHeroMainTitle,
    SectionHeroButton,
    HomePageServices,
    SectionTitleWithButton,
    HomePageEducation,
    HomePageSectionPosts,
    AppReviewsSection,
    ModalLidForm,
    ModalLidFormCallbackNotification,
  },
  mounted() {
    this.$gtag.event('page_view', { page_title: 'Домашняя страница' })
    const source = this.$route.query['source'] ? this.$route.query['source'] : 'Инстраграм Директ'
    if (this.$route.query['lead_form'] !== undefined && this.$route.query['lead_form'] === 'true') {
      this.showDialog({ shouldCallback: true, source })
    }
  },
  methods: mapActions({
    showDialog: 'lidForm/showDialog',
  }),
}
</script>
