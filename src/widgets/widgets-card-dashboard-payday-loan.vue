<script setup lang="ts">
// Todo: Mock data will be replaced with data from API

const dataPayday = {
  amount: '1500',
  badgeType: 'active',
  balance: '1500.00',
  balanceLabel: 'Balance',
  ctaPrimaryCopy: 'Make a payment',
  ctaSecondaryCopy: 'Withdraw',
  loanId: 12456789,
  loanItems: [
    {
      title: 'Status',
      value: 'Active',
    },
    {
      title: 'First Payment',
      value: '250',
    },
    {
      title: 'Due Date',
      value: '02/15/22',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Payday loan',
  progressTrackerItems: null,
  type: 'payday',
};
</script>

<template>
  <LoanCard v-bind="dataPayday" data-test-id="loan-payday">
    <template #footerContent>
      <div class="theme-loan-card-btn theme-loan-card-footer-border">
        <BaseButton
          :label="dataPayday?.ctaPrimaryCopy"
          data-test-id="loan-payday-make-a-payment"
        />
      </div>
    </template>
  </LoanCard>
</template>
