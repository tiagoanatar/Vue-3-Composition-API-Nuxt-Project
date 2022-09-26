<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Update | Contact Information',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main class="theme-loan-application theme-update-application">
    <!-- Should be replaced with common Header Block once it is ready -->
    <WidgetsHeaderUpdateInformation />
    <WidgetsDescriptionUpdateContactInformation />
    <WidgetsFormUpdateContactInformation />
    <WidgetsModalTermsAndConditions />
    <WidgetsFormSubmitUpdateContactInformation />
    <WidgetsFooterGlobalApplication />
  </main>
</template>
