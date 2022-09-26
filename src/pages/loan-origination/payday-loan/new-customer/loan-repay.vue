<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Origination | Payday Loan | Loan Repay',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderLoanOriginationInstallmentLoanMoneyDestination />
      <WidgetsDescriptionLoanOriginationInstallmentLoanLoanRepay />
      <WidgetsModalInfoLoanOriginationInstallmentLoanMoneyDestination />
      <WidgetsCardsLoanOriginationPaydayLoanLoanRepay />
    </div>
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
