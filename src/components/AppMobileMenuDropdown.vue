<template>
  <div class="mb-4">
    <div class="flex justify-center items-center cursor-pointer" @click="toggleDropdown">
      <ChevronDownIcon
        class="w-5 h-5 mr-1 flex-shrink-0 transform transition-transform"
        :class="isOpened ? 'rotate-180' : ''"
      />
      <span>Платные материалы</span>
    </div>
    <transition
      enter-active-class="duration-500"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-screen opacity-100"
      leave-active-class="duration-200"
      leave-from-class="max-h-screen"
      leave-to-class="max-h-0 opacity-0"
    >
      <div
        v-show="isOpened"
        class="flex flex-col items-center justify-center text-center text-sm mt-2"
      >
        <span
          @click="$router.push('/t/work-process-with-client')"
          class="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >Чек-лист "Как работать с клиентами"</span
        >
      </div>
    </transition>
  </div>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { ref } from 'vue'
export default {
  components: {
    ChevronDownIcon,
  },
  setup() {
    const isOpened = ref(false)
    const toggleDropdown = () => {
      isOpened.value = !isOpened.value
    }
    return {
      isOpened,
      toggleDropdown,
    }
  },
}
</script>
