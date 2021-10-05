<template>
  <div class="py-5 w-full md:w-2/3 lg:w-1/2">
    <div class="mx-auto w-full flex flex-col items-center text-center bg-white shadow-lg p-5 rounded-xl">
      <img
        :src="thumbnail"
        class="w-24 h-24 block rounded-full mb-5 transition-opacity duration-300"
        :alt="`Довольный клиент ${name}`"
      />
      <p
        class="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed mb-5 text-left"
        v-html="body"
      />
      <span class="text-gray-700 font-semibold text-sm uppercase mb-2">{{ name }}</span>
      <span v-if="vocation" class="text-gray-600 font-light text-sm mb-3">{{ vocation }}</span>
      <a v-if="instagram" :href="instagram" target="_blank">
        <AppInstagramIcon class="h-6 w-6 text-gray-400" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    vocation: {
      type: String,
    },
    instagram: {
      type: String,
    },
    body: {
      type: String,
      required: true,
    },
  },
}
</script>
