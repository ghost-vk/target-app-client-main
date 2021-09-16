<template>
  <div class="fixed h-10 w-10 z-20 right-5 bottom-8 opacity-50 md:opacity-100 md:right-20 md:bottom-20">
    <router-link
      to
      @click="moveUp"
      class="w-full h-full rounded-full shadow bg-purple-300 text-white flex items-center justify-center"
    >
      <ChevronUpIcon class="w-6 h-6" />
    </router-link>
  </div>
</template>

<script>
import { ChevronUpIcon } from '@heroicons/vue/outline'
export default {
  methods: {
    moveUp() {
      window.scrollTo(0, 0)
    },
  },
  components: {
    ChevronUpIcon,
  },
}
</script>
