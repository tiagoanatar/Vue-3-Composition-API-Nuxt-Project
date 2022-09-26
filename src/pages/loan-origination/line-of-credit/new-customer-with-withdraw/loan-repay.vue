<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Origination | Line of Credit | Loan Repay',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main class="theme-loan-application">
    <WidgetsHeaderLoanOriginationInstallmentLoanMoneyDestination />
    <WidgetsDescriptionLoanOriginationInstallmentLoanLoanRepay />
    <WidgetsModalInfoLoanOriginationInstallmentLoanMoneyDestination />
    <WidgetsCardsLoanOriginationInstallmentLoanLoanRepay />
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
