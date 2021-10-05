<template>
  <div class="overflow-hidden">
    <div v-if="screenWidth > 1024" class="container hidden py-20 mb-28 lg:block">
      <AppHeadingBubble title="Ознакомиться с услугами">
        <template #button>
          <AppPurpleRoundedButton @click="openLidForm" title="Получить консультацию" class="z-20" />
        </template>
      </AppHeadingBubble>
    </div>
    <div v-else class="container mb-14 sm:mb-56 lg:hidden">
      <AppTitleWithButton
        :is-event="true"
        title="Ознакомиться с моими услугами"
        link-title="Получить консультацию"
        @handle="openLidForm"
      />
    </div>
  </div>
</template>

<script>
import AppHeadingBubble from '@/components/AppHeadingBubble.vue'
import AppTitleWithButton from '@/components/ui/AppTitleWithButton.vue'
import { useScreenWidth } from '@/use/screenWidth'

export default {
  components: {
    AppHeadingBubble,
    AppTitleWithButton,
  },
  methods: {
    openLidForm() {
      this.$emit('open-lid-form', { source: 'Страница услуг (Консультация)', shouldCallback: true })
    },
  },
  setup() {
    const { screenWidth } = useScreenWidth()
    return {
      screenWidth,
    }
  },
}
</script>
