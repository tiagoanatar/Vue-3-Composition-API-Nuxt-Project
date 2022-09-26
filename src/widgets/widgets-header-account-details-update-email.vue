<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/pages';
/**
 * TODO: This is temporary
 * TODO: Replace with CMS data
 */
const content = {
  backCta: Routes.AccountDetailsMenu,
  backLabel: 'back to account details menu',
  landingRoute: Routes.Landing,
  dataTestId: 'account-details-email-updates-header',
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
