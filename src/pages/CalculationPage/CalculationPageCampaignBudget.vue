<template>
  <div class="w-full flex md:flex-nowrap flex-wrap justify-between">
    <form @submit.prevent="calc" class="md:pr-5 w-full md:w-1/2 mb-12 md:mb-0">
      <p class="mb-4 text-xs text-center text-gray-500">
        Чтобы сделать расчет рекламного бюджета заполните поля ниже.
      </p>
      <div class="px-1 text-sm">
        <p class="mb-2">
          1. Количество заявок, продаж и тд вы хотите получить в ходе рекламной кампании
        </p>
        <AppRoundedFullWidthInput
          :placeholder="'20'"
          :model-value="values.orderQuantity"
          :error="errors.orderQuantity"
          @update:model-value="updateOrderQuantity"
          class="mb-3"
        />
        <p class="mb-2">2. Выручка с одной продажи</p>
        <AppRoundedFullWidthInput
          :placeholder="'2700'"
          :model-value="values.itemPrice"
          :error="errors.itemPrice"
          @update:model-value="updateItemPrice"
          class="mb-2"
        />
        <p class="mb-2">3. Среднее количество посетителей аккаута/сайта за месяц</p>
        <AppRoundedFullWidthInput
          :placeholder="'2000'"
          :model-value="values.visitors"
          :error="errors.visitors"
          @update:model-value="updateVisitors"
          class="mb-2"
        />
        <p class="mb-2">4. Среднее количество заявок за месяц (Допущение: 1 посетитель может оставить 1 заявку)</p>
        <AppRoundedFullWidthInput
          :placeholder="'30'"
          :model-value="values.orderPerMonth"
          :error="errors.orderPerMonth"
          @update:model-value="updateOrderPerMonth"
          class="mb-2"
        />
        <p class="mb-2">5. Среднее количество покупок за месяц (Допущение: 1 заявка может дать лишь 1 покупку)</p>
        <AppRoundedFullWidthInput
          :placeholder="'12'"
          :model-value="values.successOrderPerMonth"
          :error="errors.successOrderPerMonth"
          @update:model-value="updateSuccessOrdersPerMonth"
          class="mb-2"
        />
        <p class="mb-2">
          6. Цена за переход (исходя из рекламных тестов можно сказать, сколько стоит один переход)
        </p>
        <AppRoundedFullWidthInput
          :placeholder="'4.6'"
          :model-value="values.costPerClick"
          :error="errors.costPerClick"
          @update:model-value="updateCostPerClick"
          class="mb-6"
        />
        <AppFullWidthRoundedButton type="submit" title="Посчитать" class="text-md md:text-lg" />
      </div>
    </form>
    <div class="md:pl-5 w-full md:w-1/2 font-semibold text-sm md:text-md">
      <h5 class="text-lg font-semibold text-center mb-3">Результаты расчета</h5>
      <div v-if="calcError" class="text-red-400 bg-red-50 p-3 border border-solid border-red-400 rounded">Проверьте правильность заполнения полей</div>
      <div v-else>
        <p class="mb-4 text-xs text-center text-gray-500 font-medium md:px-16">
          Обращаем ваше внимание что данный рассчет примерный, итоговый результат необходимого бюджета
          может отличаться.
        </p>
        <div
          class="font-semibold mb-3 pb-2 flex justify-between border-b border-solid border-gray-300"
        >
          <p>Выручка</p>
          <p>{{ intermediateValues.proceeds.displayValue || '--' }}</p>
        </div>
        <div
          class="font-semibold mb-3 pb-2 flex justify-between border-b border-solid border-gray-300"
        >
          <p>Конверсия в заказ</p>
          <p>{{ intermediateValues.conversionPercent.displayValue || '--' }}</p>
        </div>
        <div
          class="font-semibold mb-3 pb-2 flex justify-between border-b border-solid border-gray-300"
        >
          <p>Конверсия в покупку</p>
          <p>{{ intermediateValues.conversionSuccessPercent.displayValue || '--' }}</p>
        </div>
        <div
          class="mb-3 pb-2 flex justify-between border-b border-solid border-gray-300"
        >
          <p>Необходимо лидов</p>
          <p>{{ intermediateValues.needLidCount || '--' }}</p>
        </div>
        <div
          class="mb-3 pb-2 flex justify-between border-b border-solid border-gray-300"
        >
          <p>Необходимо посетителей</p>
          <p>{{ intermediateValues.needVisitors || '--' }}</p>
        </div>
        <div class="mb-3 pb-2 flex justify-between text-purple-900 font-bold">
          <p>Итоговый бюджет</p>
          <p>{{ intermediateValues.budget.displayValue || '--' }}</p>
        </div>
        <transition
          enter-active-class="duration-200"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-75"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <AppFullWidthRoundedButton
            v-show="
          intermediateValues.budget.value > 0 &&
          +intermediateValues.budget.value < +intermediateValues.proceeds.value
        "
            @click="showDialog({ source: 'Заявка на таргетированную рекламу из AdCalculator', shouldCallback: true })"
            title="Оставить заявку на таргет"
            class="text-md md:text-lg"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions({
      updateOrderQuantity: 'modalCampaignBudgetCalculator/updateOrderQuantity',
      updateItemPrice: 'modalCampaignBudgetCalculator/updateItemPrice',
      updateVisitors: 'modalCampaignBudgetCalculator/updateVisitors',
      updateOrderPerMonth: 'modalCampaignBudgetCalculator/updateOrderPerMonth',
      updateSuccessOrdersPerMonth: 'modalCampaignBudgetCalculator/updateSuccessOrdersPerMonth',
      updateCostPerClick: 'modalCampaignBudgetCalculator/updateCostPerClick',
      calc: 'modalCampaignBudgetCalculator/calc',
      updateFinalCalcError: 'modalCampaignBudgetCalculator/updateFinalCalcError',
      showDialog: 'lidForm/showDialog',
    }),
  },
  computed: {
    ...mapGetters({
      isShown: 'modalCampaignBudgetCalculator/isShown',
      values: 'modalCampaignBudgetCalculator/values',
      errors: 'modalCampaignBudgetCalculator/errors',
      intermediateValues: 'modalCampaignBudgetCalculator/intermediateValues',
      hasError: 'modalCampaignBudgetCalculator/hasError',
      calcError: 'modalCampaignBudgetCalculator/calcError',
    }),
  },
}
</script>
