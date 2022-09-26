<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Manage Employment | Income Summary',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-manage-employment d-flex flex-column">
      <WidgetsHeaderManageEmploymentIncomeSummary />
      <WidgetsDescriptionManageEmploymentIncomeSummary />
      <WidgetsManageEmploymentIncomeSummary />
      <WidgetsCtaManageEmploymentIncomeSummary />
      <WidgetsFooterGlobalApplication />
    </div>
  </main>
</template>
