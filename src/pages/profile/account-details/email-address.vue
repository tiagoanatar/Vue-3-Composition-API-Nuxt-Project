<script setup lang="ts">
undefined;
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Account Details - Update Email Address',
});
definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>
<template>
  <main>
    <div class="theme-account-details-update-email">
      <WidgetsHeaderAccountDetailsUpdateEmail />
      <WidgetsDescriptionAccountDetailsUpdateEmail />
      <WidgetsFormAccountDetailsUpdateEmail />
      <div class="theme-account-details-update-email-submit">
        <WidgetsFormSubmitAccountDetailsUpdateEmail />
        <WidgetsFooterGlobalApplication />
      </div>
    </div>
  </main>
</template>
