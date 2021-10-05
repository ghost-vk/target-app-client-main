import { ref } from 'vue'

export default function useFaq(category = 'target-setup') {
  const currentCategory = ref('target-setup')

  if (['target-setup', 'consultation', 'telegram-chat', 'mentor'].includes(category)) {
    currentCategory.value = category
  }

  const changeCurrentCategory = (val) => {
    currentCategory.value = val
  }

  return {
    currentCategory,
    changeCurrentCategory,
  }
}
