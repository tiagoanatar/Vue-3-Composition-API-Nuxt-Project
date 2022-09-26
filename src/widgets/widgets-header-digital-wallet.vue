<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/pages';
const { getGlobalHeaderData } = useContentful();
const { data, pending } = getGlobalHeaderData('widget-header-global');

const content = {
  backCta: Routes.ProfileMenu,
  backLabel: 'back',
  landingRoute: Routes.Landing,
};
</script>

<template>
  <GlobalApplicationHeader>
    <template #left>
      <NuxtLink
        :to="content.backCta"
        :aria-label="content.backLabel"
        :data-test-id="`${content.backLabel}-digital-wallet`"
      >
        <BaseIcon
          :color="Colors.Black"
          :name="IconNames.ArrowLeft"
          :size="IconSizes.Medium"
        />
      </NuxtLink>
    </template>
    <template #right>
      <NuxtLink
        class="navbar-brand"
        :to="content.landingRoute"
        data-test-id="logo-digital-wallet"
      >
        <BaseSkeletonLoader :is-loading="pending">
          <!--TODO: Replace alt text with data from contentful.Currently it is not coming. This needs to be a global change-->
          <img :src="data?.logoFullWithBlueText" alt="Advance America Logo" />
        </BaseSkeletonLoader>
      </NuxtLink>
    </template>
  </GlobalApplicationHeader>
</template>
