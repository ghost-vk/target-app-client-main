<template>
  <a :href="contacts.telegramChat" target="_blank" class="block">
    <div
      class="rounded-full bg-blue-500 px-3 py-1.5 text-white flex items-center max-w-max mx-auto"
    >
      <AppTelegramIcon class="h-4 w-4 mr-2" />
      Чат таргетологов
    </div>
  </a>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    contacts: 'globalVars/contacts'
  }),
}
</script>
