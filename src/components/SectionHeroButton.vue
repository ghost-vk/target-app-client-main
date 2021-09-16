<template>
  <button type="button" :class="classList">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
  },
  data() {
    const defaultClassList =
      'block text-center w-full sm:w-72 py-2.5 rounded-3xl text-md md:text-xl font-bold shadow-lg '
    const classList =
      this.color === 'purple'
        ? defaultClassList + 'bg-purple-500'
        : defaultClassList + 'bg-gray-100 text-purple-500'

    return {
      classList: classList,
    }
  },
}
</script>
