<script setup lang="ts">
import { TPlaceHolder } from '@/constants/bootstrap';
const { getCtaData } = useContentful();
const { data, pending } = getCtaData('widget-cta-save-updates');
const { getFormValidState, getFormLoadingState } = useFormValidState();
const btnPlaceHolder: TPlaceHolder[] = [{ col: 12, size: 'lg' }];
</script>

<template>
  <BaseSkeletonLoader :is-loading="pending" :rows="btnPlaceHolder">
    <BaseButton
      :label="data?.ctaList[0]?.label"
      data-test-id="reapply-next"
      form="formUpdateAccountAddress"
      :is-disabled="!getFormValidState || getFormLoadingState"
      :is-loading="getFormLoadingState"
      type="submit"
      :class="'theme-loan-reapply-form-submit-button'"
    />
  </BaseSkeletonLoader>
</template>
