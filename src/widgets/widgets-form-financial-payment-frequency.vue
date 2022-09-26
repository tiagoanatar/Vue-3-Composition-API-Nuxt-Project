<script setup lang="ts">
import { Routes, queries } from '@/constants/pages';
import {
  apiPaymentFrequency,
  contentfulPaymentFrequency,
} from '@/constants/api-values';
import { usePaymentFrequencySchema } from '@/composables/schemas/useSchemas';

const id = 'formPaymentFrequency';
const route = useRoute().query;
const schema = usePaymentFrequencySchema();
const { getIncomeInfo, putIncomeInfo } = useComposite();
const { getFinancialPaymentFrequencyRedirect } = useRedirect();
const { getFormData } = useContentful();
const { data, pending } = getFormData(
  'widget-form-financial-payment-frequency'
);
const { setLoadingState, getFormLoadingState } = useFormValidState();
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

const paymentFrequency = reactive({
  value: '',
  options: [],
});

onMounted(async () => {
  setLoadingState(true);
  let payFreqType = '';
  const { saveAndExitData } = await getDefaultData();

  if (Object.keys(saveAndExitData).length !== 0) {
    const findEmploymentType = Object.keys(contentfulPaymentFrequency).find(
      (v) =>
        contentfulPaymentFrequency[v] ===
        (saveAndExitData?.paymentFrequency || '')
    );

    payFreqType = apiPaymentFrequency[findEmploymentType] || '';

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
  userData.entry = payFreqType
    ? { payFreqType }
    : userData?.data?.incomeSources.find((item) => item.incomeId === id.value);

  setLoadingState(false);
  userData.pending = false;
});

// Auto populate fields
watchEffect(() => {
  if (getCompositeValidState.value !== null) {
    const key = Object.keys(apiPaymentFrequency).find(
      (key) => apiPaymentFrequency[key] === userData?.entry?.payFreqType
    );

    changeRadioValue(contentfulPaymentFrequency[key]);

    data?.value?.paymentFrequency.map((item) =>
      paymentFrequency.options.push(item)
    );
  }
});

// Change the radio input value
function changeRadioValue(value: string) {
  paymentFrequency.value = value;
}

// Submit data
async function handleSubmit(res) {
  setLoadingState(true);
  await removeSaveAndExitData();

  const key = Object.keys(contentfulPaymentFrequency).find(
    (key) => contentfulPaymentFrequency[key] === res.paymentFrequency
  );

  const payload = { payFreqType: apiPaymentFrequency[key] };

  await putIncomeInfo(payload, getCompositeValidState.value);

  getFinancialPaymentFrequencyRedirect(paymentFrequency, route.jobStatus);
}
</script>

<template>
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
    <BaseRadioButton
      id="paymentFrequency-0"
      :checked-value="paymentFrequency.value"
      :data-test-id="`${id}-payment-frequency-0`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :is-validate-disabled="false"
      :label="data?.paymentFrequency[0]"
      :value="data?.paymentFrequency[0]"
      name="paymentFrequency"
      @click="changeRadioValue"
    />
    <BaseRadioButton
      id="paymentFrequency-1"
      :checked-value="paymentFrequency.value"
      :data-test-id="`${id}-payment-frequency-1`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :is-validate-disabled="false"
      :label="data?.paymentFrequency[1]"
      :value="data?.paymentFrequency[1]"
      name="paymentFrequency"
      @click="changeRadioValue"
    />
    <BaseRadioButton
      id="paymentFrequency-2"
      :checked-value="paymentFrequency.value"
      :data-test-id="`${id}-payment-frequency-2`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :is-validate-disabled="false"
      :label="data?.paymentFrequency[2]"
      :value="data?.paymentFrequency[2]"
      name="paymentFrequency"
      @click="changeRadioValue"
    />
    <BaseRadioButton
      id="paymentFrequency-3"
      :checked-value="paymentFrequency.value"
      :data-test-id="`${id}-payment-frequency-3`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :is-validate-disabled="false"
      :label="data?.paymentFrequency[3]"
      :value="data?.paymentFrequency[3]"
      name="paymentFrequency"
      @click="changeRadioValue"
    />
    <BaseRadioButton
      v-if="route.jobStatus === queries[Routes.FinancialJobStatus].selfEmployed"
      id="paymentFrequency-4"
      :checked-value="paymentFrequency.value"
      :data-test-id="`${id}-payment-frequency-4`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :is-validate-disabled="false"
      :label="data?.paymentFrequency[4]"
      :value="data?.paymentFrequency[4]"
      name="paymentFrequency"
      @click="changeRadioValue"
    />
    <input type="hidden" name="incomeId" :value="incomeId" />
  </BaseForm>
</template>
