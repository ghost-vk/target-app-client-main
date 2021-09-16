<template>
  <div class="p-2 sm:p-3 bg-white shadow rounded flex flex-col justify-between">
    <div>
      <div class="relative">
        <img
          :src="image"
          alt=""
          class="mb-2"
        />
        <div
          v-if="description"
          class="
            absolute
            top-0
            left-0
            right-0
            bottom-0
            bg-gray-700
            bg-opacity-90
            transition-opacity
            p-1.5
            overflow-auto
            text-white
            rounded
            text-xs
            hover:opacity-100
          "
          :class="isDescriptionOpened ? 'opacity-100' : 'opacity-0'"
          v-html="description"
        ></div>
      </div>
      <div class="text-xs sm:text-sm font-semibold">{{ title }}</div>
    </div>
    <div class="flex flex-wrap justify-between items-center">
      <AppSmallRoundedButton @click="$emit('get')" title="Получить" class="mt-2 mr-2" />
      <AppBlueUnderlineLink
        v-if="description"
        @click="isDescriptionOpened = !isDescriptionOpened"
        class="block text-xs sm:text-sm md:text-base mt-2"
        >{{ isDescriptionOpened ? 'Скрыть' : 'Подробнее' }}</AppBlueUnderlineLink
      >
    </div>
  </div>
</template>

<script>
import MagnetPic from '@/assets/img/magnet-test.png'
export default {
  data() {
    return {
      isDescriptionOpened: false
    }
  },
  watch: {
    isDescriptionOpened: function(val) {
      this.isDescriptionOpened = val
    }
  },
  props: {
    image: {
      type: String,
      default() {
        return MagnetPic
      },
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
}
</script>
