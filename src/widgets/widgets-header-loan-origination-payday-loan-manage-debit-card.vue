<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/pages';

const { getGlobalHeaderData } = useContentful();
const { data, pending } = getGlobalHeaderData('widget-header-global');

const content = {
  backCta: Routes.LoanOriginationPayday,
  backLabel: 'back',
};
</script>

<template>
  <GlobalApplicationHeader>
    <template #left>
      <NuxtLink :to="content.backCta">
        <BaseIcon
          :aria-label="content.backLabel"
          :color="Colors.Black"
          :name="IconNames.ArrowLeft"
          :size="IconSizes.Medium"
        />
      </NuxtLink>
    </template>
    <template #right>
      <div class="logo-desktop-only">
        <BaseSkeletonLoader
          :is-loading="pending"
          :rows="[{ col: 12, size: 'lg' }]"
        >
          <img :src="data.logoFull" alt="Advance America Logo" />
        </BaseSkeletonLoader>
      </div>
    </template>
  </GlobalApplicationHeader>
</template>
