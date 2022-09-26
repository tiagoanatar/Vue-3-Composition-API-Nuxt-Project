<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '../constants/pages';

// TODO: Need to add the back cta redirection route
const content = {
  backCta: '/',
  backLabel: 'back',
  landingRoute: Routes.Landing,
  dataTestId: 'manage-employment-income-summary-header',
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
    <template #right
      ><NuxtLink
        class="navbar-brand"
        :to="content.landingRoute"
        :data-testid="`${content.dataTestId}-logo-cta`"
      >
        <img
          src="~@/assets/images/logo-full-dark.svg"
          alt="Advance America Logo"
        /> </NuxtLink
    ></template>
  </GlobalApplicationHeader>
</template>
