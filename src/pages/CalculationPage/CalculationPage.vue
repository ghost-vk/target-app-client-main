<template>
  <div>
    <SectionHero>
      <SectionHeroMainTitle class="mb-2 sm:mb-5"> AdCalculator </SectionHeroMainTitle>
      <p class="mb-5 text-center sm:text-left text-sm md:text-2xl font-semibold">
        Рассчитайте бюджет на рекламу для ваших рекламных задач
      </p>
      <div class="flex flex-col sm:flex-row">
        <SectionHeroButton
          @click="showDialog('Страница калькуляторов (Консультация)')"
          title="Получить консультацию"
        />
      </div>
    </SectionHero>
    <div class="container mb-20">
      <AppHeadingThird title="Расчет рекламного бюджета" />
      <div class="flex flex-wrap justify-center">
        <div
          @click="toggleModal(true)"
          class="
            hidden
            w-1/2
            bg-white
            rounded-lg
            shadow
            p-3
            text-center
            font-semibold
            flex flex-col
            items-center
            cursor-pointer
          "
        >
          <AppBudgetIcon class="h-12 w-12 text-purple-700 mb-3" />
          Рекламный бюджет
        </div>
        <CalculationPageCampaignBudget />
      </div>
    </div>
    <ModalLidForm />
    <ModalLidFormCallbackNotification />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import ModalLidForm from '@/components/ModalLidForm.vue'
import ModalLidFormCallbackNotification from '@/components/ModalLidFormCallbackNotification.vue'
import SectionHero from '@/components/SectionHero.vue'
import SectionHeroMainTitle from '@/components/SectionHeroMainTitle.vue'
import SectionHeroButton from '@/components/SectionHeroButton.vue'
import CalculationPageCampaignBudget from '@/pages/CalculationPage/CalculationPageCampaignBudget.vue'

export default {
  methods: {
    ...mapActions({
      showDialog: 'lidForm/showDialog',
      toggleModal: 'modalCampaignBudgetCalculator/toggleModal',
    }),
  },
  components: {
    CalculationPageCampaignBudget,
    ModalLidForm,
    ModalLidFormCallbackNotification,
    SectionHero,
    SectionHeroMainTitle,
    SectionHeroButton,
  },
}
</script>
