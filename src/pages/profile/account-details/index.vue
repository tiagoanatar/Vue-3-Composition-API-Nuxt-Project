<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Account Details Page | Account Details Menu',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-account-details-menu">
      <WidgetsHeaderAccountDetailsMenu />
      <WidgetsDescriptionAccountDetailsMenu />
      <WidgetsCtaAccountDetailsMenuItems />
    </div>
  </main>
</template>
