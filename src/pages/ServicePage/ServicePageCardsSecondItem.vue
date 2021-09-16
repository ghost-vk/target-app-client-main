<template>
  <AppSectionCard
    :title="title"
    button="Оставить заявку"
    @button-click="showDialog(`Страница услуг ('${title}')`)"
  >
    <template #scrollable-list>
      <ul
        class="list-disc list-inside leading-relaxed text-gray-500 pb-6 text-xs sm:text-sm text-left"
      >
        <li v-for="item in listItems" class="mb-1 md:mb-2">{{ item }}</li>
      </ul>
    </template>
    <template #additional-items>
      <AppIconWithTextRow class="px-1.5 mb-3">
        <template #icon>
          <DocumentTextIcon class="h-6 w-6" />
        </template>
        <template #body>
          подробный документ с секретами/лайфхаками по эффективным запускам рекламной кампании
        </template>
      </AppIconWithTextRow>
      <AppIconWithTextRow class="px-1.5 italic">
        <template #icon>
          <InformationCircleIcon class="h-6 w-6" />
        </template>
        <template #body>
          в дальнейшем можно использовать как шпаргалку
        </template>
      </AppIconWithTextRow>
    </template>
    <template #additional-items-alt>
      <div class="flex justify-center">
        <AppBalloon text="обратная связь в течение 5-ти дней после консультации" class="mr-2">
          <div class="border-b border-dotted border-purple-500 py-1">
            <GiftIcon class="h-5 w-5 text-purple-500" />
          </div>
        </AppBalloon>
        <AppBalloon
          text="подробный документ с секретами/лайфхаками по эффективным запускам рекламной кампании"
          class="mr-2"
        >
          <div class="border-b border-dotted border-purple-500 py-1">
            <DocumentTextIcon class="h-5 w-5 text-purple-400" />
          </div>
        </AppBalloon>
        <AppBalloon text="в дальнейшем можно использовать как шпаргалку">
          <div class="border-b border-dotted border-purple-500 py-1">
            <InformationCircleIcon class="h-5 w-5 text-purple-400" />
          </div>
        </AppBalloon>
      </div>
    </template>
    <template #highlighted-items>
      <AppIconWithTextRow>
        <template #icon>
          <GiftIcon class="h-8 w-8 text-purple-500" />
        </template>
        <template #body>
          <span class="text-purple-900 uppercase font-semibold text-sm">обратная связь в течение 5-ти дней после консультации</span>
        </template>
      </AppIconWithTextRow>
    </template>
    <template #last-content>
      <div class="text-center">
        <p class="text-2xl font-bold">3 500 &#8381;</p>
      </div>
    </template>
  </AppSectionCard>
</template>

<script>
import AppSectionCard from '@/components/AppSectionCard.vue'
import { DocumentTextIcon, InformationCircleIcon, GiftIcon } from '@heroicons/vue/outline'
import { mapActions } from 'vuex'

export default {
  components: {
    AppSectionCard,
    DocumentTextIcon,
    InformationCircleIcon,
    GiftIcon
  },
  data() {
    return {
      title: 'Консультация для таргетологов, владельцев бизнеса',
      listItems: [
        'Аналитика рекламных кампаний',
        'Оптимизация, масштабирование',
        'Улучшение показателей',
        'Рекомендации',
        'Ответы на все ваши вопросы',
        'Подключение к вашему ПК по удаленному доступу',
      ]
    }
  },
  methods: mapActions({
    showDialog: 'lidForm/showDialog'
  })
}
</script>