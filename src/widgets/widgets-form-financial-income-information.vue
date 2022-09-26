<script setup lang="ts">
import { Masks } from '@/constants/masks';
import { formatStringToNumber } from '@/composables/useFormatter';
import { Routes, queries } from '@/constants/pages';
import {
  useIncomeInformationSchema,
  useIncomeInformationSchemaNonRegular,
  useIncomeInformationSchemaNonRegularReceiveAssistance,
} from '@/composables/schemas/useSchemas';

const id = 'formIncomeInformation';
const route = useRoute().query;
const schemaRegular = useIncomeInformationSchema();
const schemaNonRegular = useIncomeInformationSchemaNonRegular();
const schemaNonRegularReceiveAssistance =
  useIncomeInformationSchemaNonRegularReceiveAssistance();
const { getIncomeInfo, putIncomeInfo } = useComposite();
const { getFinancialIncomeInformationRedirect } = useRedirect();
const { getFormData } = useContentful();
const { data, pending } = getFormData(
  'widget-form-financial-income-information'
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
  let incomeInformation = {};
  const { saveAndExitData } = await getDefaultData();

  if (Object.keys(saveAndExitData).length !== 0) {
    const fields = [
      {
        condition: !route.nonRegular,
        input: 'monthlyIncome',
        value: 'grossPayPerCheck',
      },
      {
        condition:
          route.jobStatus === queries[Routes.FinancialJobStatus].employed,
        input: 'netIncome',
        value: 'payPerCheck',
      },
      {
        condition:
          route.jobStatus === queries[Routes.FinancialJobStatus].selfEmployed &&
          route.nonRegular,
        input: 'grossIncome',
        value: 'grossPayPerCheck',
      },
    ];

    incomeInformation = fields
      .filter((v) => v.condition)
      .map((v) => ({
        [v.value]: saveAndExitData?.[v.input]?.match(/\d+/)?.[0] || '',
      }))
      .reduce((acc, cur) => ({ ...acc, ...cur }), {});

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
  userData.entry =
    Object.keys(incomeInformation).length !== 0
      ? incomeInformation
      : userData?.data?.incomeSources.find(
          (item) => item.incomeId === id.value
        );

  if (userData?.entry?.grossPayPerCheck) {
    userData.entry.grossPayPerCheck = parseInt(
      userData?.entry?.grossPayPerCheck
    );
  }
  if (userData?.entry?.payPerCheck) {
    userData.entry.payPerCheck = parseInt(userData?.entry?.payPerCheck);
  }

  setLoadingState(false);
  userData.pending = false;
});

async function handleSubmit(data) {
  setLoadingState(true);
  await removeSaveAndExitData();

  let payload;

  if (route.jobStatus === queries[Routes.FinancialJobStatus].employed) {
    payload = {
      grossPayPerCheck: formatStringToNumber(data?.monthlyIncome),
      payPerCheck: formatStringToNumber(data?.netIncome),
    };
  } else if (
    (!route.nonRegular &&
      route.jobStatus === queries[Routes.FinancialJobStatus].selfEmployed) ||
    route.jobStatus === queries[Routes.FinancialJobStatus].retired
  ) {
    payload = {
      grossPayPerCheck: formatStringToNumber(data?.monthlyIncome),
      payPerCheck: 0,
    };
  } else {
    payload = {
      grossPayPerCheck: formatStringToNumber(data?.grossIncome),
      payPerCheck: 0,
    };
  }

  await putIncomeInfo(payload, getCompositeValidState.value);

  getFinancialIncomeInformationRedirect();
}
</script>

<template>
  <BaseForm
    :id="id"
    :data-test-id="id"
    :schema="
      route.nonRegular &&
      route.jobStatus === queries[Routes.FinancialJobStatus].selfEmployed
        ? schemaNonRegularReceiveAssistance
        : route.jobStatus === queries[Routes.FinancialJobStatus].employed
        ? schemaRegular
        : schemaNonRegular
    "
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
      v-if="!route.nonRegular"
      id="monthlyIncome"
      :data-test-id="`${id}-monthly-income`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :label="data?.monthlyIncome"
      :mask="Masks.Income"
      :effect-value="userData?.entry?.grossPayPerCheck || ''"
      name="monthlyIncome"
    />
    <BaseInput
      v-if="route.jobStatus === queries[Routes.FinancialJobStatus].employed"
      id="netIncome"
      :data-test-id="`${id}-net-income`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :label="data?.netIncome"
      :mask="Masks.Income"
      :effect-value="userData?.entry?.payPerCheck || ''"
      name="netIncome"
    />
    <BaseInput
      v-if="
        route.jobStatus === queries[Routes.FinancialJobStatus].selfEmployed &&
        route.nonRegular
      "
      id="grossIncome"
      :data-test-id="`${id}-gross-income`"
      :is-loading="pending"
      :is-disabled="getFormLoadingState || userData?.pending"
      :label="data?.weeklyIncome"
      :mask="Masks.Income"
      :effect-value="userData?.entry?.grossPayPerCheck || ''"
      name="grossIncome"
    />
    <input type="hidden" name="incomeId" :value="incomeId" />
  </BaseForm>
</template>
