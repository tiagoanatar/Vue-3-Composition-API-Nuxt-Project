<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';

const route = useRouter();
const { getGlobalHeaderData } = useContentful();
const { data, pending } = getGlobalHeaderData('widget-header-global');
const content = {
  backLabel: 'back',
  dataTestId: 'financial-payment-frequency-header',
};

function redirect() {
  route.back();
}
</script>

<template>
  <GlobalApplicationHeader>
    <template #left>
      <NuxtLink
        :aria-label="content.backLabel"
        :data-testid="`${content.dataTestId}-back-cta`"
        @click="redirect"
      >
        <BaseIcon
          :color="Colors.Black"
          :name="IconNames.ArrowLeft"
          :size="IconSizes.Medium"
        />
      </NuxtLink>
    </template>
    <template #right>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 12, size: 'lg' }]"
      >
        <button
          aria-controls="exitModal"
          class="btn btn-link"
          data-bs-target="#exitModal"
          data-bs-toggle="modal"
          :data-testid="`${content.dataTestId}-exit-modal`"
        >
          {{ data?.ctaLabel }}
        </button>
      </BaseSkeletonLoader>
    </template>
  </GlobalApplicationHeader>
</template>
