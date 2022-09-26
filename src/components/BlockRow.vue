<script setup lang="ts">
const slots = useSlots();
const slotsCount = slots.default ? slots.default().length : 0;

const cxBlockRow = computed(() => [
  'theme-block-row d-flex align-items-center',
  slotsCount > 1 ? 'justify-content-between' : 'justify-content-center',
]);
</script>

<template>
  <div :class="cxBlockRow">
    <slot />
  </div>
</template>
