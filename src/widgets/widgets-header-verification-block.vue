<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/pages';

interface Props {
  backRoute?: string;
}

withDefaults(defineProps<Props>(), {
  backRoute: Routes.Dashboard,
});

const content = {
  backLabel: 'back to profile',
  landingRoute: Routes.Landing,
  dataTestId: 'profile-menu-page-header',
};
</script>

<template>
  <GlobalApplicationHeader>
    <template #left>
      <NuxtLink :to="backRoute" :data-testid="`${content.dataTestId}-back-cta`">
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
        to="/"
        :data-testid="`${content.dataTestId}-logo-cta`"
      >
        <img
          src="~@/assets/images/logo-full-dark.svg"
          alt="Advance America Logo"
        />
      </NuxtLink>
    </template>
  </GlobalApplicationHeader>
</template>
