<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { usePersonalIdentitySchema } from '@/composables/schemas/useSchemas';
import states from '@/constants/states';

const id = 'formPersonalIdentity';
const schema = usePersonalIdentitySchema();
const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-personal-identity');
const { putPersonalData, getPersonalInfo } = useComposite();
const { getFormLoadingState, setLoadingState } = useFormValidState();
const { getDefaultData, removeSaveAndExitData } = useDefaultData();

const identityData = ref({
  pending: true,
  data: {},
});

async function handleSubmit(payload) {
  setLoadingState(true);

  await removeSaveAndExitData();

  const saveData = await putPersonalData(Routes.PersonalSsn);
  saveData(payload);
}

onMounted(async () => {
  setLoadingState(true);
  const { userData: data, saveAndExitData } = await getDefaultData(
    getPersonalInfo
  );

  const personal = data?.personal;
  identityData.value.pending = false;

  if (personal?.driversLicense) {
    identityData.value.data = {
      driversLicense: personal?.driversLicense,
      driversLicenseState: personal?.driversLicenseState,
      driversLicenseExpiration: personal?.driversLicenseExpiration,
    };
  }

  if (Object.keys(saveAndExitData).length !== 0) {
    identityData.value.data = {
      ...identityData.value.data,
      ...saveAndExitData,
    };
  }

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
      id="driversLicense"
      :data-test-id="`${id}-drivers-license`"
      :is-loading="pending"
      :label="data?.driversLicense"
      :is-disabled="getFormLoadingState"
      :effect-value="identityData?.data?.driversLicense || ''"
      max-length="12"
      name="driversLicense"
    />
    <BaseSelectInput
      id="driversLicenseState"
      :data-test-id="`${id}-drivers-license-state`"
      :is-loading="pending"
      :items="states"
      :label="data?.driversLicenseState"
      :is-disabled="getFormLoadingState"
      :effect-value="identityData?.data?.driversLicenseState || ''"
      name="driversLicenseState"
    />
    <BaseDateInput
      id="driversLicenseExpiration"
      :data-test-id="`${id}-drivers-license-expiration`"
      :is-loading="pending"
      :label="data?.driversLicenseExpiration"
      :is-disabled="getFormLoadingState"
      :effect-value="identityData?.data?.driversLicenseExpiration || ''"
      name="driversLicenseExpiration"
    />
  </BaseForm>
</template>
