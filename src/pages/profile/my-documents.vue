<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Component Library - My documents',
});
definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-profile-my-documents">
      <WidgetsHeaderMyDocuments />
      <WidgetsDescriptionMyDocuments />
      <WidgetsContentMyDocuments />
    </div>
  </main>
</template>
