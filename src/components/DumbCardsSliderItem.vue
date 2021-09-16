<template>
  <div class="py-5 w-full">
    <div
      class="
        p-4
        shadow-lg
        rounded-2xl
        bg-white
        flex flex-col
        justify-center
        items-center
        text-center
      "
    >
      <img
        v-lazy="{ src: lazyLoading.src, lifecycle: lazyLoading.lifecycle }"
        class="mb-4 w-full"
        :class="imageClass"
        alt=""
      />
      <p class="text-md leading-relaxed font-semibold h-16 max-h-16 overflow-y-scroll">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
import useImageLazyLoading from '@/use/imageLazyLoading'
export default {
  setup(props) {
    const { imageClass, lazyLoading } = useImageLazyLoading(props.thumbnail)
    return {
      imageClass,
      lazyLoading,
    }
  },
  props: {
    title: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
  },
}
</script>
