<template>
  <div @scroll="onScroll">
    <AppHeader v-show="shouldHeaderVisible" @openMenu="toggleMenu" />
    <Transition name="slide-rtl">
      <AppMobileMenu v-if="isMenuOpened" @close="toggleMenu" />
    </Transition>
    <div class="min-h-screen">
      <Loading :active="isLoadingPage" :is-full-page="true" :color="colors.main" :opacity="1" />
      <RouterView v-slot="{ Component }">
        <Transition name="fade">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <AppScrollToTopButton :is-shown="isScrollButtonVisible" />
    <AppCookieNotification />
    <AppNotificationContainer />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppMobileMenu from '@/components/AppMobileMenu.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppScrollToTopButton from '@/components/AppScrollToTopButton.vue'
import AppCookieNotification from '@/components/AppCookieNotification.vue'
import AppNotificationContainer from '@/components/AppNotificationContainer.vue'
import Loading from 'vue-loading-overlay'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      isMenuOpened: false,
      lastScrollPosition: window.scrollY,
      isScrollButtonVisible: false,
    }
  },
  components: {
    AppHeader,
    AppMobileMenu,
    AppFooter,
    Loading,
    AppScrollToTopButton,
    AppCookieNotification,
    AppNotificationContainer,
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
      this.isScrollButtonVisible = position > 500
    },
    ...mapActions({
      handleHeader: 'globalVars/handleHeader',
    }),
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },

  beforeCreate() {
    const router = this.$router

    this.$fbq.init({
      router,
      appId: 123456,
      excludes: []
    })
  },
  watch: {
    lastScrollPosition(newPosition, oldPosition) {
      if (newPosition > 200) {
        this.handleHeader(!(newPosition > oldPosition) && newPosition > 200)
      } else {
        this.handleHeader(true)
      }
    },
  },
  computed: mapGetters({
    isLoadingPage: 'isLoadingPage',
    colors: 'globalVars/colors',
    shouldHeaderVisible: 'globalVars/shouldHeaderVisible',
  }),
}
</script>
