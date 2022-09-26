<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/pages';

const { getGlobalHeaderData } = useContentful();
const { data, pending } = getGlobalHeaderData('widget-header-global');
const { getFormValidState } = useFormValidState();
const content = {
  backCta: Routes.EligibleLoans,
  backLabel: 'back',
  dataTestId: 'loan-origination-installment-loan-summary-header',
};
</script>

<template>
  <GlobalApplicationHeader>
    <template #left>
      <NuxtLink
        :aria-label="content.backLabel"
        :to="content.backCta"
        :data-testid="`${content.dataTestId}-back-cta`"
      >
        <BaseIcon
          :color="Colors.Black"
          :name="IconNames.ArrowLeft"
          :size="IconSizes.Medium"
        />
      </NuxtLink>
    </template>
    <template #center>
      <span class="theme-loan-origination-header-small-logo-mobile">
        <BaseSkeletonLoader
          :is-loading="pending"
          :rows="[{ col: 12, size: 'lg' }]"
        >
          <img :src="data.logo" alt="Advance America Logo" />
        </BaseSkeletonLoader>
      </span>
    </template>
    <template #right>
      <span class="theme-loan-origination-header-small-logo-desktop">
        <BaseSkeletonLoader
          :is-loading="pending"
          :rows="[{ col: 12, size: 'lg' }]"
        >
          <img :src="data.logo" alt="Advance America Logo" />
        </BaseSkeletonLoader>
      </span>
    </template>
  </GlobalApplicationHeader>
</template>
