<template>
  <div class="container py-28 lg:py-40">
    <div class="max-w-screen-sm mx-auto border-b border-solid border-gray-300 pb-3">
      <router-link to="/cases">
        <AppBlueUnderlineLink class="uppercase mb-2">кейсы</AppBlueUnderlineLink>
      </router-link>
      <h1 class="text-4xl lg:text-6xl font-bold mb-5">{{ displayValues.title }}</h1>
      <h2 class="text-xl lg:text-2xl">{{ displayValues.subtitle }}</h2>
    </div>
    <div>
      <div class="max-w-screen-sm mx-auto flex items-center pt-3 mb-20">
        <img :src="avatar" class="h-12 w-12 block mr-3 rounded-full" alt="Автор блога" />
        <div class="uppercase flex flex-col">
          <a :href="contacts.instagram" target="_blank" class="text-sm mb-1">Настя Черепахина</a>
          <span class="text-xs">{{ dateFilter(displayValues.posting_date) }}</span>
        </div>
      </div>
    </div>
    <div>
      <div v-if="displayValues.thumbnail">
        <img
          class="mx-auto"
          :class="imageClass"
          v-lazy="{ src: displayValues.thumbnail || '', lifecycle: lazyLoading.lifecycle }"
          alt=""
        />
      </div>
    </div>
    <div class="max-w-screen-sm mx-auto text-base md:text-lg" v-html="displayValues.content"></div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import imageLazyLoading from '@/use/imageLazyLoading'
import avatar from '@/assets/img/anastasiya-circle.jpg'
import { mapActions, mapGetters } from 'vuex'
import { dateFilter } from '@/filters/date.filter'
export default {
  setup() {
    const router = useRouter()
    const { imageClass, lazyLoading } = imageLazyLoading('')
    const id = useRoute().params.id
    if (!Number(id)) {
      router.push('/page-not-found')
    }
    return {
      id,
      avatar: avatar,
      imageClass,
      lazyLoading,
    }
  },
  computed: {
    ...mapGetters({
      contacts: 'globalVars/contacts',
      displayValues: 'post/displayValues',
      status: 'post/status',
    }),
  },
  methods: {
    ...mapActions({
      load: 'post/loadPost',
    }),
    dateFilter,
  },
  async mounted() {
    await this.load(this.id)
    this.$gtag.event('page_view', { page_title: `Просмотр кейса: ${this.displayValues.title}` })
  },
  watch: {
    status(val) {
      console.log(val);
    }
  }
}
</script>
