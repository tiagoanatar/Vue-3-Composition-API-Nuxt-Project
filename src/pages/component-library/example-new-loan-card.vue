<script setup lang="ts">
useHead({
  title: 'AA | Component Library - New Loan Card',
});

const defaultProps = {
  copy: 'Apply for a new loan and get the cash you need to take care of the things that matter most.',
  moreCtaLabel: 'Learn More',
  moreUrl: '/',
  title: 'Good job!',
  subTitle: 'Your loan is paid in full.',
  dataTestId: 'example-new-loan-card-default',
};

const props2 = {
  bodyCopy:
    'We’ve still got your back! Keep getting the cash to take care of the things you need.',
  bodyTitle: 'Apply for a new loan',
  copy: 'Apply for a new loan and get the cash you need to take care of the things that matter most.',
  hasTimer: false,
  moreCtaLabel: 'Learn More',
  moreUrl: '/',
  redirectionUrl: '/',
  title: 'Need $$$?',
  subTitle: 'We’ve got you covered!',
  variation: 'with-body',
  dataTestId: 'example-new-loan-card-without-timer',
};

const props3 = {
  bodyCopy:
    'We’ve still got your back! Keep getting the cash to take care of the things you need.',
  bodyTitle: 'Apply for a new loan',
  copy: 'Apply for a new loan and get the cash you need to take care of the things that matter most.',
  hasTimer: true,
  moreCtaLabel: 'Learn More',
  moreUrl: '/',
  redirectionUrl: '/',
  time: '23 hours 54 minutes ',
  title: 'Need $$$?',
  subTitle: 'We’ve got you covered!',
  variation: 'with-body',
  dataTestId: 'example-new-loan-card-with-timer',
};

const handleApplyNow = () => {
  console.log('NewLoanCard: Apply Now Triggered');
};
</script>

<template>
  <NewLoanCard v-bind="defaultProps" @apply-now="handleApplyNow" />
  <NewLoanCard v-bind="props2" class="mt-4" />
  <NewLoanCard v-bind="props3" class="mt-4" />
</template>
