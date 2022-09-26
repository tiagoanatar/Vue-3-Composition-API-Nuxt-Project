<script setup lang="ts">
import { TPlaceHolder } from '@/constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-assistance-verification-screen'
);

const { getPersonalInfo, getIncomeInfo } = useComposite();

const userInfo = ref({
  isPending: true,
  name: '',
  income: {},
});

onMounted(async () => {
  const data = await getPersonalInfo();
  const incomeData = await getIncomeInfo();
  userInfo.value.isPending = false;
  userInfo.value.name = data?.firstName;
  userInfo.value.income = incomeData?.incomeSources[0];
});

const titlePlaceHolder: TPlaceHolder[] = [
  { col: 4, size: 'lg' },
  { col: 9, size: 'lg' },
];
const copyPlaceHolder: TPlaceHolder[] = [
  { col: 8, size: 'lg' },
  { col: 10, size: 'lg' },
];
</script>

<template>
  <BaseSkeletonLoader
    :is-loading="pending || userInfo?.isPending"
    :rows="titlePlaceHolder"
  >
    <InfoVerificationGreeting
      :greeting-copy-line-one="data?.empInfo[0]"
      :username="userInfo?.name"
      :greeting-copy-line-two="data?.empInfo[1]"
    />
  </BaseSkeletonLoader>
  <BaseSkeletonLoader
    :is-loading="pending || userInfo?.isPending"
    :rows="copyPlaceHolder"
  >
    <InfoVerificationDescription
      v-if="userInfo.income?.grossPayPerCheck"
      verification-type="assistance"
      :copy-line-one="data?.empInfo[2]"
      :text-one="`$${userInfo?.income?.grossPayPerCheck}`"
    />
  </BaseSkeletonLoader>
</template>
