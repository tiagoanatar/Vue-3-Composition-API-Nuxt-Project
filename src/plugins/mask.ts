import { defineNuxtPlugin } from '#app';
import { mask } from 'vue-the-mask';

export default defineNuxtPlugin((app) => {
  app.vueApp.directive('mask', {
    updated: mask,
  });
});
