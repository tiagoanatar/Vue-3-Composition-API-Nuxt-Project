<script setup lang="ts">
import { Routes } from '@/constants/pages';
const { getDigitalWalletCardsData } = useContentful();
const { data, pending } = getDigitalWalletCardsData(
  'widget-digital-wallet-account-details'
);
const paymentMethods = reactive({
  cards: [],
});

/**
 * This watchEffect is just to demonstrate different flows in the acceptance criteria
 * TODO: This is just to create static UI
 * TODO: Need to replace this when the actual service gets integrated
 */
watchEffect(() => {
  if (data?.value?.cardsList) {
    paymentMethods.cards = data?.value?.cardsList.map((card) => ({
      ...card,
      isExpiredCard: !!card?.expiredLabel,
      dataTestId: card?.paymentCardTitle,
      isSecuringLoan: !!card?.securingLoanLabel,
      redirectLinkText: card?.editLabel || '',
      editDetailsUri: card?.editLabel
        ? Routes.DigitalWalletEditPayment
        : Routes.Landing,
    }));
  }
});
</script>

<template>
  <div class="theme-digital-wallet-listing-section">
    <div class="theme-digital-wallet-listing-section-cards">
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 12, size: 'lg' }]"
      >
        <PaymentMethodCard
          v-for="(card, index) in paymentMethods.cards"
          :key="index"
          v-bind="card"
        />
      </BaseSkeletonLoader>
    </div>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 6 }]">
      <NuxtLink
        :to="Routes.DigitalWalletAddDebitCard"
        class="theme-digital-wallet-listing-section-add-label"
        :data-test-id="`${data?.addDebitCardLabel}-link`"
      >
        {{ data?.addDebitCardLabel }}
      </NuxtLink>
    </BaseSkeletonLoader>
  </div>
</template>
