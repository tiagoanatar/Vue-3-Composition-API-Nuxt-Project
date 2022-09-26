<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Connect Finances Plaid',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main class="theme-loan-application theme-connect-plaid-timeline">
    <WidgetsHeaderConnectPlaid />
    <WidgetsDescriptionPlaidOneMoreStep />
    <WidgetsTimelinePlaidOneMoreStep />
    <WidgetsFormSubmitOneMoreStep />
    <WidgetsFooterGlobalApplication />
  </main>
</template>
