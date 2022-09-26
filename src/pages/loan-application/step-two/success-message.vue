<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Financial Summary',
});

definePageMeta({
  layout: 'success-message',
  middleware: 'auth',
});
</script>

<template>
  <main class="theme-loan-origination-success">
    <WidgetsHeaderLoanOriginationInstallmentLoanSuccess />
    <WidgetsDescriptionFinancialSuccess />
    <WidgetsModalPreApprovedLoan />
  </main>
</template>
