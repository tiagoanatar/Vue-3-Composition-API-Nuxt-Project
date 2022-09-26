<script setup lang="ts">
const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-bank-statement'
);
</script>
<template>
  <div class="row theme-connect-plaid-body">
    <div class="col">
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 8, size: 'lg' }]"
      >
        <h1>{{ data?.title }}</h1>
      </BaseSkeletonLoader>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 12, size: 'sm' }]"
      >
        <p>{{ data?.copy }}</p>
      </BaseSkeletonLoader>
    </div>
  </div>
</template>
