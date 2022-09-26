<script setup lang="ts">
import { TPlaceHolder } from '../constants/bootstrap';
const { getCtaData } = useContentful();

const { data, pending } = getCtaData('widget-cta-save-updates');
const { getFormValidState } = useFormValidState();

const btnPlaceHolder: TPlaceHolder[] = [{ col: 12, size: 'lg' }];
</script>

<template>
  <div class="theme-account-details-update-email-cta-block d-flex flex-column flex-grow-1 justify-content-end"
  >
    <BaseSkeletonLoader :is-loading="pending" :rows="btnPlaceHolder">
      <BaseButton
        :label="data?.ctaList[0]?.label"
        data-test-id="account-details-update-email-save-updates"
        :form="'formAccountDetailsUpdateEmail'"
        :is-disabled="!getFormValidState"
        type="submit"
        :class="'theme-account-details-update-email-form-submit-button'"
        :size="'lg'"
      />
    </BaseSkeletonLoader>
  </div>
</template>
