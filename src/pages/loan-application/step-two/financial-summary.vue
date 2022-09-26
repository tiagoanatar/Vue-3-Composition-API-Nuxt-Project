<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Step One | Financial Summary',
});

definePageMeta({
  layout: 'layout-application',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderFinancialSummary />
      <WidgetsDescriptionFinancialSummary />
      <WidgetsSummaryFinancial />
      <WidgetsFooterGlobalApplication />
      <WidgetsFormSubmitFinancialSummary />
    </div>
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
