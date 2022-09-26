<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';

interface Props {
  dataTestId: string;
  progressTrackerItems: Record<string, string>;
}

const props = defineProps<Props>();

const trackerLabelComputed = computed(() =>
  props.progressTrackerItems.trackerDate
    ? `${props.progressTrackerItems.trackerLabel}: ${props.progressTrackerItems.trackerDate}`
    : props.progressTrackerItems.trackerLabel
);

const classObject = computed(() => [
  `theme-loan-card-tracker-${props.progressTrackerItems.trackerStatus}`,
]);

const loading = ref(false);
</script>
<template>
  <div class="theme-loan-card-tracker" :data-test-id="`${dataTestId}-tracker`">
    <button
      class="theme-loan-card-tracker-modal"
      :aria-controls="progressTrackerItems.id"
      :data-bs-target="`#${progressTrackerItems.id}`"
      data-bs-toggle="modal"
      data-test-id="info-modal-open"
    >
      <BaseIcon :name="IconNames.Info" :size="IconSizes.Small" />
      <p>{{ progressTrackerItems.modalLabel }}</p>
    </button>
    <BaseProgressBar
      :class="classObject"
      :progress="progressTrackerItems.progress"
    />
    <BaseKeyValueText
      :data-test-id="`loan-card-tracker`"
      :is-loading="loading"
      :label="trackerLabelComputed"
      :type="progressTrackerItems.cardType"
      :value="progressTrackerItems?.card"
      text-direction="row"
    />
  </div>
</template>
