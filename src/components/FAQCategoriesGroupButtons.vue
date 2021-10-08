<template>
  <div class="flex flex-wrap justify-center text-gray-800 text-sm select-none">
    <AppGroupButtonItem
      v-for="btn in buttons"
      :key="btn.value"
      @click="$emit('update-category', btn.value)"
      :is-selected="btn.value === currentCategory"
      :title="btn.title"
      class="mb-2 mr-2"
    />
  </div>
</template>

<script>
export default {
  props: {
    currentCategory: {
      type: String,
      required: true
    }
  },
  setup() {
    const buttons = [
      {
        value: 'target-setup',
        title: 'Настройка рекламы',
      },
      {
        value: 'consultation',
        title: 'Консультации',
      },
      {
        value: 'telegram-chat',
        title: 'Telegram чат',
      },
      {
        value: 'mentor',
        title: 'Менторство',
      },
    ]
    return {
      buttons
    }
  },
}
</script>
