<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Step Two | Payment Period',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderFinancialPaymentPeriod />
      <WidgetsDescriptionFinancialPaymentPeriod />
      <WidgetsModalInfoFinancialPaymentPeriod />
      <WidgetsFormFinancialPaymentPeriod />
      <WidgetsFooterGlobalApplication />
      <WidgetsFormSubmitFinancialPaymentPeriod />
    </div>
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
