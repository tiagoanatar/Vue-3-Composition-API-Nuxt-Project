<script setup lang="ts">
import { IconNames } from '@/constants/icons';
// Currently handling only one variant as we don't have design for other variants
interface Props {
  time: string;
  url: string;
  variation?: 'info';
  dataTestId: string;
}

withDefaults(defineProps<Props>(), {
  variation: 'info',
});
</script>

<template>
  <div
    :class="['container theme-loan-timer', `theme-${variation}`]"
    :data-testid="dataTestId"
  >
    <div class="row">
      <div class="col" :data-testid="`${dataTestId}-time`">{{ time }}</div>
      <div class="col-auto">
        <NuxtLink :to="url" :data-testid="`${dataTestId}-link`">
          <BaseIcon :name="IconNames.ArrowRight"></BaseIcon>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
