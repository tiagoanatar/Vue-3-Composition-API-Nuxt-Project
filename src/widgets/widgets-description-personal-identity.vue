<script setup lang="ts">
import { TPlaceHolder } from '../constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-personal-identity'
);
const copyPlaceHolder: TPlaceHolder[] = [{ col: 5 }, { col: 6 }, { col: 7 }];
</script>

<template>
  <LoanApplicationBodyCopy>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 10, size: 'lg' }]">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="copyPlaceHolder">
      <p>{{ data?.copy }}</p>
    </BaseSkeletonLoader>
  </LoanApplicationBodyCopy>
</template>
