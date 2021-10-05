<template>
  <div>
    <SectionHero>
      <SectionHeroMainTitle class="mb-2 sm:mb-5">
        Настройка таргетированной рекламы и консультации от эксперта
      </SectionHeroMainTitle>
      <p class="mb-5 text-center sm:text-left md:text-2xl font-semibold">
        Эффективные решения для вашего бизнеса в Facebook / Instagram
      </p>
      <div class="flex flex-col sm:flex-row">
        <SectionHeroButton
          @click="
            $emit('open-lid-form', {
              shouldCallback: true,
              source: 'Страница услуг (Консультация)',
            })
          "
          title="Получить консультацию"
          class="mb-5 sm:mb-0 sm:mr-4"
        />
        <AnalyticsLink route="бриф в google forms" :href="briefURL" target="_blank" class="block">
          <SectionHeroButton title="Заполнить бриф" color="purple" />
        </AnalyticsLink>
      </div>
    </SectionHero>
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionHeroMainTitle from '@/components/SectionHeroMainTitle.vue'
import SectionHeroButton from '@/components/SectionHeroButton.vue'
import AnalyticsLink from '@/components/AnalyticsLink.vue'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    briefURL: 'globalVars/briefURL',
  }),
  components: {
    SectionHero,
    SectionHeroMainTitle,
    SectionHeroButton,
    AnalyticsLink,
  },
}
</script>
