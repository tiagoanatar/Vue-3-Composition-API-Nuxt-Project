<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Step One | Personal SSN',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});

const { existingOnlineSsnModal } = useErrorModal();
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderPersonalSsn />
      <WidgetsDescriptionPersonalSsn />
      <WidgetsModalInfoSsn />
      <WidgetsFormPersonalSsn />
      <WidgetsFooterGlobalApplication />
      <WidgetsFormSubmitPersonalSsn />
    </div>
    <WidgetsModalExistingOnlineSsn
      :email="existingOnlineSsnModal.email"
      :show-modal="existingOnlineSsnModal.isVisible"
    />
    <!-- TODO: replace with proper widget after state implementation -->
    <WidgetsModalSavePersonalInformation />
  </main>
</template>
