<script setup lang="ts">
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

interface Notification {
  dataTestId: string;
  description: string;
  heading: string;
}

interface Props {
  data: Notification[];
  isLoading: boolean;
  linkTitle: string;
  sectionTitle: string;
}

defineProps<Props>();

const horizontalSplideOptions = {
  wheel: true,
};

function clickHandler() {
  // TODO Will be handle later
}
</script>

<template>
  <div class="theme-notification-slider theme-splide-slider">
    <div class="theme-notification-slider-header">
      <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 12 }]">
        <p class="theme-notification-slider-header-title">{{ sectionTitle }}</p>
      </BaseSkeletonLoader>
      <!-- TODO: Redirect URI needs to handle later on -->
      <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 12 }]">
        <NuxtLink to="/" class="theme-notification-slider-header-link">
          {{ linkTitle }}
        </NuxtLink>
      </BaseSkeletonLoader>
    </div>
    <div class="splide__arrows" />
    <!-- TODO: Add loader to not jerk the UI for Splide third party package -->
    <Splide :options="horizontalSplideOptions">
      <SplideSlide v-for="(item, index) in data" :key="`notification-${index}`">
        <NotificationCard v-bind="item" @click="clickHandler" />
      </SplideSlide>
    </Splide>
  </div>
</template>
