<template>
  <transition
    enter-active-class="duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-75"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isShown && !isAlreadyShown"
      @click="hide"
      class="
        p-3
        text-purple-800
        absolute
        left-1/2
        top-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
        flex
        items-center
        justify-center
      "
    >
      <ArrowNarrowDownIcon class="h-6 w-6 md:h-8 md:w-8 animate-bounce" />
    </div>
  </transition>
</template>

<script>
import { ArrowNarrowDownIcon } from '@heroicons/vue/outline'

export default {
  props: {
    isShown: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      isAlreadyShown: false
    }
  },
  components: {
    ArrowNarrowDownIcon,
  },
  methods: {
    hide() {
      this.$emit('hide-scroll-icon')
      this.isAlreadyShown = true
    }
  },
  watch: {
    isShown(val) {
      if (val === true) {
        setTimeout(this.hide, 3000)
      }
    },
  },
}
</script>
