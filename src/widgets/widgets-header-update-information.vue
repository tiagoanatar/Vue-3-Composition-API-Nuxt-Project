<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '../constants/pages';

const content = {
  backCta: Routes.AccountDetails,
  backLabel: 'back',
  landingRoute: Routes.Landing,
};
</script>

<template>
  <BlockRow>
    <NuxtLink :to="content.backCta" :aria-label="content.backLabel">
      <BaseIcon
        aria-label="backLabel"
        :color="Colors.Black"
        :name="IconNames.ArrowLeft"
        :size="IconSizes.Medium"
      />
    </NuxtLink>
    <NuxtLink class="navbar-brand" :to="content.landingRoute">
      <img
        src="~@/assets/images/logo-full-dark.svg"
        alt="Advance America Logo"
      />
    </NuxtLink>
  </BlockRow>
</template>
