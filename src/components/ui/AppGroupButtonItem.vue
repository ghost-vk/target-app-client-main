<template>
  <div
    class="
      rounded-full
      px-3
      py-1
      border-2 border-solid
      cursor-pointer
      transition-colors
    "
    :class="classList"
    @click="$emit('update')"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'AppGroupButtonItem',
  props: {
    title: {
      type: [String, Number],
      required: true,
    },
    isSelected: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  computed: {
    classList() {
      return this.isSelected ? 'bg-green-100 border-green-300 border-2' : 'bg-purple-100 border-purple-100'
    },
  },
}
</script>
