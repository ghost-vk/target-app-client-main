<template>
  <button
    class="
      w-full
      py-2
      text-center
      bg-green-500
      hover:bg-green-400
      transition-colors
      shadow
      text-gray-50 text-lg
      font-semibold
      rounded-lg
    "
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppFullWidthGreenButton'
}
</script>
