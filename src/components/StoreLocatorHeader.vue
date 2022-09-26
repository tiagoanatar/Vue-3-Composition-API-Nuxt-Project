<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/pages';
const { getGlobalHeaderData } = useContentful();
const { data, pending } = getGlobalHeaderData('widget-header-global');
const { getPreviousRoute } = useBackRedirection();
const content = {
  backCtaDefault: Routes.Dashboard,
  backCtaLabel: 'back',
};
</script>

<template>
  <GlobalApplicationHeader class="theme-store-locator-header">
    <template #left>
      <BaseSkeletonLoader :is-loading="pending">
        <NuxtLink
          :to="getPreviousRoute()"
          :aria-label="content?.backCtaLabel"
          :data-test-id="`store-locator-header-${content?.backCtaLabel}-icon`"
        >
          <BaseIcon
            :color="Colors.AADarkBlue"
            :name="IconNames.ArrowLeft"
            :size="IconSizes.Medium"
          />
        </NuxtLink>
      </BaseSkeletonLoader>
    </template>
    <template #right>
      <BaseSkeletonLoader :is-loading="pending">
        <NuxtLink
          :to="content?.backCtaDefault"
          :data-test-id="`store-locator-header-${data?.logoAltTexts?.logoFullWithBlueText}`"
        >
          <img
            :src="data?.logoFullWithBlueText"
            :alt="data?.logoAltTexts?.logoFullWithBlueText"
          />
        </NuxtLink>
      </BaseSkeletonLoader>
    </template>
  </GlobalApplicationHeader>
</template>
