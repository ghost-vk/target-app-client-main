<template>
  <section class="sm:mb-12 overflow-x-hidden py-16">
    <div class="container">
      <BubbleHeading text-side="right" title="Обучение у меня" class="mb-28 lg:mb-40" />
      <div class="flex flex-wrap lg:flex-nowrap justify-between">
        <div class="mb-8 lg:mb-0 px-5 lg:px-8 w-full lg:w-1/2">
          <img
            v-lazy="{ src: lazyLoading.src, lifecycle: lazyLoading.lifecycle }"
            alt=""
            class="w-full"
          />
        </div>
        <div
          class="
            lg:pl-8
            w-full
            lg:w-1/2
            text-center
            lg:text-left
            text-md
            lg:text-lg
            font-light
            flex flex-1 flex-col
            justify-center
          "
        >
          <p class="mb-7">
            На создание своих образовательных материалов меня натолкнули мои подписчики, которые
            активно интересуются моей деятельностью в Instagram. Я прошла много курсов и даже
            несколько раз была куратором на одном из них и у меня сложилось не самое приятное
            впечатление, ведь совершенно очевидно, что пройдя типовой курс по таргету вы не станете
            таргетолом, хотя бы потому что у вас не хватит знаний и навыков, я не говорю о других
            важных аспектах, например работа с клиентом или взаимодействие с командой.
          </p>
          <p class="mb-7">
            Не стану вас обманывать, стать таргетологом не так просто. Тут важно комлексное развитие
            многих навыков. В самой настройке таргета множество нюансов, о которых в 90% курсов
            умалчивают. Мой курс сейчас находится в стадии разработки, на нем я детально расскажу
            вам о таргете, а также затрону смежные темы (фриланс, клиенты, переговоры, софт и тд).
          </p>
          <p>
            Сейчас у меня есть два обучающих продукта: чат и менторство. С ними можно ознакомится на
            <AppBlueUnderlineLink @click="$router.push('/education')"
              >странице обучения</AppBlueUnderlineLink
            >. Также жду вас в своем
            <AnalyticsLink
              route="Чат таргетологов"
              :href="contacts.telegramChat"
              target="_blank"
            >
              <AppBlueUnderlineLink>бесплатном telegram чате</AppBlueUnderlineLink>
            </AnalyticsLink>
            для таргетологов.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img from '@/assets/img/about-education.jpg'
import BubbleHeading from '@/components/AppHeadingBubble.vue'
import AnalyticsLink from '@/components/AnalyticsLink.vue'
import useImageLazyLoading from '@/use/imageLazyLoading'
import { mapGetters } from 'vuex'

export default {
  setup() {
    const { imageClass, lazyLoading } = useImageLazyLoading(img)
    return {
      imageClass,
      lazyLoading,
    }
  },
  components: {
    BubbleHeading,
    AnalyticsLink
  },
  computed: {
    ...mapGetters({
      contacts: 'globalVars/contacts',
    }),
  },
}
</script>
