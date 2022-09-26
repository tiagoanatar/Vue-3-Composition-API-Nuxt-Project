<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Manage Preference',
});

const preferences = [
  {
    title: 'Account alerts',
    copy: 'Updates about your account including application next steps, payment reminders, security alerts and more.',
  },
  {
    title: 'Offer alerts',
    copy: 'Updates about your account including application next steps, payment reminders, security alerts and more.',
  },
];
</script>

<template>
  <NotificationPreference
    v-for="(preference, index) in preferences"
    :id="`preference-${index}`"
    :key="preference.title"
    :title="preference.title"
    :copy="preference.copy"
    :data-test-id="`preference-${index}`"
  />
</template>
