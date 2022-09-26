<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/pages';

const { getGlobalHeaderData } = useContentful();
const { data, pending } = getGlobalHeaderData('widget-header-global');
const route = useRoute();
const page = route?.query?.page || '';

const backCta = ['proof-of-income', 'bank-statement'].includes(page)
  ? Routes[page === 'proof-of-income' ? 'ProofOfIncome' : 'BankStatement']
  : Routes.UploadNewDocument;

const content = {
  backCta,
  backLabel: 'back',
};
</script>
<template>
  <GlobalApplicationHeader class="theme-connect-plaid-header">
    <template #left>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 3, size: 'lg' }]"
      >
        <NuxtLink
          :to="content.backCta"
          data-test-id="connect-plaid-back"
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
        :rows="[{ col: 4, size: 'lg' }]"
      >
        <!-- TODO: Add route -->
        <NuxtLink to="/" data-test-id="connect-plaid-continue">{{
          data?.skipContinue
        }}</NuxtLink>
      </BaseSkeletonLoader>
    </template>
  </GlobalApplicationHeader>
</template>
