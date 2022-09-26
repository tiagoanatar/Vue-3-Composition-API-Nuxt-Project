<script setup lang="ts">
interface Props {
  greetingCopyLineOne?: string;
  greetingCopyLineTwo?: string;
  username?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="theme-info-verification-greeting">
    <p v-if="greetingCopyLineOne">{{ greetingCopyLineOne }} {{ username }},</p>
    <p v-if="greetingCopyLineTwo">{{ greetingCopyLineTwo }}</p>
  </div>
</template>
