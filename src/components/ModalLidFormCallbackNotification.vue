<template>
  <AppNotification
    @hide="updateNotification({ ...notification, isShown: false })"
    :prolongation="prolongation"
    :is-shown="notification.isShown"
  >
    <div class="flex flex-col items-center">
      <div class="w-16 h-16 mr-3 flex items-center">
        <CheckCircleIcon v-if="sendingStatus" class="h-12 w-12 text-green-500" />
        <ExclamationCircleIcon v-else class="h-12 w-12 text-red-400" />
      </div>
      <div class="flex flex-col justify-center">
        <template v-if="!$slots.default">
          <p v-if="sendingStatus" class="text-gray-700 text-lg font-semibold text-center">
            Мы получили вашу заявку, мы свяжемся с вами через {{ contactType }} по указанному номеру
          </p>
          <p v-else class="text-gray-700 text-lg font-semibold text-center">
            Возникла ошибка, попробуйте перезагрузить страницу и отправить форму повторно
          </p>
        </template>
        <slot></slot>
      </div>
    </div>
  </AppNotification>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/vue/outline'

export default {
  props: {
    prolongation: {
      type: Number,
      default() {
        return 3500
      }
    }
  },
  methods: mapActions({
    updateNotification: 'lidForm/updateNotification',
  }),
  computed: mapGetters({
    contactType: 'lidForm/contactType',
    sendingStatus: 'lidForm/sendingStatus',
    notification: 'lidForm/notification',
  }),
  components: {
    CheckCircleIcon,
    ExclamationCircleIcon,
  },
}
</script>
