<template>
  <div v-if="tripwire" class="pb-20">
    <SectionHero>
      <SectionHeroMainTitle class="mb-8">{{ tripwire.title }}</SectionHeroMainTitle>
      <p
        class="mb-5 text-center sm:text-left md:text-2xl font-semibold"
        v-html="tripwire.subtitle"
      ></p>
      <div class="flex flex-col sm:flex-row">
        <a href="#buy">
          <SectionHeroButton title="Купить" class="mb-5 sm:mb-0 sm:mr-4" />
        </a>
        <SectionHeroButton
          title="Задать вопрос"
          color="purple"
          @click="onQuestionLidFormOpening(tripwire.title)"
        />
      </div>
    </SectionHero>
    <TripwirePageForWhom :tripwire="tripwire" />
    <TripwirePageAbout :tripwire="tripwire" />
    <TripwirePageProductCard :tripwire="tripwire" @click-btn="this.isPaymentModalShown = true" />
    <AppQuoteSection :text="tripwire.quote" class="mb-20" />
    <TripwirePageDetails :tripwire-content="tripwire.content" />
    <NastyaSquaredCard class="mb-12 md:mb-28" />
    <TripwirePageMotivationConclusion />
    <div class="container max-w-screen-md">
      <AppTitleWithButton
        :is-always-column="true"
        :is-event="true"
        @handle="onQuestionLidFormOpening(tripwire.title)"
        title="Остались вопросы?"
        link-title="Задать вопрос"
        class="mt-8"
      />
    </div>
    <AppModalWindow :is-shown="this.isPaymentModalShown" @close="this.isPaymentModalShown = false">
      <div class="text-center">
        <div class="text-xl font-bold">Покупка материала</div>
        <div class="text-gray-500 mb-5">{{ tripwire.title }}</div>
      </div>
      <div class="mb-4">
        Оплата производится через нашего Telegram бота. Нажмите <AppBlueUnderlineLink @click="openLeadFormForBuy(tripwire.title)">здесь</AppBlueUnderlineLink>, если у вас возникли вопросы по оплате.
      </div>
      <div class="flex justify-center sm:flex-nowrap flex-wrap">
        <AnalyticsLink
          :href="contacts.telegramPaymentBot"
          route="переход в кассу (телеграм-бот)"
          target="_blank"
          class="block w-full sm:w-auto"
        >
          <button
            type="button"
            class="
              bg-blue-500
              text-gray-50
              px-16
              py-2
              rounded-full
              shadow
              w-full
              relative
            "
          >
            <AppTelegramIcon class="absolute left-3 transform top-1/2 -translate-y-1/2 w-6 h-6"/>
            Оплатить
          </button>
        </AnalyticsLink>
      </div>
    </AppModalWindow>
    <ModalLidForm />
    <ModalLidFormCallbackNotification />
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionHeroMainTitle from '@/components/SectionHeroMainTitle.vue'
import SectionHeroButton from '@/components/SectionHeroButton.vue'
import ModalLidForm from '@/components/ModalLidForm.vue'
import ModalLidFormCallbackNotification from '@/components/ModalLidFormCallbackNotification.vue'
import AppHeadingBubble from '@/components/AppHeadingBubble.vue'
import AppQuoteSection from '@/components/AppQuoteSection.vue'
import AppDescriptionGrid from '@/components/AppDescriptionGrid.vue'
import TripwirePageForWhom from './TripwirePageForWhom.vue'
import TripwirePageAbout from './TripwirePageAbout.vue'
import TripwirePageProductCard from './TripwirePageProductCard.vue'
import TripwirePageDetails from './TripwirePageDetails.vue'
import TripwirePageMotivationConclusion from './TripwirePageMotivationConclusion.vue'
import NastyaSquaredCard from '@/components/NastyaSquaredCard.vue'
import AnalyticsLink from '@/components/AnalyticsLink.vue'
import { InformationCircleIcon, ChevronRightIcon } from '@heroicons/vue/solid/index'
import { AcademicCapIcon } from '@heroicons/vue/outline'
import { useRoute, useRouter } from 'vue-router'
import { useTripwires } from '@/use/tripwires'
import { mapActions, mapGetters } from 'vuex'
import { onMounted, onBeforeMount } from 'vue'
import { useGtag } from 'vue-gtag-next'

export default {
  setup() {
    const router = useRouter()
    const name = useRoute().params.name
    const { query } = useGtag()
    const tripwire = useTripwires(name)[0]
    onBeforeMount(() => {
      if (!tripwire) {
        router.push('/404')
      }
    })
    onMounted(() => {
      if (!tripwire) {
        return
      }
      query('event', 'page_view', { page_title: `Трипваер "${tripwire.title}"` })
    })
    return { tripwire }
  },
  methods: {
    ...mapActions({
      showDialog: 'lidForm/showDialog',
    }),
    onQuestionLidFormOpening(tripwireName) {
      this.showDialog({ shouldCallback: true, source: `Вопрос по трипваеру '${tripwireName}'` })
    },
    openLeadFormForBuy(tripwireName) {
      this.isPaymentModalShown = false
      this.showDialog({ shouldCallback: true, source: `Вопрос по трипваеру '${tripwireName}'` })
    },
  },
  components: {
    SectionHero,
    SectionHeroMainTitle,
    SectionHeroButton,
    InformationCircleIcon,
    AcademicCapIcon,
    ChevronRightIcon,
    ModalLidForm,
    ModalLidFormCallbackNotification,
    TripwirePageForWhom,
    TripwirePageAbout,
    TripwirePageProductCard,
    TripwirePageDetails,
    TripwirePageMotivationConclusion,
    AppHeadingBubble,
    AppQuoteSection,
    AppDescriptionGrid,
    NastyaSquaredCard,
    AnalyticsLink,
  },
  data() {
    return {
      isPaymentModalShown: false
    }
  },
  computed: {
    ...mapGetters({
      contacts: 'globalVars/contacts',
    }),
  },
}
</script>
