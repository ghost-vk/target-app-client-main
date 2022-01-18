<template>
  <div
    @click="goToUrl(banner.url)"
    @touchstart="toSmall"
    @touchend="backToNormal"
    @touchleave="backToNormal"
    @touchcancel="backToNormal"
    class="case select-none w-full rounded-xl overflow-hidden shadow-2xl cursor-pointer"
    :class="bannerClass"
  >
    <picture>
      <source
        v-for="point in screenPoints"
        :key="point"
        :media="`(max-width: ${point}px)`"
        :srcset="serverHost + banner.srcset[point]"
      />
      <img :src="serverHost + banner.src" alt="" class="img" :loading="loading" />
    </picture>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGtag } from 'vue-gtag-next'
import { event } from '@/plugins/vue3-facebook-pixel'
const fbEvent = event

export default {
  setup(props) {
    const { event } = useGtag()
    const bannerClass = ref('')

    const toSmall = () => {
      bannerClass.value = 'touched'
    }

    const backToNormal = () => {
      bannerClass.value = ''
    }

    const router = useRouter()
    const goToUrl = (url) => {
      if (!url) {
        return
      }

      event('click_banner', {
        event_category: 'directing',
        event_label: `Переход: ${banner.url}`,
      })

      fbEvent('ClickBanner', { route: banner.url })

      if (url.includes('https://anastasi-target.ru')) {
        const path = url.replace('https://anastasi-target.ru', '')
        router.push(path)
        return
      }

      window.location = url
    }

    const banner = props.banner
    let screenPoints = []

    if (Object.keys(banner.srcset).length > 0) {
      screenPoints = [...Object.keys(banner.srcset)]
      screenPoints.sort((a, b) => a - b)
    }

    return {
      bannerClass,
      banner,
      screenPoints,
      goToUrl,
      toSmall,
      backToNormal,
      serverHost: SERVER_PATH,
    }
  },
  props: {
    banner: {
      type: Object,
      default() {
        return []
      },
    },
    loading: {
      type: String,
      default() {
        return 'eager'
      },
    },
    index: {
      type: Number,
      default() {
        return -1
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.case {
  transition: transform 0.3s ease;
}

@media (max-width: 1024px) {
  .touched {
    transform: scale(0.96);
  }
}

.img {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
}
</style>
