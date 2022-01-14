<template>
  <div class="block pb-6 overflow-hidden">
    <Swiper
      :slides-per-view="screenWidth > 1024 ? 3 : 1"
      :navigation="screenWidth > 560 && cases.length > 3"
      :pagination="{ clickable: true }"
      class="pb-10"
    >
      <SwiperSlide v-for="c in cases" :key="c.id" class="px-2 lg:px-10 flex justify-center">
        <PostsSliderItem
          :title="c.title"
          :subtitle="c.subtitle"
          :id="c.id"
          :thumbnail="c.thumbnail"
          :posting-date="dateFilter(c.posting_date)"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import PostsSliderItem from './PostsSliderItem.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { useScreenWidth } from '@/use/screenWidth'
import { mapActions, mapGetters } from 'vuex'
import { dateFilter } from '@/filters/date.filter'

SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    PostsSliderItem,
    Swiper,
    SwiperSlide,
  },
  computed: mapGetters({
    cases: 'cases/cases'
  }),
  setup() {
    const { screenWidth } = useScreenWidth()
    return {
      screenWidth,
    }
  },
  methods: {
    dateFilter,
    ...mapActions({
      loadCases: 'cases/loadCases',
    }),
    async onIntersects() {
      try {
        await this.loadCases()
      } catch (err) {}
    }
  },
}
</script>
