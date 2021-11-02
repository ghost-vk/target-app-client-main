<template>
  <div
    class="fixed z-30 left-0 top-0 bottom-0 right-0 w-screen bg-black bg-opacity-20"
    @click="close"
  >
    <div
      @click.stop
      class="ml-auto w-64 md:w-80 h-full bg-gray-600 p-2 pb-8 text-gray-100 overflow-auto"
    >
      <div class="h-14 flex flex-col justify-center px-3">
        <XIcon class="h-8 w-8 ml-auto cursor-pointer" @click="close" />
      </div>
      <div class="w-36 mx-auto">
        <RouterLink to="/" v-slot="{ navigate }">
          <img :src="identica.mainLogo" alt="" />
        </RouterLink>
      </div>
      <div class="flex flex-col align-middle items-center py-12 text-xl">
        <RouterLink to="/" v-slot="{ navigate, isExactActive }" class="mb-4">
          <span @click="navigate" :class="isExactActive ? 'font-bold' : ''">Главная</span>
        </RouterLink>
        <RouterLink to="/service" v-slot="{ navigate, isExactActive }" class="mb-4">
          <span @click="navigate" :class="isExactActive ? 'font-bold' : ''">Услуги</span>
        </RouterLink>
        <RouterLink to="/education" v-slot="{ navigate, isExactActive }" class="mb-4">
          <span @click="navigate" :class="isExactActive ? 'font-bold' : ''">Обучение</span>
        </RouterLink>
        <RouterLink to="/free" v-slot="{ navigate, isExactActive }" class="mb-4">
          <span @click="navigate" :class="isExactActive ? 'font-bold' : ''"
            >Бесплатные материалы</span
          >
        </RouterLink>
        <AppMobileMenuDropdown />
        <RouterLink to="/calc" v-slot="{ navigate, isExactActive }" class="mb-4">
          <span @click="navigate" :class="isExactActive ? 'font-bold' : ''">AdCalculator</span>
        </RouterLink>
        <RouterLink to="/cases" v-slot="{ navigate, isExactActive }" class="mb-4">
          <span @click="navigate" :class="isExactActive ? 'font-bold' : ''">Мои кейсы</span>
        </RouterLink>
        <div class="mb-4 flex justify-center items-center">
          <span>Блог</span>
          <span class="ml-1 px-2 py-1 bg-purple-50 text-gray-600 rounded-full text-xs">скоро</span>
        </div>
      </div>
      <AppTelegramChatPill class="mb-5" />
      <div class="flex justify-center px-2">
        <AnalyticsLink
          :href="contacts.instagram"
          target="_blank"
          route="профиль Instagram"
          class="block mr-3"
        >
          <AppInstagramIcon class="h-9 w-9 text-purple-400" />
        </AnalyticsLink>
        <AnalyticsLink
          :href="contacts.telegram"
          target="_blank"
          route="переписка в Telegram"
          class="block mr-3"
        >
          <AppTelegramIcon class="h-9 w-9 text-blue-400" />
        </AnalyticsLink>
        <AnalyticsLink
          :href="contacts.whatsapp"
          target="_blank"
          route="переписка в What's App"
          class="block"
        >
          <AppWhatsAppIcon class="h-9 w-9 text-green-400" />
        </AnalyticsLink>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from '@heroicons/vue/outline'
import { mapGetters } from 'vuex'
import AppTelegramChatPill from '@/components/AppTelegramChatPill.vue'
import AnalyticsLink from '@/components/AnalyticsLink.vue'
import AppMobileMenuDropdown from '@/components/AppMobileMenuDropdown.vue'

export default {
  components: {
    XIcon,
    AppTelegramChatPill,
    AnalyticsLink,
    AppMobileMenuDropdown
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
  watch: {
    $route() {
      this.close()
    },
  },
  computed: mapGetters({
    contacts: 'globalVars/contacts',
    identica: 'globalVars/identica',
  }),
}
</script>
