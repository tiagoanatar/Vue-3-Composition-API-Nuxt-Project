<script setup lang="ts">
import { useAddDebitCard } from '@/composables/schemas/useSchemas';
import { Masks } from '@/constants/masks';

const id = 'formAddDebitCard';
const schema = useAddDebitCard();
const { getFormData } = useContentful();
const { data, pending } = getFormData(
  'widget-form-loan-origination-payday-loan-manage-debit-card-add-card'
);
const { getFormLoadingState, setLoadingState } = useFormValidState();

const showAlert = ref(false);
const userData = reactive({
  pending: true,
  data: {},
  entry: {},
});

// TODO: Add service/api integration
// TODO: When services are in place, add button loading state to the life cycle hook/function
function handleSubmit(data) {
  showAlert.value = false;
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
  </BaseForm>
</template>
