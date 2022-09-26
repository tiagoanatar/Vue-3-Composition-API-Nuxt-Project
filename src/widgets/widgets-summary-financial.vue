<script setup lang="ts">
import { apiJobStatus, apiPaymentFrequency } from '@/constants/api-values';
import { formatPrice } from '@/composables/useFormatter';
import { Routes } from '@/constants/pages';

const { getFinancialSummaryRedirect } = useRedirect();
const { getIncomeInfo, getBankInfo } = useComposite();
const { getSummaryData } = useContentful();
const { setFormValidState, setLoadingState } = useFormValidState();
const { data, pending } = getSummaryData('widget-review-financial-review');
const id = 'financial-summary';
const router = useRouter();

const singleIncomeAlert = ref(false);

const userData = reactive({
  pending: true,
  data: {},
  bankInfo: {},
});

// Sets composite api data validation state
const { setCompositeValidState } = useCompositeValidState();

// Sets value for conditional redirecting on job status page
const { setRedirectValidState } = useRedirectValidState();

function editSummaryItem(id) {
  setCompositeValidState(id);
  setRedirectValidState(true);
  getFinancialSummaryRedirect();
}

function createNewIncome() {
  setRedirectValidState(true);
  getFinancialSummaryRedirect();
}

function getDeleteIncomeId(id) {
  setCompositeValidState(id);
}

function bankEditRdirect() {
  setCompositeValidState('bank-edit');
  router.push(Routes.FinancialBankInformation);
}

onMounted(async () => {
  // Ensure that no income or redirect state id is saved as global variable
  setCompositeValidState(null);
  setRedirectValidState(null);

  const data = await getIncomeInfo();
  const bank = await getBankInfo();

  userData.pending = false;
  userData.data = data;
  userData.bankInfo = bank;

  // Check if incomes are incomplete
  setFormValidState(true);
  userData?.data?.incomeSources?.map((item) => {
    if (!item.isValid) {
      setFormValidState(false);
    }
  });
  // Check if at leat 1 source of income is present
  if (!userData?.data?.incomeSources.length) {
    setFormValidState(false);
    singleIncomeAlert.value = true;
  }
});

// TODO: Improve current key value pairs data display

const accNumber = computed(() => {
  const number = userData?.bankInfo?.incomeSources?.checkingAccNumber;
  return 'x-' + number.substr(number.length - 4);
});
</script>

