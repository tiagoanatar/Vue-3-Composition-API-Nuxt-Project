<script setup lang="ts">
import { TPlaceHolder } from '../constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-application-exit'
);
const copyPlaceHolder: TPlaceHolder[] = [{ col: 5 }, { col: 7 }, { col: 2 }];
</script>

<template>
  <LoanApplicationBodyCopy>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8, size: 'lg' }]">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="copyPlaceHolder">
      <p>{{ data?.copy }}</p>
    </BaseSkeletonLoader>
  </LoanApplicationBodyCopy>
</template>
