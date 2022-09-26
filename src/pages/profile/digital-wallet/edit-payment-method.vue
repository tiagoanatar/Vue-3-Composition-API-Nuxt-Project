<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Profile | Digital Wallet | Edit Payment Method',
});
definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main class="theme-digital-wallet-edit-payment-method">
    <WidgetsHeaderDigitalWalletEditPaymentMethod />
    <WidgetsDescriptionDigitalWalletEditPaymentMethod />
    <WidgetsFormDigitalWalletEditPaymentMethod />
    <WidgetsFormSubmitDigitalWalletEditPaymentMethod />
    <WidgetsFooterGlobalApplication />
  </main>
</template>
