<script setup lang="ts">
const { getCtaData } = useContentful();
const { data, pending } = getCtaData('widget-cta-profile-manage-preference');
const id = 'formNotificationPreferences';
</script>

<template>
  <div class="theme-widget-cta-wrapper">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12, size: 'sm' }]">
      <BaseButton
        :form="id"
        :label="data?.ctaList?.[0].label"
        data-test-id="manage-preference-cta-1"
        type="submit"
      />
    </BaseSkeletonLoader>
  </div>
</template>
