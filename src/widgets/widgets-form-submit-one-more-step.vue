<script setup lang="ts">
const { getGlobalFooterData } = useContentful();
const { data, pending } = getGlobalFooterData('widget-footer-global');
const { getFormValidState } = useFormValidState();

const content = reactive({ cta: '' });

watchEffect(() => {
  content.cta = data?.value?.ctaNext;
});

const id = 'formOneMoreStep';
</script>

<template>
  <div class="theme-widget-cta-wrapper">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12, size: 'sm' }]">
      <BaseButton
        :data-test-id="`${id}-submit`"
        :form="id"
        :is-loading="pending"
        :label="content.cta"
        type="submit"
      />
    </BaseSkeletonLoader>
  </div>
</template>
