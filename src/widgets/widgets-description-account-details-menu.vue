<script setup lang="ts">
import { TPlaceHolder } from '../constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-account-details'
);

const copyPlaceHolder: TPlaceHolder[] = [{ col: 5 }];
</script>

<template>
  <ClientOnly>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 10, size: 'lg' }]">
      <h1 class="theme-account-details-menu-heading">
        {{ data?.title }}
      </h1>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="copyPlaceHolder">
      <p class="theme-account-details-menu-subheading">
        {{ data?.copy }}
      </p>
    </BaseSkeletonLoader>
  </ClientOnly>
</template>
