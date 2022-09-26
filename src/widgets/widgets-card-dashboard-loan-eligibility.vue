<script setup lang="ts">
import { Routes } from '@/constants/pages';

const { getLoanEligibilityCardData } = useContentful();
const { data, pending } = getLoanEligibilityCardData(
  'widget-dashboard-loan-eligibility-card'
);
</script>
<template>
  <BaseCard
    is-base-card
    data-test-id="loan-eligibility-card"
    class="theme-loan-eligibility-card"
  >
    <!-- TODO: Handle content update as well as new variation of content in different ticket  -->
    <div
      class="theme-loan-eligibility-card-background"
      :style="{ backgroundImage: `url(${data?.backgroundSrc})` }"
    ></div>
    <div class="theme-loan-eligibility-card-content">
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 12, size: 'lg' }]"
      >
        <h2>
          {{ data?.title || '' }}
        </h2>
      </BaseSkeletonLoader>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 8, size: 'lg' }]"
      ></BaseSkeletonLoader>
      <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
        <p class="card-text">
          {{ data?.copy || '' }}
        </p>
      </BaseSkeletonLoader>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 8 }]"
      ></BaseSkeletonLoader>
    </div>
    <div class="d-flex">
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 8, size: 'lg' }]"
      >
        <NuxtLink
          :to="Routes.PaydayLoanInformation"
          data-test-id="see-option-cta"
          class="theme-btn btn btn-md btn-secondary d-flex justify-content-center align-items-center"
        >
          {{ data?.btnLabel || '' }}
        </NuxtLink>
      </BaseSkeletonLoader>
    </div>
  </BaseCard>
</template>
