<template>
  <section class="pt-20 overflow-hidden">
    <div class="container">
      <AppHeadingBubble text-side="right" title="О чем этот продукт?" class="mb-28 lg:mb-40" />
      <div class="flex justify-between">
        <div
          v-if="screenWidth > 1024"
          class="hidden lg:flex flex-col justify-center w-1/3 flex-shrink-0 rounded overflow-hidden"
        >
          <img
            v-lazy="{ src: lazyLoading.src, lifecycle: lazyLoading.lifecycle }"
            alt="Настя настраивает таргет"
          />
        </div>
        <div class="lg:pl-20 flex flex-col justify-center text-sm sm:text-base">
          <div
            v-for="(p, i) in tripwire.aboutInShort"
            class="flex items-center"
            :class="i !== tripwire.aboutInShort.length - 1 ? 'mb-6 lg:mb-12' : ''"
          >
            <div class="relative rounded-full h-3 w-3 bg-purple-200 flex-shrink-0">
              <div
                v-if="
                  i !== tripwire.aboutInShort.length - 2 && i !== tripwire.aboutInShort.length - 1
                "
                class="absolute top-0 left-1 h-40 w-0.5 bg-purple-200"
              ></div>
              <div
                v-if="i === tripwire.aboutInShort.length - 1"
                class="absolute -top-40 left-1 h-40 w-0.5 bg-purple-200"
              ></div>
            </div>
            <p class="pl-3 sm:px-6 md:px-10" v-html="p"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useScreenWidth } from '@/use/screenWidth'
import useImageLazyLoading from '@/use/imageLazyLoading'
import workingOnMac from '@/assets/img/working-on-mac.jpg'
import AppHeadingBubble from '@/components/AppHeadingBubble.vue'

export default {
  props: {
    tripwire: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { screenWidth } = useScreenWidth()
    const { imageClass, lazyLoading } = useImageLazyLoading(workingOnMac)
    return {
      imageClass,
      lazyLoading,
      screenWidth,
    }
  },
  components: {
    AppHeadingBubble,
  },
}
</script>
