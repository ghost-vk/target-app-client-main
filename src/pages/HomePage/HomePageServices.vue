<template>
  <section class="sm:mb-20 overflow-x-hidden py-16">
    <div class="container relative">
      <BubbleHeading text-side="left" title="Об услугах" class="mb-28 lg:mb-40" />
      <AppFeaturesRow>
        <AppFeaturesRowItem title="2 года опыта" body="в таргетированной рекламе">
          <template #icon>
            <BadgeCheckIcon :class="iconClassList" />
          </template>
        </AppFeaturesRowItem>
        <AppFeaturesRowItem title="Более 10 кейсов" body="успешных запусков рекламы">
          <template #icon>
            <FireIcon :class="iconClassList" />
          </template>
        </AppFeaturesRowItem>
        <AppFeaturesRowItem title="x3.5 бюджета" body="прибыль в среднем">
          <template #icon>
            <XIcon :class="iconClassList" />
          </template>
        </AppFeaturesRowItem>
        <AppFeaturesRowItem title="1546% ROMI" body="личный рекорд">
          <template #icon>
            <SparklesIcon :class="iconClassList" />
          </template>
        </AppFeaturesRowItem>
      </AppFeaturesRow>
    </div>
  </section>
</template>

<script>
import BubbleHeading from '@/components/AppHeadingBubble.vue'
import AppFeaturesRow from '@/components/AppFeaturesRow.vue'
import AppFeaturesRowItem from '@/components/AppFeaturesRowItem.vue'
import { CameraIcon, BadgeCheckIcon, FireIcon, XIcon, SparklesIcon } from '@heroicons/vue/outline'

export default {
  data() {
    return {
      iconClassList: 'w-12 h-12 md:w-16 md:h-16 text-purple-200 absolute -left-2 -top-4',
    }
  },
  components: {
    BubbleHeading,
    AppFeaturesRow,
    AppFeaturesRowItem,
    BadgeCheckIcon,
    CameraIcon,
    FireIcon,
    XIcon,
    SparklesIcon,
  },
}
</script>
