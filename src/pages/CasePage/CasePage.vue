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
    <CasePageResults v-if="displayValues.case_stats" :stats="displayValues.case_stats" />
    <div v-else>
      <div v-if="displayValues.thumbnail">
        <img
          class="mx-auto rounded"
          :class="imageClass"
          v-lazy="{ src: displayValues.thumbnail || '', lifecycle: lazyLoading.lifecycle }"
          alt=""
        />
      </div>
    </div>
    <div class="max-w-screen-sm mx-auto text-base md:text-lg mb-10" v-html="displayValues.content"></div>
    <div class="max-w-screen-sm mx-auto">
      <AppTitleWithButton
        :is-always-column="true"
        :is-event="true"
        @handle="showDialog({ source: `Кейс (${displayValues.title})`, shouldCallback: true })"
        title="Нужна настройка рекламы?"
        link-title="Оставить заявку"
        class="mt-8"
      />
    </div>
    <ModalLidForm />
    <ModalLidFormCallbackNotification />
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import imageLazyLoading from '@/use/imageLazyLoading'
import avatar from '@/assets/img/anastasiya-circle.jpg'
import { mapActions, mapGetters } from 'vuex'
import { dateFilter } from '@/filters/date.filter'
import CasePageResults from '@/pages/CasePage/CasePageResults.vue'
import ModalLidForm from '@/components/ModalLidForm.vue'
import ModalLidFormCallbackNotification from '@/components/ModalLidFormCallbackNotification.vue'

export default {
  components: {
    CasePageResults,
    ModalLidForm,
    ModalLidFormCallbackNotification,
  },
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
      screen: window.innerWidth,
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
      showDialog: 'lidForm/showDialog',
    }),
    dateFilter,
  },
  async mounted() {
    await this.load(this.id)
    this.$gtag.event('page_view', { page_title: `Просмотр кейса: ${this.displayValues.title}` })
    this.$fbq.event('ViewContent', { content_category: 'Кейсы', content_name: this.displayValues.title })
  },
}
</script>
