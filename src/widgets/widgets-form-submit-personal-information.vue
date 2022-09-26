<script setup lang="ts">
const { getGlobalFooterData } = useContentful();
const { data, pending } = getGlobalFooterData('widget-footer-global');
const { getFormValidState } = useFormValidState();

// TODO: make progress dynamic based on a global state
// Reactive in order to listen on change of useFormValidateState value
const content = reactive({
  data: { cta: '', step: '' },
  id: 'formPersonalInformation',
  isEnabled: getFormValidState,
  isLoading: pending,
  progress: 25,
});

watchEffect(() => {
  content.data.cta = data?.value?.ctaNext;
  content.data.step = data?.value?.step1;
});
</script>

<template>
  <BaseFormStepSubmit v-bind="content" />
</template>
