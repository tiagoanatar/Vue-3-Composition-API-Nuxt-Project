<script setup lang="ts">
import { TPlaceHolder } from '@/constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-update-license'
);

const titlePlaceHolderReApply: TPlaceHolder[] = [{ col: 4, size: 'sm' }];
</script>

<template>
  <div class="theme-driver-license-description">
    <BaseSkeletonLoader :is-loading="pending" :rows="titlePlaceHolderReApply">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
  </div>
</template>
