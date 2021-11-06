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
          @click="showDialog({ source: 'Страница обучения (Консультация)', shouldCallback: true })"
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
          У меня был опыт кураторства на курсе по таргетированной рекламе. За несколько потоков на
          этом курсе я пообщалась со студентами и понимаю, что пройдя подобного рода курс врядли
          сложится полная картина о таргете и будет множество вопросов. Пока я разрабатываю курс, я
          решила сделать чат для начинающих/действующих таргетологов.
        </p>
        <h6 class="mb-4 text-xl font-semibold">Сейчас у меня есть два инфопродукта:</h6>
        <ul class="list-disc list-inside mb-4">
          <li class="mb-2">
            <span class="font-semibold">Подписка Lite</span> на telegram чат, в котором я отвечаю на
            ваши вопросы с 10:00 до 18:00.
            <AppPilledText>990 &#8381; / месяц</AppPilledText>
            <a href="#telegramchat">
              <AppBlueUnderlineLink>Подробнее ...</AppBlueUnderlineLink>
            </a>
          </li>
          <li class="mb-2">
            <span class="font-semibold">Подписка Pro</span> на telegram чат, в котором я отвечаю на
            ваши вопросы с 10:00 до 18:00, делюсь полезными материалами, а также провожу 4
            мастермайнда на темы, актуальные для таргетологов.
            <AppPilledText>2 490 &#8381; / месяц</AppPilledText>
            <a href="#telegramchat">
              <AppBlueUnderlineLink>Подробнее ...</AppBlueUnderlineLink>
            </a>
          </li>
          <li>
            <span class="font-semibold">Менторство</span>. Актуально как для начинающих, так и для
            действующих таргетологов. Помогаю людям которые прошли курсы обучения, но имеют
            трудности при настройке рекламы, поиске клиентов, ведении рекламной кампании.
            <AppPilledText>15 000 &#8381; / месяц</AppPilledText>
            <AppBlueUnderlineLink @click="isTrainerDescriptionShown = true"
              >Подробнее ...</AppBlueUnderlineLink
            >
          </li>
        </ul>
        <p class="mb-4 text-lg font-semibold">Оставить заявку или задать вопрос</p>
        <div class="mb-2">
          <AppBlueUnderlineLink
            class="block mb-2"
            @click="showDialog({ source: orderTelegramChat, shouldCallback: true })"
          >
            {{ orderTelegramChat }}
          </AppBlueUnderlineLink>
          <AppBlueUnderlineLink
            class="block mb-2"
            @click="showDialog({ source: orderTrainer, shouldCallback: true })"
          >
            {{ orderTrainer }}
          </AppBlueUnderlineLink>
          <AppBlueUnderlineLink
            class="block"
            @click="showDialog({ source: consultInfo, shouldCallback: true })"
          >
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
          <li class="mb-2">Практикующий таргетолог, наставник</li>
          <li class="mb-2">Главный таргетолог в маркетинговом агентстве</li>
          <li class="mb-2">Опыт кураторства на курсах по таргетированной рекламе</li>
          <li class="mb-2">Опыт более 1,5 года в 10+ нишах</li>
          <li>Полгода назад уволилась с работы и полностью перешла на фриланс</li>
        </ul>
        <p class="bg-green-100 px-3 py-1.5 rounded text-lg mb-3">
          Доход 2500 &#x24; менее чем за год.
        </p>
        <h5 class="text-purple-800 text-lg font-semibold mb-2">Для кого подойдёт чат?</h5>
        <ul class="list-disc list-inside mb-3">
          <li class="mb-2">у вас есть вопросы по текущим проектам</li>
          <li class="mb-2">вам сложно принимать решения по работе с рекламой / клиентами</li>
          <li class="mb-2">нужна поддержка от опытного таргетолога</li>
          <li>быстрая обратная связь</li>
        </ul>
        <div class="text-lg font-semibold text-center my-3">Сравнение тарифов</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-3 mt-5">
          <div class="flex flex-col justify-between bg-white shadow rounded-lg p-3">
            <div>
              <div class="text-center uppercase font-semibold text-lg">lite</div>
              <div>
                <ul class="list-inside list-disc pl-2 mb-3">
                  <li>ответы на ваши вопросы</li>
                  <li>индивидуальный подход</li>
                  <li>месяц поддержки опытного специалиста</li>
                  <li>15 мест в месяц</li>
                </ul>
              </div>
            </div>
            <div>
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
                <p class="font-bold">990 &#8381;</p>
              </div>
              <button
                class="w-full bg-green-100 rounded-lg shadow font-semibold text-gray-600 p-2"
                type="button"
                @click="showDialog({ source: orderTelegramChatLite, shouldCallback: true })"
              >
                Отправить заявку
              </button>
            </div>
          </div>
          <div class="flex flex-col justify-between bg-purple-200 shadow rounded-lg p-3">
            <div>
              <div class="text-center uppercase font-semibold text-lg text-purple-700">pro ✨</div>
              <div>
                <ul class="list-inside list-disc sm:pl-2 mb-3">
                  <li>ответы на ваши вопросы</li>
                  <li>индивидуальный подход</li>
                  <li>месяц поддержки опытного специалиста</li>
                  <li>всего 10 мест в месяц</li>
                  <li>полезные материалы</li>
                  <li>3-4 мастермайнда</li>
                </ul>
              </div>
            </div>
            <div>
              <div
                class="
                  flex
                  items-center
                  justify-center
                  text-center text-black
                  mb-3
                  bg-purple-300
                  px-3
                  py-1.5
                  rounded-lg
                "
              >
                <CreditCardIcon class="h-6 w-6 mr-3" />
                <p class="font-bold">2 490 &#8381;</p>
              </div>
              <button
                class="w-full bg-green-400 rounded-lg shadow font-semibold text-gray-100 p-2"
                type="button"
                @click="showDialog({ source: orderTelegramChatPro, shouldCallback: true })"
              >
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppReviewsSection v-intersection="setCurrentCategory" />
    <FAQ
      :questions="questions.value"
      category="mentor"
      @toggle="toggleQuestion"
      @open-lid-form="
        showDialog({
          source: 'Страница Обучения (из секции частозадаваемых вопросов)',
          shouldCallback: true,
        })
      "
    />
    <AppModalWindow
      :is-shown="isTrainerDescriptionShown"
      @close="isTrainerDescriptionShown = false"
    >
      <div class="pt-6">
        <h6 class="text-lg font-semibold text-center mb-3">Менторство</h6>
        <p class="mb-2">
          Что такое менторство? Если в кратце, то индивидуальная работа с наставником. Это намного
          эффективнее для вашего прогресса, чем любой курс.
        </p>
        <p class="mb-2">
          Некоторые из вас уже закончили какой-либо курс по таргету, некоторые сейчас проходят
          обучение, а кто-то только начинает изучать таргетированную рекламу. На каком бы этапе
          обучения вы сейчас не находились, вполне вероятно, что вы испытываете неуверенность в
          своих действиях и хотели бы посоветоваться как поступать в данной ситуации.
        </p>
        <p class="mb-2">
          Не переживайте если это так, ведь большинство курсов не дают полной картины и глубокого
          понимания настройки рекламы. Мне самой пришлось пройти много курсов чтобы разобраться во
          всем этом, но благодаря этому я могу понять какие трудности вы испытываете.
        </p>
        <p class="mb-2">
          Информации по таргету довольно много, но легче от этого не становится, ведь на рынке
          высокая конкуренция и каждый имеет право голоса. Так кого же слушать?
        </p>
        <p class="mb-2">
          Я действующий таргетолог, мой заработок по большей части состоит из настройки рекламы, а
          не из <span class="line-through">обмана</span> обучения не опытных новичков с горящими
          глазами.
        </p>
        <p class="mb-2">
          На менторстве я лично буду помогать вам разобраться в вашем вопросе. По предварительной
          договоренности мы сможем созвониться и обсудить волнующие темы.
        </p>
        <p>Но я не робот, поэтому отвечаю в свое рабочее время (Пн - Сб с 10:00 до 18:00)</p>
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
import AppRoundedPersonImage from '@/components/AppRoundedPersonImage.vue'
import NastyaRoundedCard from '@/components/NastyaRoundedCard.vue'
import ModalLidForm from '@/components/ModalLidForm.vue'
import ModalLidFormCallbackNotification from '@/components/ModalLidFormCallbackNotification.vue'
import AppReviewsSection from '@/components/AppReviewsSection.vue'
import FAQ from '@/components/FAQ.vue'
import { mapActions, mapGetters } from 'vuex'
import { ClockIcon, CreditCardIcon } from '@heroicons/vue/outline'

export default {
  methods: {
    ...mapActions({
      showDialog: 'lidForm/showDialog',
      toggle: 'faq/toggle',
      updateActiveCategory: 'reviews/updateActiveCategory',
    }),
    toggleQuestion(q) {
      this.toggle({ name: 'educationPageQuestions', id: q.id })
    },
    setCurrentCategory() {
      if (!this.isCatSet) {
        this.isCatSet = true
        this.updateActiveCategory('telegram-chat')
      }
    },
  },
  computed: mapGetters({
    questions: 'faq/educationPageQuestions',
  }),
  mounted() {
    this?.$gtag?.event('page_view', { page_title: 'Страница обучения' })
  },
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
    AppReviewsSection,
  },
  data() {
    return {
      consultInfo: 'Проконсультроваться насчет инфопродуктов',
      orderTrainer: 'Отправить заявку на менторство (количество мест ограничено)',
      orderTelegramChat: 'Отправить заявку на подписку в telegram чате',
      orderTelegramChatLite: 'Отправить заявку на подписку в telegram чате (Lite)',
      orderTelegramChatPro: 'Отправить заявку на подписку в telegram чате (Pro)',
      isTrainerDescriptionShown: false,
      isCatSet: false,
    }
  },
}
</script>
