<template>
  <div>
    <AppFeaturesRow class="mb-20 md:px-24 container">
      <AppFeaturesRowItem title="4,07%" body="ctr личный рекорд(по кликабельному креативу)">
        <template #icon>
          <BadgeCheckIcon :class="iconClassList" />
        </template>
      </AppFeaturesRowItem>
      <AppFeaturesRowItem title="75%" body="клиентов возвращаются обратно для сотрудничества">
        <template #icon>
          <UserGroupIcon :class="iconClassList" />
        </template>
      </AppFeaturesRowItem>
      <AppFeaturesRowItem title="600.000 ₽" body="успешно открученного бюджета">
        <template #icon>
          <CashIcon :class="iconClassList" />
        </template>
      </AppFeaturesRowItem>
      <AppFeaturesRowItem title="220.000 ₽" body="вложила в свое обучение">
        <template #icon>
          <AcademicCapIcon :class="iconClassList" />
        </template>
      </AppFeaturesRowItem>
    </AppFeaturesRow>
  </div>
</template>

<script>
import AppFeaturesRow from '@/components/AppFeaturesRow.vue'
import AppFeaturesRowItem from '@/components/AppFeaturesRowItem.vue'
import { BadgeCheckIcon, CashIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/vue/outline'

export default {
  data() {
    return {
      iconClassList: 'w-12 h-12 md:w-16 md:h-16 text-purple-200 absolute -left-2 -top-4'
    }
  },
  components: {
    AppFeaturesRowItem,
    AppFeaturesRow,
    BadgeCheckIcon,
    CashIcon,
    AcademicCapIcon,
    UserGroupIcon
  }
};
</script>