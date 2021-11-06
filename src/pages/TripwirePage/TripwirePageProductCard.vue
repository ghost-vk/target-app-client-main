<template>
  <section class="mb-20 pt-20 md:pt-40" id="buy">
    <div class="container">
      <ProductCardWithSideBadge
        :bg-image="tripwire.card.bg"
        :title="tripwire.title"
        :features="tripwire.card.features"
        :price="tripwire.card.price"
        @click-btn="$emit('click-btn')"
      />
    </div>
  </section>
</template>

<script>
import ProductCardWithSideBadge from '@/components/ProductCardWithSideBadge.vue'
export default {
  props: {
    tripwire: {
      type: Object,
      required: true
    }
  },
  components: {
    ProductCardWithSideBadge
  }
}
</script>