<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-10">
    <div v-for="row in rows">
      <div class="flex items-center relative pl-8 lg:pl-16 mb-6">
        <ChevronRightIcon class="absolute left-0 h-6 w-6 lg:h-8 lg:w-8" />
        <h3 class="text-xl md:text-2xl">{{ row.title }}</h3>
      </div>
      <div class="pl-8 lg:pl-16 text-sm sm:text-base" v-html="row.body"></div>
    </div>
  </div>
</template>

<script>
import AppDescriptionGridItem from '@/components/AppDescriptionGridItem.vue'
import { ChevronRightIcon } from '@heroicons/vue/solid'
export default {
  props: {
    rows: {
      type: Array,
      required: true
    }
  },
  components: {
    AppDescriptionGridItem,
    ChevronRightIcon
  },
}
</script>
