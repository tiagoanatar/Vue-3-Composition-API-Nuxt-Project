<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { useEmployerInformationSchema } from '@/composables/schemas/useSchemas';

const id = 'formEmployerInformation';
const schema = useEmployerInformationSchema();
const { getIncomeInfo, putIncomeInfo } = useComposite();
const { getFinancialEmployerInformationRedirect } = useRedirect();
const { getFormData } = useContentful();
const { data, pending } = getFormData(
  'widget-form-financial-employer-information'
);
const { getFormLoadingState, setLoadingState } = useFormValidState();
const { getDefaultData, removeSaveAndExitData } = useDefaultData();

const router = useRouter();

// Gets composite api data validation state
const { getCompositeValidState, setCompositeValidState } =
  useCompositeValidState();

const showAlert = ref(false);
const incomeId = ref(getCompositeValidState.value);
const userData = reactive({
  pending: true,
  data: {},
  entry: {},
});

onMounted(async () => {
  setLoadingState(true);
  let employerName = '';
  const { saveAndExitData } = await getDefaultData();

  if (Object.keys(saveAndExitData).length !== 0) {
    employerName = saveAndExitData?.employerName || '';

    if (saveAndExitData?.incomeId) {
      setCompositeValidState(saveAndExitData.incomeId);
      incomeId.value = saveAndExitData.incomeId;
    }
  }

  // Redirect user in case maximum amount of income sources is reached and income id is not present
  if (!getCompositeValidState.value) {
    return router.push(Routes.FinancialSummary);
  }

  const id = getCompositeValidState;
  const dataIncome = await getIncomeInfo();
  userData.data = dataIncome;
  userData.entry = employerName
    ? { employerName }
    : userData?.data?.incomeSources.find((item) => item.incomeId === id.value);
  setLoadingState(false);

  userData.pending = false;
});

async function handleSubmit(data) {
  setLoadingState(true);

  await removeSaveAndExitData();
  await putIncomeInfo(data, getCompositeValidState.value);

  getFinancialEmployerInformationRedirect();
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
      id="employerName"
      :data-test-id="`${id}-employer-name`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :label="data?.employerName"
      :effect-value="userData?.entry?.employerName || ''"
      name="employerName"
    />
    <input type="hidden" name="incomeId" :value="incomeId" />
  </BaseForm>
</template>
