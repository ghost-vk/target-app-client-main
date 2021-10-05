<template>
  <transition
    enter-active-class="duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-50 md:opacity-100"
    leave-active-class="duration-150"
    leave-from-class="opacity-50 md:opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="isShown"
      class="fixed h-10 w-10 z-20 right-5 opacity-50 md:opacity-100 md:right-20 bottom-24"
    >
      <router-link
        to
        @click="moveUp"
        class="
        w-full
        h-full
        rounded-full
        shadow
        bg-purple-300
        text-white
        flex
        items-center
        justify-center
      "
      >
        <ChevronUpIcon class="w-6 h-6" />
      </router-link>
    </div>
  </transition>
</template>

<script>
import { ChevronUpIcon } from '@heroicons/vue/outline'
export default {
  props: {
    isShown: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  methods: {
    moveUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
  components: {
    ChevronUpIcon,
  },
}
</script>
