<script setup lang="ts">
import { Masks, removeMaskMobilePhoneNumber } from '@/constants/masks';
import { Routes } from '@/constants/pages';
import { usePersonalInformationSchema } from '@/composables/schemas/useSchemas';

// TODO: move to an enum for reusability (across steps) or remove comment
const id = 'formPersonalInformation';
const schema = usePersonalInformationSchema();
const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-personal-information');
const { putPersonalData, getPersonalInfo } = useComposite();
const { getFormLoadingState, setLoadingState } = useFormValidState();
const { getDefaultData, removeSaveAndExitData } = useDefaultData();

const userData = ref({
  pending: true,
  data: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    currentPhone: '',
    smsOptin: false,
  },
});

async function handleSubmit(data) {
  setLoadingState(true);
  const saveData = await putPersonalData(Routes.PersonalAddress);

  await removeSaveAndExitData();

  // Update `smsOptIn` prop to `smsOptin` to match API payload
  // Remove blank spaces from first and last name
  const payload = {
    ...data,
    currentPhone: removeMaskMobilePhoneNumber(data?.currentPhone || ''),
    firstName: data?.firstName?.trim(),
    lastName: data?.lastName?.trim(),
    smsOptin: data.smsOptIn,
  };

  delete payload.smsOptIn;
  saveData(payload);
}

/**
 * Note: When the component loads,
 * it calls the service that gets the information
 * from the client to populate the inputs.
 */
onMounted(async () => {
  setLoadingState(true);

  const { userData: formData, saveAndExitData } = await getDefaultData(
    getPersonalInfo
  );

  userData.value.data = { ...formData, ...saveAndExitData };
  userData.value.pending = false;
  setLoadingState(false);
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
    <BaseInput
      id="firstName"
      :data-test-id="`${id}-first-name`"
      :is-loading="pending"
      :label="data?.firstName"
      :is-disabled="getFormLoadingState || userData?.pending"
      :effect-value="userData?.data?.firstName || ''"
      name="firstName"
    />
    <BaseInput
      id="lastName"
      :data-test-id="`${id}-last-name`"
      :is-loading="pending"
      :label="data?.lastName"
      :is-disabled="getFormLoadingState || userData?.pending"
      :effect-value="userData?.data?.lastName || ''"
      name="lastName"
    />
    <BaseDateInput
      id="dateOfBirth"
      :data-test-id="`${id}-date-of-birth`"
      :is-loading="pending"
      :label="data?.dateOfBirth"
      :is-disabled="getFormLoadingState || userData?.pending"
      :effect-value="userData?.data?.dateOfBirth || ''"
      name="dateOfBirth"
    />
    <BaseInput
      id="currentPhone"
      :data-test-id="`${id}-current-phone`"
      :is-loading="pending"
      :label="data?.currentPhone"
      :mask="Masks.UsPhone"
      :is-disabled="getFormLoadingState || userData?.pending"
      :effect-value="userData?.data?.currentPhone || ''"
      name="currentPhone"
      type="tel"
    />
    <BaseCheckbox
      id="smsOptIn"
      :data-test-id="`${id}-sms-opt-in`"
      :is-loading="pending"
      :label="data?.smsOptInLabel"
      :is-disabled="getFormLoadingState || userData?.pending"
      :effect-value="userData?.data?.smsOptin || false"
      name="smsOptIn"
    >
      <button
        aria-controls="termsModal"
        class="btn btn-link theme-form-disclaimer-cta"
        data-bs-target="#termsModal"
        data-bs-toggle="offcanvas"
        type="button"
      >
        {{ data?.termsConditionLabel }}
      </button>
    </BaseCheckbox>
  </BaseForm>
</template>
