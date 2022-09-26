<script setup lang="ts">
import { TPlaceHolder } from '../constants/bootstrap';
const { getCtaData } = useContentful();

const { data, pending } = getCtaData('widget-cta-digital-wallet-edit-payment');
const { getFormValidState } = useFormValidState();

const btnPlaceHolder: TPlaceHolder[] = [{ col: 12, size: 'lg' }];
</script>

<template>
  <div class="theme-digital-wallet-edit-payment-method-cta-block d-flex flex-column flex-grow-1 justify-content-end"
  >
    <BaseSkeletonLoader :is-loading="pending" :rows="btnPlaceHolder">
      <BaseButton
        :label="data?.ctaList[0]?.label"
        data-test-id="account-details-update-email-save-updates"
        :form="'formDigitalWalletAddDebitCard'"
        :is-disabled="!getFormValidState"
        type="submit"
        :class="'theme-account-details-update-email-form-submit-button'"
        size="lg"
      />
    </BaseSkeletonLoader>
  </div>
</template>
