<template>
  <div>
    <SectionHero>
      <SectionHeroMainTitle>{{ pageTitle }}</SectionHeroMainTitle>
    </SectionHero>
    <div class="container sm:w-screen-sm max-w-screen-sm mx-auto">
      <AppHeadingThird title="Что такое кейсы? 🧐" />
      <div class="text-base md:text-lg mb-16">
        <p class="mb-3">
          Кейсы это реальная ситуация, в контексте таргетированной рекламы, это опыт настройки
          рекламы, своего рода разбор полетов.
        </p>
        <p>
          Здесь вы можете ознакомится с моим опытом работы. Это важно как для клиентов, так
          и для учеников.
        </p>
      </div>
    </div>
    <div class="container pb-20">
      <AppHeadingThird title="Мои кейсы" />
      <div
        class="vld-parent w-full"
        :class="!postsLoadingStatus.loaded ? 'h-80' : 'h-0'"
      >
        <Loading
          :active="!postsLoadingStatus.loaded"
          :is-full-page="false"
          :color="colors.main"
          :opacity="0"
        />
      </div>
      <div v-if="postsLoadingStatus.loaded && !postsLoadingStatus.failed" class="container pb-20">
        <div
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 2xl:gap-10"
        >
          <ArchivePostItem
            v-for="c in cases"
            :key="c.id"
            :id="c.id"
            :title="c.title"
            :subtitle="c.subtitle"
            :posting-date="dateFilter(c.posting_date)"
            :thumbnail="c.thumbnail"
          />
        </div>
      </div>
      <div
        v-if="postsLoadingStatus.loaded && postsLoadingStatus.failed"
        class="container max-w-screen-sm text-center"
      >
        <div class="p-3 rounded-lg shadow bg-white">
          <EmojiSadIcon class="h-10 w-10 text-purple-400 mx-auto mb-3" />
          <p class="font-semibold text-lg">Не удалось загрузить кейсы...</p>
          <a
            href="https://www.instagram.com/explore/tags/anastasi_target_%D0%BA%D0%B5%D0%B9%D1%81%D1%8B/"
            target="_blank"
          >
            <AppBlueUnderlineLink>Посмотреть кейсы в Instagram</AppBlueUnderlineLink>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SectionHero from '@/components/SectionHero.vue'
import SectionHeroMainTitle from '@/components/SectionHeroMainTitle.vue'
import ArchivePostItem from '@/components/ArchivePostItem.vue'
import Loading from 'vue-loading-overlay'
import { dateFilter } from '@/filters/date.filter'
import { EmojiSadIcon } from '@heroicons/vue/outline'
export default {
  components: {
    SectionHero,
    SectionHeroMainTitle,
    ArchivePostItem,
    Loading,
    EmojiSadIcon,
  },
  methods: {
    dateFilter,
    ...mapActions({
      load: 'cases/loadCases',
    }),
  },
  computed: mapGetters({
    cases: 'cases/cases',
    colors: 'globalVars/colors',
    postsLoadingStatus: 'cases/status',
  }),
  data() {
    return {
      pageTitle: 'Кейсы по настройке таргетированной рекламы'
    }
  },
  mounted() {
    this.load(150)
    this.$gtag.event('page_view', { page_title: this.pageTitle })
  },
}
</script>
