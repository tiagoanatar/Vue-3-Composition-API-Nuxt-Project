<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/pages';
const { getGlobalHeaderData } = useContentful();
const { data, pending } = getGlobalHeaderData('widget-header-global');

const content = {
  backCta: Routes.ProfileMenu,
  backLabel: 'back to profile',
  dashboardRoute: Routes.Dashboard,
  dataTestId: 'profile-menu-page-header',
};
</script>

<template>
  <GlobalApplicationHeader>
    <template #left>
      <BaseSkeletonLoader :is-loading="pending">
        <NuxtLink
          :to="content.backCta"
          :data-test-id="`${content.dataTestId}-back-cta`"
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
      <BaseSkeletonLoader :is-loading="pending">
        <NuxtLink
          class="navbar-brand"
          :to="content?.dashboardRoute"
          :data-test-id="`${content.dataTestId}-logo-cta`"
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
