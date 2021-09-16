<template>
  <div class="container py-28 lg:py-40 h-screen flex flex-col justify-center items-center">
    <img src="" class="mb-5 rounded" :class="imageClass" v-lazy="{ src: lazyLoading.src, lifecycle: lazyLoading.lifecycle }" alt="">
    <div class="mb-4 text-center">
      <h1 class="text-2xl md:text-4xl font-semibold">Страница не найдена</h1>
    </div>
    <div>
      <AppPurpleRoundedButton title="Перейти на главную" @click="$router.push('/')" />
    </div>
  </div>
</template>

<script>
import pic from '@/assets/img/not-found.jpg'
import useImageLazyLoading from "@/use/imageLazyLoading";
export default {
  setup() {
    const { imageClass, lazyLoading } = useImageLazyLoading(pic)
    return {
      imageClass,
      lazyLoading
    }
  }
}
</script>
