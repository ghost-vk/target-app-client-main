<template>
  <div class="relative">
    <div
      @mouseenter="onHoverToggle"
      @mouseleave="onHoverToggle"
      @click="onClickToggle"
      v-click-outside="hide"
      class="h-full"
    >
      <slot />
    </div>
    <transition
      enter-active-class="duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-75"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="isShown" :class="classes">{{ text }}</div>
    </transition>
  </div>
</template>

<script>
import { useScreenWidth } from '@/use/screenWidth'

export default {
  name: 'AppBalloon',
  props: {
    text: String,
    balloonClassList: {
      type: String,
      required: false,
      default() {
        return 'top-9 left-1/2 -translate-x-1/2 w-64'
      },
    },
  },
  data() {
    return {
      isShown: false,
      isClicked: false,
    }
  },
  setup() {
    const { screenWidth } = useScreenWidth()
    return { screenWidth }
  },
  methods: {
    onHoverToggle() {
      if (this.screenWidth < 1025) {
        return null
      }
      this.isShown = !this.isShown
    },
    onClickToggle() {
      if (this.screenWidth > 1024) {
        return null
      }
      this.isShown = !this.isShown
    },
    hide() {
      if (this.screenWidth > 1024) {
        return null
      }
      this.isShown = false
    },
  },
  computed: {
    classes() {
      const defaultClassList = [
        'bg-gray-600',
        'bg-opacity-80',
        'rounded-sm',
        'text-white',
        'text-xs',
        'p-2',
        'absolute',
        'transform',
        'z-20',
      ]

      return [...defaultClassList, this.balloonClassList.split(' ')]
    },
  },
}
</script>
