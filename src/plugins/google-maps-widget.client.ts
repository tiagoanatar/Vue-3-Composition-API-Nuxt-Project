import VueGoogleMaps from '@fawmi/vue-google-maps';
import { defineNuxtPlugin } from '#app';
import { useEnvironmentVariables } from '../../src/composables/useEnvironmentVariables';

export default defineNuxtPlugin((app) => {
  const env = useEnvironmentVariables();

  app.vueApp.use(VueGoogleMaps, {
    load: {
      autobindAllEvents: true,
      key: env.variables.value.GOOGLE_MAPS_API,
      libraries: 'places',
      language: 'en',
    },
    vue: {
      compilerOptions: {
        isCustomElement: true,
      },
    },
  });
});
