<script setup lang="ts">
interface Props {
  type?: 'modal' | 'body';
}

const props = withDefaults(defineProps<Props>(), {
  type: 'body',
});

const cxBody = computed(() => [
  'theme-loan-application-body-copy',
  { 'theme-loan-application-body-copy-center': props.type === 'modal' },
]);
</script>

<template>
  <div :class="cxBody">
    <slot />
  </div>
</template>
