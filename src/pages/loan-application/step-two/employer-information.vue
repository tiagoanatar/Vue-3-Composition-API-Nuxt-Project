<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Step Two | Employer Information',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderFinancialEmployerInformation />
      <WidgetsDescriptionFinancialEmployerInformation />
      <WidgetsModalInfoFinancialEmployerInformation />
      <WidgetsFormFinancialEmployerInformation />
      <WidgetsFooterGlobalApplication />
      <WidgetsFormSubmitFinancialEmployerInformation />
    </div>
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
