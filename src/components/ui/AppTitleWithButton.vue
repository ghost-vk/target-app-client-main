<template>
  <section>
    <!--  mb-14 sm:mb-56  -->
    <div
      :class="isAlwaysColumn
        ? 'flex flex-wrap justify-between items-center px-2 lg:px-24 py-3 bg-gradient-to-r from-purple-400 to-purple-300 rounded-2xl md:py-5 shadow'
        : 'flex flex-wrap justify-between items-center px-2 lg:px-24 py-3 bg-gradient-to-r from-purple-400 to-purple-300 rounded-2xl md:py-5 shadow lg:flex-nowrap'"
    >
      <div :class="isAlwaysColumn ? 'w-full' : 'w-full lg:w-auto'">
        <h6
          v-text="title"
          :class="isAlwaysColumn
            ? 'text-sm sm:text-xl md:text-2xl lg:text-3xl text-white font-bold w-full block pr-0 mb-3 text-center'
            : 'text-sm sm:text-xl md:text-2xl lg:text-3xl text-white font-bold w-full block pr-0 mb-3 text-center lg:pr-5 lg:text-left lg:mb-0'"
        />
      </div>
      <button
        type="button"
        v-if="isEvent"
        @click="this.$emit('handle')"
        :class="isAlwaysColumn
            ? 'px-10 py-1.5 md:py-3 text-sm md:text-lg font-semibold bg-white block rounded-full mx-auto w-3/4 lg:w-auto text-center'
            : 'px-10 py-1.5 md:py-3 text-sm md:text-lg font-semibold bg-white block rounded-full mx-auto w-3/4 lg:w-auto text-center lg:mx-0'"
      >
        {{ linkTitle }}
      </button>
      <RouterLink
        v-else-if="isRouter"
        :to="url"
        v-slot="{ navigate }"
        class="block w-full lg:w-auto"
      >
        <button
          type="button"
          @click="navigate"
          :class="isAlwaysColumn
            ? 'px-10 py-1.5 md:py-3 text-sm md:text-lg font-semibold bg-white block rounded-full mx-auto w-3/4 lg:w-auto text-center'
            : 'px-10 py-1.5 md:py-3 text-sm md:text-lg font-semibold bg-white block rounded-full mx-auto w-3/4 lg:w-auto text-center lg:mx-0'"
        >
          {{ linkTitle }}
        </button>
      </RouterLink>
      <a
        v-else
        :href="url"
        v-text="linkTitle"
        :class="isAlwaysColumn
            ? 'px-10 py-1.5 md:py-3 text-sm md:text-lg font-semibold bg-white block rounded-full mx-auto w-3/4 lg:w-auto text-center'
            : 'px-10 py-1.5 md:py-3 text-sm md:text-lg font-semibold bg-white block rounded-full mx-auto w-3/4 lg:w-auto text-center lg:mx-0'"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppTitleWithButton',
  props: {
    isEvent: {
      type: Boolean,
      default() {
        return false
      },
    },
    isRouter: {
      type: Boolean,
      default() {
        return false
      },
    },
    isAlwaysColumn: {
      type: Boolean,
      default() {
        return false
      },
    },
    title: {
      type: String,
      required: true,
    },
    linkTitle: {
      type: String,
      default() {
        return 'Подробнее'
      },
    },
    url: {
      type: String,
      default() {
        return ''
      },
    },
  }
}
</script>
