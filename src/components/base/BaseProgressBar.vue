<!-- TODO: validate if a11y is required to be updated aria* semantics -->
<script setup lang="ts">
interface Props {
  progress?: number;
}

withDefaults(defineProps<Props>(), {
  progress: 0,
});
</script>

<template>
  <div
    role="progressbar"
    aria-label="progressbar"
    class="progress-bar-container"
  >
    <div
      class="progress-bar-indicator"
      :style="{ width: progress + '%' }"
    ></div>
  </div>
</template>
