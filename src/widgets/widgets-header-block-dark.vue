<script setup lang="ts">
const { getHeaderDarkData } = useContentful();
const { data, pending } = getHeaderDarkData(
  'widget-dark-blue-header-loan-origination'
);
</script>
<template>
  <div class="theme-header-block-dark">
    <BaseSkeletonLoader :is-loading="pending">
      <img :src="data?.logoDesktop" alt="Advance America logo" />
    </BaseSkeletonLoader>
  </div>
</template>
