<template>
  <div class="pb-20">
    <SectionHero>
      <SectionHeroMainTitle class="mb-8">{{ tripwire.title }}</SectionHeroMainTitle>
      <p
        class="mb-5 text-center sm:text-left md:text-2xl font-semibold"
        v-html="tripwire.subtitle"
      ></p>
      <div class="flex flex-col sm:flex-row">
        <a href="#buy">
          <SectionHeroButton title="Купить" class="mb-5 sm:mb-0 sm:mr-4" />
        </a>
        <SectionHeroButton
          title="Задать вопрос"
          color="purple"
          @click="onQuestionLidFormOpening(tripwire.title)"
        />
      </div>
    </SectionHero>
    <!--  для кого  -->
    <section class="lg:mb-44 py-20 overflow-hidden">
      <div class="container">
        <AppHeadingBubble text-side="left" title="Для кого этот продукт?" class="mb-28 lg:mb-40" />
      </div>
      <div class="md:container">
        <div
          class="
            grid grid-cols-1
            md:grid-cols-2
            gap-y-12
            md:gap-y-8
            lg:gap-y-28
            md:gap-x-6
            lg:gap-x-10
          "
        >
          <div v-for="t in tripwire.forWhom" class="relative lg:border-2 border-purple-200 lg:p-12">
            <div
              class="
                lg:absolute
                -top-10
                left-0
                bg-gray-50
                mb-4
                lg:mb-0 lg:w-96 lg:h-20
                px-4
                lg:px-12
                flex
                items-center
              "
            >
              <div class="mr-6 flex-shrink-0" v-html="t.icon"></div>
              <h3 class="text-xl lg:text-2xl" v-html="t.title"></h3>
            </div>
            <div class="px-4 py-5 lg:px-8 lg:py-10 bg-purple-200" v-html="t.body"></div>
          </div>
        </div>
      </div>
    </section>
    <!--  о чем продукт  -->
    <section class="pt-20 overflow-hidden">
      <div class="container">
        <AppHeadingBubble text-side="right" title="О чем этот продукт?" class="mb-28 lg:mb-40" />
        <div class="flex justify-between">
          <div
            v-if="screenWidth > 1024"
            class="
              hidden
              lg:flex
              flex-col
              justify-center
              w-1/3
              flex-shrink-0
              rounded
              overflow-hidden
            "
          >
            <img :src="workingOnMac" alt="Настя настраивает таргет" />
          </div>
          <div class="lg:pl-20 flex flex-col justify-center text-sm sm:text-base">
            <div
              v-for="(p, i) in tripwire.aboutInShort"
              class="flex items-center"
              :class="i !== tripwire.aboutInShort.length - 1 ? 'mb-6 lg:mb-12' : ''"
            >
              <div class="relative rounded-full h-3 w-3 bg-purple-200 flex-shrink-0">
                <div
                  v-if="
                    i !== tripwire.aboutInShort.length - 2 && i !== tripwire.aboutInShort.length - 1
                  "
                  class="absolute top-0 left-1 h-40 w-0.5 bg-purple-200"
                ></div>
                <div
                  v-if="i === tripwire.aboutInShort.length - 1"
                  class="absolute -top-40 left-1 h-40 w-0.5 bg-purple-200"
                ></div>
              </div>
              <p class="px-10" v-html="p"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  карточка товара  -->
    <section class="mb-20 pt-20 md:pt-40" id="buy">
      <div class="container">
        <div class="relative lg:pl-20">
          <div
            v-if="screenWidth > 1024"
            class="
              absolute
              top-1/2
              -left-40
              transform
              -translate-y-1/2
              -rotate-90
              shadow-2xl
              h-28
              rounded-tl-3xl rounded-tr-3xl
              w-96
              bg-gray-800
              text-center text-gray-100
              flex
              justify-center
              items-center
              text-center
            "
          >
            <div class="h-1 w-12 bg-gray-100"></div>
            <p class="px-4 uppercase text-xl">гарантированный<br />результат</p>
            <div class="h-1 w-12 bg-gray-100"></div>
          </div>
          <div
            class="
              lg:relative
              z-20
              p-5
              sm:p-8
              md:p-16
              bg-gray-200
              rounded-3xl
              shadow-xl
              bg-cover bg-center bg-opacity-30
            "
            :style="`background-image:url('${tripwire.card.bg}')`"
          >
            <div
              class="
                absolute
                top-0
                left-0
                right-0
                bottom-0
                bg-purple-200
                rounded-3xl
                opacity-60
                z-10
              "
            ></div>
            <div class="relative z-20 text-center">
              <h2
                class="text-2xl sm:text-3xl lg:text-5xl mb-8 sm:mb-16"
                v-html="tripwire.title"
              ></h2>
              <ul class="list-none text-base sm:text-xl lg:text-2xl mb-6 md:mb-10">
                <li v-for="f in tripwire.card.features" class="mb-2 sm:mb-5">{{ f }}</li>
              </ul>
              <div class="text-3xl lg:text-4xl font-bold mb-8 md:mb-16">
                {{ tripwire.card.price }}
              </div>
              <div class="max-w-screen-sm mx-auto">
                <AppFullWidthRoundedButton
                  title="Купить"
                  class="text-base sm:text-xl lg:text-3xl"
                  @click="onBuyLidFormOpening(tripwire.title)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  цитата  -->
    <section class="bg-gray-800 mb-20">
      <div
        class="
          container
          max-w-screen-sm
          flex
          justify-center
          items-center
          text-gray-100
          py-8
          md:py-12
          lg:py-16
          text-base
          sm:text-lg sm:text-xl
          lg:text-2xl
        "
      >
        <InformationCircleIcon class="flex-shrink-0 w-12 lg:w-20 h-12 lg:h-20 mr-3 lg:mr-4" />
        <p>{{ tripwire.quote }}</p>
      </div>
    </section>
    <!--  Что содержится внутри?  -->
    <section class="py-20 overflow-hidden">
      <div class="container">
        <AppHeadingBubble text-side="left" title="Что содержится внутри?" class="mb-28 lg:mb-40">
          <template v-if="screenWidth > 1024" #button>
            <a href="#buy" class="z-20"><AppPurpleRoundedButton title="Хочу купить" /></a>
          </template>
        </AppHeadingBubble>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-10 mb-8">
          <div v-for="row in tripwire.content">
            <div class="flex items-center relative pl-8 lg:pl-16 mb-6">
              <ChevronRightIcon class="absolute left-0 h-6 w-6 lg:h-8 lg:w-8" />
              <h3 class="text-xl md:text-2xl">{{ row.title }}</h3>
            </div>
            <div class="pl-8 lg:pl-16 text-sm sm:text-base" v-html="row.body"></div>
          </div>
        </div>
        <div class="max-w-screen-sm mx-auto">
          <a href="#buy">
            <AppFullWidthRoundedButton
              title="Прокачаться прямо сейчас"
              class="text-base md:text-xl lg:text-3xl"
            />
          </a>
        </div>
      </div>
    </section>
    <!--  автор  -->
    <section class="mb-12 md:mb-28">
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
          >
            <img :src="productAuthor" class="rounded" alt="Автор материала" />
          </div>
          <div class="p-4 sm:p-0">
            <span class="block text-4xl lg:text-7xl mb-5 lg:mb-8">АВТОР<br />МАТЕРИАЛА</span>
            <span class="text-xl lg:text-3xl block">Анастасия Черепахина</span>
            <a href="#" class="block mb-5 text-base lg:text-lg">@anastasi.target</a>
            <ul class="list-inside list-disc text-sm sm:text-base">
              <li>действующий таргетолог с опытом</li>
              <li>наставник для начинающих таргетологов</li>
              <li>имеет опыт куратора на курсе</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!--  Ссылка на другие материалы  -->
    <section class="mb-20">
      <div class="container">
        <AppTitleWithButton
          :is-router="true"
          title="Ознакомиться с другими материалами"
          link-title="Подробнее"
          url="/education"
        />
      </div>
    </section>
    <!--  мотивационное заключение  -->
    <section class="mb-12 md:mb-20">
      <div class="container">
        <div
          class="
            relative
            border-l-2 border-gray-700
            p-4
            sm:p-6
            md:p-10
            lg:p-20
            text-base
            sm:text-xl
            md:text-2xl
          "
        >
          <div class="absolute -top-1.5 -left-1.5 h-3 w-3 bg-gray-700 rounded-full"></div>
          <div class="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-gray-700 rounded-full"></div>
          В последние годы появилось много новых и интересных проффессий, одна и из них таргетолог в Instagram.
          <br /><br />
          Учитывая, что мобильный трафик составляет большую часть, можно быть уверенным: востребованность показа рекламы нужной аудитории очевидна, а значит и профессия таргетолог.
        </div>
      </div>
    </section>
    <!--  Остались вопросы?  -->
    <section>
      <div class="container max-w-screen-md">
        <AppTitleWithButton
          :is-always-column="true"
          :is-event="true"
          @handle="onQuestionLidFormOpening(tripwire.title)"
          title="Остались вопросы?"
          link-title="Задать вопрос"
          class="mt-8"
        />
      </div>
    </section>
    <ModalLidForm :title="lidFormTitle" />
    <ModalLidFormCallbackNotification />
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionHeroMainTitle from '@/components/SectionHeroMainTitle.vue'
import SectionHeroButton from '@/components/SectionHeroButton.vue'
import AppHeadingBubble from '@/components/AppHeadingBubble.vue'
import ModalLidForm from '@/components/ModalLidForm.vue'
import ModalLidFormCallbackNotification from '@/components/ModalLidFormCallbackNotification.vue'
import { InformationCircleIcon, ChevronRightIcon } from '@heroicons/vue/solid/index'
import { AcademicCapIcon } from '@heroicons/vue/outline'
import workingOnMac from '@/assets/img/working-on-mac.jpg'
import productAuthor from '@/assets/img/product-author.jpg'
import { useScreenWidth } from '@/use/screenWidth'
import { useRoute, useRouter } from 'vue-router'
import { useTripwires } from '@/use/tripwires'
import { mapActions } from 'vuex'
import { onMounted } from 'vue'
import { useGtag } from 'vue-gtag-next'

