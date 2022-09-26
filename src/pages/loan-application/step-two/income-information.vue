<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Step Two | Income Information',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderFinancialIncomeInformation />
      <WidgetsDescriptionFinancialIncomeInformation />
      <WidgetsModalInfoFinancialIncomeInformation />
      <WidgetsFormFinancialIncomeInformation />
      <WidgetsFooterGlobalApplication />
      <WidgetsFormSubmitFinancialIncomeInformation />
    </div>
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
