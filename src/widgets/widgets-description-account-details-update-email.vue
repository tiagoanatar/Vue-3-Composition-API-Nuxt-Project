<script setup lang="ts">
const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-account-details-email'
);
</script>

<template>
  <ClientOnly>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 10, size: 'lg' }]">
      <h1 class="theme-account-details-update-email-heading">
        {{ data?.title }}
      </h1>
    </BaseSkeletonLoader>
  </ClientOnly>
</template>
