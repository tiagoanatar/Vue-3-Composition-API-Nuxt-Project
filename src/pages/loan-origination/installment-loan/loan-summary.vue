<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Origination Summary',
});

definePageMeta({
  layout: 'dashboard-loan-summary',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-origination">
      <div class="container theme-loan-origination-summary-container">
        <div class="theme-loan-origination-header">
          <div class="theme-loan-origination-header-float">
            <WidgetsHeaderLoanOriginationInstallmentLoanSummary />
          </div>
          <WidgetsDescriptionLoanOriginationInstallmentLoanSummary />
        </div>
        <WidgetsSummaryLoanOrigination />
      </div>
    </div>
  </main>
</template>
