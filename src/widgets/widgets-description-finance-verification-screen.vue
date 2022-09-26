<script setup lang="ts">
import { TPlaceHolder } from '@/constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-bank-verification-screen'
);

const { getBankInfo } = useComposite();

const userBank = ref({
  isPending: true,
  income: {},
});

onMounted(async () => {
  const data = await getBankInfo();
  userBank.value.isPending = false;
  userBank.value.income = data.incomeSources;
});

const bankData = computed(() => ({
  name: `${userBank?.value.income?.bankName}`,
  account: `${userBank?.value.income?.checkingAccNumber}`.slice(-4),
}));

const copyPlaceHolder: TPlaceHolder[] = [
  { col: 8, size: 'lg' },
  { col: 10, size: 'lg' },
];
</script>

<template>
  <div class="theme-info-verification-description-content">
    <BaseSkeletonLoader
      :is-loading="pending || userBank.isPending"
      :rows="copyPlaceHolder"
    >
      <InfoVerificationGreeting :greeting-copy-line-one="data?.empInfo[0]" />
      <InfoVerificationDescription
        v-if="userBank?.income"
        verification-type="finance"
        :copy-line-one="data?.empInfo[1]"
        :text-one="bankData?.account"
        :copy-line-two="data?.empInfo[2]"
        :text-two="bankData?.name"
      />
    </BaseSkeletonLoader>
  </div>
</template>
