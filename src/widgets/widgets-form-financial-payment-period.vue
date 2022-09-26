<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { usePaymentPeriodSchema } from '@/composables/schemas/useSchemas';

const id = 'formPaymentPeriod';
const route = useRoute().query;
const schema = usePaymentPeriodSchema();
const { getIncomeInfo, putIncomeInfo } = useComposite();
const { getFinancialPaymentPeriodRedirect } = useRedirect();
const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-financial-payment-period');
const { getFormLoadingState, setLoadingState } = useFormValidState();
const { getDefaultData, removeSaveAndExitData } = useDefaultData();

const router = useRouter();

// Gets composite api data validation state
const { getCompositeValidState, setCompositeValidState } =
  useCompositeValidState();

const showAlert = ref(false);
const incomeId = ref(getCompositeValidState.value);
const userData = reactive({
  pending: true,
  data: {},
  entry: {},
});

onMounted(async () => {
  setLoadingState(true);
  const paymentPeriod = {};
  const { saveAndExitData } = await getDefaultData();

  if (Object.keys(saveAndExitData).length !== 0) {
    paymentPeriod.firstPayDate = saveAndExitData?.paymentPeriod1 || '';
    paymentPeriod.secondPayDate = saveAndExitData?.paymentPeriod2 || '';

    if (saveAndExitData?.incomeId) {
      setCompositeValidState(saveAndExitData.incomeId);
      incomeId.value = saveAndExitData.incomeId;
    }
  }

  // Redirect user in case maximum amount of income sources is reached and income id is not present
  if (!getCompositeValidState.value) {
    return router.push(Routes.FinancialSummary);
  }

  const id = getCompositeValidState;
  const dataIncome = await getIncomeInfo();
  userData.data = dataIncome;
  userData.entry =
    Object.keys(paymentPeriod).length !== 0
      ? paymentPeriod
      : userData?.data?.incomeSources.find(
          (item) => item.incomeId === id.value
        );

  setLoadingState(false);
  userData.pending = false;
});

async function handleSubmit(data) {
  setLoadingState(true);
  await removeSaveAndExitData();

  const payload = {
    firstPayDate: data?.paymentPeriod1,
    secondPayDate: data?.paymentPeriod2,
  };

  await putIncomeInfo(payload, getCompositeValidState.value);

  getFinancialPaymentPeriodRedirect(route.jobStatus, route.nonRegular);
}
</script>

<template>
  <BaseForm
    :id="id"
    :data-test-id="id"
    :schema="schema"
    :submit="handleSubmit"
    type="widget"
    hide-submit
  >
    <!-- TODO: The error messages returned by the service should be displayed -->
    <BaseAlert
      v-if="showAlert"
      :data-test-id="`${id}-default`"
      message="Something went wrong, please try again"
    />
    <BaseDateInput
      id="paymentPeriod-1"
      :data-test-id="`${id}-payment-period-1`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :label="data?.paymentPeriod1"
      :effect-value="userData?.entry?.firstPayDate || ''"
      name="paymentPeriod1"
    />
    <BaseDateInput
      id="paymentPeriod-2"
      :data-test-id="`${id}-payment-period-2`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :label="data?.paymentPeriod2"
      :effect-value="userData?.entry?.secondPayDate || ''"
      name="paymentPeriod2"
    />
    <input type="hidden" name="incomeId" :value="incomeId" />
  </BaseForm>
</template>
