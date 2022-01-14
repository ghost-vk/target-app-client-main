<template>
  <h3
    :class="
      titlePositionClass
        ? 'text-3xl md:text-5xl text-center font-bold ' + titlePositionClass
        : 'text-3xl md:text-5xl text-center font-bold mb-8 md:mb-16'
    "
  >
    {{ title }}
    <slot />
  </h3>
</template>

<script>
export default {
  name: 'AppHeadingThird',
  props: {
    title: {
      type: String,
      required: false,
    },
    titlePositionClass: {
      type: String,
    },
  },
}
</script>
