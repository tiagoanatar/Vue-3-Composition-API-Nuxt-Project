<script setup lang="ts">
/**
 * This file only contains static UI screen
 * Services are yet to be integrated
 * Only creating static UI was in the scope of the ticket
 * @see https://rally1.rallydev.com/#/621437488139/iterationstatus?detail=%2Fuserstory%2F641480755687&fdp=true
 * TODO: Integrate services when the API integration ticket is picked up
 */

// TODO: this widget need to be updated once financial flow is completely done
import { useBankInformationSchema } from '@/composables/schemas/useSchemas';

const id = 'formDigitalWalletEditPaymentMethod';
const schema = useBankInformationSchema();

const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-financial-bank-information');
const { getFormLoadingState } = useFormValidState();
const inputBankName = ref(null);
const showAlert = ref(false);

// Holds bank information associated to routing number
const { getFinancialBankName } = useComposite();
// Holds routingNumber input validation state
const { getInputValidState } = useInputValidState();

// Sets composite api data validation state
const { setCompositeValidState } = useCompositeValidState();

const routingNumber = reactive({
  error: getInputValidState,
});

// Erase bankName read-only input in case the routingNumber is not valid
watchEffect(() => {
  if (!routingNumber.error) {
    inputBankName.value = '';
  }
});

async function handleRoutingNumber(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.value.length === 9) {
    inputBankName.value = '';
    inputBankName.value = await getFinancialBankName(target.value);
    setCompositeValidState(inputBankName.value);
  } else {
    inputBankName.value = '';
  }
}
async function handleSubmit(data) {
  // TODO: Form Submit functionality needs to be implemented when services are integrated
  console.log(data);
}
</script>

<template>
  <BaseForm
    :id="id"
    :data-test-id="id"
    :schema="schema"
    :submit="handleSubmit"
    class="theme-digital-wallet-edit-payment-method-form"
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
      :is-disabled="getFormLoadingState"
      effect-value="''"
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
      :is-disabled="getFormLoadingState"
      effect-value="''"
      max-length="17"
      name="checkingAccNumber"
      type="password"
    />
    <BaseInput
      id="confirmCheckingAccNumber"
      :data-test-id="`${id}-confirm-account-number`"
      :is-loading="pending"
      :label="data?.confirmCheckingAccNumber"
      :is-disabled="getFormLoadingState"
      effect-value="''"
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
      :is-disabled="getFormLoadingState"
      :effect-value="inputBankName"
      name="bankName"
    />
  </BaseForm>
</template>
