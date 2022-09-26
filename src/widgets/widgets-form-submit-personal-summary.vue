<script setup lang="ts">
import { Routes } from '../constants/pages';

const { getGlobalFooterData } = useContentful();
const { data, pending } = getGlobalFooterData('widget-footer-global');

const content = reactive({
  data: { cta: '', step: '' },
  href: Routes.FinancialBankInformation,
  id: 'formPersonalSummary',
  isLoading: pending,
  progress: 100,
});

watchEffect(() => {
  content.data.cta = data?.value?.ctaNext;
  content.data.step = data?.value?.step1;
});
</script>

<template>
  <BaseFormStepSubmit v-bind="content" />
</template>
