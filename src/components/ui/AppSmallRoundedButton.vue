<template>
  <button
    class="
      px-2
      py-1
      md:px-3 md:py-1.5
      bg-purple-400
      hover:bg-purple-600
      transition-colors
      rounded
      text-gray-100 text-xs
      sm:text-sm
      md:text-base
    "
    :type="type"
    v-html="title"
  ></button>
</template>

<script>
export default {
  name: 'AppSmallRoundedButton',
  props: {
    type: {
      type: String,
      default() {
        return 'button'
      },
    },
    title: {
      type: [String, Number],
      default() {
        return 'Подробнее'
      },
    },
  },
}
</script>