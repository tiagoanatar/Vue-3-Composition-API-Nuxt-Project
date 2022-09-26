<script setup lang="ts">
const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-loan-origination-payday-loan-manage-debit-card-add-card'
);
</script>

<template>
  <div class="theme-digital-wallet-add-debit-card-description">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 10, size: 'lg' }]">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 10 }]">
      <p>{{ data?.copy }}</p>
    </BaseSkeletonLoader>
  </div>
</template>
