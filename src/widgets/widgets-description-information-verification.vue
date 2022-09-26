<script setup lang="ts">
import { apiJobStatus } from '@/constants/api-values';

const { getIncomeInfo } = useComposite();
const { getIncomeData, setIncomeData } = useIncomeData();

const userInfo = ref({
  income: {},
});

onBeforeMount(async () => {
  const data = await getIncomeInfo();
  setIncomeData(data);
});

watch(
  getIncomeData,
  () => {
    userInfo.value.income = getIncomeData?.value?.incomeSources[0];
  },
  { deep: true }
);
</script>

<template>
  <div class="theme-info-verification-description-content">
    <div v-if="userInfo?.income?.employmentType === apiJobStatus.employed">
      <WidgetsDescriptionEmployeeVerificationScreen />
    </div>
    <div v-else-if="userInfo?.income?.employmentType === apiJobStatus.selfEmployed"
    >
      <WidgetsDescriptionSelfEmployeeVerificationScreen />
    </div>
    <div
      v-else-if="
        userInfo?.income?.employmentType === apiJobStatus.receiveAssistance
      "
    >
      <WidgetsDescriptionAssistanceVerificationScreen />
    </div>
  </div>
</template>
