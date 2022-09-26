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
  <main class="theme-proof-of-income">
    <WidgetsHeaderVerifyProofOfIncome />
    <WidgetsDescriptionVerifyProofOfIncome />
    <WidgetsCtaVerifyProofOfIncome />
    <WidgetsFooterGlobalApplication />
  </main>
</template>
