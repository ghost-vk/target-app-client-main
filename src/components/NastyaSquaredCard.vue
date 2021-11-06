<template>
  <section>
    <div class="md:container">
      <div
        class="
          flex flex-wrap
          sm:flex-nowrap
          items-center
          bg-purple-100
          sm:p-6
          md:p-12
          lg:p-20
          md:rounded
        "
      >
        <div
          class="
            w-full
            flex flex-col
            justify-center
            max-h-96
            sm:max-h-full
            overflow-hidden
            sm:w-1/2 sm:pr-10
            mb-5
            md:mb-0
          "
          :class="imageClass"
        >
          <img
            v-lazy="{ src: lazyLoading.src, lifecycle: lazyLoading.lifecycle }"
            class="rounded"
            alt="Автор материала"
          />
        </div>
        <div class="p-4 sm:p-0">
          <span class="block text-4xl lg:text-7xl mb-5 lg:mb-8">АВТОР<br />МАТЕРИАЛА</span>
          <span class="text-xl lg:text-3xl block">Анастасия Черепахина</span>
          <AnalyticsLink
            route="Профиль Instagram"
            :href="contacts.instagram"
            target="_blank"
            class="block mb-5"
          >
            <span target="_blank" class="mb-5 text-base lg:text-lg">@anastasi.target</span>
          </AnalyticsLink>
          <ul class="list-inside list-disc text-sm sm:text-base">
            <li>действующий таргетолог</li>
            <li>2 года опыта</li>
            <li>опыт более чем в 20 нишах</li>
            <li>наставник для начинающих таргетологов</li>
            <li>была куратором на курсе</li>
            <li>личный рекорд CTR 5,26%</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productAuthor from '@/assets/img/product-author.jpg'
import useImageLazyLoading from '@/use/imageLazyLoading'
import AnalyticsLink from '@/components/AnalyticsLink.vue'
import { mapGetters } from 'vuex'

export default {
  setup() {
    const { imageClass, lazyLoading } = useImageLazyLoading(productAuthor)
    return { imageClass, lazyLoading }
  },
  computed: {
    ...mapGetters({
      contacts: 'globalVars/contacts'
    })
  },
  components: {
    AnalyticsLink
  }
}
</script>
