<template>
  <div @scroll="onScroll">
    <AppHeader v-show="shouldHeaderVisible" @openMenu="toggleMenu" />
    <Transition name="slide-rtl">
      <AppMobileMenu v-if="isMenuOpened" @close="toggleMenu" />
    </Transition>
    <div class="min-h-screen">
      <Loading
        :active="isLoadingPage"
        :is-full-page="true"
        :color="colors.main"
        :opacity="1"
      />
      <RouterView v-slot="{ Component }">
        <Transition name="fade">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <AppScrollToTopButton />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppMobileMenu from '@/components/AppMobileMenu.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppScrollToTopButton from "@/components/AppScrollToTopButton.vue";
import Loading from 'vue-loading-overlay'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isMenuOpened: false,
      lastScrollPosition: window.scrollY,
      shouldHeaderVisible: true,
    }
  },
  components: {
    AppHeader,
    AppMobileMenu,
    AppFooter,
    Loading,
    AppScrollToTopButton
  },
  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened
    },
    onScroll() {
      const position = window.scrollY
      const scrollPath = position - this.lastScrollPosition
      if (scrollPath > 25 || scrollPath < -10) {
        this.lastScrollPosition = position
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
  watch: {
    lastScrollPosition(newPosition, oldPosition) {
      this.shouldHeaderVisible = !(newPosition > oldPosition)
    },
  },
  computed: mapGetters({
    isLoadingPage: 'isLoadingPage',
    colors: 'globalVars/colors'
  })
}
</script>
