<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Origination | Payday Loan | Manage Your Debit Card',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderLoanOriginationPaydayLoanManageDebitCard />
      <WidgetsDescriptionLoanOriginationPaydayLoanManageDebitCard />
      <WidgetsCardsLoanOriginationPaydayLoanManageDebitCard />
      <WidgetsFormSubmitLoanOriginationPaydayLoanManageDebitCard />
    </div>
  </main>
</template>
