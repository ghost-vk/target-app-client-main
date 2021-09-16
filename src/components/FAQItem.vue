<template>
  <div
    class="flex flex-wrap items-center w-full shadow rounded-lg p-3 mb-3 cursor-pointer bg-white"
    @click="$emit('toggle')"
  >
    <div class="flex items-center">
      <div
        class="
          w-8
          h-8
          mr-4
          flex
          justify-center
          items-center
          bg-purple-400
          text-gray-50
          rounded-full
        "
      >
        <PlusSmIcon
          class="h-6 w-6 transition-transform transform"
          :class="question.isOpened ? 'rotate-45' : ''"
        />
      </div>
      <div class="flex-1 text-gray-700 md:text-lg">
        {{ question.title }}
      </div>
    </div>
    <div
      v-if="question.isOpened"
      class="mt-0 transition-all ml-12 w-full text-sm font-light overflow-hidden"
    >
      {{ question.body }}
    </div>
  </div>
</template>

<script>
import { PlusSmIcon } from '@heroicons/vue/outline'

export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  components: {
    PlusSmIcon,
  },
}
</script>
