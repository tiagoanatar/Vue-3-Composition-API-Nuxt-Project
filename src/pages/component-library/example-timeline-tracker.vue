<script setup lang="ts">
import { Pages } from '@/constants/pages';

useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Component Library - Timeline Tracker',
});

const data = [
  {
    heading: 'Processing details',
    text: 'Your application will process in 30 minutes. Please stand by as we confirm your information.',
  },
  {
    heading: 'Finalizing request',
    text: 'Finalizing your loan and preparing to send fund by Wednesday (02/02).',
  },
  {
    heading: 'Refinance completed',
    text: 'Your money has arrived and was sent to the debit card ending in **3956',
  },
];
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <BaseTimeline
          :data-test-id="Pages.ComponentLibrary"
          :data="data"
          title="Initial State"
        >
          <template #title>
            <h3
              :data-testid="`${Pages.ComponentLibrary}-timeline-title`"
              class="timeline-title"
            >
              Initial State
            </h3>
          </template>
        </BaseTimeline>
      </div>
      <div class="col">
        <BaseTimeline
          :data-test-id="Pages.ComponentLibrary"
          :data="data"
          :step-in-progress="2"
          title="In Progress State"
        >
          <template #title>
            <h3
              :data-testid="`${Pages.ComponentLibrary}-timeline-title`"
              class="timeline-title"
            >
              In Progress State
            </h3>
          </template>
        </BaseTimeline>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <BaseTimeline
          :data-test-id="Pages.ComponentLibrary"
          :data="data"
          :step-in-progress="data.length"
          title="Done State"
        >
          <template #title>
            <h3
              :data-testid="`${Pages.ComponentLibrary}-timeline-title`"
              class="timeline-title"
            >
              Done State
            </h3>
          </template>
        </BaseTimeline>
      </div>
      <div class="col">
        <BaseTimeline
          :data-test-id="Pages.ComponentLibrary"
          :data="data"
          :has-progress-bar="false"
          title="Timeline Without Progress Bar"
        >
          <template #title>
            <h3
              :data-testid="`${Pages.ComponentLibrary}-timeline-title`"
              class="timeline-title"
            >
              Timeline Without Progress Bar
            </h3>
          </template>
        </BaseTimeline>
      </div>
    </div>
  </div>
</template>
