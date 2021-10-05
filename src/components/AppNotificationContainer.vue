<template>
  <div
    class="
      w-72
      z-50
      fixed
      bottom-10
      md:bottom-20
      left-1/2
      transform
      -translate-x-1/2
      grid grid-cols-1
      gap-2
      sm:gap-3
      md:gap-4
    "
    v-show="messages.length"
  >
    <AppNotificationItem
      v-for="m in messages"
      :key="m.id"
      :id="m.id"
      :is-shown="m.isShown"
      :text="m.text"
      :text-color="m.textColor"
      :bg-color="m.bgColor"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppNotificationItem from '@/components/AppNotificationItem.vue'
export default {
  computed: {
    ...mapGetters({
      messages: 'notification/messages',
    }),
  },
  components: {
    AppNotificationItem,
  },
}
</script>
