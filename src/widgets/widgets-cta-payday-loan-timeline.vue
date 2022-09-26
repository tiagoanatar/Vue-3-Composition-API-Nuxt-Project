<script setup lang="ts">
import { Pages, Routes } from '@/constants/pages';
/**
 * TODO: CMS integration will be added later, since it's already handled in another
 * @see <a href=" https://github.com/teampurpose/aa-frontend-pwa/pull/210">PR-210</a>
 */
const btnLabel = "Let's Start";
const pending = false;
</script>
<template>
  <div class="theme-payday-loan-cta-block d-flex flex-column flex-grow-1 justify-content-end"
  >
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
      <NuxtLink
        :data-test-id="`${Pages.ComponentLibrary}-button-default`"
        :to="Routes.ReApplyEmployeeInformation"
        class="theme-btn btn btn-lg btn-primary"
      >
        {{ btnLabel }}
      </NuxtLink>
    </BaseSkeletonLoader>
  </div>
</template>
