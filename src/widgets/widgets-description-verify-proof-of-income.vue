<script setup lang="ts">
const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-proof-of-income'
);

const isLoading = ref(pending);
</script>
<template>
  <div class="row theme-connect-plaid-body">
    <div class="col">
      <BaseSkeletonLoader
        :is-loading="isLoading"
        :rows="[{ col: 8, size: 'lg' }]"
      >
        <h1>{{ data?.title }}</h1>
      </BaseSkeletonLoader>
      <BaseSkeletonLoader
        :is-loading="isLoading"
        :rows="[{ col: 12, size: 'sm' }]"
      >
        <p>{{ data?.copy }}</p>
      </BaseSkeletonLoader>
    </div>
  </div>
</template>
