<script setup lang="ts">
const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-upload-new-document'
);
</script>

<template>
  <div class="row theme-upload-document-body">
    <div class="col">
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 8, size: 'lg' }]"
      >
        <h1 class="theme-upload-document-body-title">{{ data?.title }}</h1>
      </BaseSkeletonLoader>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 12, size: 'sm' }]"
      >
        <p class="theme-upload-document-body-text">{{ data?.copy }}</p>
      </BaseSkeletonLoader>
    </div>
  </div>
</template>
