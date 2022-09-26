<script setup lang="ts">
import { IconNames } from '@/constants/icons';
import { useAccountDetailsUpdateEmailSchema } from '@/composables/schemas/useSchemas';

// TODO: move to an enum for reusability (across steps) or remove comment
const id = 'formAccountDetailsUpdateEmail';
const schema = useAccountDetailsUpdateEmailSchema();
const { getFormData } = useContentful();
const { data, pending } = getFormData(
  'widget-form-account-details-email-address'
);
const { putPersonalData, getPersonalInfo } = useComposite();
const { getFormLoadingState, setLoadingState } = useFormValidState();

const showAlert = ref(false);
const userData = ref({
  pending: true,
  data: {},
});

const showWarningText = ref(false);

async function handleSubmit(data) {
  setLoadingState(true);
  showAlert.value = false;
  const saveData = await putPersonalData(false);
  // Update `smsOptIn` prop to `smsOptin` to match API payload
  // Remove blank space from email
  const payload = {
    ...data,
    email: data?.email?.trim(),
  };

  delete payload.smsOptIn;
  saveData(payload, async (error) => {
    if (error) {
      setLoadingState(false);
      showAlert.value = true;
    }
  });
}

/**
 * NOTE: When the component loads,
 * it calls the service that gets the information
 * from the client to populate the inputs.
 */
onMounted(async () => {
  setLoadingState(true);
  let newUserData = await getPersonalInfo();
  userData.value.pending = false;
  userData.value.data = newUserData;
  setLoadingState(false);
});

const toggleShowWarningState = (displayState: boolean) => {
  showWarningText.value = displayState;
};

const handleFormFieldFocus = () => {
  toggleShowWarningState(true);
};
const handleFormFieldBlur = () => {
  toggleShowWarningState(false);
};
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
      id="email"
      :data-test-id="`${id}-email`"
      :is-loading="pending"
      :label="data?.email"
      :is-disabled="getFormLoadingState || userData?.value?.pending"
      :effect-value="userData?.data?.email || ''"
      name="email"
      type="email"
      @focus="handleFormFieldFocus"
      @blur="handleFormFieldBlur"
    >
    </BaseInput>
    <p
      v-if="showWarningText"
      aria-live="assertive"
      class="d-flex align-items-center"
    >
      <BaseIcon :name="IconNames.AlertTriangle" />
      <span class="theme-account-details-update-email-warning-label">
        {{ data?.updateEmailLogoutDisclaimer }}</span
      >
    </p>
  </BaseForm>
</template>
