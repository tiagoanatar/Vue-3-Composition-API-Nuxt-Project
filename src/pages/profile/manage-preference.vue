<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Manage Preference',
});

definePageMeta({
  layout: 'layout-application',
});
</script>

<template>
  <main>
    <div class="theme-manage-preference">
      <WidgetsHeaderBlockManagePreference />
      <WidgetsDescriptionProfileManagePreference />
      <WidgetsFormProfileManagePreference />
      <WidgetsCtaProfileManagePreference />
      <WidgetsFooterGlobalApplication />
    </div>
  </main>
</template>
