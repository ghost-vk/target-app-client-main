<template>
  <div class="mb-10">
    <FAQ
      :questions="questions.value"
      category="target-setup"
      @toggle="toggleQuestion"
      @open-lid-form="
        showDialog({
          source: 'Страница услуг (из секции частозадаваемых вопросов)',
          shouldCallback: true,
        })
      "
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
