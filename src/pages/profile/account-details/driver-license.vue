<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: "AA | Profile | Update Driver's License",
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-driver-license d-flex flex-column">
      <WidgetsHeaderDriverLicense />
      <WidgetsDescriptionDriverLicense />
      <WidgetsFormDriverLicense />
      <WidgetsFormSubmitDriverLicense />
      <WidgetsFooterGlobalApplication />
    </div>
  </main>
</template>
