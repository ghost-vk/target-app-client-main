<template>
  <div>
    <SectionHero>
      <SectionHeroMainTitle class="mb-2 sm:mb-5"> AdCalculator </SectionHeroMainTitle>
      <p class="mb-5 text-center sm:text-left text-sm md:text-2xl font-semibold">
        Рассчитайте бюджет на рекламу для ваших рекламных задач
      </p>
      <div class="flex flex-col sm:flex-row">
        <SectionHeroButton
          @click="
            showDialog({ source: 'Страница калькуляторов (Консультация)', shouldCallback: true })
          "
          title="Получить консультацию"
        />
      </div>
    </SectionHero>
    <div class="container mb-20">
      <AppHeadingThird title="Расчет рекламного бюджета" />
      <p class="mb-4">
        Клиенты часто спрашивают меня про бюджет, необходимый на таргет и высчитывать
        ориентировочный бюджет каждый раз довольно утомительно. Поэтому я решила что было бы здорово
        иметь такой калькулятор, который упростил бы мою задачу.
      </p>
      <p class="mb-6">
        Самое сложное здесь это цена за переход. Но чтобы ее узнать, можно написать в крупный чат
        таргетологов, скорее всего уже кто-то работал с этой нишей. Если же никто не ответил, то
        можно погуглить кейсы в данной нише и найти нужные цифры.
      </p>
      <div class="flex flex-wrap justify-center">
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
  mounted() {
    this.$gtag.event('page_view', { page_title: 'Страница калькулятора рекламы' })
  },
}
</script>
