<script setup lang="ts">
const { getFormSubmitData } = useContentful();
const { data, pending } = getFormSubmitData(
  'widget-footer-personal-information'
);
const { getFormValidState } = useFormValidState();

// TODO: Label should be fetched from contentful
const label = 'Save Updates';

const id = 'formPersonalInformation';
</script>

<template>
  <div class="theme-widget-cta-wrapper">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12, size: 'sm' }]">
      <BaseButton
        :form="id"
        :label="label"
        :data-test-id="`${id}-submit`"
        type="submit"
        :is-disabled="!getFormValidState"
      />
    </BaseSkeletonLoader>
  </div>
</template>
