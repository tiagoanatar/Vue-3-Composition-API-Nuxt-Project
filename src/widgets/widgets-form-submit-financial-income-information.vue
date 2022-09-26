<script setup lang="ts">
const { getGlobalFooterData } = useContentful();
const { data, pending } = getGlobalFooterData('widget-footer-global');
const { getFormValidState } = useFormValidState();

// Reactive in order to listen on change of useFormValidateState value
const content = reactive({
  data: { cta: '', step: '' },
  id: 'formIncomeInformation',
  isEnabled: getFormValidState,
  isLoading: pending,
  progress: 75,
});

watchEffect(() => {
  content.data.cta = data?.value?.ctaNext;
  content.data.step = data?.value?.step2;
});
</script>

<template>
  <BaseFormStepSubmit v-bind="content" />
</template>
