<script setup lang="ts">
import { Pages } from '@/constants/pages';

const { getPaydayLoanTimelineData } = useContentful();
const { data, pending } = getPaydayLoanTimelineData(
  'widget-timeline-payday-steps'
);
</script>

<template>
  <BaseTimeline
    :data-test-id="Pages.PaydayLoanInformation"
    :data="pending ? [1, 2, 3] : data?.timelineSteps"
    :has-progress-bar="false"
    :title="data?.title"
    :is-loading="pending"
  >
    <template #title>
      <p
        :data-testid="`${Pages.PaydayLoanInformation}-title`"
        class="timeline-title"
      >
        {{ data?.title }}
      </p>
    </template>
  </BaseTimeline>
</template>
