<template>
  <footer class="bg-gray-800 py-12 text-gray-50">
    <div class="container">
      <div class="flex flex-wrap md:flex-nowrap mb-4">
        <div
          class="
            flex
            w-full
            md:w-1/3
            order-1
            flex-col
            items-center
            md:items-start
            mb-5
            md:md-0
            text-lg
            leading-tight
          "
        >
          <RouterLink to="/service" v-slot="{ navigate }" class="mb-3">
            <span @click="navigate" class="font-bold">Услуги</span>
          </RouterLink>
          <RouterLink to="/education" v-slot="{ navigate }" class="mb-3">
            <span @click="navigate" class="font-bold">Обучение</span>
          </RouterLink>
          <RouterLink to="/cases" class="mb-3">
            <span class="font-bold">Мои кейсы</span>
          </RouterLink>
          <a href="/s/privacy.html" target="_blank" class="mb-3">Политика конфиденциальности</a>
          <a href="/s/user-agreement.html" target="_blank">Пользовательское соглашение</a>
        </div>
        <div
          class="
            w-full
            md:w-1/3
            flex
            justify-center
            items-center
            order-last
            md:order-2
            mb-4
            md:mb-0
          "
        >
          <router-link to="/">
            <img class="w-40 mx-auto" :src="identica.mainLogo" alt="" />
          </router-link>
        </div>
        <div class="w-full md:w-1/3 order-3 text-center md:text-right mb-6 md:mb-0">
          <span class="block text-lg md:text-2xl font-bold mb-3">Контакты</span>
          <div class="flex justify-center md:justify-end text-gray-400 mb-3">
            <AnalyticsLink
              route="профиль в Instagram"
              :href="contacts.instagram"
              target="_blank"
              class="block mr-2"
            >
              <AppInstagramIcon class="h-8 w-8" />
            </AnalyticsLink>
            <AnalyticsLink
              route="переписка в Telegram"
              :href="contacts.telegram"
              target="_blank"
              class="block mr-2"
            >
              <AppTelegramIcon class="h-8 w-8" />
            </AnalyticsLink>
            <AnalyticsLink
              route="переписка What's App"
              :href="contacts.whatsapp"
              target="_blank"
              class="block"
            >
              <AppWhatsAppIcon class="h-8 w-8" />
            </AnalyticsLink>
          </div>
          <div class="md:ml-auto md:max-w-max">
            <AppTelegramChatPill />
          </div>
        </div>
      </div>
      <div class="max-w-screen-sm mx-auto px-2 text-gray-500 text-sm text-center mb-3">Кузнецов Владислав Антонович<br />ИНН 590423743801</div>
      <div class="text-center px-3 text-gray-400">&copy; Все права защищены 2021</div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import AppTelegramChatPill from '@/components/AppTelegramChatPill.vue'
import AnalyticsLink from '@/components/AnalyticsLink.vue'

export default {
  components: {
    AppTelegramChatPill,
    AnalyticsLink,
  },
  computed: mapGetters({
    contacts: 'globalVars/contacts',
    identica: 'globalVars/identica',
  }),
}
</script>
