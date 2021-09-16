<template>
  <h3
    v-text="title"
    :class="
      titlePositionClass
        ? 'text-3xl md:text-5xl text-center font-bold ' + titlePositionClass
        : 'text-3xl md:text-5xl text-center font-bold mb-8 md:mb-16'
    "
  />
</template>

<script>
export default {
  name: 'AppHeadingThird',
  props: {
    title: {
      type: String,
      required: true,
      default() {
        return true
      }
    },
    titlePositionClass: {
      type: String
    }
  }
}
</script>
