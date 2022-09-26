<script setup lang="ts">
/**
 * This file only contains static UI screen
 * Services are yet to be integrated
 * Only creating static UI was in the scope of the ticket
 * @see https://rally1.rallydev.com/#/621437488139/iterationstatus?detail=%2Fuserstory%2F641480755687&fdp=true
 * TODO: Integrate services when the API integration ticket is picked up
 */
import { Masks } from '@/constants/masks';
import { useAddDebitCard } from '@/composables/schemas/useSchemas';

const id = 'formDigitalWalletAddDebitCard';
const schema = useAddDebitCard();
const { getFormData } = useContentful();
const { data, pending } = getFormData(
  'widget-form-loan-origination-payday-loan-manage-debit-card-add-card'
);

const showAlert = ref(false);

// TODO: Add service/api integration
// TODO: When services are in place, add button loading state to the life cycle hook/function
function handleSubmit() {
  showAlert.value = false;
}
</script>

<template>
  <BaseForm
    :id="id"
    :data-test-id="id"
    :schema="schema"
    :submit="handleSubmit"
    class="theme-digital-wallet-edit-payment-method-form theme-digital-wallet-add-debit-card-form"
    hide-submit
  >
    <!-- TODO: The error messages returned by the service should be displayed -->
    <BaseAlert
      v-if="showAlert"
      :data-test-id="`${id}-default`"
      message="Something went wrong, please try again"
    />
    <BaseInput
      id="cardHolder"
      :data-test-id="`${id}-card-holder`"
      :is-loading="pending"
      :label="data?.cardHolder"
      name="cardHolder"
    />
    <BaseInput
      id="cardNumber"
      :data-test-id="`${id}-card-number`"
      :is-loading="pending"
      :label="data?.cardNumber"
      :mask="Masks.DebitCardNumber"
      name="cardNumber"
    />
    <div class="theme-digital-wallet-add-debit-card-form-date-section">
      <BaseDateInput
        id="expirationDate"
        :data-test-id="`${id}-expiration-date`"
        :is-loading="pending"
        :label="data?.expirationDate"
        name="expirationDate"
      />
      <BaseInput
        id="cardCvv"
        :data-test-id="`${id}-card-cvv`"
        :is-loading="pending"
        :label="data?.cardCvv"
        :mask="Masks.CVVCardNumber"
        name="cardCvv"
      />
    </div>
  </BaseForm>
</template>
