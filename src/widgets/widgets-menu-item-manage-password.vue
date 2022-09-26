<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';

const { getCtaData } = useContentful();
const { data, pending } = getCtaData('widget-cta-profile-manage-password');
</script>

<template>
  <nav aria-label="navigationManagePassword">
    <ul>
      <!-- TODO: To replace this with ProfileMenuItem code (part of PR 214) -->
      <li class="theme-manage-password">
        <NuxtLink :to="`/${data?.ctaList[0]?.route}`">
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 7 }]">
            <p>{{ data?.ctaList[0]?.label }}</p>
          </BaseSkeletonLoader>
          <BaseIcon
            :color="Colors.Black"
            :name="IconNames.ArrowRight"
            :size="IconSizes.Medium"
          />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
