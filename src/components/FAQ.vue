<template>
  <section>
    <div class="container">
      <AppHeadingThird title="Отвечаю на ваши вопросы" />
      <div class="max-w-screen-sm mx-auto mb-6">
        <FAQItem
          v-for="q in questions"
          :key="q.id"
          :question="q"
          @toggle="$emit('toggle', q)"
        />
        <AppTitleWithButton
          :is-always-column="true"
          :is-event="true"
          @handle="$emit('open-lid-form')"
          title="Остались вопросы?"
          link-title="Задать вопрос"
          class="mt-8"
        />
      </div>
    </div>
  </section>
</template>
<script>
import FAQItem from '@/components/FAQItem.vue'

export default {
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  components: {
    FAQItem
  }
}
</script>
