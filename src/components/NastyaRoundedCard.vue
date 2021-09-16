<template>
  <div>
    <AppRoundedPersonImage :image="avatar" class="mx-auto mb-4" />
    <div class="flex flex-col items-center text-center text-xl">
      <div class="font-bold mb-3">Анастасия Черепахина</div>
      <div class="font-light mb-3">Instagram Таргетолог</div>
      <a :href="contacts.instagram" target="_blank">
        <AppInstagramIcon class="h-8 w-8 text-gray-400" />
      </a>
    </div>
  </div>
</template>

<script>

import avatar from '@/assets/img/anastasiya-circle.jpg'
import AppRoundedPersonImage from '@/components/AppRoundedPersonImage.vue'
import { mapGetters } from "vuex";
export default {
  components: {
    AppRoundedPersonImage
  },
  computed: mapGetters({
    contacts: 'globalVars/contacts'
  }),
  data() {
    return {
      avatar,
    }
  }
}
</script>
