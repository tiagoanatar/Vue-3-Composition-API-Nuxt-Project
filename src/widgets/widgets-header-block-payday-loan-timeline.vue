<script setup lang="ts">
import { Pages, Routes } from '@/constants/pages';
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';

const content = {
  backCta: Routes.Dashboard,
  backLabel: 'back to dashboard',
  dataTestId: `${Pages.PaydayLoanInformation}-header`,
};
</script>
<template>
  <GlobalApplicationHeader class="theme-loan-details-header">
    <template #left>
      <NuxtLink
        :aria-label="content.backLabel"
        :data-testid="`${content.dataTestId}-back-cta`"
        :to="content.backCta"
      >
        <BaseIcon :name="IconNames.ArrowLeft" :color="Colors.AADarkBlue" />
      </NuxtLink>
    </template>
  </GlobalApplicationHeader>
</template>
