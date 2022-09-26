<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { useManageDebitCardSchema } from '@/composables/schemas/useSchemas';

const id = 'cardsLoanOrigination';
const schema = useManageDebitCardSchema();
const { getLoanCardsData } = useContentful();
const { data, pending } = getLoanCardsData(
  'widget-cards-loan-origination-payday-loan-manage-debit-card'
);

const content = {
  redirect: Routes.LoanOriginationPayday,
};

const showAlert = ref(false);

function changeRadioValue(value: string) {
  radioValue.value = value;
}

const radioValue = reactive({
  value: '',
  options: [],
});

// TODO: Add service/api integration
async function handleSubmit(data) {
  showAlert.value = false;
}
</script>

<template>
  <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12, size: 'lg' }]">
    <BaseForm
      :id="id"
      :data-test-id="id"
      :schema="schema"
      :submit="handleSubmit"
      hide-submit
    >
      <!-- TODO: The error messages returned by the service should be displayed -->
      <BaseAlert
        v-if="showAlert"
        :data-test-id="`${id}-default`"
        message="Something went wrong, please try again"
      />
      <RadioCardButton
        v-for="(item, index) in data?.data"
        :id="`${id}-debit-card-${index}`"
        :key="index"
        :checked-value="radioValue.value"
        :data-test-id="`${id}-payment-frequency-0`"
        :is-loading="pending"
        :is-validate-disabled="false"
        :label="item?.title"
        :description="item?.description"
        :value="item?.title"
        name="manageDebitCards"
        @click="changeRadioValue"
      />
      <NuxtLink :to="content.redirect" :data-testid="`${id}-redirect-link`">
        {{ data?.linkLabel }}
      </NuxtLink>
    </BaseForm>
  </BaseSkeletonLoader>
</template>
