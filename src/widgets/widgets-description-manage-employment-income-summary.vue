<script setup lang="ts">
const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-re-apply-manage-employment'
);
</script>

<template>
  <div class="theme-manage-employment-description">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8, size: 'lg' }]">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 9 }]">
      <p>{{ data?.copy }}</p>
    </BaseSkeletonLoader>
  </div>
</template>
