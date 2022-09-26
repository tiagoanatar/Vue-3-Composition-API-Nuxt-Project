<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';

interface Props {
  cardType?: string;
  copy?: string;
  dataTestId: string;
  logo?: string;
  logoAlt?: string;
  title?: string;
  isLoading: boolean;
}

withDefaults(defineProps<Props>(), {
  cardType: '',
  copy: '',
  logo: '',
  logoAlt: '',
  title: '',
});

/**
 * 1) Based upon card type which is coming from CMS, selecting different icon colors.
 * TODO: redirectUri will be replaced with actual url once it will be finalized
 */
const icons = {
  visa: {
    redirectUri: '/dashboard',
    color: Colors.White,
  },
  'western-union': {
    redirectUri: '/dashboard',
    color: Colors.Black,
  },
};
</script>

<template>
  <BaseCard
    is-base-card
    :class="`theme-money-card theme-money-card-${cardType}`"
    :data-test-id="`${dataTestId}-money-card`"
  >
    <div class="theme-money-card-logo">
      <BaseSkeletonLoader
        :is-loading="isLoading"
        :rows="[{ col: 12, size: 'lg' }]"
      >
        <img :src="logo" :alt="logoAlt" />
      </BaseSkeletonLoader>
    </div>
    <div>
      <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 6 }]">
        <p class="theme-money-card-title">{{ title }}</p>
      </BaseSkeletonLoader>
      <div class="d-flex justify-content-between">
        <BaseSkeletonLoader
          class="col"
          :is-loading="isLoading"
          :rows="[{ col: 12 }]"
        >
          <p class="theme-money-card-description">
            {{ copy }}
          </p>
        </BaseSkeletonLoader>
        <BaseSkeletonLoader
          class="col-2 d-flex justify-content-end align-items-center"
          :is-loading="isLoading"
          :rows="[{ col: 4 }]"
        >
          <!-- TODO: redirectUri will be replaced with actual url once it will be finalized-->
          <NuxtLink
            :to="icons[cardType]?.redirectUri"
            class="theme-money-card-link"
            :data-testid="`${dataTestId}-link`"
          >
            <BaseIcon
              :name="IconNames.ArrowRight"
              :color="icons[cardType]?.color"
            />
          </NuxtLink>
        </BaseSkeletonLoader>
      </div>
    </div>
  </BaseCard>
</template>
