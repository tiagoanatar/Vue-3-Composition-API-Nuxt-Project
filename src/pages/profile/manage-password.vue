<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Component Library - Manage Password',
});
definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <main>
    <div class="theme-manage-password">
      <WidgetsHeaderBlockManagePassword />
      <WidgetsDescriptionManagePassword />
      <WidgetsMenuItemManagePassword />
    </div>
  </main>
</template>
