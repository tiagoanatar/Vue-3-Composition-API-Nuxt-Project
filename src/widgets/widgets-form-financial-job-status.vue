<script setup lang="ts">
import { apiJobStatus, contentfulJobStatus } from '@/constants/api-values';
import { Routes } from '@/constants/pages';
import { useJobStatusSchema } from '@/composables/schemas/useSchemas';

const id = 'formJobStatus';
const schema = useJobStatusSchema();
const { getIncomeInfo, putIncomeInfo, postIncomeInfo } = useComposite();
const { getFinancialJobStatusRedirect } = useRedirect();
const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-financial-job-status');
const { setLoadingState, getFormLoadingState } = useFormValidState();
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

const jobStatus = reactive({
  value: '',
  options: [],
});

onMounted(async () => {
  setLoadingState(true);
  let employmentType = '';
  const { saveAndExitData } = await getDefaultData();
  const { incomeSources } = await getIncomeInfo();

  if (Object.keys(saveAndExitData).length !== 0) {
    const findEmploymentType = Object.keys(contentfulJobStatus).find(
      (v) => contentfulJobStatus[v] === (saveAndExitData?.jobStatus || '')
    );

    employmentType = apiJobStatus[findEmploymentType] || '';

    if (saveAndExitData?.incomeId && saveAndExitData?.incomeId !== '') {
      setCompositeValidState(saveAndExitData.incomeId);
      incomeId.value = saveAndExitData.incomeId;
    } else if (employmentType) {
      userData.entry = { employmentType };
    } else {
      await removeSaveAndExitData();
      return router.push(Routes.FinancialBankInformation);
    }
  }

  // Redirect user in case maximum amount of income sources
  // is reached and income id is not present
  // Will redirect in case max sources of income is reached
  if (
    incomeSources.length === 3 &&
    getCompositeValidState.value === null &&
    !employmentType
  ) {
    return router.push(Routes.FinancialSummary);
  }

  // Will trigger in case of income source to edit
  if (getCompositeValidState.value !== null) {
    const id = getCompositeValidState;
    const dataIncome = await getIncomeInfo();
    userData.data = dataIncome;
    userData.entry = employmentType
      ? { employmentType }
      : userData?.data?.incomeSources.find(
          (item) => item?.incomeId === id?.value
        );
  }
  setLoadingState(false);
  userData.pending = false;
});

// Auto populate fields
watchEffect(() => {
  const key = Object.keys(apiJobStatus).find(
    (key) => apiJobStatus[key] === userData?.entry?.employmentType
  );

  changeRadioValue(contentfulJobStatus[key]);

  data?.value?.jobStatus.map((item) => jobStatus.options.push(item));
});

// Change the radio input value
function changeRadioValue(value: string) {
  jobStatus.value = value;
}

// Submit data
async function handleSubmit(res) {
  setLoadingState(true);
  showAlert.value = false;
  await removeSaveAndExitData();

  const key = Object.keys(contentfulJobStatus).find(
    (key) => contentfulJobStatus[key] === res.jobStatus
  );

  const payload = { employmentType: apiJobStatus[key] };

  if (getCompositeValidState.value !== null) {
    await putIncomeInfo(payload, getCompositeValidState.value);
  } else {
    const newId = await postIncomeInfo(payload);
    setCompositeValidState(newId);
    incomeId.value = newId;
  }

  getFinancialJobStatusRedirect(jobStatus);
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
    <!-- TODO: The error messages returned by the service/contentful should be displayed -->
    <BaseAlert
      v-if="showAlert"
      :data-test-id="`${id}-default`"
      message="You can not add more than 3 sources of income"
    />
    <BaseRadioButton
      id="jobStatus-0"
      :checked-value="jobStatus.value"
      :data-test-id="`${id}-status-0`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :is-validate-disabled="false"
      :label="data?.jobStatus[0]"
      :value="data?.jobStatus[0]"
      name="jobStatus"
      @click="changeRadioValue"
    />
    <BaseRadioButton
      id="jobStatus-1"
      :checked-value="jobStatus.value"
      :data-test-id="`${id}-status-1`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :is-validate-disabled="false"
      :label="data?.jobStatus[1]"
      :value="data?.jobStatus[1]"
      name="jobStatus"
      @click="changeRadioValue"
    />
    <BaseRadioButton
      id="jobStatus-2"
      :checked-value="jobStatus.value"
      :data-test-id="`${id}-status-2`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :label="data?.jobStatus[2]"
      :value="data?.jobStatus[2]"
      name="jobStatus"
      @click="changeRadioValue"
    />
    <input type="hidden" name="incomeId" :value="incomeId" />
  </BaseForm>
</template>
