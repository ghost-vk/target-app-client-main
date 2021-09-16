import { ref } from 'vue'

export const useScreenWidth = () => {
  const width = ref(window.innerWidth)
  return { screenWidth: width }
}
