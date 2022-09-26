<script setup lang="ts">
const { getFormLoadingState, setLoadingState } = useFormValidState();

interface Props {
  data?: {
    cta: string;
    step: string;
  };
  href?: string;
  id: string;
  isEnabled?: boolean;
  isLoading?: boolean;
  progress?: number;
}

withDefaults(defineProps<Props>(), {
  data: () => ({
    cta: 'default label',
    step: 'step 0',
  }),
  href: null,
  isEnabled: false,
  isLoading: true,
  progress: 0,
});

setLoadingState(false);
</script>

<template>
  <div class="theme-form-step-submit">
    <BaseProgressBar :progress="progress" />
    <BlockRow>
      <BaseSkeletonLoader :is-loading="isLoading">
        <p>{{ data?.step }}</p>
      </BaseSkeletonLoader>
      <BaseSkeletonLoader :is-loading="isLoading">
        <BaseButton
          v-if="!href"
          :data-test-id="`${id}-submit`"
          :form="id"
          :is-disabled="!isEnabled || getFormLoadingState"
          :is-loading="getFormLoadingState"
          :label="data?.cta"
          :variation="'primary'"
          type="submit"
        />
        <NuxtLink
          v-else
          :data-test-id="`${id}-cta`"
          :to="href"
          class="theme-btn btn btn-primary"
        >
          {{ data?.cta }}
        </NuxtLink>
      </BaseSkeletonLoader>
    </BlockRow>
  </div>
</template>
