<template>
  <section class="mb-8 md:mb-16" v-intersection="onIntersection" id="reviews">
    <div class="container">
      <AppHeadingThird title="Отзывы" />
      <transition
        enter-active-class="duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div>
          <div v-if="isLoading" class="container max-w-screen-sm text-center">
            <div class="p-3 rounded-lg shadow bg-white">
              <DatabaseIcon class="h-10 w-10 text-purple-400 mx-auto mb-3" />
              <p class="font-semibold text-lg">Идет загрузка отзывов ...</p>
            </div>
          </div>
          <div v-else-if="loadingStatus && reviews?.length > 0" class="w-full lg:px-24">
            <AppReviewsCategoriesGroupButtons class="max-w-screen-sm mx-auto justify-center" />
            <Swiper
              :slides-per-view="1"
              navigation
              :pagination="reviews.length < 16 ? { clickable: true } : false"
              class="pb-10"
            >
              <SwiperSlide
                v-for="review in reviews"
                :key="review.id"
                class="px-2 lg:px-10 flex justify-center"
              >
                <AppReviewCard
                  :thumbnail="serverHost + review.image"
                  :name="review.full_name"
                  :vocation="review.profession"
                  :instagram="review.link"
                  :body="review.content"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div v-else class="container max-w-screen-sm text-center">
            <div class="p-3 rounded-lg shadow bg-white">
              <EmojiSadIcon class="h-10 w-10 text-purple-400 mx-auto mb-3" />
              <p class="font-semibold text-lg">Не удалось загрузить отзывы...</p>

              <AnalyticsLink
                route="отзывы в Instagram (не загрузились отзывы)"
                :href="contacts.instagram"
                target="_blank"
              >
                <AppBlueUnderlineLink> Посмотреть отзывы в Instagram </AppBlueUnderlineLink>
              </AnalyticsLink>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import AppReviewCard from '@/components/AppReviewCard.vue'
import { useScreenWidth } from '@/use/screenWidth'
import { mapGetters, mapActions } from 'vuex'
import { EmojiSadIcon, DatabaseIcon } from '@heroicons/vue/outline'
import AppReviewsCategoriesGroupButtons from '@/components/AppReviewsCategoriesGroupButtons.vue'
import AnalyticsLink from '@/components/AnalyticsLink.vue'

SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    AppReviewsCategoriesGroupButtons,
    AppReviewCard,
    Swiper,
    SwiperSlide,
    EmojiSadIcon,
    DatabaseIcon,
    AnalyticsLink,
  },
  computed: {
    ...mapGetters({
      contacts: 'globalVars/contacts',
      reviews: 'reviews/reviews',
      loadingStatus: 'reviews/loadingStatus',
      isLoading: 'reviews/isLoading',
    }),
  },
  setup() {
    const { screenWidth } = useScreenWidth()
    return {
      screenWidth,
      serverHost: SERVER_PATH,
    }
  },
  methods: {
    ...mapActions({
      reset: 'reviews/reset',
      load: 'reviews/load',
    }),
    onIntersection() {
      if (this.reviews.length) {
        return
      }
      this.load({ limit: 100 })
    },
  },
  unmounted() {
    this.reset()
  },
}
</script>
