<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Profile | Digital Wallet',
});
definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main class="theme-digital-wallet">
    <WidgetsHeaderDigitalWallet />
    <WidgetsDescriptionDigitalWallet />
    <WidgetsCardsAccountDetailsDigitalWallet />
    <WidgetsFooterGlobalApplication />
  </main>
</template>
