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

const components: Component[] = [
  {
    name: 'Accordion',
    url: '/component-library/example-accordion',
  },
  {
    name: 'Alerts',
    url: '/component-library/example-alerts',
  },
  {
    name: 'Arrow Cards',
    url: '/component-library/example-arrow-cards',
  },
  {
    name: 'Badges',
    url: '/component-library/example-badge',
  },
  {
    name: 'Banners',
    url: '/component-library/example-banners',
  },
  {
    name: 'Buttons',
    url: '/component-library/example-buttons',
  },
  {
    name: 'Cards',
    url: '/component-library/example-cards',
  },
  {
    name: 'Fetch',
    url: '/component-library/example-data-fetching',
  },
  {
    name: 'Fonts',
    url: '/component-library/example-fonts',
  },
  {
    name: 'Form Validation',
    url: '/component-library/example-forms',
  },
  {
    name: 'Google Maps',
    url: '/component-library/example-google-maps',
  },
  {
    name: 'Forms Google Autocomplete',
    url: '/component-library/example-forms-google-autocomplete',
  },
  {
    name: 'Icons',
    url: '/component-library/example-icons',
  },
  {
    name: 'Input Masking',
    url: '/component-library/example-input-masking',
  },
  {
    name: 'Loan Cards',
    url: '/component-library/example-loan-card',
  },
  {
    name: 'Meta Data Fetch',
    url: '/component-library/example-meta-data-fetching',
  },
  {
    name: 'Modals',
    url: '/component-library/example-modals',
  },
  {
    name: 'Modal Loader',
    url: '/component-library/example-modal-loader',
  },
  {
    name: 'Progress Bar',
    url: '/component-library/example-progress-bar',
  },
  {
    name: 'Payment Method Card',
    url: '/component-library/example-payment-method-card',
  },
  {
    name: 'Dropdown',
    url: '/component-library/example-dropdown',
  },
  {
    name: 'Skeleton Loader',
    url: '/component-library/example-skeleton-loader',
  },
  {
    name: 'Slider',
    url: '/component-library/example-slider',
  },
  {
    name: 'Sliding Button',
    url: '/component-library/example-sliding-button',
  },
  {
    name: 'Refer Friend',
    url: '/component-library/example-refer-friend',
  },
  {
    name: 'Lottie Animations',
    url: '/component-library/example-lottie-animations',
  },
  {
    name: 'Http Client',
    url: '/component-library/example-http-client',
  },
  {
    name: 'Notification Preference',
    url: '/component-library/example-notification-preference',
  },
  {
    name: 'Loan Details Component ',
    url: '/component-library/example-loan-details',
  },
  {
    name: 'Radio Card Input',
    url: '/component-library/example-radio-card',
  },
  {
    name: 'Timeline',
    url: '/component-library/example-timeline-tracker',
  },
  {
    name: 'New Loan card',
    url: '/component-library/example-new-loan-card',
  },
  {
    name: 'Transaction Cards',
    url: '/component-library/example-transaction-card',
  },
];

const mockData = {
  darkLabel: '',
  hasNotification: true,
  items: components,
  lightLabel: '',
  logOutLabel: '',
  membershipDateText: '',
  menuLabel: 'Component library Menu',
  userName: 'Component Library',
};
</script>

<template>
  <div>
    <header class="mb-5">
      <GlobalNavigation v-bind="mockData" data-test-id="main-nav" />
    </header>
    <main class="d-flex flex-column">
      <NuxtNestedPage />
    </main>
  </div>
</template>

<style>
li {
  list-style: none;
}

.nav-link:hover {
  color: white;
}

.navbar-toggler {
  text-align: right;
}
</style>
