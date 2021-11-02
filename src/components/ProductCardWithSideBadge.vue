<template>
  <div class="relative lg:pl-20">
    <div class="h-px" v-intersection="tryToSetBgImage"></div>
    <div
      v-if="screenWidth > 1024"
      class="
        absolute
        top-1/2
        -left-40
        transform
        -translate-y-1/2
        -rotate-90
        shadow-2xl
        h-28
        rounded-tl-3xl rounded-tr-3xl
        w-96
        bg-gray-800
        text-center text-gray-100
        flex
        justify-center
        items-center
        text-center
      "
    >
      <div class="h-1 w-12 bg-gray-100"></div>
      <p class="px-4 uppercase text-xl" v-html="sideBgText"></p>
      <div class="h-1 w-12 bg-gray-100"></div>
    </div>
    <div
      class="
        lg:relative
        z-20
        p-5
        sm:p-8
        md:p-16
        bg-gray-200
        rounded-3xl
        shadow-xl
        bg-cover bg-center bg-opacity-30
      "
      :style="bg ? `background-image:url('${bg}')` : ''"
    >
      <div
        class="absolute top-0 left-0 right-0 bottom-0 bg-purple-200 rounded-3xl opacity-60 transition-opacity z-10"
        :class="bg ? 'opacity-60' : 'opacity-100'"
      ></div>
      <div class="relative z-20 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-5xl mb-8 sm:mb-16" v-html="title"></h2>
        <ul class="list-none text-base sm:text-xl lg:text-2xl mb-6 md:mb-10">
          <li v-for="f in features" class="mb-2 sm:mb-5">{{ f }}</li>
        </ul>
        <div class="text-3xl lg:text-4xl font-bold mb-8 md:mb-16" v-html="price"></div>
        <div class="max-w-screen-sm mx-auto">
          <AppFullWidthRoundedButton
            :title="btnText"
            class="text-base sm:text-xl lg:text-3xl"
            @click="$emit('click-btn')"
          />
        </div>
      </div>
    </div>
    <div class="h-px" v-intersection="tryToSetBgImage"></div>
  </div>
</template>

<script>
import { useScreenWidth } from '@/use/screenWidth'
import { ref } from 'vue'
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    features: {
      type: Array,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
    bgImage: {
      type: String
    },
    btnText: {
      type: String,
      default() {
        return 'Купить'
      },
    },
    sideBgText: {
      type: String,
      default() {
        return 'гарантированный<br />результат'
      },
    },
  },
  setup(props) {
    const { screenWidth } = useScreenWidth()
    const bg = ref(false)
    const isAlreadyTry = ref(false)

    const tryToSetBgImage = () => {
      if (isAlreadyTry.value) {
        return
      }
      isAlreadyTry.value = true
      bg.value = props.bgImage
    }

    return { tryToSetBgImage, screenWidth, bg }
  }
}
</script>
