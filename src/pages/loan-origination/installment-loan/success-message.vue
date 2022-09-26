<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Origination Summary',
});

definePageMeta({
  layout: 'success-message',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-origination-success">
      <WidgetsHeaderLoanOriginationInstallmentLoanSuccess />
      <WidgetsDescriptionLoanOriginationInstallmentLoanSuccess />
    </div>
  </main>
</template>
