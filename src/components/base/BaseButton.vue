<!-- TODO: update minimal styling (this should be the default) -->
<!-- TODO: update focus/active state to show on keyboard input -->
<!-- TODO: apply proper disable attr to avoid keyboard input -->
<script setup lang="ts">
import { IconNames } from '@/constants/icons';

interface Props {
  dataTestId: string;
  icon?: IconNames;
  isDisabled?: boolean;
  isLoading?: boolean;
  isReverse?: boolean;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  variation?: 'primary' | 'secondary' | 'outline-primary' | 'minimal';
}

const props = withDefaults(defineProps<Props>(), {
  icon: null,
  isDisabled: false,
  isReverse: false,
  isLoading: false,
  label: 'Default Label',
  size: 'md',
  type: 'button',
  variation: 'primary',
});

const emit = defineEmits(['click']);

// const hasDisabledClass = computed(
//   () => props.isDisabled && props.variation !== 'outline-tertiary'
// );

// const hasOutlineDisabledClass = computed(
//   () => props.isDisabled && props.variation === 'outline-tertiary'
// );

const cxBtn = computed(() => [
  'theme-btn',
  'btn',
  `btn-${props.size}`,
  `btn-${props.variation}`,
  {
    // ['theme-btn']: !props.isDisabled,
    // [`btn-${props.variation}`]: !props.isDisabled,
    // ['theme-btn-disabled']: props.isDisabled,
    ['disabled']: props.isDisabled,
  },
]);

function handleClick() {
  // if (props.isDisabled) return;
  emit('click');
}
</script>

<template>
  <button
    :aria-disabled="isDisabled"
    :class="cxBtn"
    :data-testid="`${dataTestId}-button`"
    :type="type"
    @click="handleClick"
  >
    <span
      v-if="isLoading"
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
      aria-label="loading"
      aria-live="assertive"
    />
    <BaseIcon v-if="icon && !isReverse" :name="icon" />
    {{ label }}
    <BaseIcon v-if="icon && isReverse" :name="icon" />
  </button>
</template>