export default {
  setup() {
    const router = useRouter()
    const name = useRoute().params.name

    const { query } = useGtag()

    // Выкинуть если не правильное имя
    // if (!Number(id)) {
    //   router.push('/page-not-found')
    // }

    const tripwire = useTripwires(name)[0]

    const { screenWidth } = useScreenWidth()

    onMounted(() => {
      query('event', 'page_view', { page_title: `Трипваер "${tripwire.title}"` })
    })

    return {
      tripwire,
      screenWidth,
    }
  },
  methods: {
    ...mapActions({
      showDialog: 'lidForm/showDialog',
    }),
    onBuyLidFormOpening(tripwireName) {
      this.isBuying = true
      this.showDialog({ shouldCallback: true, source: `Покупка трипваера '${tripwireName}'` })
    },
    onQuestionLidFormOpening(tripwireName) {
      this.isBuying = false
      this.showDialog({ shouldCallback: true, source: `Вопрос по трипваеру '${tripwireName}'` })
    },
  },
  components: {
    SectionHero,
    SectionHeroMainTitle,
    SectionHeroButton,
    AppHeadingBubble,
    InformationCircleIcon,
    AcademicCapIcon,
    ChevronRightIcon,
    ModalLidForm,
    ModalLidFormCallbackNotification,
  },
  data() {
    return {
      workingOnMac,
      productAuthor,
      isBuying: false,
    }
  },
  computed: {
    lidFormTitle() {
      return this.isBuying
        ? 'Оставьте свои контактные данные и я напишу вам как оплатить и получить материал'
        : 'Оставьте свои контактные данные, мы свяжемся с вами в ближайшее время'
    },
  }
}
</script>
