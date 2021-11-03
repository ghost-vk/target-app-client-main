<template>
  <div class="flex flex-wrap justify-start mb-2 text-gray-800 text-sm select-none">
    <AppGroupButtonItem
      v-for="btn in buttons"
      :key="btn.value"
      @click="updateActiveCategory(btn.value)"
      :is-selected="btn.value === activeCategory"
      :title="btn.title"
      class="mb-2 mr-2"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    buttons: 'reviews/catButtons',
    activeCategory: 'reviews/activeCategory',
  }),
  methods: mapActions({
    updateActiveCategory: 'reviews/updateActiveCategory',
  }),
  mounted() {
    let queryCategory = this.$route.query['reviews_category']
    if (
      queryCategory !== undefined &&
      this.buttons.filter((b) => b.value === queryCategory).length > 0
    ) {
      this.updateActiveCategory(queryCategory)
    }
  },
}
</script>
