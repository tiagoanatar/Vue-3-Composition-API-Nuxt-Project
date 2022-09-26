<script setup lang="ts">
interface Props {
  dataTestId: string;
  isLoading: boolean;
  label?: string;
  textDirection?: 'column' | 'row';
  type?: 'default' | 'heading' | 'icon';
  url?: string;
  value?: string;
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
  value: '',
  textDirection: 'column',
  type: 'default',
  url: '',
});

const cxContainer = computed(() => [
  'theme-key-value-text',
  `theme-key-value-text-${props.type}`,
  `theme-key-value-text-${props.textDirection}`,
]);
</script>
<!-- TODO: Refactor existing implementations to include isLoading for skeleton loader -->
<template>
  <div :class="cxContainer" :data-test-id="`${dataTestId}-key-value-text`">
    <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 8 }]">
      <span
        v-if="label"
        class="theme-key-value-text-label"
        :data-test-id="`${dataTestId}-key-value-text-label`"
        >{{ label }}</span
      >
      <slot name="label" />
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 8 }]">
      <span
        v-if="type != 'heading' && label && value"
        class="theme-key-value-text-value"
        :data-test-id="`${dataTestId}-key-value-text-value`"
        >{{ value }}</span
      >
      <a
        v-if="type == 'heading' && label && url"
        class="theme-key-value-text-more-link"
        :href="url"
        :data-test-id="`${dataTestId}-key-value-text-more-link`"
        >{{ value }}</a
      >
      <slot name="value" />
    </BaseSkeletonLoader>
  </div>
</template>
