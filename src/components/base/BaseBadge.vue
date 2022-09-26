<script setup lang="ts">
interface Props {
  badgeType?: 'default' | 'active' | 'processing';
  label?: string;
  status?: string;
}

const props = withDefaults(defineProps<Props>(), {
  badgeType: 'default',
  label: 'Default Label',
  status: 'default',
});

const classObject = computed(() => [
  `theme-badge badge rounded-pill`,
  `theme-badge-${props.badgeType}`,
  `theme-badge-${props.status}`,
]);
</script>

<template>
  <span :class="classObject">{{ label }}</span>
</template>
