<template>
  <div class="mb-10">
    <FAQ
      :questions="questions.value"
      @toggle="toggleQuestion"
      @open-lid-form="showDialog('Страница услуг (из секции частозадаваемых вопросов)')"
    />
  </div>
</template>

<script>
import FAQ from '@/components/FAQ.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ServicePageFAQ',
  components: {
    FAQ,
  },
  methods: {
    toggleQuestion(q) {
      this.toggle({ name: 'servicePageQuestions', id: q.id })
    },
    ...mapActions({
      showDialog: 'lidForm/showDialog',
      toggle: 'faq/toggle',
    }),
  },
  computed: mapGetters({
    questions: 'faq/servicePageQuestions',
  }),
}
</script>
