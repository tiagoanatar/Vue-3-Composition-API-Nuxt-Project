<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { usePaymentTypeSchema } from '@/composables/schemas/useSchemas';

const id = 'formPaymentType';
const schema = usePaymentTypeSchema();
const { getIncomeInfo, putIncomeInfo } = useComposite();
const { getFinancialPaymentTypeRedirect, getFinancialBankInformationRedirect } =
  useRedirect();
const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-financial-payment-type');
const { setLoadingState, getFormLoadingState } = useFormValidState();
const { getDefaultData, removeSaveAndExitData } = useDefaultData();

const router = useRouter();

// Gets composite api data validation state
const { getCompositeValidState, setCompositeValidState } =
  useCompositeValidState();

// Sets value for conditional redirecting on job status page
const { setRedirectValidState } = useRedirectValidState();

const userData = reactive({
  pending: true,
  data: {},
  entry: {},
});

const paymentType = reactive({
  value: '',
});

const incomeId = ref(getCompositeValidState.value);

onMounted(async () => {
  setLoadingState(true);
  const paymentTypeValue = {};
  const { saveAndExitData } = await getDefaultData();

  if (Object.keys(saveAndExitData).length !== 0) {
    if (saveAndExitData?.paymentType) {
      paymentTypeValue.directDeposit = saveAndExitData.paymentType === 'Yes';
    }

    if (saveAndExitData?.incomeId) {
      setCompositeValidState(saveAndExitData.incomeId);
      incomeId.value = saveAndExitData.incomeId;
    }
  }

  // Redirect user in case maximum amount of income sources is reached and income id is not present
  if (!getCompositeValidState.value) {
    setTimeout(() => {
      router.push(Routes.FinancialSummary);
    }, 50);
  } else {
    const id = getCompositeValidState;
    const dataIncome = await getIncomeInfo();
    userData.data = dataIncome;
    userData.entry =
      Object.keys(paymentTypeValue).length !== 0
        ? paymentTypeValue
        : userData.data.incomeSources.find(
            (item) => item.incomeId === id.value
          );

    setLoadingState(false);
    userData.pending = false;
  }
});

// Auto populate fields
watchEffect(() => {
  if (getCompositeValidState.value !== null) {
    if (userData?.entry?.directDeposit === true) {
      changeRadioValue(data?.value?.paymentType[0]);
    }
    if (userData?.entry?.directDeposit === false) {
      changeRadioValue(data?.value?.paymentType[1]);
    }
  }
});

// Change the radio input value
function changeRadioValue(value: string) {
  paymentType.value = value;
}

// Submit data
async function handleSubmit() {
  setLoadingState(true);
  await removeSaveAndExitData();

  const payload = { directDeposit: paymentType.value === 'Yes' ? true : false };

  await putIncomeInfo(payload, getCompositeValidState.value);

  getFinancialPaymentTypeRedirect();
}

// Redirect user to create new income
async function createNewIncome() {
  const payload = { directDeposit: paymentType.value === 'Yes' ? true : false };
  await putIncomeInfo(payload, getCompositeValidState.value);
  setCompositeValidState(null);
  setRedirectValidState(true);
  getFinancialBankInformationRedirect();
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
    <BaseRadioButton
      id="paymentType-0"
      :checked-value="paymentType.value"
      :data-test-id="`${id}-payment-type-0`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :is-validate-disabled="false"
      :label="data?.paymentType[0]"
      :value="data?.paymentType[0]"
      name="paymentType"
      @click="changeRadioValue"
    />
    <BaseRadioButton
      id="paymentType-1"
      :checked-value="paymentType.value"
      :data-test-id="`${id}-payment-type-1`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :is-validate-disabled="false"
      :label="data?.paymentType[1]"
      :value="data?.paymentType[1]"
      name="paymentType"
      @click="changeRadioValue"
    />
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
      <BaseButton
        :data-test-id="`${id}-payment-type-3`"
        :label="data?.paymentType[2]"
        variation="secondary"
        :is-disabled="
          paymentType.value && userData?.data?.incomeSources?.length < 3
            ? false
            : true
        "
        @click="createNewIncome"
      />
    </BaseSkeletonLoader>
    <input type="hidden" name="incomeId" :value="incomeId" />
  </BaseForm>
</template>
