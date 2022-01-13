<template>
  <div v-if="stats">
    <div
      class="flex justify-center"
      :class="screenWidth > 400 ? 'flex-wrap' : 'flex-col items-center'"
      v-intersection="fill"
    >
      <div v-for="(s, i) in stats" class="flex lg:w-1/4 w-1/2 p-3" :class="itemClass(i, screenWidth)">
        <AppCircleStats :stat="s.stat" :name="s.name" :percent="percents[i]" />
      </div>
    </div>
  </div>
</template>

<script>
import AppCircleStats from '@/components/AppCircleStats.vue'

import { ref } from 'vue'

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default {
  components: {
    AppCircleStats,
  },
  props: {
    stats: {
      type: Array,
      default() {
        return []
      },
    },
  },
  setup(props) {
    const screenWidth = window.innerWidth
    const statsLength = props.stats.length

    const percents = ref([])

    for (let i = 0; i < statsLength; i += 1) {
      percents.value.push(0)
    }

    const fill = async () => {
      await timeout(800)
      const max = percents.value.length > 0 ? percents.value.length - 1 : 0
      if (!max) {
        return
      }

      for (let i = 0; i <= max; i += 1) {
        percents.value[i] = 100
        await timeout(400)
      }
    }

    const itemClass = (pos, screen) => {
      // prettier-ignore
      const positionClass =  screen > 1024 ? 'justify-center'
        : pos % 2 !== 0 && screen > 400 ? 'justify-start'
        : pos % 2 !== 0 && screen > 400 ? 'justify-end'
            : 'justify-center'
      const widthClass = screen > 400 ? '' : ' w-full'
      return positionClass + widthClass
    }

    return {
      fill,
      screenWidth,
      itemClass,
      percents,
    }
  },
}
</script>
