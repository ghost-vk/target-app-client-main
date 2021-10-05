<template>
  <section class="py-14 sm:pb-20 sm:pt-28">
    <div class="container" v-intersection="onIntersects">
      <div class="mb-6 md:mb-12">
        <HeadingThird title="Кейсы" title-position-class="mb-2 sm:mb-5" />
      </div>
      <div v-if="!postsLoadingStatus.loaded" class="vld-parent h-60 w-full md:w-60 mx-auto">
        <Loading
          :active="!postsLoadingStatus.loaded"
          :is-full-page="false"
          :color="colors.main"
          :opacity="0"
        />
      </div>
      <transition
        enter-active-class="duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <template v-if="postsLoadingStatus.loaded && !postsLoadingStatus.failed">
          <div>
            <div
              @click="$router.push('/cases')"
              class="
                flex
                items-center
                mb-6
                hover:text-purple-500
                transition-colors
                cursor-pointer
                mx-auto
                max-w-max
              "
            >
              <span class="text-lg font-semibold">Посмотреть все</span>
              <ChevronRightIcon class="ml-2 h-5 w-5" />
            </div>
            <PostsSlider />
          </div>
        </template>
      </transition>
      <transition
        enter-active-class="duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="postsLoadingStatus.loaded && postsLoadingStatus.failed"
          class="container max-w-screen-sm text-center"
        >
          <div class="p-3 rounded-lg shadow bg-white">
            <EmojiSadIcon class="h-10 w-10 text-purple-400 mx-auto mb-3" />
            <p class="font-semibold text-lg">Не удалось загрузить кейсы...</p>
            <AnalyticsLink
              route="кейсы в Instagram (не загрузились на сайте)"
              href="https://www.instagram.com/explore/tags/anastasi_target_%D0%BA%D0%B5%D0%B9%D1%81%D1%8B/"
              target="_blank"
            >
              <AppBlueUnderlineLink>Посмотреть кейсы в Instagram</AppBlueUnderlineLink>
            </AnalyticsLink>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import HeadingThird from '@/components/ui/AppHeadingThird.vue'
import PostsSlider from '@/components/PostsSlider.vue'
import AnalyticsLink from '@/components/AnalyticsLink.vue'
import Loading from 'vue-loading-overlay'
import { EmojiSadIcon, ChevronRightIcon } from '@heroicons/vue/outline'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    HeadingThird,
    PostsSlider,
    Loading,
    EmojiSadIcon,
    ChevronRightIcon,
    AnalyticsLink
  },
  computed: mapGetters({
    colors: 'globalVars/colors',
    contacts: 'globalVars/contacts',
    postsLoadingStatus: 'cases/status',
  }),
  methods: {
    ...mapActions({
      loadCases: 'cases/loadCases',
    }),
    async onIntersects() {
      try {
        await this.loadCases()
      } catch (err) {}
    },
  },
}
</script>
