<script setup lang="ts">
import { TPlaceHolder } from '@/constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-employed-verification-screen'
);

const { getPersonalInfo } = useComposite();
const { getIncomeData } = useIncomeData();

const userInfo = ref({
  isPending: true,
  name: '',
  income: {},
});

onMounted(async () => {
  const data = await getPersonalInfo();
  userInfo.value.isPending = false;
  userInfo.value.name = data.firstName;
  userInfo.value.income = getIncomeData.value.incomeSources[0];
});

const titlePlaceHolder: TPlaceHolder[] = [
  { col: 4, size: 'lg' },
  { col: 9, size: 'lg' },
];
const copyPlaceHolder: TPlaceHolder[] = [
  { col: 10, size: 'lg' },
  { col: 8, size: 'lg' },
];
</script>

<template>
  <BaseSkeletonLoader
    :is-loading="pending || userInfo?.isPending"
    :rows="titlePlaceHolder"
  >
    <InfoVerificationGreeting
      :greeting-copy-line-one="data?.userData[0]"
      :username="userInfo?.name"
      :greeting-copy-line-two="data?.userData[1]"
    />
  </BaseSkeletonLoader>
  <BaseSkeletonLoader
    :is-loading="pending || userInfo?.isPending"
    :rows="copyPlaceHolder"
  >
    <InfoVerificationDescription
      v-if="userInfo?.income?.grossPayPerCheck"
      verification-type="employee"
      :copy-line-one="data?.userData[2]"
      :text-one="userInfo?.income?.employerName"
      :text-two="`$${userInfo?.income?.grossPayPerCheck}`"
      :copy-line-two="data?.userData[3]"
    />
  </BaseSkeletonLoader>
</template>
