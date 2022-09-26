<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
const { getFormSubmitData } = useContentful();
const { data, pending } = getFormSubmitData(
  'widget-footer-loan-origination-payday-loan-manage-debit-card'
);

const id = 'formManageDebitCard';
const { getFormValidState } = useFormValidState();
</script>

<template>
  <div class="theme-radio-card-button-submit">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12, size: 'sm' }]">
      <BaseButton
        :form="id"
        :label="data?.cta"
        :data-test-id="`${id}-submit`"
        type="submit"
        :is-disabled="!getFormValidState"
      />
    </BaseSkeletonLoader>
  </div>
  <WidgetsFooterGlobalApplication />
</template>
