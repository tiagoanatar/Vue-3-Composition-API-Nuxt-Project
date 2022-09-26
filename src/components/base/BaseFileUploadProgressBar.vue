<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';

const emit = defineEmits(['handleCancelSubmit']);

interface Props {
  progress?: number;
  dataTestId: string;
  showCancelButton?: boolean;
  uploadingLabel?: string;
}

withDefaults(defineProps<Props>(), {
  progress: 0,
  showCancelButton: true,
  uploadingLabel: 'Uploading',
});
</script>
<template>
  <div class="theme-file-upload-progress-bar" :data-test-id="dataTestId">
    <div class="theme-file-upload-progress-bar-header">
      <div class="theme-file-upload-progress-bar-percentage">
        {{ uploadingLabel }} <span>({{ progress }}%)</span>
      </div>
      <button
        v-if="showCancelButton"
        class="btn theme-file-upload-progress-bar-cancel"
        :data-test-id="`${dataTestId}-cancel`"
        @click="emit('handleCancelSubmit')"
      >
        <BaseIcon :name="IconNames.X" :size="IconSizes.Small" />
      </button>
    </div>
    <BaseProgressBar :progress="progress" />
  </div>
</template>
