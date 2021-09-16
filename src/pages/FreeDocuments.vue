<template>
  <div>
    <SectionHero>
      <SectionHeroMainTitle>
        Бесплатные материалы<br />по таргетированной рекламе в Instagram<br />от Насти Черепахиной
      </SectionHeroMainTitle>
    </SectionHero>
    <div class="container sm:w-screen-sm max-w-screen-sm mx-auto">
      <AppHeadingThird title="Lorem ipsum dolor sit" />
      <div class="text-base md:text-lg mb-16">
        <p class="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, beatae commodi cum
          distinctio doloremque, dolorum ea esse fugiat magni molestiae nihil omnis placeat possimus
          praesentium quia tenetur veritatis vitae voluptatibus.
        </p>
        <p class="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, beatae commodi cum
          distinctio doloremque, dolorum ea esse fugiat magni molestiae nihil omnis placeat possimus
          praesentium quia tenetur veritatis vitae voluptatibus.
        </p>
        <ul class="list-inside list-disc">
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        </ul>
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
    </div>
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
import MagnetPic from '@/assets/img/magnet-test.png'
import ModalLidForm from '@/components/ModalLidForm.vue'
import ModalLidFormCallbackNotification from '@/components/ModalLidFormCallbackNotification.vue'
import AppMagnetLidsItem from '@/components/AppMagnetLidsItem.vue'
import Loading from "vue-loading-overlay";
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    SectionHero,
    SectionHeroMainTitle,
    ModalLidForm,
    ModalLidFormCallbackNotification,
    AppMagnetLidsItem,
    Loading
  },
  methods: {
    ...mapActions({
      showDialog: 'lidForm/showDialog',
      setID: 'magnets/setID',
      onGettingMagnet: 'magnets/onGettingMagnet',
      loadMagnets: 'magnets/loadAll'
    }),
    async startProcessGettingMagnet(magnet) {
      try {
        await this.setID(magnet.id)
        this.showDialog({
          source: `Лид магнит: "${magnet.name}"`,
          shouldCallback: false,
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
  computed: mapGetters({
    magnets: 'magnets/magnets',
    magnetsLoadingStatus: 'magnets/status',
    link: 'magnets/linkToRedirect',
    sendingStatus: 'lidForm/sendingStatus',
    colors: 'globalVars/colors'
  }),
  data() {
    return {
      MagnetPic,
    }
  },
  mounted() {
    this.loadMagnets()
  }
}
</script>
