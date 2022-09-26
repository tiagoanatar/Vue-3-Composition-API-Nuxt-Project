<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '../constants/pages';

const { getHeaderData } = useContentful();
const { data, pending } = getHeaderData('widget-header-re-apply-loan-need');

const content = {
  backCta: Routes.ReApplyIncomeInformation,
  backLabel: 'back',
  landingRoute: Routes.Landing,
  dataTestId: 're-apply-survey-header',
};
</script>

<template>
  <GlobalApplicationHeader>
    <template #left>
      <NuxtLink
        :to="content.backCta"
        :data-testid="`${content.dataTestId}-back-cta`"
      >
        <BaseIcon
          aria-label="backLabel"
          :color="Colors.Black"
          :name="IconNames.ArrowLeft"
          :size="IconSizes.Medium"
        />
      </NuxtLink>
    </template>
    <template #right>
      <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 5 }]">
        <NuxtLink
          :to="content.landingRoute"
          :data-testid="`${content.dataTestId}-btn-cta`"
        >
          <button class="btn btn-link">{{ data?.ctaLabel }}</button>
        </NuxtLink>
      </BaseSkeletonLoader>
    </template>
  </GlobalApplicationHeader>
</template>
