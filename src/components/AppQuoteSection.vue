<template>
  <section class="bg-gray-800">
    <div
      class="
        container
        max-w-screen-sm
        flex
        justify-center
        items-center
        text-gray-100
        py-8
        md:py-12
        lg:py-16
        text-base
        sm:text-lg sm:text-xl
        lg:text-2xl
      "
    >
      <InformationCircleIcon class="flex-shrink-0 w-12 lg:w-20 h-12 lg:h-20 mr-3 lg:mr-4" />
      <p v-html="text"></p>
    </div>
  </section>
</template>

<script>
import { InformationCircleIcon } from '@heroicons/vue/solid'
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  components: {
    InformationCircleIcon,
  },
}
</script>
