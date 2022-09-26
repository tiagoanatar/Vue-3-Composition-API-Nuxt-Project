<script setup lang="ts">
import { Pages } from '@/constants/pages';

useHead({
  htmlAttrs: { lang: 'en' },
  middleware: 'auth',
  title: 'AA | Dashboard Page | Loan Process Timeline',
});

definePageMeta({
  layout: 'layout-application',
});

// TODO: replace mock data with contentful data
let data = {
  title: 'We’ll take it from here!',
  text: 'We’re on it! This page will automatically update as we process your loan.',
  timelineHeading: 'Your Timeline',
  timelineSteps: [
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
  ],
};
</script>

<template>
  <!-- TODO : Header with back navigation will be added once the header component code is available -->
  <main class="loan-application-timeline">
    <h1
      class="loan-application-timeline-title"
      :data-testid="`${Pages.LoanApplicationTimeline}-title`"
    >
      {{ data.title }}
    </h1>
    <p
      class="loan-application-timeline-text"
      :data-testid="`${Pages.LoanApplicationTimeline}-text`"
    >
      {{ data.text }}
    </p>
    <BaseTimeline
      :data-test-id="Pages.LoanApplicationTimeline"
      :data="data.timelineSteps"
      :step-in-progress="1"
      :title="data.timelineHeading"
    />
  </main>
</template>
