import VueGtag from 'vue-gtag-next';
import { defineNuxtPlugin } from '#app';
import { useEnvironmentVariables } from '../../src/composables/useEnvironmentVariables';

export default defineNuxtPlugin((nuxtApp) => {
  const env = useEnvironmentVariables();

  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: env.variables.value.GTM_ID,
    },
  });
});
