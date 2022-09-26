<script setup lang="ts">
const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-profile-manage-preference'
);
</script>

<template>
  <div class="theme-widget-description-manage-preference">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 10, size: 'lg' }]">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 10, size: 'sm' }]">
      <p>{{ data?.copy }}</p>
    </BaseSkeletonLoader>
  </div>
</template>
