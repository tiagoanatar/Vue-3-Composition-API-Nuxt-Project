<script setup lang="ts">
import ExampleTimelineTracker from '../pages/component-library/example-timeline-tracker.vue';
const { getHeaderZipcode } = useContentful();
const { data, pending } = getHeaderZipcode(
  'pageWidgetHeader?fields.slug=widget-header-zipcode'
);
</script>

<template>
  <GlobalApplicationHeader class="theme-header-block">
    <template #center>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 12, size: 'lg' }]"
      >
        <img
          v-for="(image, key) in [data?.logoMobile, data?.logoDesktop]"
          :key="key"
          :src="image"
          alt="Advance America logo mark"
        />
      </BaseSkeletonLoader>
    </template>
  </GlobalApplicationHeader>
</template>
