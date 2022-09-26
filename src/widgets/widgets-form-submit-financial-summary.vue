<script setup lang="ts">
const { getGlobalFooterData } = useContentful();
const { data, pending } = getGlobalFooterData('widget-footer-global');
const { getFormValidState } = useFormValidState();

// Reactive in order to listen on change of useFormValidateState value
const content = reactive({
  data: { cta: '', step: '' },
  id: 'formFinancialSummary',
  isEnabled: getFormValidState.value,
  isLoading: pending,
  progress: 100,
});

watchEffect(() => {
  content.data.cta = data?.value?.ctaSubmit;
  content.data.step = data?.value?.step2;
  content.isEnabled = getFormValidState.value;
});
</script>

<template>
  <BaseFormStepSubmit v-bind="content" />
</template>
