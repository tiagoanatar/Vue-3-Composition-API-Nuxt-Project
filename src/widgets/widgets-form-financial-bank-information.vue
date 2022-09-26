<script setup lang="ts">
import { UserData } from '@/types/services';
import { useBankInformationSchema } from '@/composables/schemas/useSchemas';

const id = 'formBankInformation';
const schema = useBankInformationSchema();
const { getFinancialBankInformationRedirect, getFinancialPaymentTypeRedirect } =
  useRedirect();
const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-financial-bank-information');
const { getFormLoadingState, setLoadingState } = useFormValidState();
const { getDefaultData, removeSaveAndExitData } = useDefaultData();

// Holds bank information associated to routing number
const { getBankInfo, getFinancialBankName, postBankInfo } = useComposite();
// Gets composite api data validation state
const { getCompositeValidState, setCompositeValidState } =
  useCompositeValidState();

const inputBankName = ref(null);

const showAlert = ref(false);
const userData = ref<UserData | null>({
  pending: false,
  data: null,
  existingData: false,
});

async function handleRoutingNumber(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.value.length === 9) {
    inputBankName.value = '';
    inputBankName.value = await getFinancialBankName(target.value);
  } else {
    inputBankName.value = '';
  }
}

async function handleSubmit(data) {
  setLoadingState(true);

  await removeSaveAndExitData();

  showAlert.value = false;
  userData.value.existingData;
  await postBankInfo(data);
  setLoadingState(false);

  if (getCompositeValidState.value === 'bank-edit') {
    setCompositeValidState(null);
    getFinancialPaymentTypeRedirect();
    return;
  }

  getFinancialBankInformationRedirect();
}

onMounted(async () => {
  try {
    setLoadingState(true);
    const { userData: data, saveAndExitData } = await getDefaultData(
      getBankInfo
    );

    if (Object.keys(saveAndExitData).length !== 0) {
      userData.value.data = { ...data, ...{ incomeSources: saveAndExitData } };
      const routing = userData.value.data?.incomeSources?.routingNumber || '';

      if (routing.length === 9) {
        inputBankName.value = await getFinancialBankName(routing);
      }
    } else {
      userData.value.data = data;
      inputBankName.value =
        userData?.value?.data?.incomeSources?.bankName || '';
    }

    userData.value.existingData =
      Object.keys(data?.incomeSources || {}).length !== 0;
    userData.value.pending = false;
    setLoadingState(false);
  } catch (error) {
    // TODO: Add proper error handling.
    console.error(error);

    // TODO: Since an user with no bank associated will return 500 we need to set this button back to it's initial state.
    setLoadingState(false);
  }
});
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
    <BaseInput
      id="routingNumber"
      :get-error="true"
      :data-test-id="`${id}-routing-number`"
      :is-loading="pending"
      :label="data?.routingNumber"
      :is-disabled="getFormLoadingState || userData?.pending"
      :effect-value="userData?.data?.incomeSources?.routingNumber || ''"
      name="routingNumber"
      max-length="9"
      @keyup="handleRoutingNumber"
      @change="handleRoutingNumber"
    />
    <BaseInput
      id="checkingAccNumber"
      :data-test-id="`${id}-account-number`"
      :is-loading="pending"
      :label="data?.checkingAccNumber"
      :is-disabled="getFormLoadingState || userData?.pending"
      :effect-value="userData?.data?.incomeSources?.checkingAccNumber || ''"
      max-length="17"
      name="checkingAccNumber"
      type="password"
    />
    <BaseInput
      id="confirmCheckingAccNumber"
      :data-test-id="`${id}-confirm-account-number`"
      :is-loading="pending"
      :label="data?.confirmCheckingAccNumber"
      :is-disabled="getFormLoadingState || userData?.pending"
      :effect-value="userData?.data?.incomeSources?.checkingAccNumber || ''"
      max-length="17"
      name="confirmCheckingAccNumber"
      type="password"
    />
    <BaseInput
      id="bankName"
      :data-test-id="`${id}-bank-name`"
      :is-loading="pending"
      :label="data?.bankName"
      :is-read-only="true"
      :is-disabled="getFormLoadingState || userData?.pending"
      :effect-value="inputBankName"
      name="bankName"
    />
  </BaseForm>
</template>
