<script setup lang="ts">
const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-profile-manage-password'
);
</script>

<template>
  <div class="theme-manage-password-description">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8, size: 'lg' }]">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8, size: 'sm' }]">
      <p>{{ data?.copy }}</p>
    </BaseSkeletonLoader>
  </div>
</template>
