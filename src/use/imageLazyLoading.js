import { ref, reactive } from 'vue'

export default function useImageLazyLoading(src) {
  let imageClass = ref('')
  const lazyLoading = reactive({
    src: src,
    lifecycle: {
      loading() {
        imageClass = 'opacity-0'
      },
      error() {
        imageClass = 'opacity-0'
      },
      loaded() {
        imageClass = 'opacity-100'
      },
    },
  })

  return {
    imageClass,
    lazyLoading
  }
}


