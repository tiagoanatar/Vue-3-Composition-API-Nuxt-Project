<script setup lang="ts">
const { getPaydayLoanTimelineData } = useContentful();
const { data, pending } = getPaydayLoanTimelineData(
  'widget-timeline-plaid-one-more-step'
);

const id = 'plaid-one-more-step';
</script>

<template>
  <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 11, size: 'lg' }]">
    <BaseTimeline
      :data-test-id="id"
      :data="data?.timelineSteps"
      :has-progress-bar="false"
      :title="data?.title"
    >
      <template #title>
        <p :data-testid="`${id}-timeline-title`" class="timeline-title">
          {{ data?.title }}
        </p>
      </template>
    </BaseTimeline>
  </BaseSkeletonLoader>
</template>
