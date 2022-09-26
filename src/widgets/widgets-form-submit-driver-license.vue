<script setup lang="ts">
import { Pages } from '@/constants/pages';

const { getCtaData } = useContentful();
const { data, pending } = getCtaData('widget-cta-update-license');
const { getFormValidState, getFormLoadingState } = useFormValidState();
</script>
<template>
  <div class="theme-driver-license-form-submit-button d-flex flex-column flex-grow-1 justify-content-end"
  >
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12, size: 'lg' }]">
      <BaseButton
        :data-test-id="`${Pages.DriverLicense}-submit`"
        :is-disabled="!getFormValidState || getFormLoadingState"
        :is-loading="pending || getFormLoadingState"
        :label="data?.ctaList[0]?.label"
        :variation="'primary'"
        form="formUpdateDriverLicense"
        type="submit"
      />
    </BaseSkeletonLoader>
  </div>
</template>
