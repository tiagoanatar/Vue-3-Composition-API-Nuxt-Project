<script setup lang="ts">
const { getModalInfoData } = useContentful();
const { data, pending } = getModalInfoData('zip-code-modal');
</script>

<template>
  <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 7 }]">
    <LoanApplicationInfoModal v-if="data" v-bind="data" />
  </BaseSkeletonLoader>
</template>
