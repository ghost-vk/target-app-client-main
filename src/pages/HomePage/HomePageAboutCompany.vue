<template>
  <section class="mb-14 sm:mb-20">
    <div class="container md:py-5">
      <div class="max-w-screen-sm mx-auto">
        <AppHeadingThird title="Обо мне" />
        <ul
          class="
            list-inside
            text-md
            text-gray-600
            md:text-lg
            tracking-wide
            font-light
            mb-16
          "
        >
          <li class="mb-3 md:mb-6">
            За два года в таргете я прошла много курсов от топовых таргетологов и
            выработала собственную стратегию настройки рекламы и работе с клиентом.
            У меня был опыт фриланса, когда я сама выполняла всю работу и опыт в
            команде с рекламными агентствами.
          </li>
          <li class="mb-3 md:mb-6">
            Если вы чувствуете, что ваш бизнес интересен на рынке и задумываетесь о
            рекламе в Instagram вы в нужном месте. На данный момент более 60% трафика
            на рынке от мобильных устройств, а количество пользователей в Instagram
            превышает 1 млрд человек. Очень важно выбрать правильную аудиторию и найти
            к ней подход.
          </li>
          <li>
            Для таргетолов (или для тех, кто хочет им стать) на моем сайте собраны
            полезные гайды, чек-листы и другие материалы. Сейчас в разработке находится
            блог, там я буду выкладывать развернутые посты о таргете и смежных
            областях.
          </li>
        </ul>
        <NastyaRoundedCard />
      </div>
    </div>
  </section>
</template>

<script>
import NastyaRoundedCard from '@/components/NastyaRoundedCard.vue'

export default {
  components: {
    NastyaRoundedCard
  }
};
</script>
