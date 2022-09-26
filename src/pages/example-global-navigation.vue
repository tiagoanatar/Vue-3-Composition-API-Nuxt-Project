<script setup lang="ts">
interface Component {
  name: string;
  url: string;
}

definePageMeta({
  layout: false,
});

useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Component Library',
});
</script>

<template>
  <WidgetsGlobalNavigation />
</template>
