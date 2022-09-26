<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { TPlaceHolder } from '@/constants/bootstrap';

const { getCtaData } = useContentful();
const { data, pending } = getCtaData('widget-cta-employed-verification-screen');
const { getReApplyJobIncomeSummaryRedirect } = useRedirect();
const { getIncomeData } = useIncomeData();
const { setCompositeValidState } = useCompositeValidState();

const { setRedirectValidState } = useRedirectValidState();

const userData = ref({
  data: {},
});

function editSummaryItem(id) {
  setCompositeValidState(id);
  setRedirectValidState(true);
  getReApplyJobIncomeSummaryRedirect();
}

watch(
  getIncomeData,
  () => {
    userData.value.data = getIncomeData.value;
  },
  { deep: true }
);

onMounted(async () => {
  setCompositeValidState(null);
  setRedirectValidState(null);
});

const btnPlaceHolder: TPlaceHolder[] = [{ col: 12, size: 'lg' }];
</script>

<template>
  <div class="theme-info-verification-cta d-flex flex-column">
    <BaseSkeletonLoader :is-loading="pending" :rows="btnPlaceHolder">
      <NuxtLink
        :to="Routes.FinanceReApplyVerification"
        data-test-id="verify-emp-yes"
        class="theme-btn btn btn-lg btn-primary"
      >
        <span>{{ data?.ctaList[0]?.label }}</span>
      </NuxtLink>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="btnPlaceHolder">
      <NuxtLink
        data-test-id="verify-emp-no"
        class="theme-btn btn btn-lg btn-secondary"
        @click="editSummaryItem(userData?.data?.incomeSources[0]?.incomeId)"
      >
        <span>{{ data?.ctaList[1]?.label }}</span>
      </NuxtLink>
    </BaseSkeletonLoader>
  </div>
</template>
