<template>
  <div
    @click="goToUrl(banners[0].url)"
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
      <img :src="serverHost + banners[0].src" alt="" class="img" />
    </picture>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup(props) {
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

      if (url.includes('https://anastasi-target.ru')) {
        const path = url.replace('https://anastasi-target.ru', '')
        router.push(path)
        return
      }

      window.location = url
    }

    // works only with first one banner for a time
    const banner = props.banners[0]
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
    banners: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.case {
  transition: transform 0.3s ease;
}
@media (min-width: 1023px) {
  .case:hover {
    transform: scale(0.98);
  }
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
