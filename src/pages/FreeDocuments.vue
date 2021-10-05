<template>
  <div>
    <SectionHero>
      <SectionHeroMainTitle>
        Бесплатные материалы<br />по таргетированной рекламе в Instagram<br />от Насти Черепахиной
      </SectionHeroMainTitle>
    </SectionHero>
    <div class="container sm:w-screen-sm max-w-screen-sm mx-auto">
      <AppHeadingThird title="Про материалы" />
      <div class="text-base md:text-lg mb-16">
        <p class="mb-3">
          Здесь я добавляю свои бесплатные материалы. Я думаю многие найдут здесь интересные для
          себя темы. Вы можете использовать их в своих целях. За распространение материала с
          указанием автора +10 к карме 😄
        </p>
        <p class="mb-3">
          Если Вам понравился материал, можете оставить мне свой отзыв в
          <a :href="contacts.telegram"><AppBlueUnderlineLink>телеграм</AppBlueUnderlineLink></a>
          или в
          <a :href="contacts.instagram"><AppBlueUnderlineLink>директ</AppBlueUnderlineLink></a>
          буду Вам признательна! 😉
        </p>
        <p class="mb-3">
          Также не забывайте, что у меня есть чат таргетологов, в котором я выкладываю интересную
          информацию по таргету:
        </p>
        <AppTelegramChatPill />
      </div>
    </div>
    <div class="container pb-20">
      <AppHeadingThird title="Доступные материалы" />
      <template v-if="magnets && !magnetsLoadingStatus.loadingMagnets">
        <div
          class="
            grid grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-5
            gap-2
            sm:gap-4
            2xl:gap-8
          "
        >
          <AppMagnetLidsItem
            v-for="m in magnets"
            :image="m.image"
            :title="m.name"
            :description="m.description"
            @get="startProcessGettingMagnet(m)"
            @show-info="() => {}"
          />
        </div>
      </template>
      <div v-if="magnetsLoadingStatus.loadingMagnets" class="vld-parent h-80 w-full mx-auto">
        <Loading
          :active="magnetsLoadingStatus.loadingMagnets"
          :is-full-page="false"
          :color="colors.main"
          :opacity="0"
        />
      </div>
      <div
        v-if="!magnets?.length && !magnetsLoadingStatus.loadingMagnets"
        class="container max-w-screen-sm text-center"
      >
        <div class="p-3 rounded-lg shadow bg-white">
          <EmojiSadIcon class="h-10 w-10 text-purple-400 mx-auto mb-3" />
          <p class="font-semibold text-lg">Не удалось загрузить материалы...</p>

          <AnalyticsLink
            route="профиль Instagram (не загрузились материалы)"
            :href="contacts.instagram"
            target="_blank"
          >
            <AppBlueUnderlineLink>Написать в Instagram</AppBlueUnderlineLink>
          </AnalyticsLink>
        </div>
      </div>
    </div>
    <AppReviewsSection v-intersection="setCurrentCategory" />
    <ModalLidForm title="Заполните форму для получения бесплатного материала" />
    <ModalLidFormCallbackNotification :prolongation="30000">
      <div class="text-gray-700 text-lg font-semibold text-center">
        <div v-if="sendingStatus && link">
          Если вас не перенаправило на страницу с бесплатным материалом, воспользуйтесь этой
          <a :href="link" target="_blank">
            <AppBlueUnderlineLink>ссылкой</AppBlueUnderlineLink>
          </a>
        </div>
        <p v-else class="text-gray-700 text-lg font-semibold text-center">
          Возникла ошибка, попробуйте перезагрузить страницу и отправить форму повторно
        </p>
      </div>
    </ModalLidFormCallbackNotification>
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionHeroMainTitle from '@/components/SectionHeroMainTitle.vue'
import ModalLidForm from '@/components/ModalLidForm.vue'
import ModalLidFormCallbackNotification from '@/components/ModalLidFormCallbackNotification.vue'
import AppMagnetLidsItem from '@/components/AppMagnetLidsItem.vue'
import Loading from 'vue-loading-overlay'
import { mapActions, mapGetters } from 'vuex'
import AppReviewsSection from '@/components/AppReviewsSection.vue'
import AppTelegramChatPill from '@/components/AppTelegramChatPill.vue'
import AnalyticsLink from '@/components/AnalyticsLink.vue'
import { EmojiSadIcon } from '@heroicons/vue/outline'

export default {
  components: {
    AppReviewsSection,
    AppTelegramChatPill,
    SectionHero,
    SectionHeroMainTitle,
    ModalLidForm,
    ModalLidFormCallbackNotification,
    AppMagnetLidsItem,
    EmojiSadIcon,
    AnalyticsLink,
    Loading,
  },
  methods: {
    ...mapActions({
      showDialog: 'lidForm/showDialog',
      setID: 'magnets/setID',
      onGettingMagnet: 'magnets/onGettingMagnet',
      loadMagnets: 'magnets/loadAll',
      updateActiveCategory: 'reviews/updateActiveCategory',
      updateLoadingPage: 'updateLoadingPage',
    }),
    async startProcessGettingMagnet(magnet) {
      try {
        await this.setID(magnet.id)
        if (this.isLeadSaved) {
          this.updateLoadingPage(true)
          await this.onGettingMagnet()
          this.updateLoadingPage(false)
        } else {
          this.showDialog({
            source: `Лид магнит: "${magnet.name}"`,
            shouldCallback: false,
          })
        }
      } catch (err) {
        console.log(err)
      }
    },
    setCurrentCategory() {
      if (!this.isCatSet) {
        this.isCatSet = true
        this.updateActiveCategory('free-products')
      }
    },
  },
  computed: mapGetters({
    isLeadSaved: 'user/isLeadSaved',
    magnets: 'magnets/magnets',
    magnetsLoadingStatus: 'magnets/status',
    link: 'magnets/linkToRedirect',
    sendingStatus: 'lidForm/sendingStatus',
    colors: 'globalVars/colors',
    contacts: 'globalVars/contacts',
  }),
  data() {
    return {
      isCatSet: false,
    }
  },
  mounted() {
    this.loadMagnets()
    this.$gtag.event('page_view', { page_title: 'Бесплатные материалы' })
  },
}
</script>
