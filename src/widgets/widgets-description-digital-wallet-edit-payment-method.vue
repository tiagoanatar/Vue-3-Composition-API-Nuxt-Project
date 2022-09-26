<script setup lang="ts">
const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-digital-wallet-edit-payment'
);
</script>

<template>
  <div class="theme-digital-wallet-edit-payment-method-description">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 10, size: 'lg' }]">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 10 }]">
      <p>{{ data?.copy }}</p>
    </BaseSkeletonLoader>
  </div>
</template>
