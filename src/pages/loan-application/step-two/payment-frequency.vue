<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Step Two | Payment Frequency',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderFinancialPaymentFrequency />
      <WidgetsDescriptionFinancialPaymentFrequency />
      <WidgetsModalInfoFinancialPaymentFrequency />
      <WidgetsFormFinancialPaymentFrequency />
      <WidgetsFooterGlobalApplication />
      <WidgetsFormSubmitFinancialPaymentFrequency />
    </div>
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
