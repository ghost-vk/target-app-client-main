<template>
  <section class="py-14 sm:pb-20 sm:pt-28">
    <div class="container" v-intersection="onIntersects">
      <div class="mb-12">
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
          <PostsSlider />
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
            <a
              href="https://www.instagram.com/explore/tags/anastasi_target_%D0%BA%D0%B5%D0%B9%D1%81%D1%8B/"
              target="_blank"
            >
              <AppBlueUnderlineLink>Посмотреть кейсы в Instagram</AppBlueUnderlineLink>
            </a>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import HeadingThird from '@/components/ui/AppHeadingThird.vue'
import PostsSlider from '@/components/PostsSlider.vue'
import Loading from 'vue-loading-overlay'
import { EmojiSadIcon } from '@heroicons/vue/outline'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    HeadingThird,
    PostsSlider,
    Loading,
    EmojiSadIcon
  },
  computed: mapGetters({
    colors: 'globalVars/colors',
    contacts: 'globalVars/contacts',
    postsLoadingStatus: 'cases/status',
  }),
  methods: {
    ...mapActions({
      loadCases: 'cases/loadCases'
    }),
    async onIntersects() {
      try {
        await this.loadCases()
      } catch (err) {}
    }
  }
}
</script>
