<script setup lang="ts">
const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData('widget-description-plaid');
</script>

<template>
  <LoanApplicationBodyCopy class="theme-connect-plaid-body">
    <div class="row">
      <div class="col">
        <BaseSkeletonLoader
          :is-loading="pending"
          :rows="[{ col: 6, size: 'lg' }]"
        >
          <img :src="data?.icon" alt="Plaid logo" />
        </BaseSkeletonLoader>
        <BaseSkeletonLoader
          :is-loading="pending"
          :rows="[{ col: 10, size: 'lg' }]"
        >
          <h1>{{ data?.title }}</h1>
        </BaseSkeletonLoader>
        <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
          <p>{{ data?.copy }}</p>
        </BaseSkeletonLoader>
      </div>
    </div>
  </LoanApplicationBodyCopy>
</template>
