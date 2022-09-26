<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { IconNames, IconSizes } from '@/constants/icons';
import { Routes } from '@/constants/pages';

const { getHeaderData } = useContentful();
const { data, pending } = getHeaderData('widget-header-application-exit');
const { getApplication } = useExitAplication();
const notification = useNotification();
const { query = '', page = '' } = getApplication.value;

const content = {
  backCta: (Routes[page] || Routes.Dashboard) + (query ? `?${query}` : ''),
  backLabel: 'back',
  dataTestId: 'loan-application-exit-header',
};

const handleLogout = async () => {
  const session = useSession();

  notification.updateMessage('Logged out');
  await session.logOut();

  // NOTE: Using location.href since the Okta widget doesn't render properly with Nuxt router.
  location.href = Routes.Login;
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
    <template #right>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 12, size: 'lg' }]"
      >
        <button
          class="btn btn-link"
          :data-testid="`${content.dataTestId}-btn-cta`"
          @click="handleLogout"
        >
          {{ data?.ctaLabel }}
        </button>
      </BaseSkeletonLoader>
    </template>
  </GlobalApplicationHeader>
</template>
