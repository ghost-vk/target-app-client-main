<template>
  <div>
    <div class="flex items-center relative pl-8 lg:pl-16 mb-6">
      <ChevronRightIcon class="absolute left-0 h-6 w-6 lg:h-8 lg:w-8" />
      <h3 class="text-xl md:text-2xl" v-html="title"></h3>
    </div>
    <div class="pl-8 lg:pl-16 text-sm sm:text-base" v-html="body"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
}
</script>