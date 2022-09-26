<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Step Two | Job Status',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderFinancialJobStatus />
      <WidgetsDescriptionFinancialJobStatus />
      <WidgetsModalInfoFinancialJobStatus />
      <WidgetsFormFinancialJobStatus />
      <WidgetsFooterGlobalApplication />
      <WidgetsFormSubmitFinancialJobStatus />
    </div>
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
