<template>
  <transition
    enter-active-class="duration-300"
    enter-from-class="opacity-0 height0"
    enter-to-class="opacity-100 height550"
    leave-active-class="duration-75"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="banners.length > 0" class="container pb-20 overflow-hidden">
      <Swiper
        v-if="banners.length > 1"
        :class="screenWidth > 1023 ? 'rounded-xl shadow-2xl' : ''"
        :slides-per-view="1"
        :space-between="10"
        :effect="screenWidth > 1023 ? 'fade' : ''"
        :navigation="screenWidth > 1023"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 5000, pauseOnMouseEnter: true }"
      >
        <SwiperSlide v-for="b in banners" :key="b.url">
          <AppBigBanner :banner="b" />
        </SwiperSlide>
      </Swiper>
      <AppBigBanner v-else :banner="banners[0]" />
    </div>
  </transition>
</template>

<script>
import AppBigBanner from '@/components/AppBigBanner.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { EffectFade, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/components/effect-fade/effect-fade.min.css'
import { mapGetters, mapActions } from 'vuex'

export default {
  setup() {
    const screenWidth = window.innerWidth

    const swiperModules = screenWidth > 1023 ? [EffectFade, Navigation, Pagination, Autoplay] : [Pagination, Autoplay]
    SwiperCore.use(swiperModules)

    return { screenWidth }
  },
  components: {
    AppBigBanner,
    Swiper,
    SwiperSlide,
  },
  beforeMount() {
    this.fetchActiveBanners()
  },
  methods: mapActions({
    fetchActiveBanners: 'banners/fetchActiveBanners',
  }),
  computed: mapGetters({
    banners: 'banners/banners',
  }),
}
</script>

<style lang="scss" scoped>
.height0 {
  max-height: 0;
}
.height550 {
  max-height: 550px;
}

.swiper-pagination-container {
  position: absolute;
  bottom: 80px !important;
}

.swiper-pagination-bullets {
  bottom: 11px;
}
</style>
