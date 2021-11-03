<template>
  <section class="overflow-x-hidden pt-16">
    <div class="container relative">
      <div class="relative mb-28" id="at_price">
        <AppHeadingBubble title="Оставьте заявку" class="mb-14 md:mb-28" />
        <div class="text-md md:text-lg tracking-wide font-light mb-16">
          <p class="mb-3 md:mb-6 relative z-20">
            Я сертифицированный специалист и имею большой опыт в таргетированной рекламе на
            площадках Instagram, Facebook. Это позволяет мне выстраивать оптимальные рекламные
            кампании и масштабировать их.
          </p>
        </div>
        <div v-if="screenWidth > 1024" class="lg:flex flex-wrap">
          <ServicePageCardsFirstItem />
          <ServicePageCardsSecondItem />
          <ServicePageCardsThirdItem />
        </div>
        <div v-else>
          <Swiper
            :slides-per-view="1"
            :initial-slide="
              this.$route.query['price'] !== undefined &&
              this.$route.query['price'] === 'consultation'
                ? 1
                : 0
            "
            :navigation="screenWidth > 560"
            :pagination="{ clickable: true }"
            class="pb-10"
          >
            <SwiperSlide class="flex justify-center px-2">
              <ServicePageCardsFirstItem />
            </SwiperSlide>
            <SwiperSlide class="flex justify-center px-2">
              <ServicePageCardsSecondItem />
            </SwiperSlide>
            <SwiperSlide class="flex justify-center px-2">
              <ServicePageCardsThirdItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppHeadingBubble from '@/components/AppHeadingBubble.vue'
import ServicePageCardsFirstItem from './ServicePageCardsFirstItem.vue'
import ServicePageCardsSecondItem from './ServicePageCardsSecondItem.vue'
import ServicePageCardsThirdItem from './ServicePageCardsThirdItem.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { useScreenWidth } from '@/use/screenWidth'
import { onMounted } from 'vue'
import { useNodeView } from '@/use/useNodeView'

SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    AppHeadingBubble,
    ServicePageCardsFirstItem,
    ServicePageCardsSecondItem,
    ServicePageCardsThirdItem,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { screenWidth } = useScreenWidth()
    onMounted(useNodeView)
    return {
      screenWidth,
    }
  },
}
</script>
