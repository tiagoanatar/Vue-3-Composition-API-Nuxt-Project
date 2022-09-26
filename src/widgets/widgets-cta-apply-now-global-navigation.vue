<script setup lang="ts">
const { getCtaData } = useContentful();
const { data, pending } = getCtaData('widgets-cta-apply-now-global-navigation');
</script>

<template>
  <BaseSkeletonLoader
    :is-loading="pending"
    class="theme-btn-desktop"
    :rows="[{ size: 'lg' }]"
  >
    <BaseButton
      :label="data?.ctaList[0]?.label"
      class="theme-btn-desktop"
      data-test-id="header-apply-now-cta"
    >
    </BaseButton>
  </BaseSkeletonLoader>
</template>
