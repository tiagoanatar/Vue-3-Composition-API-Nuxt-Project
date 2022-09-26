<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Step Two | Payment Type',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderFinancialPaymentType />
      <WidgetsDescriptionFinancialPaymentType />
      <WidgetsModalInfoFinancialPaymentType />
      <WidgetsFormFinancialPaymentType />
      <WidgetsFooterGlobalApplication />
      <WidgetsFormSubmitFinancialPaymentType />
    </div>
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
