<template>
    <div
      class="h-32 w-32 sm:w-64 sm:h-64 overflow-hidden rounded-full flex justify-center"
    >
      <img class="h-full transition-opacity" :class="imageClass" :alt="alt" v-lazy="{ src: lazyLoading.src, lifecycle: lazyLoading.lifecycle }" />
    </div>
</template>

<script>
import avatar from '@/assets/img/anastasiya-circle.jpg'
import useImageLazyLoading from "@/use/imageLazyLoading";

export default {
  props: {
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
    },
  },
  setup() {
    const { imageClass, lazyLoading } = useImageLazyLoading(avatar)
    return {
      lazyLoading,
      imageClass
    }
  },
}
</script>
