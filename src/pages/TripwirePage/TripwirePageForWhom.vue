<template>
  <section class="lg:mb-44 py-20 overflow-hidden">
    <div class="container">
      <AppHeadingBubble text-side="left" title="Для кого этот продукт?" class="mb-28 lg:mb-40" />
    </div>
    <div class="md:container">
      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          gap-y-12
          md:gap-y-8
          lg:gap-y-28
          md:gap-x-6
          lg:gap-x-10
        "
      >
        <div v-for="t in tripwire.forWhom" class="relative lg:border-2 border-purple-200 lg:p-12">
          <div
            class="
              lg:absolute
              -top-10
              left-0
              bg-gray-50
              mb-4
              lg:mb-0 lg:w-96 lg:h-20
              px-4
              lg:px-12
              flex
              items-center
            "
          >
            <div class="mr-6 flex-shrink-0" v-html="t.icon"></div>
            <h3 class="text-xl lg:text-2xl" v-html="t.title"></h3>
          </div>
          <div class="px-4 py-5 lg:px-8 lg:py-10 bg-purple-200" v-html="t.body"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppHeadingBubble from '@/components/AppHeadingBubble.vue'
export default {
  props: {
    tripwire: {
      type: Object,
      required: true,
    },
  },
  components: {
    AppHeadingBubble,
  },
}
</script>
