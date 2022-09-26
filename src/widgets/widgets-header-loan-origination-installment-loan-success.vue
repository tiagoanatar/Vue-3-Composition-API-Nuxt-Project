<script setup lang="ts">
const { getGlobalHeaderData } = useContentful();
const { data, pending } = getGlobalHeaderData('widget-header-global');
</script>

<template>
  <div class="theme-loan-origination-success-header-mobile">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 2, size: 'lg' }]">
      <img :src="data.logo" :alt="data?.logoAltTexts?.logo" />
    </BaseSkeletonLoader>
  </div>
</template>
