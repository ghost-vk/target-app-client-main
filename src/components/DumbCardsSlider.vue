<template>
  <div>
    <Swiper
      :slides-per-view="screenWidth > 1024 ? 3 : 1"
      :slides-per-group="screenWidth > 1024 ? 3 : 1"
      :navigation="screenWidth > 560"
      :pagination="{ clickable: true }"
      class="pb-10"
    >
      <SwiperSlide v-for="item in data" class="px-2 lg:px-10 flex justify-center">
        <DumbCardsSliderItem :title="item.title" :thumbnail="item.thumbnail" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import DumbCardsSliderItem from '@/components/DumbCardsSliderItem.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { useScreenWidth } from '@/use/screenWidth'

SwiperCore.use([Navigation, Pagination])

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: {
    DumbCardsSliderItem,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { screenWidth } = useScreenWidth()
    return {
      screenWidth,
    }
  },
}
</script>
