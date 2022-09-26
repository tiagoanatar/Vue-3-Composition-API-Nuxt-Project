<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title:
    'AA | Loan Origination | Payday Loan | Manage Your Debit Card | Add Debit Card',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderLoanOriginationPaydayLoanManageDebitCardAddCard />
      <WidgetsDescriptionLoanOriginationPaydayLoanManageDebitCardAddCard />
      <WidgetsFormLoanOriginationPaydayLoanManageDebitCardAddCard />
      <WidgetsFormSubmitLoanOriginationPaydayLoanManageDebitCard />
    </div>
  </main>
</template>
