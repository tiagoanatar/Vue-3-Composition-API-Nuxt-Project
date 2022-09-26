<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/pages';

const { getHeaderData } = useContentful();
const { data, pending } = getHeaderData('widget-header-global');

const content = {
  backCta: Routes.MyDocuments,
  backLabel: 'back',
  dataTestId: 'upload-document',
};
</script>

<template>
  <GlobalApplicationHeader class="theme-upload-document-header">
    <template #left>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 6, size: 'lg' }]"
      >
        <NuxtLink
          :to="content.backCta"
          :data-testid="`${content.dataTestId}-back-cta`"
          :aria-label="content.backLabel"
        >
          <BaseIcon
            :color="Colors.Black"
            :name="IconNames.ArrowLeft"
            :size="IconSizes.Medium"
          />
        </NuxtLink>
      </BaseSkeletonLoader>
    </template>
    <template #right>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 12, size: 'lg' }]"
      >
        <!-- TODO: Add route to link. -->
        <NuxtLink to="/" :data-testid="`${content.dataTestId}-later-cta`">{{
          data?.headerCta
        }}</NuxtLink>
      </BaseSkeletonLoader>
    </template>
  </GlobalApplicationHeader>
</template>
