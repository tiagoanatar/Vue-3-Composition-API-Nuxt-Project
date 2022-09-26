<script setup lang="ts">
import { TPlaceHolder } from '@/constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData('widget-description-loan-need');

const titlePlaceHolderReApply: TPlaceHolder[] = [{ col: 4, size: 'sm' }];
const copyPlaceHolderReApply: TPlaceHolder[] = [
  { col: 10, size: 'sm' },
  { col: 8, size: 'sm' },
];
</script>

<template>
  <div class="theme-re-apply-survey-description">
    <LoanApplicationBodyCopy>
      <BaseSkeletonLoader :is-loading="pending" :rows="titlePlaceHolderReApply">
        <h1>{{ data?.title }}</h1>
      </BaseSkeletonLoader>
      <BaseSkeletonLoader :is-loading="pending" :rows="copyPlaceHolderReApply">
        <p>{{ data?.copy }}</p>
      </BaseSkeletonLoader>
    </LoanApplicationBodyCopy>
  </div>
</template>
