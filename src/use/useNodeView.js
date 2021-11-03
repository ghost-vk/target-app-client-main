import { useRoute } from 'vue-router'
export const useNodeView = () => {
  const route = useRoute()
  const id = route.query['show_node']
  if (!id) {
    return null
  }
  const node = document.querySelector(`#${id}`)
  if (!node) {
    return null
  }
  setTimeout(() => {
    node.scrollIntoView({ behavior: 'smooth' })
  }, 550)
}
