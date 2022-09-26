<script setup lang="ts">
import { TPlaceHolder } from '../constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-update-contact-information'
);
const copyPlaceHolder: TPlaceHolder[] = [{ col: 5 }, { col: 6 }, { col: 4 }];
</script>

<template>
  <LoanApplicationBodyCopy class="theme-widget-description-update-contact-info">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 10, size: 'lg' }]">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
  </LoanApplicationBodyCopy>
</template>
