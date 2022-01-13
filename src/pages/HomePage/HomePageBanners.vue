<template>
  <transition
    enter-active-class="duration-300"
    enter-from-class="opacity-0 height0"
    enter-to-class="opacity-100 height550"
    leave-active-class="duration-75"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="banners.length > 0" class="container mb-20">
      <AppBigBanner :banners="banners" />
    </div>
  </transition>
</template>

<script>
import AppBigBanner from '@/components/AppBigBanner.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    AppBigBanner,
  },
  beforeMount() {
    setTimeout(() => {
      this.fetchActiveBanners()
    }, 1000)
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
</style>
