<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';
import { Pages } from '@/constants/pages';

useHead({
  title: 'AA | Component Library - Loan Details Page Component',
});

const items = [
  {
    label: 'Balance as of today',
    value: '1000',
  },
  {
    label: 'Status',
    value: 'Active',
  },
  {
    label: 'Loan number',
    value: '#123456789',
  },
  {
    label: 'Autopay',
    value: 'Enrolled',
  },
];

const LoanDetailsData = {
  dueAmount: '300',
  dueAmountLabel: 'Minimum due',
  dueDate: '02/15',
  dueDateLabel: 'Due date',
  loanTitle: 'Car down payment ',
  loanType: 'Payday loan',
  loanDetailsItems: items,
};

const keyValueData = {
  type: 'heading',
  label: 'Document',
  value: 'See All',
  url: 'https:google.com',
  textDirection: 'row',
};
</script>

<template>
  <div class="container">
    <!-- utility class used here because considering this page will be remove in future  -->
    <div class="row mt-4">
      <GlobalApplicationHeader class="theme-loan-details-header">
        <template #left>
          <NuxtLink
            to="/"
            :data-testid="`${Pages.ComponentLibrary}-header-back-cta`"
          >
            <BaseIcon :name="IconNames.ArrowLeft" :color="Colors.AADarkBlue" />
          </NuxtLink>
        </template>
        <template #right>
          <NuxtLink
            to="/"
            class="nav-link navbar-brand theme-loan-details-header-logo"
            :data-testid="`${Pages.ComponentLibrary}-header-logo`"
          >
            <img src="~@/assets/images/logo-full-blue.svg" alt="" />
          </NuxtLink>
        </template>
      </GlobalApplicationHeader>
    </div>
    <div class="row mt-4">
      <LoanDetailsCard
        v-bind="LoanDetailsData"
        :loan-details-items="items"
        :data-test-id="`${Pages.ComponentLibrary}-loan-details`"
      />
    </div>
    <div class="row">
      <BaseKeyValueText
        v-bind="keyValueData"
        :data-test-id="`${Pages.ComponentLibrary}-loan-details`"
      />
      <LoanDetailsDocumentThumbnail :data-test-id="`${Pages.ComponentLibrary}-loan-details`"
      />
    </div>
  </div>
</template>
