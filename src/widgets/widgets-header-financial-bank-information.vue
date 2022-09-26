<script setup lang="ts">
const { getGlobalHeaderData } = useContentful();
const { data, pending } = getGlobalHeaderData('widget-header-global');
const content = {
  dataTestId: 'financial-bank-information-exit-modal',
};
</script>

<template>
  <GlobalApplicationHeader>
    <template #right>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 12, size: 'lg' }]"
      >
        <button
          aria-controls="exitModal"
          class="btn btn-link"
          data-bs-target="#exitModal"
          data-bs-toggle="modal"
          :data-testid="content.dataTestId"
        >
          {{ data?.ctaLabel }}
        </button>
      </BaseSkeletonLoader>
    </template>
  </GlobalApplicationHeader>
</template>
