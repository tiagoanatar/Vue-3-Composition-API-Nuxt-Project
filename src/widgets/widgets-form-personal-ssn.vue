<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { usePersonalSsnSchema } from '@/composables/schemas/useSchemas';

const id = 'formPersonalSsn';
const schema = usePersonalSsnSchema();
const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-personal-ssn');
const { getFormLoadingState, setLoadingState } = useFormValidState();
const { putPersonalSsn, getPersonalInfo } = useComposite();
const { getDefaultData, removeSaveAndExitData } = useDefaultData();

const personalSsnData = ref('');
const isSsnAlreadyAdded = ref(false);

async function handleSubmit(payload) {
  setLoadingState(true);

  await removeSaveAndExitData();

  if (isSsnAlreadyAdded.value) {
    const router = useRouter();

    return router.push(Routes.PersonalSummary);
  }

  const saveData = await putPersonalSsn(Routes.PersonalSummary);

  saveData(payload);
}

onMounted(async () => {
  setLoadingState(true);
  const { userData: data, saveAndExitData } = await getDefaultData(
    getPersonalInfo
  );
  /**
   * NOTE: If the user already added the ssn value,
   * the field should not be editable therefore the service should not be called.
   */
  isSsnAlreadyAdded.value = Boolean(data?.personal?.ssn);

  personalSsnData.value =
    Object.keys(saveAndExitData).length !== 0
      ? saveAndExitData?.ssn || ''
      : data?.personal?.ssn || '';

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
      id="ssn"
      :data-test-id="id"
      :is-loading="pending"
      :label="data?.ssn"
      :is-disabled="getFormLoadingState || isSsnAlreadyAdded"
      :effect-value="personalSsnData || ''"
      max-length="9"
      name="ssn"
      type="password"
    />
  </BaseForm>
</template>
