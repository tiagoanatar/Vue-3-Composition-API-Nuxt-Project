<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Step One | Personal Identity',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderPersonalIdentity />
      <WidgetsDescriptionPersonalIdentity />
      <WidgetsModalInfoPersonalIdentity />
      <WidgetsFormPersonalIdentity />
      <WidgetsFooterGlobalApplication />
      <WidgetsFormSubmitPersonalIdentity />
    </div>
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
