<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Step One | Personal Information',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderPersonalInformation />
      <WidgetsDescriptionPersonalInformation />
      <WidgetsModalInfoPersonal />
      <WidgetsFormPersonalInformation />
      <WidgetsModalTermsAndConditions />
      <WidgetsFooterGlobalApplication />
      <WidgetsFormSubmitPersonalInformation />
    </div>
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
