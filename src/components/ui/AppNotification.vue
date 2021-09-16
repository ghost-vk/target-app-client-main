<template>
  <transition
    enter-active-class="duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="isShown"
      class="
        fixed
        top-0
        bottom-0
        left-0
        right-0
        flex
        justify-center
        items-center
        z-40
        px-6
        sm:px-10
      "
    >
      <div class="max-w-screen-sm shadow-lg rounded-lg bg-purple-100 px-4 py-2 relative">
        <div
          @click="hide"
          class="
            absolute
            -top-4
            -right-4
            bg-gray-50
            rounded-full
            text-gray-400
            hover:text-purple-900
            transition-colors
            cursor-pointer
          "
        >
          <XCircleIcon class="h-8 w-8" />
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import { XCircleIcon } from '@heroicons/vue/outline'

export default {
  name: 'AppNotification',
  props: {
    isShown: {
      type: Boolean,
      default() {
        return false
      }
    },
    prolongation: {
      type: Number,
      default() {
        return 3500
      }
    }
  },
  components: {
    XCircleIcon
  },
  methods: {
    hide() {
      this.$emit('hide')
    }
  },
  watch: {
    isShown(bool) {
      if (bool) {
        setTimeout(this.hide, this.prolongation)
      }
    }
  }
}
</script>
