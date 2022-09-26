<script setup lang="ts">
import { TPlaceHolder } from '../constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-financial-payment-type'
);
const titlePlaceHolder: TPlaceHolder[] = [
  { col: 7, size: 'lg' },
  { col: 5, size: 'lg' },
  { col: 5, size: 'lg' },
];
const copyPlaceHolder: TPlaceHolder[] = [{ col: 3 }, { col: 8 }, { col: 7 }];
</script>

<template>
  <LoanApplicationBodyCopy>
    <BaseSkeletonLoader :is-loading="pending" :rows="titlePlaceHolder">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="copyPlaceHolder">
      <p>{{ data?.copy }}</p>
    </BaseSkeletonLoader>
  </LoanApplicationBodyCopy>
</template>
