<script setup lang="ts">
import { TPlaceHolder } from '../constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-financial-payment-period'
);
const copyPlaceHolder: TPlaceHolder[] = [{ col: 3 }, { col: 7 }, { col: 6 }];
</script>

<template>
  <LoanApplicationBodyCopy>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ size: 'lg' }]">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="copyPlaceHolder">
      <p>{{ data?.copy }}</p>
    </BaseSkeletonLoader>
  </LoanApplicationBodyCopy>
</template>
