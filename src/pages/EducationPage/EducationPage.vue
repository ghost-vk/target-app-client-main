<template>
  <div>
    <SectionHero>
      <SectionHeroMainTitle class="mb-2 sm:mb-5">
        Образовательные программы от эксперта<br />Анастасии Черепахиной
      </SectionHeroMainTitle>
      <p class="mb-5 text-center sm:text-left text-sm md:text-2xl font-semibold">
        Практика, индивидуальный подход, разбор результатов
      </p>
      <div class="flex flex-col sm:flex-row">
        <SectionHeroButton
          @click="showDialog('Страница обучения (Консультация)')"
          title="Получить консультацию"
        />
      </div>
    </SectionHero>
    <div class="container mb-10 md:py-5">
        <AppHeadingThird title="Доступные программы" />
        <div class="text-md md:text-lg tracking-wide font-light mb-16 max-w-screen-sm mx-auto">
          <p class="mb-2 md:mb-4">
            На данный момент я со своей командой разрабатываю курс для обучения настройке
            таргетированной рекламы со всеми нюансами.
          </p>
          <p class="mb-4 md:mb-6">
            Но уже сейчас я накапливаю опыт в обучении. Я являюсь действующим куратором на курсе
            (более 50 студентов) по таргету и веду действующих таргетологов, консультирую и помогаю
            в настройке.
          </p>
          <h6 class="mb-4 text-xl font-semibold">Сейчас у меня есть два инфопродукта:</h6>
          <ul class="list-disc list-inside mb-4">
            <li class="mb-2">
              <span class="font-semibold">Подписка</span> на telegram чат, в котором я отвечаю на
              ваши вопросы с 10:00 до 18:00.
              <AppPilledText>2 490 &#8381; / месяц</AppPilledText>
              <a href="#telegramchat">
                <AppBlueUnderlineLink>Подробнее ...</AppBlueUnderlineLink>
              </a>
            </li>
            <li>
              <span class="font-semibold">Менторство</span>. Актуально как для новичков, так и для
              действующих таргетологов. Помогаю людям которые прошли курсы обучения, но имеют
              трудности при настройке рекламы, поиске клиентов, ведении рекламной кампании.
              <AppPilledText>12 000 &#8381; / месяц</AppPilledText>
              <AppBlueUnderlineLink @click="isTrainerDescriptionShown = true">Подробнее ...</AppBlueUnderlineLink>
            </li>
          </ul>
          <p class="mb-4 text-lg font-semibold">Оставить заявку или задать вопрос</p>
          <div class="mb-2">
            <AppBlueUnderlineLink class="block mb-2" @click="showDialog(orderTelegramChat)">
              {{ orderTelegramChat }}
            </AppBlueUnderlineLink>
            <AppBlueUnderlineLink class="block mb-2" @click="showDialog(orderTrainer)">
              {{ orderTrainer }}
            </AppBlueUnderlineLink>
            <AppBlueUnderlineLink class="block" @click="showDialog(consultInfo)">
              {{ consultInfo }}
            </AppBlueUnderlineLink>
          </div>
        </div>
        <NastyaRoundedCard />
    </div>
    <div class="container mb-20 pt-5" id="telegramchat">
        <h3 class="text-xl md:text-2xl text-center font-bold mb-4 md:mb-6">
          ОНЛАЙН-ЧАТ ДЛЯ ДЕЙСТВУЮЩИХ ТАРГЕТОЛОГОВ
        </h3>
        <div class="max-w-screen-sm mx-auto text-gray-700">
          <h5 class="text-purple-800 text-lg font-semibold mb-2">Что будет в чате?</h5>
          <p class="mb-3">
            ответы на все ваши вопросы (таргет, клиенты, фриланс) ежедневно с 10:00 - 18:00 кроме
            выходных:
          </p>
          <ul class="list-disc list-inside mb-3">
            <li class="mb-2">рекламные стратегии, креативы, офферы, масштабирование</li>
            <li class="mb-2">разрешение сложных ситуаций с клиентами</li>
            <li class="mb-2">разбор неудачных кейсов и удачных кейсов</li>
          </ul>
          <p class="bg-green-100 px-3 py-1.5 rounded text-lg mb-3">
            Это не общение таргетологов, как в обычном чате -
            <strong>на ваши вопросы буду отвечать я</strong>
          </p>
          <h5 class="text-purple-800 text-lg font-semibold mb-2">Почему именно я?</h5>
          <ul class="list-disc list-inside mb-3">
            <li class="mb-2">Практикующий таргетолог, действующий куратор</li>
            <li class="mb-2">Опыт более 1 года в 10 нишах</li>
            <li>Полгода назад уволилась с работы и полностью перешла на фриланс</li>
          </ul>
          <p class="bg-green-100 px-3 py-1.5 rounded text-lg mb-3">
            Доход 2000 &#x24; менее чем за год, при количестве подписчиков 450
          </p>
          <h5 class="text-purple-800 text-lg font-semibold mb-2">Для кого подойдёт чат?</h5>
          <ul class="list-disc list-inside mb-3">
            <li class="mb-2">у вас есть вопросы по текущим проектам</li>
            <li class="mb-2">вам сложно принимать решения по работе с рекламой / клиентами</li>
            <li class="mb-2">нужна поддержка от опытного таргетолога</li>
            <li>быстрая обратная связь</li>
          </ul>
          <AppIconWithTextRow class="mb-2">
            <template #icon>
              <ClockIcon class="h-6 w-6 text-gray-700" />
            </template>
            <template #body> Присоединиться к чату можно до 20 июня </template>
          </AppIconWithTextRow>
          <div
            class="
              flex
              items-center
              justify-center
              text-center text-black
              mb-3
              bg-purple-50
              px-3
              py-1.5
              rounded-lg
            "
          >
            <CreditCardIcon class="h-6 w-6 mr-3" />
            <p class="text-2xl font-bold">2 490 &#8381; / месяц</p>
          </div>
          <AppFullWidthGreenButton @click="showDialog(orderTelegramChat)">
            Отправить заявку
          </AppFullWidthGreenButton>
        </div>
      </div>
    <AppReviewsSection
      @intersection="onReviewsIntersect"
      :reviews="reviews"
      :is-loading="isLoading"
      :loading-status="loadingStatus"
    />
    <FAQ
      :questions="questions.value"
      @toggle="toggleQuestion"
      @open-lid-form="showDialog('Страница Обучения (из секции частозадаваемых вопросов)')"
    />
    <AppModalWindow
      :is-shown="isTrainerDescriptionShown"
      @close="isTrainerDescriptionShown = false"
    >
      <div class="pt-6">
        <h6 class="text-lg font-semibold text-center mb-3">Менторство</h6>
        <p class="mb-2">
          Что такое менторство? Если в кратце, то индивидуальная работа с наставником.
          Это намного эффективнее для вашего прогресса, чем любой курс.
        </p>
        <p class="mb-2">
          Некоторые из вас уже закончили какой-либо курс по таргету, некоторые сейчас
          проходят обучение, а кто-то только начинает изучать таргетированную рекламу.
          На каком бы этапе обучения вы сейчас не находились, вполне вероятно, что
          вы испытываете неуверенность в своих действиях и хотели бы посоветоваться
          как поступать в данной ситуации.
        </p>
        <p class="mb-2">
          Не переживайте если это так, ведь большинство курсов не дают полной картины
          и глубокого понимания настройки рекламы. Мне самой пришлось пройти много
          курсов чтобы разобраться во всем этом, но благодаря этому я могу понять
          какие трудности вы испытываете.
        </p>
        <p class="mb-2">
          Информации по таргету довольно много, но легче от этого не становится, ведь
          на рынке высокая конкуренция и каждый имеет право голоса. Так кого же слушать?
        </p>
        <p class="mb-2">
          Я действующий таргетолог, мой заработок по большей части состоит из
          настройки рекламы, а не из <span class="line-through">обмана</span> обучения
          не опытных новичков с горящими глазами.
        </p>
        <p class="mb-2">
          На менторстве я лично буду помогать вам разобраться в вашем вопросе. По
          предварительной договоренности мы сможем созвониться и обсудить волнующие
          темы.
        </p>
        <p>
          Но я не робот, поэтому отвечаю в свое рабочее время (Пн - Сб с 10:00 до 18:00)
        </p>
      </div>
    </AppModalWindow>
    <ModalLidForm />
    <ModalLidFormCallbackNotification />
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionHeroMainTitle from '@/components/SectionHeroMainTitle.vue'
import SectionHeroButton from '@/components/SectionHeroButton.vue'
import avatar from '@/assets/img/anastasiya-circle.jpg'
import AppRoundedPersonImage from '@/components/AppRoundedPersonImage.vue'
import NastyaRoundedCard from '@/components/NastyaRoundedCard.vue'
import ModalLidForm from '@/components/ModalLidForm.vue'
import ModalLidFormCallbackNotification from '@/components/ModalLidFormCallbackNotification.vue'
import AppReviewsSection from '@/components/AppReviewsSection.vue'
import FAQ from "@/components/FAQ.vue";
import { mapActions, mapGetters } from "vuex";
import { ClockIcon, CreditCardIcon } from '@heroicons/vue/outline'

