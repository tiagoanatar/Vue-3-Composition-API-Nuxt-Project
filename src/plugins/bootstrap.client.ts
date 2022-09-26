import { Modal, Tab } from 'bootstrap';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      bsModal: Modal, // NOTE: Prefixing every bootstrap module with `bs`.
      bsTab: Tab,
    },
  };
});
