<template>
  <div style="width: 180px" class="relative">
    <CircleProgress :percent="percent" :size="180" fill-color="#A78BF9" empty-color="#DFD3FD" :transition="1000" />
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      style="width: 130px"
    >
      <div class="font-bold text-xl">{{ stat }}</div>
      <div class="">{{ name }}</div>
    </div>
  </div>
</template>

<script>
import 'vue3-circle-progress/dist/circle-progress.css'
import CircleProgress from 'vue3-circle-progress'

export default {
  components: {
    CircleProgress
  },
  props: {
    percent: {
      type: Number,
      required: true
    },
    stat: {
      type: String,
      default() {
        return ''
      }
    },
    name: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>