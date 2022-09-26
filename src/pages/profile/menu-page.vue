<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Profile Page | Profile Menu',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});
</script>

<template>
  <KeepAlive>
    <main>
      <div class="theme-profile-menu">
        <WidgetsHeaderBlockProfile />
        <WidgetsDescriptionProfile />
        <WidgetsCtaProfileItems />
        <WidgetsCtaProfileLogout />
        <WidgetsModalProfileLogout />
      </div>
    </main>
  </KeepAlive>
</template>
