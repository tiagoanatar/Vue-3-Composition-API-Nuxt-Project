<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Bank statement',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main class="theme-proof-of-income">
    <WidgetsHeaderVerifyProofOfIncome />
    <WidgetsDescriptionBankStatement />
    <WidgetsCtaBankStatement />
    <WidgetsFooterGlobalApplication />
  </main>
</template>
