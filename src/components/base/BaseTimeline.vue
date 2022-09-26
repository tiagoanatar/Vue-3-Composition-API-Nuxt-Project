<script setup lang="ts">
type TTimelineData = {
  heading: string;
  text?: string;
};

interface Props {
  data: TTimelineData[];
  dataTestId: string;
  hasProgressBar?: boolean;
  stepInProgress?: number;
  isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  hasProgressBar: true,
  stepInProgress: 0,
});

const progressClass = (index) => {
  if (index === props.stepInProgress - 1) {
    return 'is-done start-next-step';
  }
  if (index < props.stepInProgress) {
    return 'is-done';
  }
  return;
};
</script>

<template>
  <section
    class="theme-timeline"
    :class="[{ 'theme-timeline-loading': isLoading }]"
    :data-testid="`${dataTestId}-timeline-container`"
  >
    <div class="title">
      <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 6 }]">
        <slot name="title">default title value</slot>
      </BaseSkeletonLoader>
    </div>
    <ul :class="{ 'hide-timeline-progress-bar': !hasProgressBar }">
      <li
        v-for="(item, index) in data"
        :key="`${item.heading}-${index}`"
        :class="['theme-timeline-item', progressClass(index)]"
        :data-testid="`${dataTestId}-timeline-step-${index}`"
      >
        <BaseSkeletonLoader
          :is-loading="isLoading"
          :rows="[{ col: 12, size: 'lg' }]"
        >
          <div
            class="theme-timeline-progress-bar"
            :data-testid="`${dataTestId}-timeline-progress-bar`"
          >
            <div class="theme-timeline-active-progress-bar"></div>
          </div>
        </BaseSkeletonLoader>
        <div
          class="entry"
          :data-testid="`${dataTestId}-timeline-entry-${index}`"
        >
          <BaseSkeletonLoader
            :is-loading="isLoading"
            :rows="[{ col: 8, size: 'lg' }]"
          >
            <p
              class="entry-title"
              :data-testid="`${dataTestId}-timeline-entry-${index}-title`"
            >
              {{ item.heading }}
            </p>
          </BaseSkeletonLoader>
          <!-- TODO  Needs to handle text rendering dynamic -->
          <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 10 }]">
            <p
              v-if="item.text"
              class="entry-text"
              :data-testid="`${dataTestId}-timeline-entry-${index}-text`"
            >
              {{ item.text }}
            </p>
          </BaseSkeletonLoader>
        </div>
      </li>
    </ul>
  </section>
</template>
