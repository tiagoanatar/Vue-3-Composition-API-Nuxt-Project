<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Upload new document',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main class="theme-upload-document">
    <WidgetsHeaderUploadDocument />
    <WidgetsDescriptionUploadDocument />
    <WidgetsCtaUploadDocument />
    <WidgetsFooterGlobalApplication />
  </main>
</template>
