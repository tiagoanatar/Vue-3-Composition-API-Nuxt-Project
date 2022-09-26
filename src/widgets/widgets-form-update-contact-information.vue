<script setup lang="ts">
import { PageNames, Routes } from '@/constants/pages';
import { Masks } from '@/constants/masks';
import { useUpdatePersonalInformationSchema } from '@/composables/schemas/useSchemas';

// TODO: move to an enum for reusability (across steps) or remove comment
const id = 'formPersonalInformation';
const schema = useUpdatePersonalInformationSchema();
const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-personal-information');
const { putPersonalData, getPersonalInfo, getApplicationData, putApplication } =
  useComposite();
const { getFormLoadingState, setLoadingState } = useFormValidState();

const showAlert = ref(false);
const applicationData = { applicationId: '', page: '' };
const userData = ref({
  pending: true,
  data: {},
});

async function handleSubmit(data) {
  setLoadingState(true);
  showAlert.value = false;
  const saveData = await putPersonalData(Routes.AccountDetails);

  // Update `smsOptIn` prop to `smsOptin` to match API payload
  // Remove blank spaces from first and last name
  const payload = {
    ...data,
    firstName: data?.firstName?.trim(),
    lastName: data?.lastName?.trim(),
    smsOptin: data.smsOptIn,
  };

  // Since we are using smsOptin prop we can remove smsOptIn prop from the payload
  delete payload.smsOptIn;

  /* TODO: currently setting showAlert in error callback is not useful
   * as user is redirected to login page on error before showAlert is set,
   * but this code will be useful once error is handled in better way in putPersonalData composite service
   *
   */

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

    <BaseInput
      id="currentPhone"
      :data-test-id="`${id}-current-phone`"
      :is-loading="pending"
      :label="data?.currentPhone"
      :mask="Masks.UsPhone"
      :is-disabled="getFormLoadingState || userData?.pending"
      :effect-value="userData?.data?.currentPhone || ''"
      class="theme-input-wrapper-update-current-phone"
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
