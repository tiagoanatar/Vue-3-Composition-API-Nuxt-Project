<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';

useHead({
  title: 'AA | Component Library - Transaction Card',
});

let paidTransactionCardData = {
  title: 'Paid',
  options: [
    {
      label: 'Transaction ID',
      value: '39732222',
    },
    {
      label: 'Date',
      value: '03/01/2022',
    },
    {
      label: 'Balance',
      value: '1799.30',
    },
  ],
  amount: '-200.00',
  type: 'paid',
  routeToAllTransactions: '/see-all',
};

let defaultTransactionCardData = {
  title: 'Default',
  options: [
    {
      label: 'Transaction ID',
      value: '39732222',
    },
    {
      value: '03/01/2022',
    },
    {
      label: 'Balance',
      value: '1848.30',
    },
  ],
  amount: '1848.30',
  type: 'default',
};

let originationCardData = {
  title: 'Origination',
  options: [
    {
      label: 'Transaction ID',
      value: '39732222',
    },
    {
      label: 'Date',
      value: '03/01/2022',
    },
    {
      label: 'Balance',
      value: '1848.30',
    },
  ],
  amount: '-1848.30',
  type: 'origination',
};

let lateFeeTransactionCardData = {
  title: 'Late Fee',
  options: [
    {
      label: 'Transaction ID',
      value: '39732222',
    },
    {
      label: 'Date',
      value: '03/01/2022',
    },
    {
      label: 'Balance',
      value: '1799.30',
    },
  ],
  amount: '21.29',
  type: 'late-fee',
};

let deferredTransactionCardData = {
  title: 'Deferred',
  options: [
    {
      label: 'Transaction ID',
      value: '39732222',
    },
    {
      label: 'Date',
      value: '03/01/2022',
    },
    {
      label: 'Balance',
      value: '1799.30',
    },
  ],
  amount: '-250.00',
  type: 'deferred',
};

let upcomingDeferralTransactionCardData = {
  title: 'Upcoming deferral',
  options: [
    {
      label: 'Transaction ID',
      value: '39732222',
    },
    {
      label: 'Date',
      value: '03/01/2022',
    },
  ],
  amount: '200.00',
  type: 'upcoming-deferral',
};

let postponedCardData = {
  title: 'Postponed',
  options: [
    {
      label: 'Transaction ID',
      value: '39732222',
    },
    {
      label: 'Date',
      value: '03/01/2022',
    },
    {
      label: 'Balance',
      value: '1799.30',
    },
  ],
  amount: '-250.00',
  type: 'postponed',
};

let upcomingPaymentCardData = {
  title: 'Upcoming Payment',
  options: [
    {
      label: 'Transaction ID',
      value: '39732222',
    },
    {
      label: 'Auto Pay ',
      value: '03/15/2022',
    },
  ],
  amount: '200.00',
  type: 'upcoming-payment',
};

const figmaDesignLink =
  'https://www.figma.com/file/q9HcS3QfIW2k5TsrC9Tyvd/PF-Dev-%7C-Master-File-All-Sprints?node-id=11315%3A177558';
</script>

<template>
  <div class="container">
    <h1>Transaction Cards</h1>
    <div class="row">
      <div class="col">
        <hr />
        <h2>Overview</h2>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-4">
        <p class="fs-5">Description:</p>
        <p>
          Component
          <code>Transaction Cards</code> responsible for the type of
          transactions.
        </p>

        <p class="fs-5">
          <a :href="figmaDesignLink">Figma Link</a>
        </p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">Additional Notes:</p>
        <p>N/A</p>
      </div>
      <div class="col-12 col-md-8">
        <p class="fs-5">Props:</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col" class="col-2">Amount</th>
              <th scope="col" class="col-2">Options</th>
              <th scope="col" class="col-2">Title</th>
              <th scope="col" class="col-6">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td>
                <span
                  >'default'<br />|'deferred'<br />|&nbsp;'late-fee'<br />|&nbsp;'origination'<br />|&nbsp;'paid'
                  <br />|&nbsp;'postponed'<br />|&nbsp;'upcoming-deferral'<br />|&nbsp;'upcoming-payment'<br
                /></span>
              </td>
              <td>Type of the cards</td>
              <td>
                <span
                  >'default'<br />|'deferred'<br />|&nbsp;'late-fee'<br />|&nbsp;'origination'<br />|&nbsp;'paid'
                  <br />|&nbsp;'postponed'<br />|&nbsp;'upcoming-deferral'<br />|&nbsp;'upcoming-payment'<br
                /></span>
              </td>
            </tr>
            <tr>
              <td><span>Title</span></td>
              <td>
                <span>string</span>
              </td>
              <td></td>
              <td>Title of the transaction card.</td>
            </tr>
            <tr>
              <td>options</td>
              <td>
                <span>array</span>
              </td>
              <td></td>
              <td>Various options for the contents of the card.</td>
            </tr>
            <tr>
              <td>routeToAllTransactions</td>
              <td>
                <span>string</span>
              </td>
              <td></td>
              <td>
                To route to all transactions section (only for paid type).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <hr />
        <h2>Components Samples</h2>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p class="mt-5 fs-5">Transaction Upcoming Payment Card:</p>
        <TransactionCard
          :data-test-id="`${upcomingPaymentCardData.type}-first`"
          v-bind="upcomingPaymentCardData"
        />
        <p class="mt-5 fs-5">Transaction Paid Card:</p>
        <TransactionCard
          :data-test-id="`${paidTransactionCardData.type}-first`"
          v-bind="paidTransactionCardData"
        />
        <p class="mt-5 fs-5">Transaction Default Card:</p>
        <TransactionCard
          :data-test-id="`${defaultTransactionCardData.type}-first`"
          v-bind="defaultTransactionCardData"
        />
        <p class="mt-5 fs-5">Transaction Origination Card:</p>
        <TransactionCard
          :data-test-id="`${originationCardData.type}-first`"
          v-bind="originationCardData"
        />
        <p class="mt-5 fs-5">Transaction Late Fee Card:</p>
        <TransactionCard
          :data-test-id="`${lateFeeTransactionCardData.type}-first`"
          v-bind="lateFeeTransactionCardData"
        />
        <p class="mt-5 fs-5">Transaction Deferred Card:</p>
        <TransactionCard
          :data-test-id="`${deferredTransactionCardData.type}-first`"
          v-bind="deferredTransactionCardData"
        />
        <p class="mt-5 fs-5">Transaction Upcoming Deferral Card:</p>
        <TransactionCard
          :data-test-id="`${upcomingDeferralTransactionCardData.type}-first`"
          v-bind="upcomingDeferralTransactionCardData"
        />
        <p class="mt-5 fs-5">Transaction Postponed Card:</p>
        <TransactionCard
          :data-test-id="`${postponedCardData.type}-first`"
          v-bind="postponedCardData"
        />
        <p class="mt-5 fs-5"></p>
      </div>
    </div>
  </div>
</template>
