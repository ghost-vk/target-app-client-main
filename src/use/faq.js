import { ref } from 'vue'
import { event } from '@/plugins/vue3-facebook-pixel'

export default function useFaq(category = 'target-setup') {
  const currentCategory = ref('target-setup')

  const changeCurrentCategory = (val) => {
    if (['target-setup', 'consultation', 'telegram-chat', 'mentor'].includes(val)) {
      currentCategory.value = category
    }

    event('SwitchFaqCategory', {
      prev: currentCategory.value,
      current: val
    })

    currentCategory.value = val
  }

  return {
    currentCategory,
    changeCurrentCategory,
  }
}
