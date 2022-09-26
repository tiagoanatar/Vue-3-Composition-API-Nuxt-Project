<script setup lang="ts">
const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-plaid-one-more-step'
);
</script>

<template>
  <LoanApplicationBodyCopy>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 11, size: 'lg' }]">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 7 }]">
      <p>{{ data?.copy }}</p>
    </BaseSkeletonLoader>
  </LoanApplicationBodyCopy>
</template>
