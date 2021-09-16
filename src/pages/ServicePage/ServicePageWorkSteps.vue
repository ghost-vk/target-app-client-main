<template>
  <div class="relative overflow-x-hidden">
    <img :src="bg" class="absolute top-5 h-3/4 -right-5" alt="" />
    <div class="container mb-14">
      <AppHeadingThird title="Этапы" />
      <DumbCardsSlider :data="data" />
    </div>
  </div>
</template>

<script>
import DumbCardsSlider from '@/components/DumbCardsSlider.vue'

import bg from '@/assets/img/steps-bg.svg'
import s1 from '@/assets/img/work-steps/1.svg'
import s2 from '@/assets/img/work-steps/2.svg'
import s3 from '@/assets/img/work-steps/3.svg'
import s4 from '@/assets/img/work-steps/4.svg'
import s5 from '@/assets/img/work-steps/5.svg'
import s6 from '@/assets/img/work-steps/6.svg'
import s7 from '@/assets/img/work-steps/7.svg'
import s8 from '@/assets/img/work-steps/8.svg'
import s9 from '@/assets/img/work-steps/9.svg'
import s10 from '@/assets/img/work-steps/10.svg'
import s11 from '@/assets/img/work-steps/11.svg'

const sliderData = [
  {
    title: 'Получение заполненного брифа',
    thumbnail: s1,
  },
  {
    title: 'Обсуждение данных в брифе, утверждение целей',
    thumbnail: s2,
  },
  {
    title: 'Разработка рекламной стратегии',
    thumbnail: s3,
  },
  {
    title: 'Настройка рекламного кабинета, бизнес менеджера',
    thumbnail: s4,
  },
  {
    title: 'Анализ целевой аудитории',
    thumbnail: s5,
  },
  {
    title: 'Анализ конкурентов, рекламы конкурентов, воронка продаж',
    thumbnail: s6,
  },
  {
    title: 'Создание аудиторий, рекламных креативов и текстов',
    thumbnail: s7,
  },
  {
    title: 'Запуск рекламной кампании и проведение тестового периода',
    thumbnail: s8,
  },
  {
    title: 'Оптимизация, понижение стоимости клика',
    thumbnail: s9,
  },
  {
    title: 'Отслеживание результатов, ежедневный контроль',
    thumbnail: s10,
  },
  {
    title: 'Масштабирование рекламной кампании',
    thumbnail: s11,
  },
]

export default {
  data() {
    return {
      data: sliderData,
      bg: bg,
    }
  },
  components: {
    DumbCardsSlider,
  },
}
</script>
