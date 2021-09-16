<template>
  <AppSectionCard
    :title="title"
    button="Оставить заявку"
    @button-click="showDialog(`Страница услуг ('${title}')`)"
  >
    <template #scrollable-list>
      <div class="w-full" v-intersection="showScrollIcon" />
      <ul
        class="
          list-disc list-inside
          leading-relaxed
          text-gray-500
          pb-6
          text-xs
          sm:text-sm
          text-left
        "
      >
        <li v-for="item in listItems" class="mb-1 md:mb-2">{{ item }}</li>
      </ul>
      <ScrollDownAnimateIcon
        class="bg-purple-200 opacity-80 rounded-full"
        :is-shown="isScrollIconShown"
        @hide-scroll-icon="this.isScrollIconShown = false"
      />
    </template>
    <template #additional-items>
      <AppIconWithTextRow class="px-1.5 mb-3">
        <template #icon>
          <DocumentTextIcon class="h-6 w-6" />
        </template>
        <template #body>
          все рекламные наработки остаются у вас после окончания сотрудничества
        </template>
      </AppIconWithTextRow>
      <AppIconWithTextRow class="px-1.5 italic">
        <template #icon>
          <InformationCircleIcon class="h-6 w-6" />
        </template>
        <template #body>
          наработки можно будет использовать при самостоятельном запуске рекламы
        </template>
      </AppIconWithTextRow>
    </template>
    <template #additional-items-alt>
      <div class="flex justify-center">
        <AppBalloon text="инструкция по составлению офферов для любой ниши" class="mr-2">
          <div class="border-b border-dotted border-purple-500 py-1">
            <GiftIcon class="h-5 w-5 text-purple-500" />
          </div>
        </AppBalloon>
        <AppBalloon
          text="все рекламные наработки остаются у вас после окончания сотрудничества"
          class="mr-2"
        >
          <div class="border-b border-dotted border-purple-500 py-1">
            <DocumentTextIcon class="h-5 w-5 text-purple-400" />
          </div>
        </AppBalloon>
        <AppBalloon text="наработки можно будет использовать при самостоятельном запуске рекламы">
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
          <span class="text-purple-900 uppercase font-semibold text-sm">
            инструкция по составлению офферов для любой ниши
          </span>
        </template>
      </AppIconWithTextRow>
    </template>
    <template #last-content>
      <div class="">
        <div class="text-2xl font-bold flex items-center justify-center">
          20 000 &#8381;
          <AppBalloon
            text="сумма расчитывается индивидуально при рекламном бюджете от 50 000 &#8381;/мес"
            class="font-medium"
            balloon-class-list="top-9 -right-16 w-64"
          >
            <QuestionMarkCircleIcon class="h-5 w-5 text-purple-700 ml-2" />
          </AppBalloon>
        </div>
      </div>
    </template>
  </AppSectionCard>
</template>

<script>
import AppSectionCard from '@/components/AppSectionCard.vue'
import ScrollDownAnimateIcon from '@/components/ScrollDownAnimateIcon.vue'
import {
  DocumentTextIcon,
  InformationCircleIcon,
  GiftIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/vue/outline'
import { mapActions } from 'vuex'

export default {
  components: {
    AppSectionCard,
    ScrollDownAnimateIcon,
    DocumentTextIcon,
    InformationCircleIcon,
    GiftIcon,
    QuestionMarkCircleIcon,
  },
  data() {
    return {
      title: 'Настройка таргетированной рекламы в Instagram, Facebook',
      listItems: [
        'Разработка рекламной стратегии',
        'Настройка рекламного кабинета',
        'Настройка бизнес менеджера',
        'Создание Pixel Facebook счетчика (если есть сайт)',
        'Помощь в подключении счетчиков на сайт (если есть)',
        'Анализ рекламы конкурентов, воронка продаж',
        'Создание аватара клиента',
        'Подготовка рекламных макетов',
        'Написание офферов',
        'Создание аудиторий',
        'Запуск рекламной кампании',
        'Оптимизация, понижение стоимости клика',
        'Отслеживание результатов, ежедневный контроль',
        'Масштабирование рекламной кампании',
      ],
      isScrollIconShown: false,
    }
  },
  methods: {
    showScrollIcon() {
      this.isScrollIconShown = true
    },
    ...mapActions({
      showDialog: 'lidForm/showDialog'
    })
  }
}
</script>
