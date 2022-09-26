<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/pages';

const content = {
  backCta: Routes.AccountDetails,
  backLabel: 'back to account details',
  landingRoute: Routes.Landing,
  dataTestId: 'update-account-address',
};
</script>

<template>
  <GlobalApplicationHeader>
    <template #left>
      <NuxtLink
        :aria-label="content.backLabel"
        :data-testid="`${content.dataTestId}-back-cta`"
        :to="content.backCta"
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
