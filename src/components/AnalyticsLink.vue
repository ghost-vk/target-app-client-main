<template>
  <a :href="href" :target="target" @click.prevent="onClick">
    <slot />
  </a>
</template>

<script>
import { useGtag } from 'vue-gtag-next'
import { event } from '@/plugins/vue3-facebook-pixel'
const fbEvent = event

export default {
  props: {
    route: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default() {
        return '_self'
      },
    },
  },
  setup(props) {
    const { event } = useGtag()

    const onClick = () => {
      event('go_away', {
        event_category: 'directing',
        event_label: `Переход: ${props.route}`,
      })

      fbEvent('GoAway', { route: `Переход: ${props.route}` })

      setTimeout(() => {
        window.open(props.href, props.target)
      }, 300)
    }
    return {
      onClick,
    }
  },
}
</script>
