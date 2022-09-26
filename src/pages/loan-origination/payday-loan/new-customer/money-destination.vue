<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Origination | Payday Loan | Money Destination',
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
      <WidgetsDescriptionLoanOriginationInstallmentLoanMoneyDestination />
      <WidgetsModalInfoLoanOriginationInstallmentLoanMoneyDestination />
      <WidgetsCardsLoanOriginationPaydayLoanMoneyDestination />
    </div>
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