<template>
  <div class="theme-loan-application-summary">
    <h2 class="theme-personal-summary-headline">
      <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 3 }]">
        {{ data?.headline }}
      </BaseSkeletonLoader>
    </h2>

    <BaseSkeletonLoader
      :is-loading="pending && userData?.pending"
      :rows="[{ col: 12 }]"
    >
      <!-- TODO: Temporary alert message setup -->
      <BaseAlert
        v-if="singleIncomeAlert"
        :data-test-id="`${id}-one-income`"
        message="Please add 1 source of income in order to move on to the next screen"
      />
      <div
        v-for="(item, index) in userData?.data?.incomeSources?.slice(0, 3)"
        :key="item?.incomeId"
        class="theme-summary-card"
      >
        <!-- TODO: Temporary alert message setup -->
        <BaseAlert
          v-if="!item.isValid"
          :data-test-id="`${id}-incomplete-income`"
          message="Please delete and re-enter any incomplete income sources in order to move on to the next screen"
        />
        <BlockRow class="theme-summary-card-header">
          <p>{{ data?.incomeLabels[index] }}</p>
          <NuxtLink
            :data-test-id="`${id}-submit`"
            class="btn btn-link"
            @click="editSummaryItem(item?.incomeId)"
          >
            {{ data?.editCta }}
          </NuxtLink>
        </BlockRow>

        <p
          v-if="item?.employmentType"
          class="theme-loan-application-summary-key-value"
        >
          {{ data?.labelJobStatus }}
          <strong>
            {{ item?.employmentType }}
          </strong>
        </p>

        <p
          v-if="
            item?.employerName && item?.employmentType === apiJobStatus.employed
          "
          class="theme-loan-application-summary-key-value"
        >
          {{ data?.labelEmployerInfo }}
          <strong>
            {{ item?.employerName }}
          </strong>
        </p>

        <p
          v-if="item?.payFreqType"
          class="theme-loan-application-summary-key-value"
        >
          {{ data?.labelPaymentFrequency }}
          <strong>
            {{ item?.payFreqType }}
          </strong>
        </p>

        <p
          v-if="item?.grossPayPerCheck"
          class="theme-loan-application-summary-key-value"
        >
          {{ data?.labelGrossIncome }}
          <strong>
            {{ formatPrice(parseInt(item?.grossPayPerCheck)) }}
          </strong>
        </p>

        <p
          v-if="
            item?.payPerCheck && item?.employmentType === apiJobStatus.employed
          "
          class="theme-loan-application-summary-key-value"
        >
          {{ data?.labelNetIncome }}
          <strong>
            {{ formatPrice(parseInt(item?.payPerCheck)) }}
          </strong>
        </p>

        <p
          v-if="item?.directDeposit !== null"
          class="theme-loan-application-summary-key-value"
        >
          {{ data?.labelPaymentType }}
          <strong>
            {{
              item?.directDeposit
                ? data?.labelPaymentTypeYes
                : data?.labelPaymentTypeNo
            }}
          </strong>
        </p>

        <p
          v-if="
            item?.firstPayDate &&
            item?.payFreqType !== apiPaymentFrequency.nonRegular
          "
          class="theme-loan-application-summary-key-value"
        >
          {{ data?.labelDateLastCheck }}
          <strong>
            {{ item?.firstPayDate }}
          </strong>
        </p>

        <p
          v-if="
            item?.secondPayDate &&
            item?.payFreqType !== apiPaymentFrequency.nonRegular
          "
          class="theme-loan-application-summary-key-value"
        >
          {{ data?.labelDateNextCheck }}
          <strong>
            {{ item?.secondPayDate }}
          </strong>
        </p>

        <NuxtLink
          v-if="userData?.data?.incomeSources?.length > 1"
          :data-test-id="`${id}-submit`"
          class="btn btn-link theme-summary-card-delete-link"
          aria-controls="delete-income"
          data-bs-target="#delete-income"
          data-bs-toggle="modal"
          @click="getDeleteIncomeId(item?.incomeId)"
        >
          {{ data?.labelDeleteIncome }}
        </NuxtLink>
      </div>
    </BaseSkeletonLoader>
    <WidgetsModalFinancialDeleteSourceIncome />
    <div
      v-if="
        userData?.data?.incomeSources?.length < 3 ||
        !userData?.data?.incomeSources?.length
      "
      class="theme-loan-application-summary-link theme-add-income-summary"
    >
      <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
        <NuxtLink class="btn-link" @click="createNewIncome">
          {{ data?.labelAddSourceIncome }}
        </NuxtLink>
      </BaseSkeletonLoader>
    </div>

    <h2 class="theme-personal-summary-headline">
      <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 3 }]">
        {{ data?.labelAboutBank }}
      </BaseSkeletonLoader>
    </h2>
    <BaseSkeletonLoader
      :is-loading="pending || userData?.pending"
      :rows="[{ col: 12 }]"
    >
      <div class="theme-summary-card">
        <BlockRow class="theme-summary-card-header">
          <p>{{ data?.labelConnectedAccount }}</p>
          <NuxtLink class="btn btn-link" @click="bankEditRdirect">
            {{ data?.editCta }}
          </NuxtLink>
        </BlockRow>

        <p
          v-if="userData?.bankInfo?.incomeSources?.bankName"
          class="theme-loan-application-summary-key-value"
        >
          {{ data?.labelBankName }}
          <strong>
            {{ userData?.bankInfo?.incomeSources?.bankName }}
          </strong>
        </p>

        <p
          v-if="userData?.bankInfo?.incomeSources?.checkingAccNumber"
          class="theme-loan-application-summary-key-value"
        >
          {{ data?.labelAccountNumber }}
          <strong>
            {{ accNumber }}
          </strong>
        </p>
      </div>
    </BaseSkeletonLoader>
    <WidgetsDisclosureFinancial />
  </div>
</template>
