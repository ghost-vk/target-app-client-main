<template>
  <transition
    enter-active-class="duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-show="isShown" class="fixed bottom-0 left-0 right-0 shadow-inner py-3 bg-gray-100 z-20">
      <div class="container text-xs">
        <div class="flex justify-between">
          <span
            >Данный сайт использует cookie, потому что так работает интернет. Вы можете отключить
            использование cookie в настройках своего браузера.</span
          >
          <span
            @click="closeCookieNotification"
            class="flex items-center hover:underline cursor-pointer pl-5"
          >
            <span class="hidden md:inline-block">Закрыть</span>
            <XIcon class="md:ml-2 h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { XIcon } from '@heroicons/vue/solid'
import { ref } from 'vue'

export default {
  setup() {
    const isAlreadyNotified = window.localStorage.getItem('is_user_notified_about_cookie') || 'n'
    const isShown = ref(isAlreadyNotified === 'n')
    const closeCookieNotification = () => {
      window.localStorage.setItem('is_user_notified_about_cookie', 'y')
      isShown.value = false
    }
    return {
      isShown,
      closeCookieNotification,
    }
  },
  components: {
    XIcon,
  },
}
</script>
