<template>
  <button
    type="button"
    class="
      block
      px-9
      py-1.5
      md:px-6 md:py-3
      text-md
      md:text-xl
      font-semibold
      shadow
      text-gray-50
      bg-purple-500
      rounded-full
      shadow
    "
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'AppPurpleRoundedButton',
  props: {
    title: {
      type: String,
      required: true,
      default() {
        return 'Подробнее'
      },
    },
  },
}
</script>
