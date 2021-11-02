<template>
  <section class="py-20 overflow-hidden">
    <div class="container">
      <AppHeadingBubble text-side="left" title="Что содержится внутри?" class="mb-28 lg:mb-40">
        <template v-if="screenWidth > 1024" #button>
          <a href="#buy" class="z-20"><AppPurpleRoundedButton title="Хочу купить" /></a>
        </template>
      </AppHeadingBubble>
      <AppDescriptionGrid :rows="tripwireContent" class="mb-8" />
      <div class="max-w-screen-sm mx-auto">
        <a href="#buy">
          <AppFullWidthRoundedButton
            title="Прокачаться прямо сейчас"
            class="text-base md:text-xl lg:text-3xl"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import AppHeadingBubble from '@/components/AppHeadingBubble.vue'
import AppDescriptionGrid from '@/components/AppDescriptionGrid.vue'
import { useScreenWidth } from '@/use/screenWidth'
export default {
  components: {
    AppHeadingBubble,
    AppDescriptionGrid,
  },
  props: {
    tripwireContent: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { screenWidth } = useScreenWidth()
    return { screenWidth }
  },
}
</script>
