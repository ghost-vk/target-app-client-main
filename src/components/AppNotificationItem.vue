<template>
  <div class="py-2 px-3 rounded text-xs sm:text-sm md:text-base cursor-pointer" :class="bgColor" @click="deleteMessage(id)">
    <span :class="textColor">{{ text }}</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      default() {
        return 'text-gray-100'
      },
    },
    bgColor: {
      type: String,
      default() {
        return 'bg-green-400'
      },
    },
  },
  methods: mapActions({
    deleteMessage: 'notification/deleteMessage'
  }),
  mounted() {
    setTimeout(() => {
      this.deleteMessage(this.id)
    }, 3000)
  },
}
</script>