export default {
  methods: {
    ...mapActions({
      showDialog: 'lidForm/showDialog',
      toggle: 'faq/toggle',
      loadReviews: 'reviews/load',
    }),
    toggleQuestion(q) {
      this.toggle({ name: 'educationPageQuestions', id: q.id })
    },
    onReviewsIntersect() {
      if (!this.reviews.length) {
        this.loadReviews({
          category: 'consultation',
          limit: '10',
          ordered: 1,
        })
      }
    },
  },
  computed: mapGetters({
    questions: 'faq/educationPageQuestions',
    reviews: 'reviews/reviews',
    loadingStatus: 'reviews/loadingStatus',
    isLoading: 'reviews/isLoading',
  }),
  components: {
    NastyaRoundedCard,
    SectionHero,
    SectionHeroMainTitle,
    SectionHeroButton,
    AppRoundedPersonImage,
    ModalLidForm,
    ModalLidFormCallbackNotification,
    ClockIcon,
    CreditCardIcon,
    FAQ,
    AppReviewsSection
  },
  data() {
    return {
      avatar,
      consultInfo: 'Проконсультроваться насчет инфопродуктов',
      orderTrainer: 'Отправить заявку на менторство (количество мест ограничено)',
      orderTelegramChat: 'Отправить заявку на подписку в telegram чате',
      isTrainerDescriptionShown: false,
    }
  },
}
</script>
