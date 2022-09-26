<script setup lang="ts">
interface Props {
  copy: string;
  dataTestId: string;
  id: string;
  isLoading?: boolean;
  isSelected: boolean;
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="container theme-notification-preference"
    :data-testid="`${dataTestId}-container`"
  >
    <div class="row theme-notification-preference-row">
      <div
        class="col theme-notification-preference-entry-container"
        :data-testid="`${dataTestId}-col-1`"
      >
        <BaseSkeletonLoader :is-loading="isLoading">
          <p class="theme-title" :data-testid="`${dataTestId}-title`">
            {{ title }}
          </p>
        </BaseSkeletonLoader>
        <BaseSkeletonLoader :is-loading="isLoading">
          <p class="theme-copy" :data-testid="`${dataTestId}-copy`">
            {{ copy }}
          </p>
        </BaseSkeletonLoader>
      </div>
      <div
        class="col-auto theme-notification-preference-checkbox"
        :data-testid="`${dataTestId}-col-2`"
      >
        <BaseSkeletonLoader :is-loading="isLoading">
          <BaseCheckbox
            :id="id"
            :data-test-id="dataTestId"
            :name="id"
            :effect-value="isSelected"
          />
        </BaseSkeletonLoader>
      </div>
    </div>
  </div>
</template>
