<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Step One | Personal Address',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderPersonalAddress />
      <WidgetsDescriptionPersonalAddress />
      <WidgetsModalInfoPersonalAddress />
      <WidgetsFormPersonalAddress />
      <WidgetsFooterGlobalApplication />
      <WidgetsFormSubmitPersonalAddress />
    </div>
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
