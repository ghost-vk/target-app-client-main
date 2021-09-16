<template>
  <transition
    enter-active-class="duration-300"
    enter-from-class="-top-20 opacity-60"
    enter-to-class="top-0 opacity-100"
    leave-active-class="duration-300"
    leave-from-class="top-0 opacity-100"
    leave-to-class="-top-20 opacity-60"
  >
    <header class="fixed top-0 w-screen bg-purple-400 z-30">
      <div class="container flex py-2 lg:py-5 text-white justify-between lg:justify-start">
        <div class="w-28 md:w-40 flex-shrink-0">
          <RouterLink to="/">
            <img :src="identica.mainLogo" alt="" />
          </RouterLink>
        </div>
        <div class="lg:flex hidden flex-1 justify-center text-lg px-3">
          <RouterLink to="/" v-slot="{ href, isExactActive, navigate }">
            <AppHeaderLink
              @click="navigate"
              :class="isExactActive ? activeLinkClass + ' mr-10' : ' mr-10'"
              title="Главная"
            />
          </RouterLink>
          <RouterLink to="/service" v-slot="{ href, isExactActive, navigate }">
            <AppHeaderLink
              @click="navigate"
              :class="isExactActive ? activeLinkClass + ' mr-10' : ' mr-10'"
              title="Услуги"
            />
          </RouterLink>
          <RouterLink to="/education" v-slot="{ href, isExactActive, navigate }">
            <AppHeaderLink
              @click="navigate"
              :class="isExactActive ? activeLinkClass + ' mr-10' : ' mr-10'"
              title="Обучение"
            />
          </RouterLink>
          <div class="flex items-center justify-center cursor-not-allowed mr-10">
            <AppBalloon
              text="в разработке"
              balloon-class-list="top-9 left-1/2 -translate-x-1/2 w-32 w-auto whitespace-nowrap"
            >
              <span>Блог</span>
            </AppBalloon>
            <span class="ml-1 px-2 py-1 bg-gray-50 text-purple-600 rounded-full text-xs"
              >скоро</span
            >
          </div>
          <RouterLink to="/calc" v-slot="{ href, isExactActive, navigate }" exact-path>
            <AppBalloon
              text="примерный расчет рекламного бюджета, стоимости заявки и т.д."
              balloon-class-list="top-16 left-1/2 -translate-x-1/2 w-32 w-auto whitespace-nowrap"
              class="h-full"
            >
              <AppHeaderLink
                @click="navigate"
                :class="
                  isExactActive
                    ? 'h-full flex flex-col justify-center items-center font-extrabold'
                    : 'h-full flex flex-col justify-center items-center'
                "
                title="AdCalculator"
              />
            </AppBalloon>
          </RouterLink>
        </div>
        <div class="ml-auto mr-5 flex flex-col justify-center">
          <a
            href="#"
            class="hidden px-3 py-1.5 border border-solid border-white rounded-2xl shadow text-sm"
            >Войти в личный кабинет</a
          >
        </div>
        <div
          class="lg:w-40 flex-shrink-0 flex flex-col justify-center cursor-pointer"
          @click="$emit('openMenu', true)"
        >
          <div>
            <MenuAlt3Icon class="ml-auto h-8 w-8 md:h-12 md:w-12" />
          </div>
        </div>
      </div>
    </header>
  </transition>
</template>

<script>
import { RouterLink } from 'vue-router'
import AppHeaderLink from '@/components/AppHeaderLink.vue'
import { MenuAlt3Icon } from '@heroicons/vue/outline'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    identica: 'globalVars/identica',
  }),
  data() {
    return {
      activeLinkClass: 'flex flex-col justify-center items-center font-extrabold',
      inactiveLinkClass: 'flex flex-col justify-center items-center',
    }
  },
  components: {
    AppHeaderLink,
    RouterLink,
    MenuAlt3Icon,
  },
}
</script>
