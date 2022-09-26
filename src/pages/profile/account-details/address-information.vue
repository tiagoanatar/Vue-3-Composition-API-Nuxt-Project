<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Account Details | Update Address Information',
});
definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main class="theme-update-account-address">
    <WidgetsHeaderUpdateAddress />
    <WidgetsDescriptionUpdateAccountAddress />
    <WidgetsFormUpdateAccountAddress />
    <WidgetsFormSubmitUpdateAccountAddress />
    <WidgetsFooterGlobalApplication />
  </main>
</template>
