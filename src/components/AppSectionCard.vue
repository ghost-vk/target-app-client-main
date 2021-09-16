<template>
  <div class="w-full md:w-1/2 lg:w-1/3 px-0 sm:px-3 mb-6 lg:mb-0">
    <div
      class="
        shadow-lg
        w-full
        rounded-lg
        flex flex-col
        items-center
        text-center
        p-4
        divide-y divide-purple-300 divide-solid
      "
    >
      <div class="pb-1 md:pb-3 flex items-center lg:h-20">
        <h5 class="text-lg xl:text-xl font-bold text-gray-600">{{ title }}</h5>
      </div>
      <div v-if="this.$slots['scrollable-list']" class="w-full py-1.5 md:py-3 mb-3 h-32 md:h-60 overflow-y-scroll relative scroll-list relative">
        <slot name="scrollable-list" />
      </div>
      <div v-if="this.$slots['additional-items']" class="hidden xl:flex lg:h-32 w-full py-1.5 md:py-3 font-light text-sm flex-col justify-center">
        <slot name="additional-items" />
      </div>
      <div v-if="this.$slots['additional-items-alt']" class="xl:hidden w-full py-1.5 md:py-3 flex flex-col justify-center">
        <slot name="additional-items-alt" />
      </div>
      <div v-if="this.$slots['highlighted-items']" class="hidden xl:flex lg:h-20 py-3 w-full px-1.5 items-center text-left">
        <slot name="highlighted-items" />
      </div>
      <div v-if="this.$slots['last-content']" class="lg:h-28 py-3 w-full flex px-1.5 justify-center items-center text-left">
        <slot name="last-content" />
      </div>
      <div v-if="button.length > 0" class="pt-4 w-full">
        <button
          @click="$emit('button-click')"
          type="button"
          class="w-full bg-purple-400 text-white shadow text-lg font-semibold rounded-lg px-5 py-2"
        >
          {{ button }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useScreenWidth } from "@/use/screenWidth"

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    button: {
      type: String,
      required: false,
      default() {
        return ''
      }
    }
  },
  setup() {
    const { screenWidth } = useScreenWidth()
    return { screenWidth }
  }
}
</script>