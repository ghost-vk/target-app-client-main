<template>
  <a :href="href" :target="target" @click.prevent="onClick">
    <slot />
  </a>
</template>

<script>
import { useGtag } from 'vue-gtag-next'
export default {
  props: {
    route: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true
    },
    target: {
      type: String,
      default() {
        return '_self'
      }
    }
  },
  setup(props) {
    const { event } = useGtag()
    const onClick = () => {
      event('go_away', {
        event_category: 'directing',
        event_label: `Переход: ${props.route}`,
      })
      window.open(props.href, props.target)
    }
    return {
      onClick,
    }
  },
}
</script>
