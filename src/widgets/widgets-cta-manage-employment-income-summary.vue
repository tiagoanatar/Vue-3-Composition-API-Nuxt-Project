<script setup lang="ts">
import { Pages } from '@/constants/pages';
const { getCtaData } = useContentful();
const { data, pending } = getCtaData('widget-cta-re-apply-manage-employment');
</script>
<template>
  <div class="theme-manage-employment-cta-block d-flex flex-column flex-grow-1 justify-content-end"
  >
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12, size: 'lg' }]">
      <BaseButton
        :data-test-id="`${Pages.ComponentLibrary}-button-default`"
        :label="data?.ctaList[0]?.label"
      />
    </BaseSkeletonLoader>
  </div>
</template>
