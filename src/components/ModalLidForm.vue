<template>
  <AppModalWindow
    @close="
      () => {
        resetCurrentMagnet()
        hideModal()
      }
    "
    :is-shown="isModalShown"
    :is-loading="loading"
  >
    <p class="text-center md:text-lg text-gray-700 mb-5 px-3">{{ title }}</p>
    <form @submit.prevent="onSubmit">
      <div class="px-1">
        <AppRoundedFullWidthInput
          :model-value="fieldValues.name"
          @update:model-value="updateName"
          :placeholder="'Ваше имя'"
          :error="fieldErrors.name"
          class="mb-3"
        />
        <AppPhoneInput
          :model-value="fieldValues.phone"
          :country-code="fieldValues.countryCode"
          :placeholder="'Номер телефона'"
          :error="fieldErrors.phone"
          @update:model-value="updatePhone"
          @update-country="updateCountry"
          class="mb-3"
        />
      </div>
      <template v-if="fieldValues.shouldCallback">
        <p class="block w-full text-center mb-2 text-gray-500">
          Выберите удобный тип связи
          <br />
          <span class="text-xs"> (Должен быть привязан номер телефона) </span>
        </p>
        <div class="flex flex-wrap justify-start mb-2 text-gray-800 text-sm select-none">
          <AppGroupButtonItem
            v-for="btn in contactTypeButtons"
            :key="btn.value"
            @click="switchContactType(btn.value)"
            :is-selected="btn.selected"
            :title="btn.title"
            class="mb-2 mr-2"
          />
        </div>
      </template>
      <div v-else class="h-12"></div>
      <div class="flex mb-1 justify-center items-center">
        <AppCheckBox
          :is-error="!!fieldErrors.check"
          :model-value="fieldValues.check"
          @update:model-value="toggleCheck"
        />
        <p class="pl-2 text-xs w-full">
          Даю свое согласие на <a href="#" class="underline">обработку персональных данных</a>
        </p>
      </div>
      <div v-if="fieldErrors.check" class="text-xs text-red-400">{{ fieldErrors.check }}</div>
      <div class="mb-4"></div>
      <AppFullWidthRoundedButton title="Отправить" />
    </form>
  </AppModalWindow>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default() {
        return 'Оставьте свои контактные данные, мы свяжемся с вами в ближайшее время'
      },
    },
  },
  methods: mapActions({
    switchContactType: 'lidForm/switchContactType',
    toggleCheck: 'lidForm/toggleCheck',
    updateName: 'lidForm/updateName',
    updatePhone: 'lidForm/updatePhone',
    updateCountry: 'lidForm/updateCountry',
    onSubmit: 'lidForm/onSubmit',
    hideModal: 'lidForm/hideModal',
    updateNotification: 'lidForm/updateNotification',
    resetCurrentMagnet: 'magnets/reset',
  }),
  computed: mapGetters({
    isModalShown: 'lidForm/isModalShown',
    contactTypeButtons: 'lidForm/contactTypeButtons',
    contactType: 'lidForm/contactType',
    checkPrivacy: 'lidForm/checkPrivacy',
    fieldErrors: 'lidForm/fieldErrors',
    fieldValues: 'lidForm/fieldValues',
    sendingStatus: 'lidForm/sendingStatus',
    notification: 'lidForm/notification',
    loading: 'lidForm/loading',
  }),
}
</script>
