<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Contact Us',
});
definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-contact-us">
      <WidgetsHeaderContactUs />
      <WidgetsDescriptionContactUs />
      <WidgetsContentContactUs />
      <WidgetsCtaContactUsVisitAStore />
    </div>
  </main>
</template>
