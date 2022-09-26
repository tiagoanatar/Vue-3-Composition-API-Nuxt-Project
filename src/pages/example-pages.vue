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
  title: 'AA | Example Pages',
});

const components: Component[] = [
  {
    name: 'Account Details Menu',
    url: '/account-details/account-details-menu',
  },
  {
    name: 'Payday Loan Information',
    url: '/re-apply/payday-loan-information',
  },
  {
    name: 'Contact Us',
    url: '/profile/contact-us',
  },
  {
    name: "Update Driver's License",
    url: '/profile/account-details/driver-license',
  },
  {
    name: 'Manage Password',
    url: '/profile/manage-password',
  },
  {
    name: 'Account Details Update Email',
    url: '/account-details/update-email',
  },
  {
    name: 'Profile Menu',
    url: '/profile/menu-page',
  },
  {
    name: 'Manage Employment',
    url: '/manage-employment/income-summary',
  },
  {
    name: 'Re apply address flow',
    url: '/re-apply/address-information',
  },
  {
    name: 'Re apply identity flow',
    url: '/re-apply/identity-information',
  },
  {
    name: 'Re apply address verification',
    url: '/re-apply/information-verification/address-info',
  },
  {
    name: 'Re apply bank verification',
    url: '/re-apply/information-verification/bank-info',
  },
  {
    name: 'Re apply self employee verification',
    url: '/re-apply/information-verification/self-employee',
  },
  {
    name: 'Re apply employee verification',
    url: '/re-apply/information-verification/employee-info',
  },
  {
    name: 'Re apply assistance verification',
    url: '/re-apply/information-verification/assistance-info',
  },
  {
    name: 'Re apply Review Disclosures',
    url: '/re-apply/review-disclosures',
  },
  {
    name: 'Re apply Loan Origination Multiple Offers',
    url: '/re-apply/loan-origination/eligible-loans/multi-offer',
  },
  {
    name: 'Re apply Loan Origination Single Offer Payday Loan',
    url: '/re-apply/loan-origination/eligible-loans/single-offer/payday-loan',
  },
  {
    name: 'Re apply Loan Origination Single Offer Installment Loan',
    url: '/re-apply/loan-origination/eligible-loans/single-offer/installment-loan',
  },
  {
    name: 'Re apply Loan Origination Single Offer Line Of Credit',
    url: '/re-apply/loan-origination/eligible-loans/single-offer/line-of-credit',
  },
  {
    name: 'Re finance Installment Loan Summary No Step Up',
    url: '/re-finance/loan-origination/installment-loan/loan-summary',
  },
  {
    name: 'Re finance Installment Loan Summary Payment With Step Up',
    url: '/re-finance/loan-origination/installment-loan/loan-summary?showPaymentDue=true',
  },
  {
    name: 'Re finance Payday Loan Summary Payment with Step Up',
    url: '/re-finance/loan-origination/payday-loan/loan-summary?showPaymentDue=true',
  },
  {
    name: 'Re finance Payday Loan Summary Payment with Step Up before due Date',
    url: '/re-finance/loan-origination/payday-loan/loan-summary?showPaymentDue=true&showScheduled=true',
  },
  {
    name: 'Re finance Payday Loan Summary with no payment and no Step Up',
    url: '/re-finance/loan-origination/payday-loan/loan-summary',
  },
  {
    name: 'Re finance Title Loan Summary Payment Before Due Date',
    url: '/re-finance/loan-origination/title-loan/loan-summary?showPaymentDue=true&showScheduled=true',
  },
  {
    name: 'Re finance Title Loan Summary Payment After Due Date',
    url: '/re-finance/loan-origination/title-loan/loan-summary?showPaymentDue=true',
  },
  {
    name: 'Re finance Title Loan Summary',
    url: '/re-finance/loan-origination/title-loan/loan-summary',
  },
];
</script>

<template>
  <h1>Sample Pages</h1>
  <main>
    <ul role="menubar">
      <li v-for="(item, index) in components" :key="item.name" role="menuitem">
        <NuxtLink
          :data-testid="`${item.name}-example-page-${index}`"
          :to="item.url"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<!-- TODO: Styles will be improved later if it requires -->
<style scoped>
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
</style>
