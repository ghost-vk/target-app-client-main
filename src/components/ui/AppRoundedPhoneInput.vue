<template>
  <div>
    <div
      class="shadow rounded-full border-solid border-red-400 mb-1 flex"
      :class="error ? 'border bg-red-50' : ''"
    >
      <div
        class="
          relative
          w-32
          border-r
          flex
          flex-shrink-0
          pl-6
          items-center
          rounded-l-full
          cursor-pointer
          select-none
        "
        :class="error ? 'bg-red-50 border-red-400' : 'bg-blue-50'"
        @click="isListShown = !isListShown"
      >
        <span class="mr-2 text-xl">{{ currentCountry.emoji }}</span
        >{{ currentCountry.startsWith }}
        <ChevronDownIcon
          class="h-5 w-5 absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform"
          :class="isListShown ? 'rotate-180' : ''"
        />
        <transition
          enter-active-class="duration-150"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-show="isListShown"
            @click.prevent
            class="
              absolute
              divide-y divide-solid divide-gray-300
              right-0
              top-9
              rounded
              max-h-36
              w-28
              overflow-y-auto
              shadow
              bg-blue-50
              cursor-pointer
            "
          >
            <div
              v-for="c in countries"
              :key="c.code"
              class="flex px-2 py-1 hover:bg-blue-200 transition-colors"
              @click="updateCountry(c.code)"
            >
              <span class="mr-2 text-xl">{{ c.emoji }}</span
              >{{ c.startsWith }}
            </div>
          </div>
        </transition>
      </div>
      <input
        :value="modelValue"
        :placeholder="placeholder"
        type="tel"
        @keyup="update"
        @focus="isListShown = false"
        class="
          w-full
          focus:outline-none
          transition-colors
          bg-transparent
          pl-5 md:pl-20
          pr-3
          py-1.5
          text-base
          place-content-center
        "
      />
    </div>
    <div v-show="error" class="text-xs text-red-400">{{ error }}</div>
  </div>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/solid'
export default {
  name: 'AppPhoneInput',
  props: {
    modelValue: {
      type: [String, Number],
    },
    countryCode: {
      type: String,
      default() {
        return 'RU'
      },
    },
    placeholder: {
      type: [String, Number],
    },
    error: {
      type: String,
      default() {
        return ''
      },
    },
  },
  methods: {
    update(e) {
      this.$emit('update:modelValue', e.target.value)
    },
    updateCountry(countryCode) {
      this.$emit('update-country', countryCode)
    }
  },
  components: {
    ChevronDownIcon,
  },
  computed: {
    currentCountry() {
      return this.countries.find((country) => country.code === this.countryCode)
    },
  },
  data() {
    return {
      isListShown: false,
      countries: [
        {
          emoji: '🇷🇺',
          code: 'RU',
          startsWith: '+7',
        },
        {
          emoji: '🇺🇦',
          code: 'UA',
          startsWith: '+380',
        },
        {
          emoji: '🇰🇿',
          code: 'KZ',
          startsWith: '+77',
        },
        {
          emoji: '🇺🇿',
          code: 'UZ',
          startsWith: '+998',
        },
        {
          emoji: '🇹🇯',
          code: 'TJ',
          startsWith: '+992',
        },
        {
          emoji: '🇦🇿',
          code: 'AZ',
          startsWith: '+994',
        },
      ],
    }
  },
}
</script>
