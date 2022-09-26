<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Component Library - Loan Card',
});
// Todo: Mock data will be replaced with data from API

const bannerDataMock = {
  docsMissing: {
    heading: 'Missing documents',
    description:
      'Please upload the required documents to complete your application with us.',
    link: {
      label: 'Upload now.',
      url: '/',
    },
    variation: 'error',
  },
  inReview: {
    description:
      'We’re taking a closer look at your application and will let you know when we’ve reached a decision.',
    heading: 'Application in review',
    variation: 'warning',
  },
  refinance: {
    description:
      'Your refinance has been scheduled.Here is a summary of what we’ve covered.',
    heading: 'Congratulations!',
    link: {
      label: 'Refinance summary',
      url: '/re-finance/loan-origination/status-scheduled',
    },
    variation: 'scheduled',
  },
};

const loanTrackerBannerMock = {
  approved: {
    iconName: 'Approved',
    label: 'Application approved on',
    date: '05/01/22',
  },
  scheduled: {
    iconName: 'Scheduled',
    label: 'Payment scheduled for',
    date: '02/15/22',
  },
  refinanceProcessed: {
    iconName: 'Approved',
    label: 'Refinance processed on',
    date: '05/01/22',
  },
};

const loanTrackerMock = {
  nextBusinessDay: {
    id: 'modalPickUpInStore',
    iconName: 'Approved',
    label: 'Application approved on',
    date: '05/01/22',
    modalLabel: 'Money sent',
    progress: 100,
    trackerStatus: 'store',
    trackerLabel: 'Available until next business day',
    card: 'Pick up in-store',
    cardType: 'heading',
  },
  moneyNotReceived: {
    id: 'modalSentNotReceived',
    iconName: 'Approved',
    label: 'Application approved on',
    date: '05/01/22',
    modalLabel: 'Money sent',
    progress: 50,
    trackerStatus: 'next-day',
    trackerLabel: 'Est. arrival date',
    trackerDate: '05/04/22',
    card: 'Bank account **2266',
  },
  moneySentInFutureDate: {
    id: 'moneySentReceivedInstantly',
    iconName: 'Approved',
    label: 'Application approved on',
    date: '05/01/22',
    modalLabel: 'Money sent',
    progress: 100,
    trackerStatus: 'instant',
    trackerLabel: 'Est. arrival date',
    trackerDate: '05/01/22',
    card: 'Debit card **8833',
  },
  refinanceProcessedInstantly: {
    id: 'moneySentReceivedInstantly',
    iconName: 'Approved',
    label: 'Refinance processed on',
    date: '05/01/22',
    modalLabel: 'Money sent',
    progress: 100,
    trackerStatus: 'instant',
    trackerLabel: 'Est. arrival date',
    trackerDate: '05/01/22',
    card: 'Debit card **8833',
  },
};
const dataPayday = {
  amount: '1500',
  badgeType: 'processing',
  balance: '1500.00',
  balanceLabel: 'Balance',
  loanId: 12456789,
  loanItems: [
    {
      title: 'Status',
      value: 'Processing',
    },
    {
      title: 'Minimum due',
      value: '',
    },
    {
      title: 'Due Date',
      value: '',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Payday loan',
  status: 'missing-docs',
  type: 'payday',
};

const dataPaydayTypeTwo = {
  amount: '1500',
  badgeType: 'processing',
  balance: '595',
  balanceLabel: 'Balance',
  loanId: 12456789,
  loanItems: [
    {
      title: 'Status',
      value: 'Processing',
    },
    {
      title: 'Minimum due',
      value: '',
    },
    {
      title: 'Due Date',
      value: '',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Payday loan',
  status: 'review',
  type: 'payday',
};

const dataPaydayTypeThree = {
  amount: '1500',
  badgeType: 'active',
  balance: '1500.00',
  balanceLabel: 'Balance',
  loanId: 12456789,
  loanItems: [
    {
      title: 'Status',
      value: 'Active',
    },
    {
      title: 'Minimum due',
      value: '250',
    },
    {
      title: 'Due Date',
      value: '05/31/22',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Payday loan',
  type: 'payday',
};

const dataPaydayTypeFour = {
  amount: '1500',
  badgeType: 'active',
  balance: '595',
  balanceLabel: 'Balance',
  loanId: 12456789,
  loanItems: [
    {
      title: 'Status',
      value: 'Active',
    },
    {
      title: 'Minimum due',
      value: '250',
    },
    {
      title: 'Due Date',
      value: '05/31/22',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Payday loan',
  type: 'payday',
};

const dataPaydayTypeFive = {
  amount: '1500',
  badgeType: 'active',
  balance: '595',
  balanceLabel: 'Balance',
  loanId: 12456789,
  loanItems: [
    {
      title: 'Status',
      value: 'Active',
    },
    {
      title: 'Minimum due',
      value: '250',
    },
    {
      title: 'Due Date',
      value: '05/31/22',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Payday loan',
  type: 'payday',
};

const dataPaydayTypeSix = {
  amount: '1500',
  badgeType: 'active',
  balance: '1500.00',
  balanceLabel: 'Balance',
  ctaPrimaryCopy: 'Make a payment',
  loanId: 12456789,
  loanItems: [
    {
      title: 'Status',
      value: 'Active',
    },
    {
      title: 'Min payment',
      value: '250',
    },
    {
      title: 'Due date',
      value: '02/15/22',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Payday loan',
  type: 'payday',
};

const dataRefinancePaydayLoan = {
  amount: '1500',
  badgeType: 'active',
  balance: '595',
  balanceLabel: 'Balance',
  loanId: 12456789,
  loanItems: [
    {
      title: 'Status',
      value: 'Active',
    },
    {
      title: 'Minimum due',
      value: '250',
    },
    {
      title: 'Due Date',
      value: '05/31/22',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Payday loan',
  type: 'payday',
};

const dataRefinanceTitleLoanWithPayment = {
  amount: '1500',
  badgeType: 'active',
  balance: '595',
  balanceLabel: 'Balance',
  status: 'success',
  loanId: 12456789,
  loanItems: [
    {
      title: 'Status',
      value: 'Active',
    },
    {
      title: 'Minimum due',
      value: '250',
    },
    {
      title: 'Due Date',
      value: '05/31/22',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Title loan',
  type: 'title',
  ctaPrimaryCopy: 'Make a payment',
};

const dataRefinanceTitleLoanWithoutPayment = {
  amount: '1500',
  badgeType: 'active',
  balance: '595',
  status: 'success',
  loanId: 12456789,
  loanItems: [
    {
      title: 'Status',
      value: 'Active',
    },
    {
      title: 'Minimum due',
      value: '--',
    },
    {
      title: 'Due Date',
      value: '--',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Title loan',
  type: 'title',
};

const dataRefinanceNakedCard = {
  amount: '1500',
  badgeType: 'active',
  balance: '595',
  balanceLabel: 'Balance',
  loanId: 12456789,
  isNakedCard: true,
  customClassName: 'theme-loan-card-example',
  loanItems: [
    {
      title: 'Status',
      value: 'Completed',
    },
    {
      title: 'Minimum due',
      value: '--',
    },
    {
      title: 'Due Date',
      value: '--',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Title loan',
  type: 'title',
};

const dataInstallment = {
  amount: '1900',
  badgeType: 'processing',
  balance: '1900.00',
  balanceLabel: 'Balance',
  ctaPrimaryCopy: 'Make a payment',
  ctaSecondaryCopy: 'Withdraw',
  loanId: 12456789,
  loanItems: [
    {
      title: 'Status',
      value: 'Processing',
    },
    {
      title: 'Term',
      value: '24 mo.',
    },
    {
      title: '# of payments',
      value: '0 of 24',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Installment loan',
  type: 'installment',
};

const dataLoc = {
  amount: '5000',
  badgeType: 'active',
  balance: '5000.00',
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
      title: 'Credit limit',
      value: '6500.00',
    },
    {
      title: 'Min payment',
      value: '250',
    },
  ],
  loanLabel: 'Loan #',
  loanTitle: 'Line of credit',
  type: 'line-of-credit',
};
</script>

<template>
  <div class="container">
    <h1>Loan Card</h1>

    <div class="row">
      <div class="col">
        <hr />
        <h2>Overview</h2>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p class="fs-5">Description:</p>
        <p>
          <code>TheLoanCard</code> component responsible for the
          Payday/Installment/LOC loan cards.
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/q9HcS3QfIW2k5TsrC9Tyvd/PF-Dev-%7C-Master-File-S1---8?node-id=1419%3A29454"
            >Figma Link</a
          >
        </p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">Additional Notes:</p>
        <p>N/A</p>
      </div>
    </div>

    <div class="mb-5">
      <p class="mt-5 fs-5">Component with basic props:</p>
      <div class="mb-5">
        <LoanCard v-bind="dataPayday" data-test-id="loan-payday">
          <template #footerContent>
            <BaseBanner
              v-bind="bannerDataMock.docsMissing"
              data-test-id="loan-payday-missing-docs-banner"
              is-with-card
            />
          </template>
        </LoanCard>
      </div>
      <div class="mb-5">
        <LoanCard
          v-bind="dataPaydayTypeTwo"
          data-test-id="loan-payday-type-two"
        >
          <template #footerContent>
            <BaseBanner
              v-bind="bannerDataMock.inReview"
              data-test-id="loan-payday-in-review-banner"
              is-with-card
            />
          </template>
        </LoanCard>
      </div>
      <div class="mb-5">
        <LoanCard
          v-bind="dataPaydayTypeThree"
          data-test-id="loan-payday-type-three"
        >
          <template #footerContent>
            <LoanTrackerBanner
              v-bind="loanTrackerBannerMock?.approved"
              data-test-id="loan-payday-type-three-tracker-status-text"
            />
            <BaseLoanTracker
              :progress-tracker-items="loanTrackerMock?.nextBusinessDay"
              data-test-id="loan-payday-type-three-tracker-status"
            />
          </template>
        </LoanCard>
        <WidgetsModalPickupInStore />
      </div>
      <div class="mb-5">
        <LoanCard
          v-bind="dataPaydayTypeFour"
          data-test-id="loan-payday-type-four"
        >
          <template #footerContent>
            <LoanTrackerBanner
              v-bind="loanTrackerBannerMock?.approved"
              data-test-id="loan-payday-type-four-tracker-status-text"
            />
            <BaseLoanTracker
              :progress-tracker-items="loanTrackerMock?.moneyNotReceived"
              data-test-id="loan-payday-type-four-tracker-status"
            />
          </template>
        </LoanCard>
        <WidgetsModalSentNotReceived />
      </div>
      <div class="mb-5">
        <LoanCard
          v-bind="dataPaydayTypeFive"
          data-test-id="loan-payday-type-five"
        >
          <template #footerContent>
            <LoanTrackerBanner
              v-bind="loanTrackerBannerMock?.approved"
              data-test-id="loan-payday-type-five-tracker-status-text"
            />
            <BaseLoanTracker
              :progress-tracker-items="loanTrackerMock?.moneySentInFutureDate"
              data-test-id="loan-payday-type-five-tracker-status"
            />
          </template>
        </LoanCard>
        <WidgetsModalSentReceivedInstantly />
      </div>
      <div class="mb-5">
        <LoanCard
          v-bind="dataPaydayTypeSix"
          data-test-id="loan-payday-type-six"
        >
          <template #footerContent>
            <LoanTrackerBanner
              v-bind="loanTrackerBannerMock?.scheduled"
              data-test-id="loan-payday-type-six-tracker-status-text"
            />
            <div class="theme-loan-card-btn">
              <BaseButton
                :label="dataPaydayTypeSix?.ctaPrimaryCopy"
                data-test-id="loan-payday-type-six-make-a-payment"
              />
            </div>
          </template>
        </LoanCard>
      </div>
      <div class="mb-5">
        <LoanCard
          v-bind="dataRefinancePaydayLoan"
          data-test-id="loan-re-finance-payday"
        >
          <template #footerContent>
            <LoanTrackerBanner
              v-bind="loanTrackerBannerMock?.refinanceProcessed"
              data-test-id="loan-re-finance-payday-tracker-status-text"
            />
            <BaseLoanTracker
              :progress-tracker-items="
                loanTrackerMock?.refinanceProcessedInstantly
              "
              data-test-id="loan-re-finance-payday-tracker-status"
            />
          </template>
        </LoanCard>
        <WidgetsModalSentReceivedInstantly />
      </div>
      <div class="mb-5">
        <LoanCard
          v-bind="dataRefinanceTitleLoanWithPayment"
          data-test-id="loan-re-finance-title-schedule-with-payment"
        >
          <template #footerContent>
            <div class="theme-loan-card-btn">
              <BaseButton
                :label="dataRefinanceTitleLoanWithPayment?.ctaPrimaryCopy"
                data-test-id="loan-re-finance-title-schedule-with-payment-make-a-payment"
              />
            </div>
            <BaseBanner
              v-bind="bannerDataMock.refinance"
              data-test-id="loan-re-finance-title-schedule-with-payment-banner"
              is-with-card
            />
          </template>
        </LoanCard>
      </div>
      <div class="mb-5">
        <LoanCard
          v-bind="dataRefinanceTitleLoanWithoutPayment"
          data-test-id="loan-re-finance-title-schedule-with-out-payment"
        >
          <template #footerContent>
            <BaseBanner
              v-bind="bannerDataMock.refinance"
              data-test-id="loan-re-finance-title-schedule-with-out-payment-banner"
              is-with-card
            />
          </template>
        </LoanCard>
      </div>
      <div class="mb-5">
        <LoanCard
          v-bind="dataRefinanceNakedCard"
          data-test-id="loan-re-finance-title-naked-card"
        />
      </div>
      <div class="mb-5">
        <LoanCard v-bind="dataInstallment" data-test-id="loan-installment">
          <template #footerContent>
            <div class="theme-loan-card-btn theme-loan-card-footer-border">
              <BaseButton
                :label="dataInstallment?.ctaPrimaryCopy"
                data-test-id="loan-installment-make-a-payment"
              />
            </div>
          </template>
        </LoanCard>
      </div>
      <div class="mb-5">
        <LoanCard v-bind="dataLoc" data-test-id="loan-loc">
          <template #footerContent>
            <div class="theme-loan-card-btn theme-loan-card-footer-border">
              <BaseButton
                :label="dataInstallment?.ctaPrimaryCopy"
                data-test-id="loan-loc-make-a-payment"
              />
              <BaseButton
                :label="dataInstallment?.ctaSecondaryCopy"
                data-test-id="loan-loc-withdraw"
                variation="secondary"
              />
            </div>
          </template>
        </LoanCard>
      </div>
    </div>
  </div>
</template>
