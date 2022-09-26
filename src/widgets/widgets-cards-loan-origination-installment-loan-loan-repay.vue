<script setup lang="ts">
const id = 'cardsLoanOrigination';
const route = useRoute().query;
const { getLoanCardsData } = useContentful();
const { data, pending } = getLoanCardsData(
  'widget-cards-loan-origination-installment-loan-loan-repay'
);

// TODO: URL needs to be moved to the constant file
</script>

<template>
  <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12, size: 'lg' }]">
    <BaseArrowCard
      v-for="(item, index) in data"
      :key="index"
      :data-test-id="id"
      :is-recommended="item.header ? true : false"
      url="/loan-origination/installment-loan/loan-summary"
    >
      <template #header>{{ item.header }}</template>
      <template #title>{{ item.title }}</template>
      <template #text>{{ item.description }}</template>
    </BaseArrowCard>
  </BaseSkeletonLoader>
</template>
