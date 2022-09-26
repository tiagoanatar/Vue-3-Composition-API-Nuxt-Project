import { defineNuxtRouteMiddleware } from '#app';
import { useEnvironmentVariables } from '@/composables/useEnvironmentVariables';

export default defineNuxtRouteMiddleware(async () => {
  const env = useEnvironmentVariables();

  if (!env.variables.value) {
    const envVarsResponse = await $fetch('/api/env');

    env.updateVariables(envVarsResponse);
  }
});
