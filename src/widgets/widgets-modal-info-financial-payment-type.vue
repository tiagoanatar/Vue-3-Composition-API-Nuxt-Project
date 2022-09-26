<script setup lang="ts">
const { getModalInfoData } = useContentful();
const { data, pending } = getModalInfoData(
  'widget-modal-financial-payment-type'
);
</script>

<template>
  <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 7 }]">
    <LoanApplicationInfoModal v-if="data" v-bind="data" />
  </BaseSkeletonLoader>
</template>
