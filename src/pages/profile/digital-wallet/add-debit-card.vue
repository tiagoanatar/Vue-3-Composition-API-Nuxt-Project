<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Profile | Digital Wallet | Add Debit Card',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main class="theme-digital-wallet-add-debit-card theme-digital-wallet-edit-payment-method"
  >
    <WidgetsHeaderDigitalWalletAddDebitCard />
    <WidgetsDescriptionDigitalWalletAddDebitCard />
    <WidgetsFormDigitalWalletAddDebitCard />
    <WidgetsFormSubmitDigitalWalletAddDebitCard />
    <WidgetsFooterGlobalApplication />
  </main>
</template>
